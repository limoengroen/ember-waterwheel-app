import Ember from 'ember';

const {inject: {service}, isEmpty, RSVP} = Ember;

export default Ember.Service.extend({
  session: service(),
  store: service(),

  load() {
    return new RSVP.Promise((resolve, reject) => {
      let username = this.get('session.data.authenticated.username');
      if (!isEmpty(username)) {
        this.get('store').query('user--user', {name: username})
          .then(users => {
            let user = users.objectAt(0);
            this.set('user', user);
            resolve();
          }, reject);
      }
      else {
        resolve();
      }
    });
  }
});
