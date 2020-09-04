export default {
    widgets: [
      {
        name: 'project-info',
        options: {
            data: [
              {
                title: 'GitHub repo',
                value: 'https://github.com/navikt/familie-ef-navno-sanity',
                category: 'Code'
              },
              {title: 'Prod', value: 'https://www.nav.no/familie/alene-med-barn', category: 'apps'}
            ]
          }
    
      },
      {
        name: 'project-users'
      },
      {
        name: 'notes'
      },
      {
        name: 'document-chart',
        options: {types: ['artikkel', 'tall', 'avsnitt_alene', 'avsnitt_overgangstonad', 'avsnitt_skolepengerstonad', 'avsnitt_tilleggsstonad']},
        layout: {width: 'full'}
      }      
    ]
  }
