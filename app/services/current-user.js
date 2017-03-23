import Ember from 'ember';

const {inject: {service}, isEmpty, RSVP} = Ember;

export default Ember.Service.extend({
  session: service(),
  store: service(),

  load() {
    return new RSVP.Promise((resolve, reject) => {
      let data = this.get('session.data');
      let username = this.get('session.data.authenticated.username');
      debugger;
      if (!isEmpty(username)) {
        this.get('store').query('user--user', {name: username})
          .then(users => {
            debugger;
            this.set('session.data.current-user', users[1]);
            resolve();
          }, reject);
      }
      else {
        resolve();
      }
    });
  }
});
