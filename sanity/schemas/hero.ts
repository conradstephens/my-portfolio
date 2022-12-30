import {defineType} from 'sanity'

const type = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'FirstName',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'LastName',
      type: 'string',
    },
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    },
    {
      name: 'backgroundInfo',
      title: 'BackgroundInfo',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})

export default type
