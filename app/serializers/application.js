import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
/*    modelNameFromPayloadKey(key) {
        // Only convert underscores to dashes
        return key.replace(/_/g, '-');
    },
    modelNameFromPayloadType(payloadType) {
        // Only convert underscores to dashes
        return payloadType.replace(/_/g, '-');
    },*/

    payloadKeyFromModelName(modelName) {
        let payloadKey = this._super(modelName);
        payloadKey = payloadKey.replace(/([^-])-([^-])/g, "$1_$2");
        return payloadKey;
    },

    keyForRelationship(key/*, typeClass, method*/) {
        return key;
    },

/*    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        Ember.Logger.debug('normalizeResponse()');
        Ember.Logger.debug(payload);

        payload = this._super(...arguments);
        Ember.Logger.debug(payload);
        return payload;
    },*/

/*    extractRelationships(modelClass, resourceHash) {
        debugger;
        return this._super(...arguments);
    },*/

/*    normalize(typeClass, hash) {
        Ember.Logger.debug(typeClass);
        Ember.Logger.debug(hash);

        if (hash.type == 'node--article') {
            if (hash.relationships && hash.relationships.field_tags) {
                hash.attributes.field_tags = hash.relationships.field_tags;
            }
        }

        return this._super(typeClass, hash);
    },*/

    extractErrors(store, typeClass, payload, id) {
        payload = this._super(...arguments);

        let out = {};
        for (let key in payload) {
            if (payload.hasOwnProperty(key)) {
                // Convert newlines to <br/>'s
                let error = payload[key];
/*                for (let i = 0; i < error.length; i++) {
                    error[i] = error[i].replace('\n', '<br/>');
                }*/

                // Truncate keys to first element before '/'
                key = key.split('/', 1);
                out[key[0]] = error;
            }
        }

        Ember.Logger.debug(out);
        return out;
    }
});
