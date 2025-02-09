import { groq } from "next-sanity"

export const allProducts = groq`*[_type == "product"]{
  "id": _id,
  productName,
  "imageUrl": image.asset->url,
  price,
  status,
  colors,
  gender,
  kids,
  men,
  women,
  category,
  inventory,
  description
}`

export const productById = groq`*[_type == "product" && _id == $id][0]{
  "id": _id,
  productName,
  "imageUrl": image.asset->url,
  price,
  status,
  colors,
  category,
  inventory,
  description
}`



