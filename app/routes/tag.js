import Ember from 'ember';

/**
 * A route for displaying details for a specific Tag.
 */
export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('tag', params.id);
  },
});
