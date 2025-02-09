// "use client";
// import Image from "next/image";
// import { loadStripe } from "@stripe/stripe-js";
// const stripe = loadStripe( process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_51QlPACBTxPPmgRjBt9jGEktTtvLXhJf8Zo7PT2PBwqLDMtyG6z6Wipw5MlJxjrwjt7oqYncrrwWtzGtagrgBu0Gd00SBcZLNFU");
// const OrderPage = () => {
//   const handleCheckout = async () => {
//     const stripeUI = await stripe;
//     let sessionResponse: any = await fetch("/api/checkout", {
//       method: "POST",
//       body: JSON.stringify({
//         data: [],
//       }),
//     });
//     sessionResponse = await sessionResponse.json();

//     stripeUI?.redirectToCheckout({
//       sessionId: sessionResponse.sessionId,
//     });
//   };
//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <div className="lg:grid lg:grid-cols-2 lg:gap-8">
//         <div>
//           <h3 className="text-xl font-semibold mb-4">How would you like to get your order?</h3>
//           <p className="text-sm mb-4 text-gray-500">
//             Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match
//             the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will
//             be stored securely and used solely for the purpose of clearing customs (including sharing it with customs
//             officials) for all orders and returns. If your KYC does not match your shipping address, please click the
//             link for more information.{" "}
//             <a href="#" className="text-blue-500 underline">
//               Learn More
//             </a>
//           </p>

//           <div className="mb-6">
//             <label className="inline-flex items-center text-sm">
//               <input type="radio" className="form-radio" name="deliveryOption" defaultChecked />
//               <span className="ml-2">Deliver It</span>
//             </label>
//           </div>

//           {/* Progress Steps */}
//           <div className="flex items-center space-x-4 mb-8">
//             {["Delivery", "Shipping", "Billing", "Payment"].map((step, idx) => (
//               <div key={step} className="flex items-center">
//                 <div className="flex flex-col items-center">
//                   <span className={`text-sm ${idx === 0 ? "text-black" : "text-gray-400"}`}>{step}</span>
//                 </div>
//                 {idx < 3 && <div className="h-[1px] w-16 bg-gray-300 mx-2" />}
//               </div>
//             ))}
//           </div>

//           <h3 className="text-xl font-semibold mb-4">Enter your name and address:</h3>
//           <form className="space-y-4">
//             <div className="flex gap-4">
//               <input type="text" name="firstName" placeholder="First Name" className="w-1/2 p-2 border rounded-md" />
//               <input type="text" name="lastName" placeholder="Last Name" className="w-1/2 p-2 border rounded-md" />
//             </div>
//             <input
//               type="text"
//               name="addressLine1"
//               placeholder="Address Line 1"
//               className="w-full p-2 border rounded-md"
//             />
//             <input
//               type="text"
//               name="addressLine2"
//               placeholder="Address Line 2"
//               className="w-full p-2 border rounded-md"
//             />
//             <input
//               type="text"
//               name="addressLine3"
//               placeholder="Address Line 3"
//               className="w-full p-2 border rounded-md"
//             />
//             <div className="flex gap-4">
//               <input type="text" name="postalCode" placeholder="Postal Code" className="w-1/2 p-2 border rounded-md" />
//               <input type="text" name="locality" placeholder="Locality" className="w-1/2 p-2 border rounded-md" />
//             </div>
//             <div className="flex gap-4">
//               <select name="state" className="w-1/2 p-2 border rounded-md">
//                 <option value="">State/Territory</option>
//                 <option value="India">India</option>
//               </select>
//             </div>

//             <div className="space-y-2">
//               <label className="flex items-center space-x-2">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="text-sm">Save this address to my profile</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="text-sm">Make this my preferred address</span>
//               </label>
//             </div>

//             {/* Contact Information Section */}
//             <div className="mt-8">
//               <h3 className="text-xl font-semibold mb-4">What's your contact information?</h3>
//               <div className="space-y-4">
//                 <div>
//                   <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded-md" />
//                   <p className="text-xs text-gray-500 mt-1">A confirmation email will be sent after checkout.</p>
//                 </div>
//                 <div>
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     placeholder="Phone Number"
//                     className="w-full p-2 border rounded-md"
//                   />
//                   <p className="text-xs text-gray-500 mt-1">A carrier might contact you to confirm delivery.</p>
//                 </div>
//               </div>
//             </div>

