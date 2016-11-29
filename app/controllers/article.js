import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save(model) {
            model.save()
                .then(() => this.transitionToRoute('articles'))
                .catch((reason) => console.log("Save failed: " + reason));
        },

        cancel() {
            window.history.back();
        },

        delete(model) {
            model.deleteRecord();
            model.save()
                .then(() => this.transitionToRoute('articles'))
                .catch((reason) => console.log("Delete failed: " + reason));
        }
    }
});
