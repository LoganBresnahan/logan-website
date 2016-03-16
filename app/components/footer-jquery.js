this.$(window).bind("load", function() {

       var footerHeight = 0,
           footerTop = 0,
           $footer = this.$(".page-footer");

       positionFooter();

       function positionFooter() {

                footerHeight = $footer.height();
                footerTop = (this.$(window).scrollTop()+this.$(window).height()-footerHeight)+"px";

               if ( (this.$(document.body).height()+footerHeight) < this.$(window).height()) {
                   $footer.css({
                        position: "absolute"
                   }).animate({
                        top: footerTop
                   });
               } else {
                   $footer.css({
                        position: "static"
                   });
               }

       }

       this.$(window)
               .scroll(positionFooter)
               .resize(positionFooter);

});
