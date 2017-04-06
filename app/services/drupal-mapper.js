import DrupalMapper from 'ember-data-drupal/services/drupal-mapper';
import { singularize } from 'ember-inflector';

export default DrupalMapper.extend({
  isMapped(modelName) {
    return this.map.hasOwnProperty(modelName);
  },

  modelNameFor(entity, bundle) {
    for (let modelName in this.map) {
      if (this.map.hasOwnProperty(modelName)) {
        let modelMap = this.map[modelName];
        modelMap.entity = modelMap.entity || 'node';

        let bundleMatches = modelMap.bundle === bundle || modelMap.bundle === undefined && modelName === bundle;
        if (modelMap.entity === entity && bundleMatches) {
          return modelName;
        }
      }
    }
    return undefined;
  },

/*  fieldName(modelName, fieldName) {
    debugger;
    return this._super(...arguments);
  }*/
});
