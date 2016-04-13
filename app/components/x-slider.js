export default Ember.Component.extend({
  didInsertElement: function(){

    $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

  }
});
