import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.uuid);
  },

  afterModel(user/*, transition*/) {
    this.store.query('article', {
      filter: {
        uid: {
          value: user.get('uid'),
        }
      }
    });
  }
});
