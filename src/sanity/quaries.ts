import { defineQuery } from "next-sanity";



export const allProductsdata = defineQuery(
    `*[_type == "product" ] {
            productName,
            discription,
            price,
            category,
            inventory,
            colors,
            status,
            "imageUrl": image.asset->url
}`)

import { groq } from "next-sanity"

export const ordersQuery = groq`*[_type == "order"] | order(createdAt desc) {
  _id,
  customerName,
  email,
  totalAmount,
  status,
  createdAt,
  items[] {
    product->{
      _id,
      productName,
      price
    },
    quantity
  }
}`



// import { groq } from "next-sanity"

export const adminSettingsQuery = groq`*[_type == "adminSettings"][0]{
  siteName,
  adminEmail,
  defaultCurrency,
  taxRate
}`



