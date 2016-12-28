import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('node--article', params.uuid, {include: 'uid'});
  },

  setupController(controller, model) {
    this._super(...arguments);

    // Side-load all tags so we can autocomplete based on them
    controller.set('tags', this.store.findAll('taxonomy-term--tag'));

    controller.set('text_formats', [
      {value: 'basic_html', label: 'Basic HTML'},
      {value: 'plain_text', label: 'Plain Text'},
      {value: 'invalid!', label: 'Invalid!'}
    ]);
  },

  actions: {
    save(model) {
      model.save()
        .then(() => this.transitionTo('articles'))
        .catch((adapterError) => {
          console.log("Save failed: " + adapterError);
          Ember.Logger.debug(adapterError);
        });
    },

    willTransition() {
      this._super(...arguments);
      this.controller.get('model').rollbackAttributes();
    },

    cancel() {
      window.history.back();
    },

    delete() {
      this.controller.get('model').destroyRecord()
        .then(() => this.transitionToRoute('articles'))
        .catch((reason) => console.log("Delete failed: " + reason));
    }

  }
});
