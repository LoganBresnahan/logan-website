export default Ember.Component.extend({
  didInsertElement: function(){

    $('#first').one('click', function(){
      return false;
    });

    $('.carousel').carousel().click(function(){
      $('.carousel .carousel-item img').css({position: 'absolute'});
      $('.carousel .carousel-item img').css('margin-top', 11+'em');
      $('.carousel .carousel-item img').css('margin-left', 12.5+'em');
      $('div#first').removeAttr('id');
    });

    var width = $(window).width();
    if (width <= 480){
      $('div.row').toggleClass();
      $('div').remove('.carousel');
      $('.container').css('margin-left', 2+'em');
      $('#welcome').css('margin-left', 0+'em');
      $('h3').css('text-align', 'center');
      $('.collection-item').css('font-size', "20px");
      $('.container style').css('margin-left', 0);
      $('.container').css('margin-left', 'auto');
      $('.container').css('margin-right', 'auto');
    };

  }
});
