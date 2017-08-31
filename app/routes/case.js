import Ember from 'ember';

/**
 * A route for editing a specific Article.
 */
export default Ember.Route.extend({

	model(params) {
		return this.store.findRecord('case', params.id, { include: 'field_image,field_tags,field_paragraphs' });
	}

});