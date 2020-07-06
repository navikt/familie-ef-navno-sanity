export default {
    name: 'alertstripe',
    type: 'document',
    title: 'Alertstripe',
    fields: [
        {
            title: 'Overskrift',
            name: 'alertstripe_overskrift',
            type: 'string',
            description: 'Brukes kun for å holde oversikt.'
        },
        {
            title: 'Innhold',
            name: 'alertstripe_innhold',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            title: 'Alertstripe-ID',
            name: 'alertstripe_id',
            type: 'string',
            description: 'Brukes for informasjonsboksene øverst på hver side',
        },
        {
            title: 'Skal alertstripen være aktivert?',
            name: 'alertstripe_aktiv',
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