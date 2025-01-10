import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {client} from './lib/sanity'
import imageUrlBuilder from '@sanity/image-url'

export default defineConfig({
  name: 'default',
  title: 'kars-auto',

  projectId: 'dzsh0t50',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source)
    .auto('format')
    .fit('max')
    .quality(90)
}
