import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        let record = this.store.findRecord('user--user', params.uuid);
//        record.set("articles") = this.store.findAll('node--article', params);
        return record;
    }
});
