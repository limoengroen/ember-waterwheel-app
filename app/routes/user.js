import Ember from 'ember';

/**
 * A route for displaying details for a specific User.
 */
export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.id);
  },

  afterModel(user /*, transition*/) {
    // Side-load articles created by this user, for listing by the template
    this.store.query('article', { uid: user.get('uid') });
  }
});
