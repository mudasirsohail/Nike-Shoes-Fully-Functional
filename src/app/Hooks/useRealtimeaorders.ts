import { useEffect, useState } from "react"
// import { liveClient } from "@/lib/sanity.client"
import { liveClient } from "@/sanity/lib/sanity.client"
import { ordersQuery } from "@/sanity/quaries"

export type OrderItem = {
  product: {
    _id: string
    productName: string
    price: number
  }
  quantity: number
}

export type Order = {
  _id: string
  customerName: string
  email: string
  totalAmount: number
  status: string
  createdAt: string
  items: OrderItem[]
}

export function useRealtimeOrders() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const subscription = liveClient.listen(ordersQuery).subscribe((update) => {
      setOrders(update.result)
    })

    return () => subscription.unsubscribe()
  }, [])

  return orders
}

