import Ember from 'ember';

const { inject: { service }, RSVP : { Promise }, Service, isEmpty } = Ember;

export default Service.extend({
    session: service('session'),
    store: service(),

    loadCurrentUser() {
        return new Promise((resolve, reject) => {
            const uid = this.get('session.data.authenticated.uid');
            if (!isEmpty(uid)) {
//                debugger;
                this.get('store').find('user--user', uid).then((account) => {
                    this.set('account', account);
                    resolve();
                }, reject);
            }
            else {
                resolve();
            }
        });
    }
});
