import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const { RSVP: { Promise }, isEmpty } = Ember;

export default Base.extend({
  restore(data) {
//    console.log("restore data:");
//    console.log(JSON.parse(JSON.stringify(data)));
    return new Promise((resolve, reject) => {
      if (isEmpty(data.hash)) {
        reject();
      }
      else {
        resolve(data);
      }
    });
  },

  authenticate(username, password) {
    return new Promise((resolve, reject) => {
      // @todo - actually perform login on Drupal site?
      let data = {
        uid: 52,
        username: username,
        hash: btoa(`${username}:${password}`)
      };
      resolve(data);
    });
  },
});
