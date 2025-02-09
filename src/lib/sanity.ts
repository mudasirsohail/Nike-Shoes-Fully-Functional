import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "<YOUR_PROJECT_ID>", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  useCdn: false, // Use `true` for caching in production
  apiVersion: "2023-01-01", // Use current API version
  token: "<YOUR_SANITY_API_TOKEN>", // Use an environment variable in production
});
