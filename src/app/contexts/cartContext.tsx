// "use client"

// import type React from "react"
// import { createContext, useContext, useState, useEffect } from "react"

// type CartItem = {
//   id: string
//   productName: string
//   price: number
//   imageUrl: string
//   quantity: number
//   size?: string
//   color?: string
// }

// type CartContextType = {
//   cart: CartItem[]
//   addToCart: (item: CartItem) => void
//   removeFromCart: (id: string) => void
//   updateQuantity: (id: string, quantity: number) => void
//   clearCart: () => void
// }

// const CartContext = createContext<CartContextType | undefined>(undefined)

// export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [cart, setCart] = useState<CartItem[]>([])

//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart")
//     if (savedCart) {
//       setCart(JSON.parse(savedCart))
//     }
//   }, [])

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart))
//   }, [cart])

//   const addToCart = (item: CartItem) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
//       if (existingItem) {
//         return prevCart.map((cartItem) =>
//           cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
//         )
//       }
//       return [...prevCart, { ...item, quantity: 1 }]
//     })
//   }

//   const removeFromCart = (id: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id))
//   }

//   const updateQuantity = (id: string, quantity: number) => {
//     setCart((prevCart) => prevCart.map((item) => (item.id === id ? { ...item, quantity: quantity } : item)))
//   }

//   const clearCart = () => {
//     setCart([])
//   }

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   )
// }

// export const useCart = () => {
//   const context = useContext(CartContext)
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider")
//   }
//   return context
// }









"use client"
import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface CartItem {
  id: string
  productName: string
  price: number
  quantity: number
  imageUrl: string
  size?: string
  color?: string
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  getCartTotal: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) => prevCart.map((item) => (item.id === id ? { ...item, quantity: quantity } : item)))
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getCartTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

