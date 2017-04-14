import Ember from 'ember';

/**
 * A route that lists all "File" entities on the Drupal backend.
 */
export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('file', { include: 'uid', backgroundReload: true });
  }
});
