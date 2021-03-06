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
                                            { type: 'avsnitt_alene' },
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
            title: 'Kategori',
            name: 'kategori',
            description: 'Bare filtre som angår disse kategorien vil påvirke avsnittet.',
            type: 'array',
            of: [{type: 'string'}],          
            options: {
              list: [
                {title: 'Hvorfor er du alene med barn?', value: 'hvorfor_alene'},
                {title: 'Hvor mye av den daglige omsorgen?', value: 'hvor_mye_omsorg'},
                {title: 'Hva er arbeidssituasjonen din?', value: 'arbeidssituasjon'},                
              ],
              layout: 'dropdown'
            }
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