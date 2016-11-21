import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(/*AuthenticatedRouteMixin,*/ {
    authorizer: 'authorizer:custom',

    model(params) {
        return this.store.createRecord('node--article', params);
    },

    actions: {
        save(record) {
            let body = {
                value: record.get('body__value'),
                summary: record.get('body__summary'),
                format: 'plain_text'
            };
/*            let body = record.get('body');
            body.format = 'plain_text';
            record.set('body', body);*/
            record.set('body', body);

            console.log(record.get('body'));
//            debugger;
            record.save()
                .then(() => this.transitionTo('articles'))
                .catch((reason) => console.log("Save failed: " + reason));
        },
        willTransition() {
            this._super(...arguments);
            const record = this.controller.get('model');
            record.rollbackAttributes();
        }
    }
});
