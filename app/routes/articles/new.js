import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const {inject: {service}} = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  currentUser: service(),

  model(params) {
    let record = this.store.createRecord('node--article', params);

    // Initialize field defaults
    record.set('body', {
      summary: '',
      value: '',
      format: 'basic_html'
    });

    record.set('status', 1);
    record.set('uid', this.get('currentUser').get('user'));

    return record;
  },

  setupController(controller, model) {
    this._super(...arguments);

    // Side-load all tags so we can autocomplete based on them
    controller.set('tags', this.store.findAll('taxonomy-term--tag'));
  },

  actions: {
    save(record) {
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
