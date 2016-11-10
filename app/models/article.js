import DS from 'ember-data';

export default DS.Model.extend({
    nid: DS.attr(),
    title: DS.attr(),
    summary: DS.attr(),
    body: DS.attr(),
    image: DS.attr(),
    tags: DS.attr()
});
