import React from 'react'
import {useRouter} from 'next/router'
function id() {
    const router = useRouter()
    // the name of your file or what you write between [] in my case it is "id" 
    const {id} = router.query

  return (
    <div className="w-[100%]">
        <div className="max-w-3xl mx-auto text-3xl text-red-400">
        parameter is: {id}
        </div>
    </div>
  )
}

export default id