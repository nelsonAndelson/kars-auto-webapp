export default {
  name: 'car',
  title: 'Car',
  type: 'document',
  fields: [
    {
      name: 'make',
      title: 'Make',
      type: 'string',
      description: 'The manufacturer of the car',
    },
    {
      name: 'model',
      title: 'Model',
      type: 'string',
      description: 'The model of the car',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      description: 'The year the car was manufactured',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'The price of the car',
    },
    {
      name: 'mileage',
      title: 'Mileage',
      type: 'number',
      description: 'The mileage of the car',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'The color of the car',
    },
    {
      name: 'fuelType',
      title: 'Fuel Type',
      type: 'string',
      description: 'The type of fuel the car uses',
    },
    {
      name: 'transmission',
      title: 'Transmission',
      type: 'string',
      description: 'The type of transmission the car has',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'A list of features the car has',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the car',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      description: 'List of images for the car',
      options: {
        hotspot: true, // Allows for cropping of images
      },
    },
  ],
}
