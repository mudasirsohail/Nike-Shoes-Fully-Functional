import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: 'f2c6usg2', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: false,
  token: 'sk1ZtoqvZiljhymlJMMpnOfwzwYVaSLFy2TrRGHBUJ9bUUA3yhYMCYHvzEEth7pPbEpBK40AKhrkVvzqIVtMdWfABgdJkzex9wvoS78LACpYwnHl9H57OpYL3Z2VHqhuXDJbyLcdhvjbUI1AUkau7stFIbn2kUpAZFcukpGeUeLrJyf1sGsi', // Replace with your Sanity API token
});

// export function sanityFetch({query,params = {}}:{query:string, params?:any}){
//   return client.fetch(query,params)
// }

// export const sanityFetch = async ({ query, params }: { query: string; params?: Record<string, any> }) => {
//   return client.fetch(query, params);
// };

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
}: {
  query: string
  params?: Record<string, unknown>
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params)
}





