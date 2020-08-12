export default {
    name: 'tabell',
    title: 'Tabell',
    type: 'document',
    fields: [
        {
            name: 'tabellnavn',
            title: 'Tabellnavn for oversikt',
            type: 'string'
        },
        {
            name: 'tabelldata',
            title: 'Tabelldata',
            description: 'IKKE endre navnet på eksisterende datoer, kun selve datoen i felt to.',
            type: 'table',
        }
    ],
    preview: {
        select: {
            title: 'tabellnavn',
        }
    }
}