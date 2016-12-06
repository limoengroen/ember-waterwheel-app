import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    modelNameFromPayloadKey(key) {
        // Only convert underscores to dashes
        return key.replace(/_/g, '-');
    },

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
