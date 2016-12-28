import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  payloadKeyFromModelName(modelName) {
    let payloadKey = modelName;
    payloadKey = payloadKey.replace(/([^-])-([^-])/g, "$1_$2");
    return payloadKey;
  },

  keyForRelationship(key/*, typeClass, method*/) {
    return key;
  },

  extractErrors(store, typeClass, payload, id) {
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
