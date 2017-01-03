import Ember from 'ember';

const {inject: {service}} = Ember;

export default Ember.Component.extend({
  session: service(),
  currentUser: service(),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    transitionToLoginRoute() {
      this.transitionToRoute('login');
    }
  }
});
