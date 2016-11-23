import Ember from 'ember';

const { inject: { service }, isEmpty, RSVP } = Ember;

export default Ember.Service.extend({
    session: service(),
    store: service(),

    load() {
        return new RSVP.Promise((resolve, reject) => {
            let uuid = this.get('session.data.authenticated.uuid');
            if (!isEmpty(uuid)) {
                this.get('store').find('user--user', uuid).then((user) => {
                    this.set('user', user);
                    resolve();
                }, reject);
            }
            else {
                resolve();
            }
        });
    }
});
