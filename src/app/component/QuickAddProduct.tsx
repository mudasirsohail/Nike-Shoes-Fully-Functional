import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function QuickAddProduct() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Add Product</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <Input placeholder="Product Name" />
          <Input placeholder="Price" type="number" />
          <Input placeholder="Stock Quantity" type="number" />
          <Button className="w-full">Add Product</Button>
        </form>
      </CardContent>
    </Card>
  )
}

