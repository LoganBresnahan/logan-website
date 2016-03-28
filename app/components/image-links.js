export default Ember.View.extend({
  didInsertElement: function(){
    window.onresize = function(){
      var img = document.getElementById('octocat');
      img.style.width = "100%";
    };
  }
});
