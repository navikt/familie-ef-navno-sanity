export default {
    name: 'avsnitt_tilleggsstonad',
    type: 'document',
    title: 'Avsnitt tilleggsstønad',
    fields: [
        {
            title: 'Innhold',
            name: 'avsnitt_innhold',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'knapp',
            type: 'array',
            title: 'Knapp',
            of: [{
                type: 'reference',
                to: [{ type: 'knapp' }],
            }]
        },
    ]
}