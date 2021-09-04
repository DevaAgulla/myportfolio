// JavaScript source code



 $(document).ready(function(){


   $(".menu-btn,.navli").click(function(){
       $(".navigation").toggleClass("active");
       $(".menu-btn i").toggleClass("active");



   });

   $(".carousel").owlCarousel({
       margin:20,
       loop:true,
       autoplay:true,
       autoplayTimeOut:1,
       autoplayHoverPause:true,
       responsive:{
             0:{
                items:1,
                nav:false
               },
             600:{
                items:1,
                nav:false
               }

       }
   });

   $(".row-imgs").isotope({
      itemSelector:".col-imgs",
      layoutMode:"fitRows"
   });                                                                                       
       $(".portfolio-up").click(function(){
         $(".portfolio-up").removeClass("active");
         $(this).addClass("active");

          var selector = $(this).attr("data-filter");
          $(".row-imgs").isotope({
                filter:selector
         });
       });
    
      
      
 });