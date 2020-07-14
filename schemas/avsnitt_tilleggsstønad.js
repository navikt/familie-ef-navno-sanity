export default {
    name: 'avsnitt_tilleggsstonad',
    type: 'document',
    title: 'Avsnitt tilleggsstønad',
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
                                blockEditor: {
                                    icon: () => 'Intern lenke'
                                },
                                fields: [
                                    {
                                        name: 'reference',
                                        type: 'reference',
                                        to: [
                                            { type: 'artikkel' },
                                            { type: 'avsnitt_overgangstonad' },
                                            { type: 'avsnitt_tilleggsstonad' },
                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'tallreferanse',
                                type: 'object',
                                title: 'Tall',
                                blockEditor: {
                                    icon: () => 'Tall'
                                },
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
                            },
                            {
                                name: 'datoreferanse',
                                type: 'object',
                                title: 'Datoreferanse',
                                blockEditor: {
                                    icon: () => 'Dato'
                                },
                                fields: [
                                    {
                                        name: 'reference',
                                        type: 'reference',
                                        to: [
                                            { type: 'dato' },
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
            title: 'Vises hvis man huker av "Jeg tar utdanning"?',
            name: 'filtrer_utdanning',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Jeg er arbeidssøker"?',
            name: 'filtrer_arbeidssoker',
            type: 'boolean'
        },
        {
            name: 'alertstripe',
            type: 'alertstripe',
            title: 'Alertstripe',
        },
    ],
    preview: {
        select: {
            title: 'avsnitt_innhold',
            subtitle: 'oversikt',
        }
    }
}