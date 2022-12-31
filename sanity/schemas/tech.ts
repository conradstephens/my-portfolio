import {defineType} from 'sanity'

const type = defineType({
  name: 'tech',
  title: 'Tech',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
    },
    {
      name: 'html',
      title: 'Html',
      type: 'string',
    },
  ],
})

export default type
