import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.createRecord('node--article', params);
    },
    actions: {
        save(record) {
            console.log(record);
            record.save().then(() => this.transitionTo('articles'));
        },
        willTransition() {
            this._super(...arguments);
            const record = this.controller.get('model');
            record.rollbackAttributes();
        }
    }
});
