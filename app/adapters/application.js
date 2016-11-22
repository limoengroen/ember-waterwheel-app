import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
    host: 'http://ember-crud.dd:8080',
    namespace: 'api',
    authorizer: 'authorizer:custom',

    pathForType(type) {
        let originalPath = this._super(type);
        let entityPath;
        switch(type) {
            case 'node--article':
                entityPath = 'node/article';
                break;
            case 'user--user':
                entityPath = 'user/user';
                break;
        }
//        console.log(`original path: ${originalPath}  new path: ${entityPath}`);
        return entityPath;
    },

    buildURL(/*modelName, id, snapshot, requestType, query*/) {
//        console.log(`buildURL arguments: ${modelName}, ${id}, ${requestType}`);
//        console.log(JSON.stringify(query));

        return this._super(...arguments) + '?_format=api_json' /*+ '&XDEBUG_SESSION_START=PHPSTORM'*/;
    }
});
