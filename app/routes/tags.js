import Ember from 'ember';

/**
 * A route that lists all "Tags" taxonomy terms on the Drupal backend.
 */
export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('tag');
  }
});
