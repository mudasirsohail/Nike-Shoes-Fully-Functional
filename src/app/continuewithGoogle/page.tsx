"use client";

// importing necessary functions
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";

export default function Home() {
  // extracting data from usesession as session
  const { data: session } = useSession()

  // checking if sessions exists
  if (session) {
    // rendering components for logged in users
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-44 h-44 relative mb-4">
        {/* <Image
          src={session.user?.image as string}
          fill
          alt=""
          className="object-cover rounded-full"
        /> */}
        </div>
        {/* <p className="text-2xl mb-2">Welcome <span className="font-bold">{session.user?.name}</span>. Signed In As</p>
        <p className="font-bold mb-4">{session.user?.email}</p>
        <button className="bg-red-600 py-2 px-6 rounded-md" onClick={() => signOut()}>Sign out</button> */}
      </div>
    )
  }

  // rendering components for not logged in users
  return (
    <>
    <div className=" p-4 flex flex-col justify-center items-center">
        {/* <p className="text-2xl mb-2">Continue with:</p> */}
       
    <button className="w-[390px] px-4 py-2 border text-center  gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150" onClick={() => signIn('google')}>
        <span>Login with Google</span>
    </button> 
        
       
    <button className="w-[390px] m-5 px-4 py-2 border text-center  gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150" onClick={() => signIn('github')}>
        <span>Login with Github</span>
    </button> 
        
    </div>
    </>
  )

}