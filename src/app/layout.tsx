
import Footer from "./component/footer"
import Header from "./component/header"
import { CartProvider } from "./contexts/cartContext"
import "./globals.css"
import { Inter } from "next/font/google"
import { SessionProvider } from "next-auth/react"
import SessionWrapper from "./component/SessionWrapper"
import { AuthProvider } from "./component/AuthProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Shoe Store",
  description: "Find your perfect pair of shoes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionWrapper>
    <html lang="en">
      {/* <SessionProvider>
        <body className={inter.className}>{children}</body>
      </SessionProvider> */}
      <body className={inter.className}>
        <AuthProvider>
        <Header/>
        <CartProvider>{children}</CartProvider>
        </AuthProvider>
        <Footer/>
      </body>
    </html>
    </SessionWrapper>
  )
}

