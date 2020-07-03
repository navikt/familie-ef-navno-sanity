export default {
    name: 'ikon',
    type: 'image',
    title: 'Ikon',
    options: {
      hotspot: true // <-- Defaults to false
    },
    fields: [
      {
        name: 'alttekst',
        type: 'string',
        title: 'Alternativ tekst',
        options: {
          isHighlighted: true // <-- make this field easily accessible
        }
      },
      {
        // Editing this field will be hidden behind an "Edit"-button
        name: 'attribution',
        type: 'string',
        title: 'Attribution',
      }
    ]
  }