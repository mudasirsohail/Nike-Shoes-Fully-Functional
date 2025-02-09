// import Header from "../component/header"
// import SalesSummary from "../component/SalesSummary"
// import RecentOrders from "../component/RecentOrders"
// import TopProducts from "../component/TopProducts"
// import QuickAddProduct from "../component/QuickAddProduct"

// export default function AdminDashboard() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header />
//       <main className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <SalesSummary />
//           <RecentOrders />
//           <TopProducts />
//           <QuickAddProduct />
//         </div>
//       </main>
//     </div>
//   )
// }


import { RealtimeOrders } from "../component/RealtimeOrders"

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <RealtimeOrders />
    </div>
  )
}

