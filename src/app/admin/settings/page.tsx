"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useRealtimeAdminSettings } from "@/app/Hooks/useRealtimeAdminSettings"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { client } from "@/sanity/lib/client"
import type React from "react" // Added import for React

export default function AdminSettings() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const settings = useRealtimeAdminSettings()
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    siteName: "",
    adminEmail: "",
    defaultCurrency: "",
    taxRate: 0,
  })

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login")
    }
  }, [status, router])

  useEffect(() => {
    if (settings) {
      setFormData(settings)
    }
  }, [settings])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await client.patch("adminSettings").set(formData).commit()

      alert("Settings updated successfully!")
    } catch (error) {
      console.error("Error updating settings:", error)
      alert("Failed to update settings. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (status === "loading" || !settings) {
    return <div>Loading...</div>
  }

  if (status === "unauthenticated") {
    return null
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="siteName">Site Name</Label>
          <Input id="siteName" name="siteName" value={formData.siteName} onChange={handleInputChange} />
        </div>
        <div>
          <Label htmlFor="adminEmail">Admin Email</Label>
          <Input
            id="adminEmail"
            name="adminEmail"
            type="email"
            value={formData.adminEmail}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="defaultCurrency">Default Currency</Label>
          <Input
            id="defaultCurrency"
            name="defaultCurrency"
            value={formData.defaultCurrency}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="taxRate">Tax Rate (%)</Label>
          <Input id="taxRate" name="taxRate" type="number" value={formData.taxRate} onChange={handleInputChange} />
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Settings"}
        </Button>
      </form>
    </div>
  )
}

