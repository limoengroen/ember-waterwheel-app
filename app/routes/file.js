import Ember from 'ember';

/**
 * A route for displaying details for a specific File.
 */
export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('file', params.id, { include: 'uid' });
  },
});
