import { useEffect, useState } from "react"
import { liveClient } from "@/sanity/lib/sanity.client"

export function useRealtimeData(query: string) {
  const [data, setData] = useState(null)

  useEffect(() => {
    const subscription = liveClient.listen(query).subscribe((update) => {
      // setData(update.result)
    })

    return () => subscription.unsubscribe()
  }, [query])

  return data
}

