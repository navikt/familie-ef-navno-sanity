export default {
    name: 'landingsside',
    type: 'document',
    title: 'Landingsside',
    fields: [
        {
            name: 'landingsside_id',
            type: 'number',
            title: 'Landingsside-ID',
            description: 'Landingssiden med ID 1 er den aktive.',
            validation: Rule => Rule.required(),
        },
        {
            name: 'aktuelle_stonader',
            title: 'Aktuelle stønader',
            type: 'array', 
            of: [{type: 'aktuelle_stonader_boks'}]
        }
    ],
    preview: {
        select: {
            title: 'landingsside_id',
        }
    }
}
