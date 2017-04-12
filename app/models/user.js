import DS from 'ember-data';

export default DS.Model.extend({
  uuid: DS.attr(), // Need to keep this in model for currentUser in session service to work
  name: DS.attr(),
  mail: DS.attr(),
  articles: DS.hasMany('article', { async: true }) // Can make a one-sided relationship by commenting-out
});
