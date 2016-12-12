import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const { RSVP: { Promise }, isEmpty } = Ember;

export default Base.extend({
  restore(data) {
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
      let data = {
        uuid: 'db124db7-855a-4e4a-a0ff-1b220665ec48', // @todo - actually perform login on Drupal site
        username: username,
        hash: btoa(`${username}:${password}`)
      };
      resolve(data);
    });
  },
});
