export default{
    name: 'tall',
    type: 'document',
    title: 'Tall',
    fields: [
        {
            title: 'Navn på tallet',
            type: 'string',
            description: 'IKKE endre navnet på eksisterende tall',
            name: 'navn',
        },
        {
            title: 'Tallverdi',
            type: 'number',
            name: 'tallverdi',
        }
    ]
}