//             {/* PAN Section */}
//             <div className="mt-8">
//               <h3 className="text-xl font-semibold mb-4">What's your PAN?</h3>
//               <div className="space-y-4">
//                 <div>
//                   <input type="text" name="pan" placeholder="PAN" className="w-full p-2 border rounded-md" />
//                   <p className="text-xs text-gray-500 mt-1">
//                     Enter your PAN to enable payment with UPI, Net Banking or local payment methods.
//                   </p>
//                 </div>
//                 <label className="flex items-start space-x-2">
//                   <input type="checkbox" className="form-checkbox mt-1" />
//                   <span className="text-sm text-gray-600">
//                     I have read and consent to all eligibility disclosures including the{" "}
//                     <a href="#" className="text-blue-500 underline">
//                       Privacy Statement
//                     </a>{" "}
//                     and{" "}
//                     <a href="#" className="text-blue-500 underline">
//                       Cookie Policy
//                     </a>
//                     , specifically to it's stated fees per year.
//                   </span>
//                 </label>
//               </div>
//             </div>

//             <button className="w-full bg-gray-100  py-3 rounded-md hover:bg-black hover:text-white mt-6">
//               Continue
//             </button>

//             {/* Progress Links */}
//             <div className="mt-8 space-y-2 text-gray-500">
//               <div>Delivery</div>
//               <div>Shipping</div>
//               <div>Billing</div>
//               <div>Payment</div>
//             </div>
//           </form>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
//           <div className="space-y-4">
//             <div className="flex justify-between">
//               <p>Subtotal</p>
//               <p>₹20,890.00</p>
//             </div>
//             <div className="flex justify-between">
//               <p>Delivery/Shipping</p>
//               <p>Free</p>
//             </div>
//             <div className="flex justify-between font-semibold">
//               <p>Total</p>
//               <p>₹20,890.00</p>
//             </div>
//           </div>

//           <div className="mt-8">
//             <p className="text-sm text-gray-500 mb-4">
//               (The total reflects the price of your order, including applicable taxes and fees)
//             </p>
//             <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"  onClick={handleCheckout}>Proceed to Payment</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default OrderPage



// "use client"

// import Image from "next/image"
// import { loadStripe } from "@stripe/stripe-js"
// import { useCart } from "../contexts/cartContext"
// import { client } from "@/sanity/lib/client"
// import { useState } from "react"

// const stripe = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
//     "pk_test_51QlPACBTxPPmgRjBt9jGEktTtvLXhJf8Zo7PT2PBwqLDMtyG6z6Wipw5MlJxjrwjt7oqYncrrwWtzGtagrgBu0Gd00SBcZLNFU",
// )

// const OrderPage = () => {
//   const { cart, getCartTotal } = useCart()
//   const total = getCartTotal()

//   const handleCheckout = async () => {
//     const stripeUI = await stripe
//     let sessionResponse: any = await fetch("/api/checkout", {
//       method: "POST",
//       body: JSON.stringify({
//         data: cart,
//       }),
//     })
//     sessionResponse = await sessionResponse.json()

//     stripeUI?.redirectToCheckout({
//       sessionId: sessionResponse.sessionId,
//     })
//   }

//   // const CheckOut = () => {
//   //   const [cartItems, setCartItems] = useState<Product[]>([])
//   // }

//   // const handlePlaceOrder = async () => {
//   //   const orderData = {
//   //     _type: "order",
//   //     firstName:formValues.firstName,
//   //     firstName:formValues.lastName,
//   //     firstName:formValues.Address,
//   //     firstName:formValues.PostalAddress,
//   //     firstName:formValues.PhoneNo,
//   //     firstName:formValues.Email,
//   //     cartItems:cartItems.map(item => ({
//   //       _type:"referece",
//   //       _ref: item._id
//   //     })),
//   //     total:total,
//   //     discount:discount,
//   //     orderDate: new Date().toISOString
//   //   };
//   //   try{
//   //     await client.create(orderData)
//   //     localStorage.removeItem("appliedDiscount")
//   //   }catch(error){
//   //     console.log('error in creating order', error)
//   //   }
//   // }

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <div className="lg:grid lg:grid-cols-2 lg:gap-8">
//         <div>
//           <h3 className="text-xl font-semibold mb-4">How would you like to get your order?</h3>
//           <p className="text-sm mb-4 text-gray-500">
//             Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match
//             the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will
//             be stored securely and used solely for the purpose of clearing customs (including sharing it with customs
//             officials) for all orders and returns. If your KYC does not match your shipping address, please click the
//             link for more information.{" "}
//             <a href="#" className="text-blue-500 underline">
//               Learn More
//             </a>
//           </p>

