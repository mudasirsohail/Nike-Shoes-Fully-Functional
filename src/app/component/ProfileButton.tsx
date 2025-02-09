// "use client"

// import { useState, useRef, useEffect } from "react"
// import { useSession, signOut } from "next-auth/react"

// export function ProfileButton() {
//   const { data: session } = useSession()
//   const [isOpen, setIsOpen] = useState(false)
//   const dropdownRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsOpen(false)
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside)
//     }
//   }, [])

//   if (!session) {
//     return null // Don't render anything if the user is not logged in
//   }

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 focus:outline-none"
//       >
//         {session.user?.image ? (
//           <img
//             src={session.user.image || "/placeholder.svg"}
//             alt={session.user.name || ""}
//             className="w-8 h-8 rounded-full hover: transition transform hover:scale-150 active:scale-95 "
//           />
//         ) : (
//           <span className="text-lg font-semibold ">{session.user?.name?.[0] || "U"}</span>
//         )}
//       </button>
//       {isOpen && (
//         <div className="absolute mt-2 w-60 bg-white rounded-md shadow-lg py-1 z-10">
//           <div className="px-4 py-2 text-sm text-gray-700">
//             <div className="font-semibold">{session.user?.name}</div>
//             <div className="text-xs text-gray-500">{session.user?.email}</div>
//           </div>
//           <hr className="my-1" />
//           <button
//             onClick={() => setIsOpen(false)}
//             className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           >
//             Stay logged in
//           </button>
//           <button
//             onClick={() => signOut()}
//             className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           >
//             Sign out
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }


"use client"

import { useState, useRef, useEffect } from "react"
import { useSession, signOut } from "next-auth/react"
import Link from "next/link"

export function ProfileButton() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  if (!session) {
    return null // Don't render anything if the user is not logged in
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 focus:outline-none"
      >
        {session.user?.image ? (
          <img
            src={session.user.image || "/placeholder.svg"}
            alt={session.user.name || ""}
            className="w-8 h-8 rounded-full hover: transition transform hover:scale-150 active:scale-95 "
          />
        ) : (
          <span className="text-lg font-semibold ">{session.user?.name?.[0] || "U"}</span>
        )}
      </button>
      {isOpen && (
        <div className="absolute  mt-2 w-60 bg-white rounded-md shadow-lg py-1 z-10">
          <div className="px-4 py-2 text-sm text-gray-700">
            <div className="font-semibold">{session.user?.name}</div>
            <div className="text-xs text-gray-500">{session.user?.email}</div>
          </div>
          <hr className="my-1" />
          <div className="px-4 py-2 text-sm text-gray-700 font-semibold">Admin Settings</div>
          <Link
            href="/admin/dashboard"
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/products"
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Manage Products
          </Link>
          <Link
            href="/admin/orders"
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Manage Orders
          </Link>
          <Link
            href="/admin/users"
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Manage Users
          </Link>
          <Link
            href="/admin/settings"
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Admin Settings
          </Link>
          <hr className="my-1" />
          <button
            onClick={() => setIsOpen(false)}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Stay logged in
          </button>
          <button
            onClick={() => signOut()}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  )
}

