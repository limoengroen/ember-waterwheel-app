import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('taxonomy-term--tag', params.uuid);
    },

/*    afterModel(tag, transition) {
        this.store.query('node--article', {
            filter: {
                'field_tags.name': {
                    value: tag.get('name')
                }
            }
        });
    }*/
});
