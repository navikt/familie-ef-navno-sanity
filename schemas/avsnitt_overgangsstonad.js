export default {
    name: 'avsnitt_overgangstonad',
    type: 'document',
    title: 'Avsnitt overgangsstønad',
    fields: [
        {
            title: 'Side, artikkel',
            description: 'Benyttes kun for oversikt i sanity',
            type: 'string',
            name: 'oversikt'
        },
        {
            title: 'Innhold',
            name: 'avsnitt_innhold',
            type: 'array',
            of: [
                {
                    type: 'block',
                    marks: {
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'External link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL'
                                    },
                                    {
                                        title: 'Open in new tab',
                                        name: 'blank',
                                        type: 'boolean'
                                    }
                                ]
                            },
                            {
                                name: 'internalLink',
                                type: 'object',
                                title: 'Internal link',
                                fields: [
                                    {
                                        name: 'reference',
                                        type: 'reference',
                                        to: [
                                            { type: 'artikkel' },
                                            // other types you may want to link to
                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'tallreferanse',
                                type: 'object',
                                title: 'Talltest',
                                fields: [
                                    {
                                        name: 'reference',
                                        type: 'reference',
                                        to: [
                                            { type: 'tall' },
                                            // other types you may want to link to
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                },
            ]
        },
        {
            name: 'knapp',
            type: 'knapp',
            title: 'Knapp',
        },
        {
            title: 'Skal teksten alltid bli stående?',
            name: 'filtrer_blir_staende',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Jeg er gravid"?',
            name: 'filtrer_gravid',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Under 1 år"?',
            name: 'filtrer_under_1',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Mellom 1 og 8 år"?',
            name: 'filtrer_1_til_8',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Over 8 år"?',
            name: 'filtrer_over_8',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Jeg er i arbeid"?',
            name: 'filtrer_i_arbeid',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Jeg tar eller skal ta utdanning"?',
            name: 'filtrer_utdanning',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Jeg er arbeidssøker"?',
            name: 'filtrer_arbeidssoker',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Jeg etablerer egen virksomhet"?',
            name: 'filtrer_egen_virksomhet',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Jeg er syk eller har sykt barn"?',
            name: 'filtrer_sykdom',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Jeg har barn som trenger særlig tilsyn"?',
            name: 'filtrer_tilsyn',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Jeg mangler barnepass"?',
            name: 'filtrer_barnepass',
            type: 'boolean'
        },
        {
            name: 'alertstripe',
            type: 'alertstripe',
            title: 'Alertstripe',
        },
        {
            name: 'kalkulator', 
            type:  'boolean',
            title: 'Skal det komme en kalkulator etter dette avsnittet?'
        }
    ],
    preview: {
        select: {
            title: 'avsnitt_innhold',
            subtitle: 'oversikt',
        }
    }
}