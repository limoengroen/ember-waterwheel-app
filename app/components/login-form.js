import Ember from 'ember';

const {inject: {service}} = Ember;

export default Ember.Component.extend({
  session: service(),
  store: service(),

  actions: {
    authenticate() {
      let {username, password} = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:oauth2', username, password)
/*        .then(() => {
          // Find the current user
          this.get('store').query('user--user', {name: username})
            .then((users) => {
              debugger;
              this.set('session.data.current-user', users[0]);
            });
        })*/
        .catch((reason) => {
        if (reason === undefined) {
          this.set('errorMessage', 'authenticate failed for unknown reasons.');
        }
        else {
          this.set('errorMessage', reason.error || reason);
        }
      });
    }
  }
});
