export default {
    name: 'avsnitt_alene',
    type: 'document',
    title: 'Avsnitt alene med barn',
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
            title: 'Vises hvis man huker av "Jeg er alene pga. samlivsbrudd"?',
            name: 'filtrer_samlivsbrudd',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Jeg har vært alene med barn fra fødsel"?',
            name: 'filtrer_fra_fodsel',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Jeg er alene pga. dødsfall"?',
            name: 'filtrer_dodsfall',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Jeg har mer enn 60 % av den daglige omsorgen"?',
            name: 'filtrer_mer_enn_60',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Jeg har mer mindre enn 60 % av den daglige omsorgen"?',
            name: 'filtrer_mindre_enn_60',
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
            title: 'Vises hvis man huker av "Ikke i arbeid, utdanning, eller søker jobb?',
            name: 'filtrer_ikke_arbeid',
            type: 'boolean',
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