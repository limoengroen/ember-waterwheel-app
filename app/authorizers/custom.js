import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

const { isEmpty } = Ember;

export default Base.extend({
  authorize(data, block) {
    if (!isEmpty(data.hash)) {
      block('Authorization', `Basic ${data.hash}`);
    }
  }
});
