import Ember from 'ember';

/**
 * The article-form component provides an edit form for Articles.
 */
export default Ember.Component.extend({
  // Forward actions fired from the component template along to the route
  actions: {
    save() {
      this.sendAction('save');
    },

    cancel() {
      this.sendAction('cancel');
    },

    delete() {
      this.sendAction('delete');
    }
  }
});
