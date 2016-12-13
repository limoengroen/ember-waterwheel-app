import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    payloadKeyFromModelName(modelName) {
        let payloadKey = modelName;
//        let payloadKey = this._super(modelName);
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
                let error = payload[key];

                // Truncate keys to first element before '/'
                key = key.split('/', 1);
                out[key[0]] = error;
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
