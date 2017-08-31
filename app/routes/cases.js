import Ember from 'ember';

/**
 * A route for editing a specific Article.
 */
export default Ember.Route.extend({

	model(params) {
		return this.store.findAll('case', {
			include: 'field_image'
		});
	}

});