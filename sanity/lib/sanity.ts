import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: '92k9vogo',
  dataset: 'production',
  apiVersion: '2024-05-28',
  useCdn: true,
  token:
    'skHraMErqFJmm7u6XiH9vyExcPeBpTyoFJfuWonfQStCDqHzrcufRBaBDy8ylQSVRxdbtGnswQDHN9VUmQrui9nLLynEI22imhVwpOMpfBEl0Hit0IpyAmkGIOu0r25vUfZc7XI5BE7ywUbKHvxiyGiznVE0iaNdzTGp8rFXmn2TMJ88zJo7',
})
