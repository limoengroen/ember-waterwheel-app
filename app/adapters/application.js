import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://ember-crud.dd:8080',
    namespace: 'api',

    pathForType: function (type) {
        let entityPath;
        switch(type) {
            case 'node--article':
                entityPath = 'node/article';
        }
        return entityPath;
    },

    buildURL: function (modelName, id, snapshot, requestType, query) {
        return this._super(modelName, id, snapshot, requestType, query) + '?_format=api_json';
    }
});
