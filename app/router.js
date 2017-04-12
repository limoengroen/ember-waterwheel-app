import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('articles', function () {
    this.route('new');
  });
  this.route('article', { path: '/article/:id' });
  this.route('login');
  this.route('users');
  this.route('user', { path: '/user/:id' });
  this.route('tags');
  this.route('tag', { path: '/tag/:id' });
  this.route('files');
  this.route('file', { path: '/file/:id' });
});

export default Router;
