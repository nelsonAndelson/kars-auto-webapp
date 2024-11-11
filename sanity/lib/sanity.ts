import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'dzsh0t50',
  dataset: 'production',
  apiVersion: '2024-10-09',
  useCdn: true,
})
