import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize(data, block) {
    console.log('authorize() called');
    block('Authorization', 'Basic anNvbmFwaTpqc29uYXBp');
  }
});
