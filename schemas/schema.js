// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import avsnitt_overgangstonad from './avsnitt_overgangsstonad';
import avsnitt_barnetilsyn from './avsnitt_barnetilsyn';
import avsnitt_skolepengerstønad from './avsnitt_skolepengerstønad';
import avsnitt_tilleggstønad from './avsnitt_tilleggsstønad';
import brodtekst from './brodtekst';
import knapp from './knapp';
import artikkel from './artikkel';
import side from './side';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    avsnitt_overgangstonad,
    avsnitt_barnetilsyn,
    avsnitt_skolepengerstønad,
    avsnitt_tilleggstønad,
    brodtekst,
    knapp,
    artikkel,
    side,
  ])
})
