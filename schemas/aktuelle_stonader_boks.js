export default {
    name: 'aktuelle_stonader_boks',
    type: 'object',
    title: 'Aktuelle stønader (boks)',
    fields: [
        {
            title: 'Overskrift',
            name: 'boks_overskrift',
            type: 'string',
        },
        {
            title: 'Innhold',
            name: 'boks_innhold',
            type: 'string'
        },
        {
            title: 'Lenke',
            name: 'boks_lenke',
            type: 'string',
            description: 'Hvilken side skal boksen linke til?',
        }
    ]
}