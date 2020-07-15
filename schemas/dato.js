export default{
    name: 'dato',
    type: 'document',
    title: 'Dato',
    fields: [
        {
            tile: 'Navn på datoen',
            description: 'IKKE endre navnet på eksisterende datoer, kun selve datoen i felt to.',
            type: 'string',
            name: 'navn',
        },
        {
            tile: 'Datoen',
            description: 'Skriv slik at det passer i en tekst (dette feltet kan endres)',
            type: 'string',
            name: 'dato',
        }
    ]
}