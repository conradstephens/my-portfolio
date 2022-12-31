import {defineType} from 'sanity'

const type = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'backgroundInfo',
      title: 'BackgroundInfo',
      type: 'string',
    },
    {
      name: 'techTitle',
      title: 'TechTitle',
      type: 'string',
    },
  ],
})

export default type
