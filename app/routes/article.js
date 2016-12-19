import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('node--article', params.uuid, {include: 'uid'});
  },

  setupController(controller, model) {
    controller.set('model', model);

    this.store.findAll('taxonomy-term--tag').then(tags => {
      controller.set('tags', tags);
    });
  }
});
