import DS from 'ember-data';

export default DS.Model.extend({
    nid: DS.attr(),
    uuid: DS.attr(),
    created: DS.attr(),
    createdDate: Ember.computed('created', function() {
        let date = new Date(this.get('created') * 1000);
        return date.toString();
    }),
    title: DS.attr(),
    body: DS.attr()
});
