import { useEffect, useState } from "react"
import { liveClient } from "@/sanity/lib/sanity.client"
import { adminSettingsQuery } from "@/sanity/quaries"


export type AdminSettings = {
  siteName: string
  adminEmail: string
  defaultCurrency: string
  taxRate: number
}

export function useRealtimeAdminSettings() {
  const [settings, setSettings] = useState<AdminSettings | null>(null)

  useEffect(() => {
    const subscription = liveClient.listen(adminSettingsQuery).subscribe({
      next: (update) => {
        // Check if the update contains new document data
        if (update.type === "mutation" && update.result) {
          setSettings
        }
      },
      error: (err) => {
        console.error("Sanity real-time subscription error:", err)
      },
    })

    // Fetch initial data
    liveClient
      .fetch(adminSettingsQuery)
      .then((initialData) => {
        setSettings(initialData)
      })
      .catch((err) => {
        console.error("Error fetching initial admin settings:", err)
      })

    return () => subscription.unsubscribe()
    
  }, [])

  return settings
}


