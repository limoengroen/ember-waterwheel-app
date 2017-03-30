import Ember from 'ember';

const {inject: {service}} = Ember;

export default Ember.Component.extend({
  session: service(),

  actions: {
    authenticate() {
      let {username, password} = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:oauth2', username, password)
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
