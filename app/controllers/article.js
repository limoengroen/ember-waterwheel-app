import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(model) {
      model.save()
        .then(() => this.transitionToRoute('articles'))
        .catch((adapterError) => {
          console.log("Save failed: " + adapterError);
          Ember.Logger.debug(adapterError);
        });
    },

    cancel() {
      const record = this.get('model');
      record.rollbackAttributes();

      window.history.back();
    },

    delete() {
      const record = this.get('model');
      record.deleteRecord();
      record.save()
        .then(() => this.transitionToRoute('articles'))
        .catch((reason) => console.log("Delete failed: " + reason));
    }
  }
});
