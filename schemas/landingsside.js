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
            name: 'hovedkort_1',
            title: 'Hovedkort 1',
            type: 'aktuelle_stonader_boks'
        },
        {
            name: 'hovedkort_2',
            title: 'Hovedkort 2',
            type: 'aktuelle_stonader_boks'
        },    
        {
            name: 'hovedkort_3',
            title: 'Hovedkort 3',
            type: 'aktuelle_stonader_boks'
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
