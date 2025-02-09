import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentOrders = [
  { id: "1234", customer: "John Doe", product: "Running Shoes", total: "$120.00", status: "Shipped" },
  { id: "1235", customer: "Jane Smith", product: "Hiking Boots", total: "$150.00", status: "Processing" },
  { id: "1236", customer: "Bob Johnson", product: "Sneakers", total: "$80.00", status: "Delivered" },
  { id: "1237", customer: "Alice Brown", product: "Sandals", total: "$60.00", status: "Shipped" },
]

export default function RecentOrders() {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