//           <div className="mb-6">
//             <label className="inline-flex items-center text-sm">
//               <input type="radio" className="form-radio" name="deliveryOption" defaultChecked />
//               <span className="ml-2">Deliver It</span>
//             </label>
//           </div>

//           {/* Progress Steps */}
//           <div className="flex items-center space-x-4 mb-8">
//             {["Delivery", "Shipping", "Billing", "Payment"].map((step, idx) => (
//               <div key={step} className="flex items-center">
//                 <div className="flex flex-col items-center">
//                   <span className={`text-sm ${idx === 0 ? "text-black" : "text-gray-400"}`}>{step}</span>
//                 </div>
//                 {idx < 3 && <div className="h-[1px] w-16 bg-gray-300 mx-2" />}
//               </div>
//             ))}
//           </div>

//           <h3 className="text-xl font-semibold mb-4">Enter your name and address:</h3>
//           <form className="space-y-4">
//             <div className="flex gap-4">
//               <input type="text" name="firstName" placeholder="First Name" className="w-1/2 p-2 border rounded-md" />
//               <input type="text" name="lastName" placeholder="Last Name" className="w-1/2 p-2 border rounded-md" />
//             </div>
//             <input
//               type="text"
//               name="addressLine1"
//               placeholder="Address Line 1"
//               className="w-full p-2 border rounded-md"
//             />
//             <input
//               type="text"
//               name="addressLine2"
//               placeholder="Address Line 2"
//               className="w-full p-2 border rounded-md"
//             />
//             <input
//               type="text"
//               name="addressLine3"
//               placeholder="Address Line 3"
//               className="w-full p-2 border rounded-md"
//             />
//             <div className="flex gap-4">
//               <input type="text" name="postalCode" placeholder="Postal Code" className="w-1/2 p-2 border rounded-md" />
//               <input type="text" name="locality" placeholder="Locality" className="w-1/2 p-2 border rounded-md" />
//             </div>
//             <div className="flex gap-4">
//               <select name="state" className="w-1/2 p-2 border rounded-md">
//                 <option value="">State/Territory</option>
//                 <option value="India">India</option>
//               </select>
//             </div>

//             <div className="space-y-2">
//               <label className="flex items-center space-x-2">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="text-sm">Save this address to my profile</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="text-sm">Make this my preferred address</span>
//               </label>
//             </div>

//             {/* Contact Information Section */}
//             <div className="mt-8">
//               <h3 className="text-xl font-semibold mb-4">What's your contact information?</h3>
//               <div className="space-y-4">
//                 <div>
//                   <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded-md" />
//                   <p className="text-xs text-gray-500 mt-1">A confirmation email will be sent after checkout.</p>
//                 </div>
//                 <div>
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     placeholder="Phone Number"
//                     className="w-full p-2 border rounded-md"
//                   />
//                   <p className="text-xs text-gray-500 mt-1">A carrier might contact you to confirm delivery.</p>
//                 </div>
//               </div>
//             </div>

//             {/* PAN Section */}
//             <div className="mt-8">
//               <h3 className="text-xl font-semibold mb-4">What's your PAN?</h3>
//               <div className="space-y-4">
//                 <div>
//                   <input type="text" name="pan" placeholder="PAN" className="w-full p-2 border rounded-md" />
//                   <p className="text-xs text-gray-500 mt-1">
//                     Enter your PAN to enable payment with UPI, Net Banking or local payment methods.
//                   </p>
//                 </div>
//                 <label className="flex items-start space-x-2">
//                   <input type="checkbox" className="form-checkbox mt-1" />
//                   <span className="text-sm text-gray-600">
//                     I have read and consent to all eligibility disclosures including the{" "}
//                     <a href="#" className="text-blue-500 underline">
//                       Privacy Statement
//                     </a>{" "}
//                     and{" "}
//                     <a href="#" className="text-blue-500 underline">
//                       Cookie Policy
//                     </a>
//                     , specifically to it's stated fees per year.
//                   </span>
//                 </label>
//               </div>
//             </div>

