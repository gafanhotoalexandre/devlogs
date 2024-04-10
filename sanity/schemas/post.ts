import { Rule } from 'sanity'

export const post = {
  name: 'post',
  title: 'Post',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Campo obrigatório'),
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule: Rule) => Rule.required().error('Campo obrigatório'),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule: Rule) =>
        Rule.max(200).error('Máximo de 200 caracteres.'),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          fields: [{ type: 'text', name: 'alt', title: 'Alt' }],
        },
      ],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    },
  ],
}
