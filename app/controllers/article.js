import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save(record) {
            record.save()
                .then(() => this.transitionToRoute('articles'))
                .catch((reason) => console.log("Save failed: " + reason));
        },

        cancel() {
            window.history.back();
        },

        updateFormat(value) {
            this.get('model').set('body.format', value);
        }
    }
});
