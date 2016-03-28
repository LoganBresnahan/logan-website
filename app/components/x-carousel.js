// export default Ember.Component.extend({
//   _initializeCarousel: function() {
//     $('.carousel').carousel();
//  }.on('didInsertElement')
// });

export default Ember.Component.extend({
  didInsertElement: function(){
    $('.carousel').carousel();
    $('.carousel .carousel-item img').click(function() {
      $('.carousel .carousel-item img').css({position: 'absolute'});
      $('.carousel .carousel-item img').css('margin-top', 13.8+'em');
      $('.carousel .carousel-item img').css('margin-left', 15+'em');
    });
  }
});
