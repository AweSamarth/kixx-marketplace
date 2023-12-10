"use client";

import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import { useAccount, useWalletClient } from "wagmi";
import { useEffect } from "react";
import NavbarNow from "@/components/Navbar";
import FooterNow from "@/components/Footer";
const app_id = "609246576999142755181287323616835836365844250624";

async function linking(){
    const { data: walletClient, isError, isLoading } = useWalletClient();
    console.log(walletClient);

    const userAlice = await PushAPI.initialize(walletClient, {
        env: CONSTANTS.ENV.STAGING,
    });

    const response = await userAlice.notification.subscribe(
      `eip155:1442:0xCDF770392F1E5E61725Cc9522c80070134D50eC7`,
    );

    console.log(response)

}
export default function notification(){
    return(
        <div>
            <NavbarNow/>
            <div className="flex justify-center flex-col items-center h-96 p-8">
                <h1>Click below to stay updated on all the latest kixx news</h1>
                <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Get Notified</button>
            </div>
            <FooterNow/>
        </div>
    )
}