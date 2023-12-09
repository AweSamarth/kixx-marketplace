'use client'

import {PushAPI, CONSTANTS} from "@pushprotocol/restapi"
import { useAccount, useWalletClient } from 'wagmi';



export default function Testing(){
    const { data: walletClient, isError, isLoading } = useWalletClient()
    console.log(walletClient)

    async function checker(){
    const userRandom = await PushAPI.initialize(walletClient, {env:CONSTANTS.ENV.STAGING})
    console.log(userRandom)


    }

return (
    <div>
        <button className="bg-blue-500 px-4 py-2" onClick={checker} >hello</button>
    </div>
)
}