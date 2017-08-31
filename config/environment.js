/* eslint-env node */

module.exports = function (environment) {
	let ENV = {
		modulePrefix: 'ember-drupal-waterwheel-app',  // @todo - Change all occurrences of this to your application's name
		environment: environment,
		rootURL: '/',
		locationType: 'auto',
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental Ember features on an Ember canary build
				// e.g. 'with-controller': true
			},
			EXTEND_PROTOTYPES: {
				// Prevent Ember Data from overriding Date.parse.
				Date: false
			}
		},

		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created
			host: 'https://www.cultuurenarchief.nl',
			oauth2TokenEndpoint: '/oauth/token',
			oauth2ClientId: '28c28cee-a8b5-44b8-8b72-fe8a635f5c32'  // @todo - Fill in your client UUID
		},

		fastboot: {
			hostWhitelist: [/^localhost:\d+$/]  // @todo - add your production fastboot domain (fastboot serving only)
		}
	};

	// @todo - map any additional Drupal entities you want to use
	ENV.drupalEntityModels = {
		"paragraph_introduction_case": {entity: 'paragraph', bundle: 'paragraph_introduction_case'},
		"paragraph_image_outside": {entity: 'paragraph', bundle: 'paragraph_image_outside'},
		"paragraph_paragraph": {entity: 'paragraph', bundle: 'paragraph_paragraph'},
		"paragraph_image_inside": {entity: 'paragraph', bundle: 'paragraph_image_inside'},
		"paragraph_quote": {entity: 'paragraph', bundle: 'paragraph_quote'},
		"paragraph_paragraph_numbered": {entity: 'paragraph', bundle: 'paragraph_paragraph_numbered'},
		"paragraph_introduction_article": {entity: 'paragraph', bundle: 'paragraph_introduction_article'},
		"case": {},  // @todo - Map Ember data model to custom Drupal/JSON API type
		"article": {},  // Map 'article' Ember data model to Drupal/JSON API type 'node--article'
		"user": {entity: 'user', bundle: 'user'},  // Map 'user' model to type 'user--user'
		"tag": {entity: 'taxonomy_term', bundle: 'tags'},  // Map 'tag' model to type 'taxonomy-term--tags'
		"file": {entity: 'file', bundle: 'file'}
	};

	if (environment === 'development') {
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'production') {

	}

	return ENV;
};
