import Ember from 'ember';

const {inject: {service}} = Ember;

export default Ember.Controller.extend({
  session: service(),

  actions: {
    authenticate() {
      let {username, password} = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:custom', username, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
