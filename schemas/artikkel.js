export default {
    name: 'artikkel',
    type: 'document',
    title: 'Artikkel',
    fields: [
        {
            name: 'artikkel_tekst',
            type: 'string',
            title: 'Artikkel-tekst',
            description: 'Har ingen funksjon, men brukes for å kjenne igjen informasjonsboksen i listen.',
        },
        {
            name: 'artikkel_id',
            type: 'number',
            title: 'Artikkel-ID',
            validation: Rule => Rule.required(),
        },
        {
            name: 'tittel',
            type: 'string',
            title: 'Tittel',
        },
        {
            name: 'ingress',
            title: 'Ingress',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'avsnitt',
            type: 'array',
            title: 'avsnitt',
            of: [{
                type: 'reference',
                to: [{ type: 'avsnitt' }],
            }],
        },
    ]
}
