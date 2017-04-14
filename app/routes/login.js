import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

/**
 * A route for the login form.
 */
export default Ember.Route.extend(UnauthenticatedRouteMixin);
