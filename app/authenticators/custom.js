import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const { RSVP: { Promise }, isEmpty, run, $: jQuery, assign: emberAssign, merge } = Ember;

export default Base.extend({
  restore(data) {
    Promise.resolve(data);
  },

  authenticate(/*args*/) {
    return new Promise((resolve, reject) => {
      resolve();
    });
  },

  invalidate(data) {
  }
});
