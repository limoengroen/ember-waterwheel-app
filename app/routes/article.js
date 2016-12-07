import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('node--article', params.uuid, {include: 'uid'});
//        console.log("article record:");
//        console.log(JSON.parse(JSON.stringify(data)));
    },

    afterModel() {
        // Load all tags for autocomplete

    },

    setupController(controller, model) {
        controller.set('model', model);

        this.store.findAll('taxonomy-term--tag').then(tags => {
            controller.set('tags', tags)
        });
    }
});
