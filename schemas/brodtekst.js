export default {
    name: 'brodtekst',
    type: 'document',
    title: 'Brødtekst',
    fields: [
        {
            name: 'body',
            type: 'array', 
            of: [{type: 'block'}]
        }
    ]
}
