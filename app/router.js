import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('projects');
  this.route('blog');
  this.route('entry1');
  this.route('entry2');
  this.route('entry3');
  this.route('entry4');
  this.route('entry5');
  this.route('entry6');
});

export default Router;
