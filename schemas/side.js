export default {
    name: 'side',
    type: 'document',
    title: 'Side',
    fields: [
        {
            name: 'hovedtittel',
            type: 'string',
            title: 'Hovedtittel',
        },
        {
            name: 'side_id',
            description: 'IKKE endre denne',
            type: 'number',
            title: 'Side-ID',
            validation: Rule => Rule.required(),
        },
        {
            name: 'artikler',
            type: 'array',
            title: 'Artikler',
            of: [{
                type: 'reference',
                to: [
                    { type: 'artikkel' },
                ],
            }],
        },
        {
            name: 'alertstripe',
            type: 'alertstripe',
            title: 'Alertstripe'
        }
    ],
    orderings: [
        {
            title: 'Side-ID, lav-høy',
            name: 'sideAsc',
            by: [
                { field: 'side_id', direction: 'asc' }
            ]
        },
        {
            title: 'Side-ID, høy-lav',
            name: 'sideDesc',
            by: [
                { field: 'side_id', direction: 'desc' }
            ]
        }
    ],
    preview: {
        select: {
            title: 'hovedtittel',
            subtitle: 'side_id',
        }
    }
}
