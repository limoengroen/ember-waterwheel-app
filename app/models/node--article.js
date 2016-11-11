import DS from 'ember-data';

export default DS.Model.extend({
    nid: DS.attr(),
    uuid: DS.attr(),
    created: DS.attr(),
    title: DS.attr(),
    body: DS.attr()
});
