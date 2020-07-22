export default {
    name: 'avsnitt_skolepengerstonad',
    type: 'document',
    title: 'Avsnitt skolepengerstønad',
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
                                            { type: 'avsnitt_skolepengerstonad' },
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
                            },
                            {
                                name: 'filreferanse',
                                type: 'object',
                                title: 'Filreferanse',
                                blockEditor: {
                                    icon: () => 'PDF'
                                },
                                fields: [
                                    {
                                        name: 'reference',
                                        type: 'reference',
                                        to: [
                                            { type: 'pdf' },
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
            name: 'alertstripe',
            type: 'alertstripe',
            title: 'Alertstripe',
        },
        {
            name: 'dokument',
            title: 'Expandpanel for dokumentasjon',
            type: 'array',
            of: [
                {
                    type: 'block',
                }
            ],
        }
    ],
    preview: {
        select: {
            title: 'avsnitt_innhold',
            subtitle: 'oversikt',
        }
    }
}