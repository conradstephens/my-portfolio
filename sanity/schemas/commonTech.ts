import {defineType} from 'sanity'

const type = defineType({
  name: 'commonTech',
  title: 'CommonTech',
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
    {
      name: 'animationDuration',
      title: 'AnimationDuration',
      type: 'number',
    },
    {
      name: 'className',
      title: 'ClassName',
      type: 'string',
    },
  ],
})

export default type
