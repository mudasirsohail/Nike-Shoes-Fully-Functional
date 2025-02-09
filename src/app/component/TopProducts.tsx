import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


const topProducts = [
  { name: "Running Shoes", sales: 1234 },
  { name: "Hiking Boots", sales: 1000 },
  { name: "Sneakers", sales: 856 },
  { name: "Sandals", sales: 765 },
  { name: "Dress Shoes", sales: 654 },
]

export default function TopProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {topProducts.map((product, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{product.name}</span>
              <span className="font-semibold">{product.sales}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

