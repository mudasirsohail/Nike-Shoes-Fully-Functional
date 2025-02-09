// "use client"

// import type React from "react"
// import { createContext, useContext, useState, useMemo } from "react"

// export type Product = {
//   id: string
//   productName: string
//   imageUrl?: string
//   price: number
//   status?: string
//   colors?: string
//   category?: string
//   gender?: string
//   kids?: string
// }

// type Filters = {
//   categories: string[]
//   gender: string[]
//   kids: string[]
//   priceRange: string[]
// }

// type FilterContextType = {
//   filters: Filters
//   toggleFilter: (category: keyof Filters, value: string) => void
//   clearFilters: () => void
//   filteredProducts: Product[]
// }

// const FilterContext = createContext<FilterContextType | undefined>(undefined)

// export function FilterProvider({ children, products }: { children: React.ReactNode; products: Product[] }) {
//   const [filters, setFilters] = useState<Filters>({
//     categories: [],
//     gender: [],
//     kids: [],
//     priceRange: [],
//   })

//   const toggleFilter = (category: keyof Filters, value: string) => {
//     setFilters((prev) => {
//       const current = prev[category]
//       const updated = current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
//       return { ...prev, [category]: updated }
//     })
//   }

//   const clearFilters = () => {
//     setFilters({
//       categories: [],
//       gender: [],
//       kids: [],
//       priceRange: [],
//     })
//   }

//   const filteredProducts = useMemo(() => {
//     return products.filter((product) => {
//       const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category || "")
//       const genderMatch = filters.gender.length === 0 || filters.gender.includes(product.gender || "")
//       const kidsMatch = filters.kids.length === 0 || filters.kids.includes(product.kids || "")
//       const priceMatch =
//         filters.priceRange.length === 0 ||
//         filters.priceRange.some((range) => {
//           const [min, max] = range.split("-").map(Number)
//           return product.price >= min && product.price <= (max || Number.POSITIVE_INFINITY)
//         })

//       return categoryMatch && genderMatch && kidsMatch && priceMatch
//     })
//   }, [filters, products])

//   return (
//     <FilterContext.Provider value={{ filters, toggleFilter, clearFilters, filteredProducts }}>
//       {children}
//     </FilterContext.Provider>
//   )
// }

// export const useFilters = () => {
//   const context = useContext(FilterContext)
//   if (!context) {
//     throw new Error("useFilters must be used within a FilterProvider")
//   }
//   return context
// }

"use client"

import type React from "react" 
import { createContext, useContext, useState } from "react" 
import type { Filters } from "../types/filters"

type FilterContextType = { filters: Filters
   toggleFilter: (category: keyof Filters, value: string) => void 
   clearFilters: () => void }

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function FilterProvider({ children }: { children: React.ReactNode }) { const [filters, setFilters] = useState<Filters>({ categories: [], gender: [], kids: [], priceRange: [], })

const toggleFilter = (category: keyof Filters, value: string) => { setFilters((prev) => { 
  const current = prev[category]
   const updated = current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
    return { ...prev, [category]: updated } }) }

const clearFilters = () => { setFilters({ categories: [], gender: [], kids: [], priceRange: [], }) }

return <FilterContext.Provider value={{ filters, toggleFilter, clearFilters }}>{children}</FilterContext.Provider> }

export const useFilters = () => { const context = useContext(FilterContext)
   if (!context) { throw new Error("useFilters must be used within a FilterProvider") } return context }