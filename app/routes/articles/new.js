import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const {inject: {service}} = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  currentUser: service(),

  model(params) {
    return this.store.createRecord('node--article', params);
  },

  setupController(controller, model) {
    controller.set('model', model);

    // Side-load all tags so we can autocomplete based on them
    this.store.findAll('taxonomy-term--tag').then(tags => {
      controller.set('tags', tags);
    });
  },

  actions: {
    save(record) {
      let body = {
        value: record.get('body__value'),
        summary: record.get('body__summary'),
        format: 'plain_text'
      };
      record.set('body', body);
      record.set('uid', this.get('currentUser').get('user'));

      record.save()
        .then(() => this.transitionTo('articles'))
        .catch((reason) => console.log("Save failed: " + reason));
    },
    willTransition() {
      this._super(...arguments);
      const record = this.controller.get('model');
      record.rollbackAttributes();
    },
    closeModal() {
      window.history.back();
    }

  }
});
