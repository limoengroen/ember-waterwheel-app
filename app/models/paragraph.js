import DS from 'ember-data';

/**
 * Defines the "paragraph" model, which holds a custom Drupal entity.
 */
export default DS.Model.extend({
	field_title: DS.attr(),
	field_link: DS.attr(),
	field_text: DS.attr(),
	revision_id: DS.attr(),
	p_type: Ember.computed(function () {
		return "p-" + Ember.String.dasherize(this.get('_internalModel.modelName'));
	})
});