//             <button className="w-full bg-gray-100  py-3 rounded-md hover:bg-black hover:text-white mt-6">
//               Continue
//             </button>

//             {/* Progress Links */}
//             <div className="mt-8 space-y-2 text-gray-500">
//               <div>Delivery</div>
//               <div>Shipping</div>
//               <div>Billing</div>
//               <div>Payment</div>
//             </div>
//           </form>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
//           <div className="space-y-4">
//             {cart.map((item) => (
//               <div key={item.id} className="flex justify-between items-center">
//                 <div className="flex items-center">
//                   <Image
//                     src={item.imageUrl || "/placeholder.svg"}
//                     alt={item.productName}
//                     width={50}
//                     height={50}
//                     className="object-cover rounded mr-4"
//                   />
//                   <div>
//                     <p className="font-semibold">{item.productName}</p>
//                     <p className="text-sm text-gray-500">
//                       Quantity: {item.quantity} {item.size && `- Size: ${item.size}`}{" "}
//                       {item.color && `- Color: ${item.color}`}
//                     </p>
//                   </div>
//                 </div>
//                 <p>₹{(item.price * item.quantity).toFixed(2)}</p>
//               </div>
//             ))}
//             <div className="flex justify-between">
//               <p>Subtotal</p>
//               <p>₹{total.toFixed(2)}</p>
//             </div>
//             <div className="flex justify-between">
//               <p>Delivery/Shipping</p>
//               <p>Free</p>
//             </div>
//             <div className="flex justify-between font-semibold">
//               <p>Total</p>
//               <p>₹{total.toFixed(2)}</p>
//             </div>
//           </div>

//           <div className="mt-8">
//             <p className="text-sm text-gray-500 mb-4">
//               (The total reflects the price of your order, including applicable taxes and fees)
//             </p>
//             <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800" onClick={handleCheckout}>
//               Proceed to Payment
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default OrderPage










































"use client"

import Image from "next/image"
import { loadStripe } from "@stripe/stripe-js"
import { useCart } from "../contexts/cartContext"
import { client } from "@/sanity/lib/client"
import { useState } from "react"
import ConfirmationModal from "../component/ConfirmationModal"

const stripe = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
    "pk_test_51QlPACBTxPPmgRjBt9jGEktTtvLXhJf8Zo7PT2PBwqLDMtyG6z6Wipw5MlJxjrwjt7oqYncrrwWtzGtagrgBu0Gd00SBcZLNFU",
)

