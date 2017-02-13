import DS from 'ember-data';
import ENV from 'ember-crud/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: ENV.APP.host,
  namespace: 'jsonapi',
  authorizer: 'authorizer:oauth2',
  coalesceFindRequests: true,

  pathForType(type) {
    let entityPath;
    switch (type) {
      case 'taxonomy-term--tag':
        entityPath = 'taxonomy_term/tags';
        break;
      default:
        // Replace '--' => '/' and '-' => '_'
        entityPath = type.replace(/--/g, '/');
        entityPath = entityPath.replace(/-/g, '_');
    }
    return entityPath;
  },

  buildURL(/*modelName, id, snapshot, requestType, query*/) {
    return this._super(...arguments) + '?_format=api_json' /*+ '&XDEBUG_SESSION_START=PHPSTORM'*/;
  }
});
