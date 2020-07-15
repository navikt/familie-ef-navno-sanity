export default {
    name: 'artikkel',
    type: 'document',
    title: 'Artikkel',
    fields: [
        {
            name: 'tittel_i_panel',
            type: 'string',
            title: 'Tittel som vises i panel',
            description: 'Denne tittelen vil vises sammen med avsnittene',
        },
        {
            name: 'tittel_i_liste',
            type: 'string',
            title: 'Tittel som vises i oversikten på siden',
            description: 'Denne tittelen vil vises i temaoversikten på venstre side',
        },
        {
            name: 'artikkel_id',
            type: 'number',
            description: 'IKKE endre denne hvis feltet er utfylt',
            title: 'Artikkel-ID',
            validation: Rule => Rule.required(),
        },
        {
            name: 'ikon',
            title: 'Ikon',
            type: 'ikon',
        },
        {
            name: 'avsnitt',
            type: 'array',
            title: 'avsnitt',
            of: [{
                type: 'reference',
                to: [
                    { type: 'avsnitt_overgangstonad' },
                    { type: 'avsnitt_barnetilsyn' },
                    { type: 'avsnitt_skolepengerstonad' },
                    { type: 'avsnitt_tilleggsstonad' },
                    { type: 'avsnitt_alene' },
                    { type: 'tabell' },
                ],
            }],
        },
    ],
    orderings: [
        {
            title: 'Artikkel-ID, lav-høy',
            name: 'artikkelAsc',
            by: [
                { field: 'artikkel_id', direction: 'asc' }
            ]
        },
        {
            title: 'Artikkel-ID, høy-lav',
            name: 'artikkelDesc',
            by: [
                { field: 'artikkel_id', direction: 'desc' }
            ]
        }
    ],
    preview: {
        select: {
            title: 'tittel_i_panel',
            subtitle: 'artikkel_id',
        }
    }
}
