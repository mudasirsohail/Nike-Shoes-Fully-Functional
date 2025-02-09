"use client"

import { useRealtimeOrders, type Order } from "../Hooks/useRealtimeaorders"
import { formatDistanceToNow } from "date-fns"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function RealtimeOrders() {
  const orders = useRealtimeOrders()

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-200 text-yellow-800"
      case "processing":
        return "bg-blue-200 text-blue-800"
      case "shipped":
        return "bg-green-200 text-green-800"
      case "delivered":
        return "bg-purple-200 text-purple-800"
      default:
        return "bg-gray-200 text-gray-800"
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Real-time Orders</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order: Order) => (
            <TableRow key={order._id}>
              <TableCell>{order._id.slice(-6)}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
              </TableCell>
              <TableCell>{formatDistanceToNow(new Date(order.createdAt), { addSuffix: true })}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

