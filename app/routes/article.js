import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('node--article', params.uuid, {include: 'uid'});
//        console.log("article record:");
//        console.log(JSON.parse(JSON.stringify(data)));
    }
});
