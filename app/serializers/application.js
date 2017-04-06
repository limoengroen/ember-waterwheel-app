import DS from 'ember-data';
import DrupalJSONAPISerializer from 'ember-data-drupal/serializer';
import { singularize } from 'ember-inflector';
const {
  normalizeModelName,
} = DS;

export default DrupalJSONAPISerializer.extend({
  modelNameFromPayloadKey(key) {
    const parts = key.split('--');
    if (parts.length === 2) {
      const entity = parts[0];
      const bundle = parts[1];
      return this.get('drupalMapper').modelNameFor(entity, bundle) || singularize(normalizeModelName(bundle));
    }
    return singularize(normalizeModelName(key));
  },

  payloadKeyFromModelName(modelName) {
    const drupalMapper = this.get('drupalMapper');
    if (drupalMapper.isMapped(modelName)) {
      const entity = drupalMapper.entityFor(modelName);
      const bundle = drupalMapper.bundleFor(modelName);
      return `${entity}--${bundle}`;
    }
    return modelName;
  },

  keyForRelationship(key /*, typeClass, method*/) {
    return key;
  },

  extractErrors(store, typeClass, payload /*, id*/) {
    payload = this._super(...arguments);

    let out = {};
    for (let key in payload) {
      if (payload.hasOwnProperty(key)) {
        let error = payload[key].toString();

        // Remove the field path from the error message
        /*        let splitPos = error.indexOf(':');
         if (splitPos > 0) {
         error = error.substring(splitPos + 2);
         }*/

        // Convert '/' in key (ex. 'body/format') to '__'
        key = key.replace('/', '__');
        out[key] = error;
      }
    }

    Ember.Logger.debug(out);
    return out;
  },

  serializeHasMany(snapshot, json, relationship) {
    let hasMany = snapshot.hasMany(relationship.key);
    if (hasMany !== undefined) {
      if (hasMany.length) {
        this._super(...arguments);
      }
    }
  }

});
