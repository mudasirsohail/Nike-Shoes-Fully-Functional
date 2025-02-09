import Image from "next/image"

export default function MainPage() {
  return (
    <>
      <div className="w-full bg-[#F5F5F5] py-4 px-2">
        <p className="text-lg sm:text-xl text-center font-bold">Hello Nike App</p>
        <p className="text-lg sm:text-xl text-center">
          Load the app to access everything Nike. <span className="font-bold underline">Get Your Great</span>
        </p>
      </div>

      <div className="w-full bg-gray-100">
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[500px]">
          <Image src="/MainShoes.png" alt="Sneaker" layout="fill" objectFit="cover" priority />
        </div>

        <div className="relative flex flex-col items-center text-center bg-white py-8 sm:py-12 px-4">
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">First Look</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl mb-4">NIKE AIR MAX PULSE</h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-6">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push you past your
            limits and help you go to the max.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
              Notify Me
            </button>
            <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
              Shop Air Max
            </button>
          </div>
        </div>

        <div className="bg-white px-4 sm:px-6 py-8 relative">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
            <h2 className="text-2xl font-bold">Best of Air Max</h2>
            <div className="flex space-x-2">
              <button className="px-4 py-2 font-bold rounded-full">Shop</button>
              <div className="flex space-x-2">
                <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center font-bold">←</button>
                <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center">→</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {[
              {
                src: "/Shoe1.png",
                title: "Nike Air Max Pulse",
                price: "₹ 13,995",
                category: "Women's Shoes",
              },
              {
                src: "/Shoe2.png",
                title: "Nike Air Max Pulse",
                price: "₹ 13,995",
                category: "Men's Shoes",
              },
              {
                src: "/Shoe3.png",
                title: "Nike Air Max 97 SE",
                price: "₹ 16,995",
                category: "Men's Shoes",
              },
            ].map((shoe, index) => (
              <div key={index} className="border border-white rounded-md p-4 hover: transition transform hover:scale-105 active:scale-95">
                <div className="relative h-[200px] sm:h-[250px]">
                  <Image src={shoe.src || "/placeholder.svg"} alt={shoe.title} layout="fill" objectFit="contain" />
                </div>
                <div className="mt-4 space-y-1 ">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-lg">{shoe.title}</h3>
                    <p className="font-bold">{shoe.price}</p>
                  </div>
                  <p className="text-gray-500 text-sm">{shoe.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative bg-white py-12 sm:py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] w-full">
              <Image src="/Jogging.png" alt="Running Man" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <h1 className="mt-8 text-3xl sm:text-4xl text-gray-900">STEP INTO WHAT FEELS GOOD</h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700">
              Cause everyone should know the feeling of running in that perfect pair!
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
              Find Your Shoe
            </button>
          </div>
        </div>

        <div className="bg-white py-12 sm:py-16 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl text-gray-900 mb-8 sm:mb-12">Gear Up</h2>

            <div className="flex flex-col sm:flex-row justify-between mb-8 space-y-4 sm:space-y-0">
              <div className="flex items-center justify-between sm:justify-start">
                <h2 className="text-xl font-bold text-gray-900">Shop Men</h2>
                <div className="flex space-x-2 ml-4">
                  <button className="p-2 bg-gray-100 rounded-full">←</button>
                  <button className="p-2 bg-gray-300 rounded-full">→</button>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-start">
                <h2 className="text-xl font-bold text-gray-900">Shop Women</h2>
                <div className="flex space-x-2 ml-4">
                  <button className="p-2 bg-gray-100 rounded-full">←</button>
                  <button className="p-2 bg-gray-300 rounded-full">→</button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12">
              {[
                {
                  src: "/main1.png",
                  title: "Nike Dri-FIT ADV TechKnit",
                  price: "₹ 3,895",
                  description: ["Men's Short Sleeve", "Running Top"],
                },
                {
                  src: "/main2.png",
                  title: "Nike Dri-FIT Challenger",
                  price: "₹ 2,495",
                  description: ["Men's 18cm (approx.) 2-", "in-1 Versatile Shorts"],
                },
                {
                  src: "/main3.png",
                  title: "Nike Dri-FIT ADV",
                  price: "₹ 5,295",
                  description: ["Women's Long Sleeve", "Running Top"],
                },
                {
                  src: "/main4.png",
                  title: "Nike Fast",
                  price: "₹ 3,795",
                  description: ["Women's Mid Rise 7/8 Running", "Leggings With Pockets"],
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col hover: transition transform hover:scale-105 active:scale-95">
                  <div className="relative h-[200px] sm:h-[300px]">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="mt-4 space-y-1">
                    <div className="flex justify-between">
                      <p className="text-gray-700 font-medium">{item.title}</p>
                      <p className="text-gray-700 font-medium">{item.price}</p>
                    </div>
                    {item.description.map((line, i) => (
                      <p key={i} className="text-gray-500">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white py-12 sm:py-16 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <Image src="/main5.png" alt="Sneaker" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>

        <div className="relative bg-white py-12 sm:py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-helvetica text-3xl sm:text-4xl md:text-[52px] leading-tight underline">
              Flight Essentials
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700">
              Your built to last all weeks wears-but with style only Jordan Brand can deliver
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
              Shop
            </button>
          </div>
        </div>

        <div className="bg-white py-12 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {["/1.png", "/2.png", "/3.png"].map((src, index) => (
              <div key={index} className="relative h-[300px] sm:h-[400px]">
                <Image
                  src={src || "/placeholder.svg"}
                  alt="Nike Air Max Pulse"
                  layout="fill"
                  objectFit="contain"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <footer className="bg-white py-8 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              {
                title: "Icons",
                items: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"],
              },
              {
                title: "Shoes",
                items: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"],
              },
              {
                title: "Clothing",
                items: ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"],
              },
              {
                title: "Kids",
                items: ["Infant & Toddler Shoes", "Kid's Shoes", "Kid's Jordan Shoes", "Kid's Basketball Shoes"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-sm sm:text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </>
  )
}

