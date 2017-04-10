# Ember-Drupal Waterwheel App

This is a sample app for demonstrating the integration of Ember and Drupal using JSON API. It demonstrates listing 
Article nodes, users, and taxonomy terms from the Drupal backend, in addition to editing, creating, and 
deleting Articles.

Fastboot is supported, for server-side rendering of the application.

**Also check out our Ember addon at [ember-drupal-waterwheel](https://github.com/acquia/ember-drupal-waterwheel),
which can help you easily add Drupal integration to a new or existing Ember app.**

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/) (only required for tests)

## Installation

* `git clone https://github.com/acquia/ember-drupal-waterwheel-app` this repository
* `cd ember-drupal-waterwheel-app`
* `npm install`
* `bower install`

## Drupal Site Configuration

1. Your Drupal backend needs to have the JSON API and Simple OAuth contrib modules enabled. From your Drupal root, run:
    * `composer require "drupal/jsonapi" "drupal/simple_oauth:~2.0" -o`
    * `drush en -y jsonapi simple_oauth`

1. Generate encryption keys for OAuth:
    * `openssl genrsa -out private.key 2048`
    * `openssl rsa -in private.key -pubout > public.key`

1. On your Drupal site, browse to `/admin/config/people/simple_oauth` and enter the full paths to both encryption keys 
in the Simple OAuth Settings.

1. Browse to `/admin/config/people/simple_oauth/oauth2_client/add` to create OAuth client settings for this app. For 
"Label", specify something like "Ember Waterwheel app". Leave all other settings at their defaults and click "Save". 
Copy the UUID from the list of OAuth clients and paste it into this application's `config/environment.js` at the location 
marked with a @todo. Also fill in the Drupal site's URL in that same file.

1. CORS needs to be enabled on the Drupal site. Place/modify the following lines at the bottom of your
`sites/default/services.yml` file (adjust path as needed for a Drupal multisite install):

```yaml
cors.config:
  enabled: true
  # Specify allowed headers, like 'x-allowed-header'.
  allowedHeaders: ['Content-Type', 'Access-Control-Allow-Headers', 'Authorization']
  # Specify allowed request methods, specify ['*'] to allow all possible ones.
  allowedMethods: ['POST', 'GET', 'OPTIONS', 'PATCH', 'DELETE']
  # Configure requests allowed from specific origins.
  allowedOrigins: ['*']
  # Sets the Access-Control-Expose-Headers header.
  exposedHeaders: true
  # Sets the Access-Control-Max-Age header.
  maxAge: false
  # Sets the Access-Control-Allow-Credentials header.
  supportsCredentials: true
```

Ideally, the `allowedOrigins` setting should be changed to a list of permitted origins from which
your app will be served, such as:
```yaml
  allowedOrigins: ['localhost:4200', 'localhost:3000', 'yourbackendsite.com']
```

## Running / Development

You can run the application using the Ember CLI:
* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

or using Fastboot (server-side rendering):
* `ember fastboot --serve-assets`
* Visit your app at [http://localhost:3000](http://localhost:3000).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Caveats

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* [Ember Data](https://github.com/emberjs/data)
* [Drupal JSON API module](http://https://www.drupal.org/project/jsonapi/)
* [ember-drupal-waterwheel](https://github.com/acquia/ember-drupal-waterwheel)
* [JSON API specification](http://jsonapi.org/format/)
* Development Browser Extensions
  * [Ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [Ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
