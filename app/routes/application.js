import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const {inject: {service}} = Ember;

export default Ember.Route.extend(ApplicationRouteMixin, {
  currentUser: service(),

  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser().catch(() => this.get('session').invalidate());
  },

/*  sessionAuthenticationSucceeded() {
    this.transitionTo(
      this.controllerFor('application').get('previousRouteName')
    );
  },*/

  _loadCurrentUser() {
    return this.get('currentUser').load();
  },
});
