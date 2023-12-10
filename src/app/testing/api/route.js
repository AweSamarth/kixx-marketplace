// import { NextResponse } from "next/server";
// import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
// import { ethers } from "ethers";


// const provider = new ethers.getDefaultProvider()

// const privateKey= process.env.PRIVATE_KEY

// let walletWithProvider = new ethers.Wallet(privateKey, provider); 


// export async function POST(req, res) {

//   const userAlice = await PushAPI.initialize(walletWithProvider, { env: CONSTANTS.ENV.STAGING });

// //   const body = await req.json()
//     console.log(userAlice)

 

//   return NextResponse.json({ output: theResponse }, { status: 200 })

// };