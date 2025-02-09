
import Link from "next/link"
import Image from "next/image"
import { ProfileButton } from "./ProfileButton"

export default function Header() {
  return (
    <>
      <header className="bg-white shadow-md items-end">
        <div className="flex justify-between items-center px-4 py-2 text-sm bg-gray-100">
          <ProfileButton />
          <ul className="flex gap-4">
            <li>
              <Link href="/" className="hover:underline">
                Find a Store
              </Link>
            </li>
            <li>
              <Link href="/Help" className="hover:underline">
                Help
              </Link>
            </li>
            <li>
              <Link href="/JoinUs" className="hover:underline">
                Join Us
              </Link>
            </li>
            <li>
              <Link href="/Login" className="hover:underline">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap justify-between items-center px-4 py-4 md:px-6">
          <Link href="/" className="flex-shrink-0">
            <Image src="/NikeLogo.png" alt="Nike Logo" width={60} height={40} />
          </Link>

          <ul className="hidden md:flex gap-6 text-base font-semibold">
            <li>
              <Link href="/Shoes" className="hover:text-gray-700">
                New & Featured
              </Link>
            </li>
            <Link href="/Shoes" className="hover:text-gray-700">
              <li>Men</li>
            </Link>
            <Link href="/Shoes">
            <li className="hover:text-gray-700"> Women </li>
            </Link>
            <Link href="/Shoes">
            <li>Kids</li>
            </Link>
            <Link href="/Shoes">
            <li>Sale</li>
            </Link>

            <Link href="/Shoes" className="hover:text-gray-700">
              <li>SNKRS</li>
            </Link>
          </ul>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search"
              className="hidden md:block rounded-full h-10 w-40 bg-gray-100 p-4 text-sm outline-none focus:ring-2 focus:ring-gray-300"
            />
            <Link href="/Wishlist">
              <Image src="/heart.png" alt="Wishlist" width={32} height={32} className="cursor-pointer" />
            </Link>
            <Link href="/Cart">
              <Image src="/bag.png" alt="Cart" width={32} height={32} className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </header>

      <div className="block md:hidden bg-gray-100 px-4 py-2">
        <ul className="flex justify-between text-sm">
          <li>
            <Link href="/Shoes" className="hover:underline">
              New & Featured
            </Link>
          </li>
          <li>
            <Link href="/Men" className="hover:underline">
              Men
            </Link>
          </li>
          <li>
            <Link href="/Women" className="hover:underline">
              Women
            </Link>
          </li>
          <li>
            <Link href="/Kids" className="hover:underline">
              Kids
            </Link>
          </li>
          <li>
            <Link href="/Sale" className="hover:underline">
              Sale
            </Link>
          </li>
          <li>
            <Link href="/ProductDetail" className="hover:underline">
              SNKRS
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

