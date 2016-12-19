import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  nid: DS.attr(),
  uuid: DS.attr(),
  status: DS.attr('boolean'),
  created: DS.attr(),
  createdDate: Ember.computed('created', function () {
    let date = new Date(this.get('created') * 1000);
    return date.toString();
  }),
  uid: DS.belongsTo('user--user'),
  title: DS.attr(),
  body: DS.attr(),
  field_tags: DS.hasMany('taxonomy-term--tag'),
});
