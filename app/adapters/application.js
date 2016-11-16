import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
    host: 'http://ember-crud.dd:8080',
    namespace: 'api',
    authorizer: 'authorizer:custom',

    pathForType: function (type) {
        let entityPath;
        switch(type) {
            case 'node--article':
                entityPath = 'node/article';
        }
        return entityPath;
    },

    buildURL: function (modelName, id, snapshot, requestType, query) {
        return this._super(...arguments) + '?_format=api_json';
    }
});
