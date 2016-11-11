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
        return entityPath + '?_format=api_json';
    }
});
