import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        let record = this.store.findRecord('user--user', params.uuid).then((record) => {
            this.store.query('node--article', {
                filter: {
                    uid: {
                        value: record.get('uid'),
                    }
                }
            }).then((articles) => {
                record.set('articles', articles);
            })
        });
        return record;
    }
});
