import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('games', { path: '/'}, function() {
    this.route('scores', { path: '/:game_id'});
  });
});

export default Router;
