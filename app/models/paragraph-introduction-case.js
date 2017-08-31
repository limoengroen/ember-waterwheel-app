import Paragraph from './paragraph';

/**
 * Defines the "paragraph" model, which holds a custom Drupal entity.
 */
export default Paragraph.extend({
	field_title: DS.attr(),
	field_link: DS.attr(),
	field_text: DS.attr()
});
