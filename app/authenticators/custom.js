import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const { RSVP: { Promise }, isEmpty } = Ember;

export default Base.extend({
  restore(data) {
//    debugger;
//    Promise.resolve(data);
    console.log("restore data:" + JSON.stringify(data));
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
//    debugger;
    return new Promise((resolve, reject) => {
      let data = {
        uid: 52,
        username: username,
        hash: 'anNvbmFwaTpqc29uYXBp'
      };
      resolve(data);
    });
  },
});
