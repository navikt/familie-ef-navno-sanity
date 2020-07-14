export default{
    name: 'dato',
    type: 'document',
    title: 'Dato',
    fields: [
        {
            tile: 'Navn på datoen',
            description: 'Må IKKE endres, kun verdien',
            type: 'string',
            name: 'navn',
        },
        {
            tile: 'Datoen',
            description: 'Skriv slik at det passer i en tekst',
            type: 'string',
            name: 'dato',
        }
    ]
}