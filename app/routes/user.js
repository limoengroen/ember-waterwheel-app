import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.id);
  },

  afterModel(user /*, transition*/) {
    this.store.query('article', { uid: user.get('uid') });
  }
});
