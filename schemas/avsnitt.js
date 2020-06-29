export default {
    name: 'avsnitt',
    type: 'document',
    title: 'Avsnitt',
    fields: [
        {
            title: 'Undertittel',
            name: 'undertittel',
            type: 'string'
        },
        {
            name: 'brodtekster',
            type: 'array',
            title: 'Brødtekst',
            of: [{
                type: 'reference',
                to: [{ type: 'brodtekst' }],
            }]
        },
        {
            title: 'Innhold',
            name: 'avsnitt_innhold', 
            type: 'array', 
            of: [{type: 'block'}],
        },
        {
            name: 'knapp',
            type: 'array',
            title: 'Knapp',
            of: [{
                type: 'reference',
                to: [{type: 'knapp'}],
            }]
        }
    ]
}