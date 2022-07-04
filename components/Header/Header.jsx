import React from 'react'
// import Link from 'next/link'

import {useRouter} from 'next/router'



function Header() {
    // initialize router
    const router = useRouter()

    const move = (path)=>{
        router.push(`/${path}`)
    }

  return (
    <div className="main container w-[100%] ">
        <div className="max-w-3xl mx-auto py-3 flex justify-between align-end">
            <div className="logoContainer text-gray-600 text-3xl font-md flex-1">
                React Router
            </div>
            <div className="flex justify-center align-center">
                <div onClick={()=>move('contact')} className="text-xl text-gray-700 font-bold mx-2 cursor-pointer">
                    <div >Contact</div>
                </div>
                <div onClick={()=>move('about')} className="text-xl text-gray-700 font-bold mx-2 cursor-pointer">
                    <div >About</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header