const OrderPage = () => {
  const { cart, getCartTotal } = useCart()
  const total = getCartTotal()
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    postalCode: "",
    locality: "",
    state: "",
    email: "",
    phoneNumber: "",
    pan: "",
  })
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [orderId, setOrderId] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const clearFormAndCart = () => {
    setFormValues({
      firstName: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      addressLine3: "",
      postalCode: "",
      locality: "",
      state: "",
      email: "",
      phoneNumber: "",
      pan: "",
    })
    // Assuming you have a clearCart function in your cart context
    // If not, you'll need to implement it
    // clearCart();
  }

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      addressLine1: formValues.addressLine1,
      addressLine2: formValues.addressLine2,
      addressLine3: formValues.addressLine3,
      postalCode: formValues.postalCode,
      locality: formValues.locality,
      state: formValues.state,
      email: formValues.email,
      phoneNumber: formValues.phoneNumber,
      pan: formValues.pan,
      cartItems: cart.map((item) => ({
        _type: "reference",
        _ref: item.id,
      })),
      total: total,
      orderDate: new Date().toISOString(),
    }
    try {
      const result = await client.create(orderData)
      setOrderId(result._id)
      setIsConfirmationOpen(true)
      clearFormAndCart()
    } catch (error) {
      console.log("error in creating order", error)
      // Add error handling, e.g., display an error message
    }
  }

  const handleCheckout = async () => {
    const stripeUI = await stripe
    let sessionResponse: any = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        data: cart,
      }),
    })
    sessionResponse = await sessionResponse.json()

    stripeUI?.redirectToCheckout({
      sessionId: sessionResponse.sessionId,
    })
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">How would you like to get your order?</h3>
          <p className="text-sm mb-4 text-gray-500">
            Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match
            the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will
            be stored securely and used solely for the purpose of clearing customs (including sharing it with customs
            officials) for all orders and returns. If your KYC does not match your shipping address, please click the
            link for more information.{" "}
            <a href="#" className="text-blue-500 underline">
              Learn More
            </a>
          </p>

          <div className="mb-6">
            <label className="inline-flex items-center text-sm">
              <input type="radio" className="form-radio" name="deliveryOption" defaultChecked />
              <span className="ml-2">Deliver It</span>
            </label>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center space-x-4 mb-8">
            {["Delivery", "Shipping", "Payment"].map((step, idx) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <span className={`text-sm ${idx === 0 ? "text-black" : "text-gray-400"}`}>{step}</span>
                </div>
                {idx < 3 && <div className="h-[1px] w-16 bg-gray-300 mx-2" />}
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4">Enter your name and address:</h3>
          <form onSubmit={handlePlaceOrder} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-1/2 p-2 border rounded-md"
                value={formValues.firstName}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-1/2 p-2 border rounded-md"
                value={formValues.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <input
              type="text"
              name="addressLine1"
              placeholder="Address Line 1"
              className="w-full p-2 border rounded-md"
              value={formValues.addressLine1}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="addressLine2"
              placeholder="Address Line 2"
              className="w-full p-2 border rounded-md"
              value={formValues.addressLine2}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="addressLine3"
              placeholder="Address Line 3"
              className="w-full p-2 border rounded-md"
              value={formValues.addressLine3}
              onChange={handleInputChange}
            />
            <div className="flex gap-4">
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                className="w-1/2 p-2 border rounded-md"
                value={formValues.postalCode}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="locality"
                placeholder="Locality"
                className="w-1/2 p-2 border rounded-md"
                value={formValues.locality}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex gap-4">
              <select
                name="state"
                className="w-1/2 p-2 border rounded-md"
                value={formValues.state}
                onChange={handleInputChange}
                required
              >
                <option value="">State/Territory</option>
                <option value="India">India</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm">Save this address to my profile</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm">Make this my preferred address</span>
              </label>
            </div>

            {/* Contact Information Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">What's your contact information?</h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded-md"
                    value={formValues.email}
                    onChange={handleInputChange}
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">A confirmation email will be sent after checkout.</p>
                </div>
                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="w-full p-2 border rounded-md"
                    value={formValues.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">A carrier might contact you to confirm delivery.</p>
                </div>
              </div>
            </div>

            {/* PAN Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">What's your PAN?</h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="pan"
                    placeholder="PAN"
                    className="w-full p-2 border rounded-md"
                    value={formValues.pan}
                    onChange={handleInputChange}
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Enter your PAN to enable payment with UPI, Net Banking or local payment methods.
                  </p>
                </div>
                <label className="flex items-start space-x-2">
                  <input type="checkbox" className="form-checkbox mt-1" />
                  <span className="text-sm text-gray-600">
                    I have read and consent to all eligibility disclosures including the{" "}
                    <a href="#" className="text-blue-500 underline">
                      Privacy Statement
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-500 underline">
                      Cookie Policy
                    </a>
                    , specifically to it's stated fees per year.
                  </span>
                </label>
              </div>
            </div>

            <button type="submit" className="w-full bg-gray-100 py-3 rounded-md hover:bg-black hover:text-white mt-6">
              Place Order
            </button>

            {/* Progress Links */}
            <div className="mt-8 space-y-2 text-gray-500">
              <div>Delivery</div>
              <div>Shipping</div>
              <div>Billing</div>
              <div>Payment</div>
            </div>
          </form>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.productName}
                    width={50}
                    height={50}
                    className="object-cover rounded mr-4"
                  />
                  <div>
                    <p className="font-semibold">{item.productName}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity} {item.size && `- Size: ${item.size}`}{" "}
                      {item.color && `- Color: ${item.color}`}
                    </p>
                  </div>
                </div>
                <p>₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>₹{total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery/Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between font-semibold">
              <p>Total</p>
              <p>₹{total.toFixed(2)}</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-4">
              (The total reflects the price of your order, including applicable taxes and fees)
            </p>
            <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800" onClick={handleCheckout}>
              Proceed to Payment
            </button>
          </div>
        </div>
        <ConfirmationModal isOpen={isConfirmationOpen} onClose={() => setIsConfirmationOpen(false)} orderId={orderId} />
      </div>
    </div>
  )
}

export default OrderPage

