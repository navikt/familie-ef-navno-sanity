export default {
    name: 'avsnitt_barnetilsyn',
    type: 'document',
    title: 'Avsnitt barnetilsyn',
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
        {
            title: 'Skal teksten alltid bli stående?',
            name: 'filtrer_blir_staende',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Jeg er i arbeid"?',
            name: 'filtrer_i_arbeid',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Jeg etablerer egen virksomhet"?',
            name: 'filtrer_egen_virksomhet',
            type: 'boolean'
        },
        {
            title: 'Vises hvis man huker av "Jeg er syk"?',
            name: 'filtrer_sykdom',
            type: 'boolean'
        },
    ]
}