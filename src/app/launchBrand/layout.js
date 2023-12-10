'use client'

import { AnonAadhaarProvider } from "anon-aadhaar-react";
import { Providers } from "../providers";


const app_id ="609246576999142755181287323616835836365844250624"

export default function RootLayout({
    children,
  }) {
    return (
      <>

        <AnonAadhaarProvider _appId={app_id} >
         <Providers>{children}</Providers>
         </AnonAadhaarProvider>         
    </>
    )
  }
  
  