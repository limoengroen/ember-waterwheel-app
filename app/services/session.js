import Ember from 'ember';
import SessionService from 'ember-simple-auth/services/session';

const { inject: {service}, RSVP } = Ember;

export default SessionService.extend({
  store: service(),

  actions: {
    authenticationSucceeded() {
      debugger;
      let store = this.get('store');
      store.query('user--user', {name: username})
        .then((users) => {
          debugger;
          this.set('session.data.current-user', users[1]);
        });
    }
  }
});
