"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { CATEGORIES, GENDERS, KIDS, PRICE_RANGES } from "../constants/filters"
import { useFilters } from "../contexts/FilterContext"
import { Checkbox } from "@/components/ui/checkbox"

export function Sidebar() {
  const { filters, toggleFilter } = useFilters()
  const [expandedSections, setExpandedSections] = useState({
    gender: true,
    kids: true,
    price: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="w-full md:w-1/4 bg-white p-6">
      {/* Categories */}
      <div className="space-y-4">
        <h2 className="font-bold mb-2">Categories</h2>
        {CATEGORIES.map((category) => (
          <div key={category.name} className="flex items-center">
            <label className="flex items-center space-x-2 cursor-pointer">
              <Checkbox
                checked={filters.categories.includes(category.name)}
                onCheckedChange={() => toggleFilter("categories", category.name)}
                className="text-black"
              />
              <span className="text-sm font-medium">{category.name}</span>
            </label>
          </div>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="mt-8">
        <button onClick={() => toggleSection("gender")} className="flex items-center justify-between w-full mb-4">
          <span className="font-bold">Gender</span>
          {expandedSections.gender ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
        {expandedSections.gender && (
          <div className="space-y-3">
            {GENDERS.map((gender) => (
              <label key={gender} className="flex items-center space-x-2 cursor-pointer">
                <Checkbox
                  checked={filters.gender.includes(gender)}
                  onCheckedChange={() => toggleFilter("gender", gender)}
                  className="text-black"
                />
                <span className="text-sm">{gender}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Kids Filter */}
      <div className="mt-8">
        <button onClick={() => toggleSection("kids")} className="flex items-center justify-between w-full mb-4">
          <span className="font-bold">Kids</span>
          {expandedSections.kids ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
        {expandedSections.kids && (
          <div className="space-y-3">
            {KIDS.map((kid) => (
              <label key={kid} className="flex items-center space-x-2 cursor-pointer">
                <Checkbox
                  checked={filters.kids.includes(kid)}
                  onCheckedChange={() => toggleFilter("kids", kid)}
                  className="text-black"
                />
                <span className="text-sm">{kid}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="mt-8">
        <button onClick={() => toggleSection("price")} className="flex items-center justify-between w-full mb-4">
          <span className="font-bold">Shop By Price</span>
          {expandedSections.price ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
        {expandedSections.price && (
          <div className="space-y-3">
            {PRICE_RANGES.map((range) => (
              <label key={range.label} className="flex items-center space-x-2 cursor-pointer">
                <Checkbox
                  checked={filters.priceRange.includes(range.label)}
                  onCheckedChange={() => toggleFilter("priceRange", range.label)}
                  className="text-black"
                />
                <span className="text-sm">{range.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// "use client"

// import { useState } from "react" 
// import { ChevronDown, ChevronUp } from "lucide-react" // This will work as lucide-react is pre-installed import { CATEGORIES, GENDERS, KIDS, PRICE_RANGES } from "../constants/filters" import { useFilters } from "../contexts/FilterContext" import { Checkbox } from "@/components/ui/checkbox" // Using shadcn Checkbox component
// import { useFilters } from "../contexts/FilterContext"
// import { CATEGORIES, GENDERS, KIDS, PRICE_RANGES } from "../constants/filters"
// import { Checkbox } from "@radix-ui/react-checkbox"

// export function Sidebar() { const { filters, toggleFilter } = useFilters() 
// const [expandedSections, setExpandedSections] = useState(
//   { gender: true, kids: true, price: true, })

// const toggleSection = (section: keyof typeof expandedSections) => { setExpandedSections((prev) => ({ ...prev, [section]: !prev[section], })) }

// return ( 
// <div className="w-full md:w-1/4 bg-white p-6"> {/* Categories */} 
// <div className="space-y-4"> {CATEGORIES.map((category) => ( <div key={category.name} className="flex items-center"> <label className="flex items-center space-x-2 cursor-pointer"> <Checkbox checked={filters.categories.includes(category.name)} onCheckedChange={() => toggleFilter("categories", category.name)} className="text-black" /> <span className="text-sm font-medium">{category.name}</span> </label> </div> ))} </div>

//   {/* Gender Filter */}
//   <div className="mt-8">
//     <button onClick={() => toggleSection("gender")} className="flex items-center justify-between w-full mb-4">
//       <span className="font-bold">Gender</span>
//       {expandedSections.gender ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
//     </button>
//     {expandedSections.gender && (
//       <div className="space-y-3">
//         {GENDERS.map((gender) => (
//           <label key={gender} className="flex items-center space-x-2 cursor-pointer">
//             <Checkbox
//               checked={filters.gender.includes(gender)}
//               onCheckedChange={() => toggleFilter("gender", gender)}
//               className="text-black"
//             />
//             <span className="text-sm">{gender}</span>
//           </label>
//         ))}
//       </div>
//     )}
//   </div>

//   {/* Kids Filter */}
//   <div className="mt-8">
//     <button onClick={() => toggleSection("kids")} className="flex items-center justify-between w-full mb-4">
//       <span className="font-bold">Kids</span>
//       {expandedSections.kids ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
//     </button>
//     {expandedSections.kids && (
//       <div className="space-y-3">
//         {KIDS.map((kid) => (
//           <label key={kid} className="flex items-center space-x-2 cursor-pointer">
//             <Checkbox
//               checked={filters.kids.includes(kid)}
//               onCheckedChange={() => toggleFilter("kids", kid)}
//               className="text-black"
//             />
//             <span className="text-sm">{kid}</span>
//           </label>
//         ))}
//       </div>
//     )}
//   </div>

//   {/* Price Range Filter */}
//   <div className="mt-8">
//     <button onClick={() => toggleSection("price")} className="flex items-center justify-between w-full mb-4">
//       <span className="font-bold">Shop By Price</span>
//       {expandedSections.price ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
//     </button>
//     {expandedSections.price && (
//       <div className="space-y-3">
//         {PRICE_RANGES.map((range) => (
//           <label key={range.label} className="flex items-center space-x-2 cursor-pointer">
//             <Checkbox
//               checked={filters.priceRange.includes(range.label)}
//               onCheckedChange={() => toggleFilter("priceRange", range.label)}
//               className="text-black"
//             />
//             <span className="text-sm">{range.label}</span>
//           </label>
//         ))}
//       </div>
//     )}
//   </div>
// </div>
// ) }