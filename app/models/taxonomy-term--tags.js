import DS from 'ember-data';

export default DS.Model.extend({
    tid: DS.attr('number'),
    uuid: DS.attr('string'),
    name: DS.attr('string'),
    description: DS.attr('string'),
    articles: DS.hasMany('node--article')
});
