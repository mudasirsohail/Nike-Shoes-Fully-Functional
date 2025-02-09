import { createClient } from "@sanity/client"

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-05-03", // Use the latest API version
  useCdn: false, // Set to false for real-time data
}

export const Client = createClient(config)

export const liveClient = Client.withConfig({
  token: process.env.SANITY_API_TOKEN,
  perspective: "published",
  // listen: true,
})

