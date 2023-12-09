'use client'

import { useParams, usePathname } from "next/navigation"
const kickId = () => {
    const params = useParams()
    const path = usePathname()
    console.log(params)
    console.log(path)
  return (

    <div>kickId and id is {params.id}</div>
  )
}

export default kickId