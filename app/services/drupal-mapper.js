import DrupalMapper from 'ember-data-drupal/services/drupal-mapper';

export default DrupalMapper.extend({
  isMapped(modelName) {
    return this.map.hasOwnProperty(modelName);
  },

  modelNameFor(entity, bundle) {
    return Object.keys(this.map).find(modelName => {
      const modelMap = this.map[modelName];
      modelMap.entity = modelMap.entity || 'node';

      const bundleMatches = modelMap.bundle === bundle || modelMap.bundle === undefined && modelName === bundle;
      if (bundleMatches && modelMap.entity === entity) {
        return true;
      }
    });
  }
});
