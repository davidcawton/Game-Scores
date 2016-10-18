import Ember from 'ember';
const { set } = Ember;

export default Ember.Controller.extend({
  resetForm(game) {
    set(this, 'newGameName', '');
  }
});
