export default {
    name: 'avsnitt',
    type: 'document',
    title: 'Avsnitt',
    fields: [
        {
            title: 'Tittel',
            name: 'tittel',
            type: 'string'
        },
        {
            title: 'Innhold', 
            name: 'innhold',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            title: 'Innhold', 
            name: 'innhold2',
            type: 'array', 
            of: [{type: 'block'}]
        }
    ]
}