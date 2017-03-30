import DS from 'ember-data';
import ENV from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: ENV.APP.host,
  namespace: 'jsonapi',
  authorizer: 'authorizer:oauth2',
  // coalesceFindRequests: true,  // @todo - fix JSON API filtering query and re-enable

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

  /* Adapted from ember-data-drupal */
  query(store, type, query) {
    let drupalQuery = { filter: {} },
      queryFields = Object.keys(query);

    queryFields.forEach((field) => {
      drupalQuery.filter[field] = drupalQuery.filter[field] || {};
      drupalQuery.filter[field]['value'] = query[field];
    });

    let url = this.buildURL(type.modelName, null, null, 'query', drupalQuery);

    if (this.sortQueryParams) {
      query = this.sortQueryParams(drupalQuery);
    }

    return this.ajax(url, 'GET', { data: query });
  },

});
