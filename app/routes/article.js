import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.get('store').queryRecord('node--article', params.nid/*, { query: { _format: 'api_json' } }*/);
    }
});
