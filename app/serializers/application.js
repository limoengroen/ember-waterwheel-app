import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    payloadKeyFromModelName(modelName) {
        let payloadKey = this._super(modelName);
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
                // TODO: Convert newlines to <br/>'s ?
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
