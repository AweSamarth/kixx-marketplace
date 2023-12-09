'use client'

import {PushAPI, CONSTANTS} from "@pushprotocol/restapi"
import { useAccount, useWalletClient } from 'wagmi';
import {
    LogInWithAnonAadhaar,
    useAnonAadhaar,
    AnonAadhaarProof,
    AnonAadhaarProvider,
    
  } from "anon-aadhaar-react";import { useEffect } from "react";

const app_id ="609246576999142755181287323616835836365844250624"

export default function Testing(){
    const { data: walletClient, isError, isLoading } = useWalletClient()
    console.log(walletClient)

    async function checker(){
      console.log("yep")

    const response = await fetch("/testing/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify( "ddf" ),
    });

console.log(response)
    }

    async function anotherChecker(){
      const userAlice = await PushAPI.initialize(walletClient, { env: CONSTANTS.ENV.STAGING });

      const aliceSubscriptions = await userAlice.notification.subscriptions();

      console.log(aliceSubscriptions)




    }

    async function yetAnotherChecker(){
      const userAlice = await PushAPI.initialize(walletClient, { env: CONSTANTS.ENV.STAGING });

      // const response = await userAlice.notification.subscribe(
      //   `eip155:1442:0xCDF770392F1E5E61725Cc9522c80070134D50eC7`,
      // );

      // console.log(response)

      const inboxNotifications = await userAlice.notification.list("INBOX");

      console.log(inboxNotifications)


    }

    

    

    const [anonAadhaar] = useAnonAadhaar();

    useEffect(() => {
      console.log("Anon Aadhaar status: ", anonAadhaar.status);
    }, [anonAadhaar]);

    // async function verifier(){
    // if (anonAadhaar.status === "logged-in") {
    //     const { a, b, c, Input } = await exportCallDataGroth16FromPCD(
    //       anonAadhaar.pcd
    //     );
    //   }
    // }

return (
    <AnonAadhaarProvider _appId={app_id}>

    <div>
        <LogInWithAnonAadhaar />
        <p>{anonAadhaar?.status}</p>
        <button className="bg-blue-500 px-4 py-2" onClick={checker} >hello</button>
        <button className="bg-blue-500 px-4 py-2" onClick={anotherChecker} >abe kya challa</button>
        <button className="bg-blue-500 px-4 py-2" onClick={yetAnotherChecker} >subscribe</button>

        <div >
      {/* Render the proof if generated and valid */}
      {anonAadhaar?.status === "logged-in" && (
        <>
          <p>✅ Proof is valid</p>
          <AnonAadhaarProof code={JSON.stringify(anonAadhaar.pcd, null, 2)}/>
        </>
        )}

        {/* <button onClick={verifier} > i mean ok </button> */}
    </div>
    </div>
    </AnonAadhaarProvider>

)
}