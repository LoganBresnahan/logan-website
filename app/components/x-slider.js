export default Ember.Component.extend({
  didInsertElement: function(){

    $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

    var width = $(window).width();
    if (width <= 480){
      $('div.row').toggleClass();
      $('div').remove('.slider');
      $('.container').css('margin-left', 2+'em');
      $('#welcome').css('margin-left', 0+'em');
      $('h3').css('text-align', 'center');
      $('.collection-item').css('font-size', "20px");
      $('.container style').css('margin-left', 0);
      $('.container').css('margin-left', 'auto');
      $('.container').css('margin-right', 'auto');
    }else if(width >= 1550){
      $('.slider .slides').css('margin-left', 5+'em');
      $('.slider .slides li img').css('margin-left', 5+'em');
    };

  }

});
