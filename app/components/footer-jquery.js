$(window).bind("load", function() {

       var footerHeight = 0,
           footerTop = 0,
           $footer = Ember.$(".page-footer");

       positionFooter();

       function positionFooter() {

                footerHeight = $footer.height();
                footerTop = (Ember.$(window).scrollTop()+Ember.$(window).height()-footerHeight)+"px";

               if ( (Ember.$(document.body).height()+footerHeight) < Ember.$(window).height()) {
                   $footer.css({
                        position: "absolute"
                   }).animate({
                        top: footerTop
                   })
               } else {
                   $footer.css({
                        position: "static"
                   })
               }

       }

       Ember.$(window)
               .scroll(positionFooter)
               .resize(positionFooter)

});
