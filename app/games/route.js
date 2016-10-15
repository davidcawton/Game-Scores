import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch('http://game-scores.herokuapp.com/games')
    .then((response) => response.json())
    .then((response) => response.data);

  }
});
