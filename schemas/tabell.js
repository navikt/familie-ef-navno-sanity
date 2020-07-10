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
            description: 'Øverste raden blir overskriftene på hver kolonne',
            type: 'table',
        }
    ],
    preview: {
        select: {
            title: 'tabellnavn',
        }
    }
}