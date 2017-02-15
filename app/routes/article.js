import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('node--article', params.uuid, {include: 'uid'});
  },

  setupController(controller, model) {
    this._super(...arguments);

    // Side-load all tags so we can autocomplete based on them
    controller.set('tags', this.store.findAll('taxonomy-term--tag'));

    // @todo - un-hardcode these
    controller.set('text_formats', [
      {value: 'basic_html', label: 'Basic HTML'},
      {value: 'plain_text', label: 'Plain Text'},
      {value: 'invalid!', label: 'Invalid!'}
    ]);
  },

  actions: {
    willTransition() {
      this._super(...arguments);
      this.controller.get('model').rollbackAttributes();
    },

    save() {
      let record = this.controller.get('model');
      record.save()
        .then(() => this.transitionTo('articles'))
        .catch((adapterError) => {
          console.log("Save failed: " + adapterError);
          Ember.Logger.debug(adapterError);
        });
    },

    cancel() {
      window.history.back();
    },

    delete() {
      let record = this.controller.get('model');
      record.destroyRecord()
        .then(() => {
          record.unloadRecord(); // @todo - This method is marked @private, but is necessary to remove record from the articles listing
          this.transitionTo('articles');
        })
        .catch((reason) => console.log("Delete failed: " + reason));
    }
  }
});
