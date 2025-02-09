export type FilterCategory = {
    name: string
    items: string[]
  }
  
  export type PriceRange = {
    min: number
    max: number
    label: string
  }
  
  export type Filters = {
    categories: string[]
    gender: string[]
    kids: string[]
    priceRange: string[]
  }
  
  