// import React from "react";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import { sanityFetch } from "@/sanity/lib/client";
// import { allProducts, productById } from "@/sanity/sanity";
// import Link from "next/link";
// import AddToCartButton from "../../component/AddToCartButton";

// type Product = {
//   productName: string;
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
//   status: string;
//   colors: string;
//   category: string;
//   inventory: string;
//   slug: string;
// };

// type PageProps = {
//   params: {
//     id: string;
//   };
// };

// export default async function ProductPage({ params }: PageProps) {
//   const { id } = params;

//   //Fetched product by id
//   const product: Product | null = await sanityFetch({
//     query: productById,
//     params: { id }, // I Pass the id as a variable
//   });

//   if (!product) {
//     notFound(); //It Shows a 404 page if the product is not found
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//              <div className="container mx-auto px-4 md:flex md:items-center">
//                <div className="w-full md:w-1/2 flex justify-center">
//                  <Image
//                   src={product.imageUrl} 
//                   alt="Picture"
//                   width={'500'}
//                   height={'500'}
//                   className="rounded-lg"
//                 />
//               </div>
//               <div className=" md:w-1/2 mt-6 h-[413px] w-[374px] md:mt-0 md:pl-10">
//                 <h1 className="text-3xl  font-bold mb-4">{product.productName}</h1>
//                 <p className="text-gray-700 w-[300px] mb-6"> { product.description}</p>
//                 <div className="flex gap-4 text-sm">
//                 <p className="text-red-700 font-bold mb-6"> Color: { product.colors}</p>
//                 <p className="text-gray-700 font-bold mb-6"> Stocks Available: { product.inventory}</p>
//                 <p className="text-gray-700 font-bold mb-6"> Status: { product.status}</p>
//                 </div>
//                 <p className="text-2xl font-bold mb-6">${product.price}</p>
//                 <Link href={"/Cart"}>
//                 <div >
//             <AddToCartButton product={product} />
//           </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//   );
// }


// // Generate dynamic routes
// export async function generateStaticParams() {
//   const slugs: { slug: string }[] = await sanityFetch({ query: `*[_type == "product"]{ "slug": slug.current }` });

//   return slugs.map((item) => ({
//     slug: item.slug,
//   }));
// }





// import React from "react";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import { sanityFetch } from "@/sanity/lib/client";
// import { productById } from "@/sanity/sanity";
// import Link from "next/link";
// import AddToCartButton from "../../component/AddToCartButton";
// import CommentSection from "../../component/CommentSection"; // Import the component

// type Product = {
//   productName: string;
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
//   status: string;
//   colors: string;
//   category: string;
//   inventory: string;
//   slug: string;
// };

// type PageProps = {
//   params: {
//     id: string;
//   };
// };

// export default async function ProductPage({ params }: PageProps) {
//   const { id } = params;

//   // Fetch product by ID
//   const product: Product | null = await sanityFetch({
//     query: productById,
//     params: { id },
//   });

//   if (!product) {
//     notFound(); // Shows a 404 page if the product is not found
//   }

//   return (
//     <>
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="container mx-auto px-4 md:flex md:items-center">
//         <div className="w-full md:w-1/2 flex justify-center">
//           <Image
//             src={product.imageUrl}
//             alt="Picture"
//             width={"500"}
//             height={"500"}
//             className="rounded-lg"
//           />
//         </div>
//         <div className="md:w-1/2 mt-6 h-[413px] w-[374px] md:mt-0 md:pl-10">
//           <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
//           <p className="text-gray-700 w-[300px] mb-6">{product.description}</p>
//           <div className="flex gap-4 text-sm">
//             <p className="text-red-700 font-bold mb-6">
//               Color: {product.colors}
//             </p>
//             <p className="text-gray-700 font-bold mb-6">
//               Stocks Available: {product.inventory}
//             </p>
//             <p className="text-gray-700 font-bold mb-6">
//               Status: {product.status}
//             </p>
//           </div>
//           <p className="text-2xl font-bold mb-6">${product.price}</p>
//           <Link href={"/Cart"}>
//             <div>
//               <AddToCartButton product={product} />
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//     <CommentSection />
//     </>
//   );
// }

// // Generate dynamic routes
// export async function generateStaticParams() {
//   const slugs: { slug: string }[] = await sanityFetch({
//     query: `*[_type == "product"]{ "slug": slug.current }`,
//   });

//   return slugs.map((item) => ({
//     slug: item.slug,
//   }));
// }

import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/client";
import { productById } from "@/sanity/sanity";
import Link from "next/link";
import AddToCartButton from "../../component/AddToCartButton";
import AddToWishlistButton from "../../component/AddToWishlistButton";
import CommentSection from "@/app/component/CommentSection";

type Product = {
  productName: string;
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  status: string;
  colors: string;
  category: string;
  inventory: string;
  slug: string;
};

type PageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: PageProps) {
  const { id } = params;

  // Fetch product by ID
  const product: Product | null = await sanityFetch({
    query: productById,
    params: { id },
  });

  if (!product) {
    notFound(); // Show a 404 page if the product is not found
  }

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 md:flex md:items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={product.imageUrl}
            alt="Picture"
            width={"500"}
            height={"500"}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 mt-6 h-[413px] w-[374px] md:mt-0 md:pl-10">
          <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
          <p className="text-gray-700 w-[300px] mb-6">{product.description}</p>
          <div className="flex gap-4 text-sm">
            
            <p className="font-bold">Color:<span className="text-red-600 font-bold mb-6">
               {product.colors}
            </span></p>
            <p className="text-gray-700 font-bold mb-6">
              Stocks Available: {product.inventory}
            </p>
            <p className="font-bold mb-6">Status: <span className="text-red-600 font-bold mb-6">
               {product.status}
            </span></p>
            
            
          </div>
          <p className="text-2xl font-bold mb-6">${product.price}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {/* Add to Cart Button */}
            <Link href={"/Cart"}>
              <AddToCartButton product={product} />
            </Link>
            {/* Wishlist Button */}
            <AddToWishlistButton
              product={{
                id: product.id,
                productName: product.productName,
                price: product.price,
                imageUrl: product.imageUrl,
              }}
            />
          </div>
        </div>
      </div>
    </div>
    <CommentSection/>
    </>
  );
}
