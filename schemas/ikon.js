export default {
    name: 'ikon',
    type: 'document',
    title: 'Ikon',
    fields: [
      {
        name: 'body',
        type: 'string',
        title: 'Brødtekst',
        validation: Rule => Rule.required(),
      }
    ]
  }