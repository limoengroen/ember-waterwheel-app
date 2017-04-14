import Ember from 'ember';

const { inject: { service } } = Ember;

/**
 * The top-nav component provides navigation and an indication of the logged-in
 * user at the top of every page.
 */
export default Ember.Component.extend({
  session: service(),

  // Forward actions fired from the component template along to the route
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    transitionToLoginRoute() {
      this.transitionToRoute('login');
    }
  }
});
