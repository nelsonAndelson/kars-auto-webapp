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
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'model',
      title: 'Model',
      type: 'string',
      description: 'The model of the car',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      description: 'The year the car was manufactured',
      validation: (Rule: any) => Rule.required().min(1900).max(new Date().getFullYear() + 1),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'The price of the car',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'mileage',
      title: 'Mileage',
      type: 'number',
      description: 'The current mileage of the car',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'vin',
      title: 'VIN',
      type: 'string',
      description: 'Vehicle Identification Number',
      validation: (Rule: any) => Rule.length(17),
    },
    {
      name: 'bodyStyle',
      title: 'Body Style',
      type: 'string',
      options: {
        list: [
          'Sedan',
          'SUV',
          'Truck',
          'Van',
          'Coupe',
          'Wagon',
          'Convertible',
          'Hatchback',
          'Other'
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'exteriorColor',
      title: 'Exterior Color',
      type: 'string',
      description: 'The exterior color of the car',
    },
    {
      name: 'interiorColor',
      title: 'Interior Color',
      type: 'string',
      description: 'The interior color of the car',
    },
    {
      name: 'interiorMaterial',
      title: 'Interior Material',
      type: 'string',
      options: {
        list: ['Leather', 'Cloth', 'Vinyl', 'Other'],
      },
    },
    {
      name: 'transmission',
      title: 'Transmission',
      type: 'string',
      options: {
        list: ['Automatic', 'Manual', 'CVT', 'Semi-Automatic'],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'drivetrain',
      title: 'Drivetrain',
      type: 'string',
      options: {
        list: ['FWD', 'RWD', 'AWD', '4WD'],
      },
    },
    {
      name: 'engine',
      title: 'Engine',
      type: 'object',
      fields: [
        {
          name: 'size',
          title: 'Engine Size',
          type: 'string',
          description: 'e.g., 2.0L, 3.5L',
        },
        {
          name: 'cylinders',
          title: 'Cylinders',
          type: 'number',
        },
        {
          name: 'horsepower',
          title: 'Horsepower',
          type: 'number',
        },
      ],
    },
    {
      name: 'fuelType',
      title: 'Fuel Type',
      type: 'string',
      options: {
        list: ['Gasoline', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid'],
      },
    },
    {
      name: 'fuelEconomy',
      title: 'Fuel Economy',
      type: 'object',
      fields: [
        {
          name: 'city',
          title: 'City MPG',
          type: 'number',
        },
        {
          name: 'highway',
          title: 'Highway MPG',
          type: 'number',
        },
      ],
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of features the car has',
      options: {
        list: [
          // Safety Features
          'Anti-lock Brakes',
          'Stability Control',
          'Airbags',
          'Backup Camera',
          'Parking Sensors',
          'Lane Departure Warning',
          'Blind Spot Monitoring',
          // Comfort Features
          'Air Conditioning',
          'Power Windows',
          'Power Locks',
          'Power Seats',
          'Heated Seats',
          'Sunroof',
          'Keyless Entry',
          // Entertainment Features
          'Bluetooth',
          'Navigation System',
          'Premium Sound System',
          'Apple CarPlay',
          'Android Auto',
          'USB Ports',
          'Satellite Radio',
        ],
      },
    },
    {
      name: 'condition',
      title: 'Vehicle Condition',
      type: 'string',
      options: {
        list: ['Excellent', 'Very Good', 'Good', 'Fair', 'Poor'],
      },
    },
    {
      name: 'serviceHistory',
      title: 'Service History',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'date',
              title: 'Service Date',
              type: 'date',
            },
            {
              name: 'mileage',
              title: 'Mileage at Service',
              type: 'number',
            },
            {
              name: 'description',
              title: 'Service Description',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'warranty',
      title: 'Warranty Information',
      type: 'text',
      description: 'Details about any remaining warranty coverage',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A detailed description of the car',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: {
              isHighlighted: true
            }
          },
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            description: 'Important for SEO and accessibility.',
            options: {
              isHighlighted: true
            }
          }
        ]
      }],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'featured',
      title: 'Featured Listing',
      type: 'boolean',
      description: 'Show this car in featured listings',
      initialValue: false,
    },
    {
      name: 'status',
      title: 'Listing Status',
      type: 'string',
      options: {
        list: [
          'Available',
          'Sold',
          'Pending',
          'Reserved',
          'Coming Soon'
        ],
      },
      initialValue: 'Available',
    },
  ],
  preview: {
    select: {
      title: 'make',
      subtitle: 'model',
      year: 'year',
      media: 'images.0'
    },
    prepare(selection: any) {
      const {title, subtitle, year, media} = selection
      return {
        title: `${year} ${title} ${subtitle}`,
        media: media
      }
    }
  }
}
