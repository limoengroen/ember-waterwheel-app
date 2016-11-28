import DS from 'ember-data';

export default DS.Model.extend({
    uid: DS.attr(),
    uuid: DS.attr(),
    name: DS.attr(),
    mail: DS.attr(),
    articles: DS.hasMany('node--article') // Can make a one-sided relationship by commenting-out
});
