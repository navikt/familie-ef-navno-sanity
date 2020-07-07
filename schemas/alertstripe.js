export default {
    name: 'alertstripe',
    type: 'object',
    title: 'Alertstripe',
    fields: [
        {
            title: 'Innhold',
            name: 'alertstripe_innhold',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            title: 'Skal alertstripen være aktivert?',
            name: 'alertstripe_aktiv',
            type: 'boolean',
        },
        {
            title: 'Informasjon',
            description: 'Skal alertstripen være en informasjonsboks?',
            name: 'alertstripe_info',
            type: 'boolean',
        },
        {
            title: 'Advarsel',
            description: 'Skal alertstripen vises som en advarsel?',
            name: 'alertstripe_advarsel',
            type: 'boolean',
        },
        {
            title: 'Ikon',
            description: 'Skal alertstripen inneholde et ikon?',
            name: 'alertstripe_ikon',
            type: 'boolean',
        }
    ],
    preview: {
        select: {
            title: 'alertstripe_overskrift' ? 'alertstripe_overskrift' : 'alertstripe_innhold',
            subtitle: 'alertstripe_innhold',
        }
    }
}