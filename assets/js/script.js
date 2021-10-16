$(document).ready(function() {
	/*======Menu-toggle=============*/
	
	$(".burger").on("click", function() {
		$(this).toggleClass("active");
		$(".header__mobile").slideToggle(333);
		if($(window).width() < 547) { 
			$("body").toggleClass('hidden');
		}
	});
	/*==========/menu-toggle=========*/
	/*===============FAQ=================*/
	$(".faq__question").on("click", function() {
		$(this).next().slideToggle(333);
		$(this).toggleClass('active');
	});

/*===============card-mentors___more=================*/
	$(".card-mentors__button-more").on("click", function(event) {
		event.preventDefault();
		$(".card-mentors__more").slideToggle(333);
		$(this).toggleClass('active');
	});

  /*===============card-mentors__info-more=================*/
  $(".card-mentors__btn-more").on("click", function(event) {
    event.preventDefault();
    $(this).next().fadeToggle(333);
    $(this).toggleClass('active');
  });

  /*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;
 
    $("html, body").animate ({
      scrollTop: blockOffset 
    }, 500);
  });
/*=========/smooth scroll=============*/


 /*=============Navbar-langcurrency================*/
 $('*').click(function(e){
     if(!$(e.target).is('.parent')){
        $('.navbar-langcurrency__dropdown').fadeOut(222);
     }
 });
 $(".navbar-lang__icon-drop").on("click", function(event) {
   event.preventDefault();
   $(this).next().fadeIn(222);
 });

 $(".navbar-langcurrency__dropdown a").on("click", function(event) {
     event.preventDefault();
     src = $(this).find('img').attr('src');
     $(this).parent().parent().find('.parent').attr('src', src);
     $(this).parent().fadeOut(222);
  });

 /*===============Card-consultation_more=============*/
 $(".card-consultation__btn-more").on("click", function(event) {
   event.preventDefault();
   $(".card-consultation__item_more").slideToggle(333);
   $(this).toggleClass('active');
 });


	/*======Select-styler=============*/
	$(function() {
		$('select.modif, .input-file').styler();
	});

	$(".my-select").chosen({
        width:"100%",
	});
	/*======/select=============*/


	/*======Slider=============*/
	$('.intro-card__slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		//autoplay: true,
  		prevArrow: $('.intro-card__arrow-prev'),
		nextArrow: $('.intro-card__arrow-next'),
  		dots: true
	});
	/*=============/slider==============*/



	
});
	/*========Owl-slider==========*/
$(window).on({
    load: function() {
      if( $(' .owl-carousel').length > 0 ) {
        $(' .owl-carousel').each(function($i, $owl){
          let $loop = false;
   
      
 

          if(($($owl).find('.country-item').length) > 2 )
          {
          	$loop = true;
          }

          if($(this).hasClass('popular__country') == true)
          {
     			$m = 60;

     			$max = 6;

          $center = false;
          }
          else
          {

          	   $m = 15;
          	   $max = 4;
               if($loop == true)
               {
                 $center = true;
               }
               else
               {
                $center = false;
               }
          }
       
          if( $center == true)
          {
            $($owl).addClass('center');
          }
 


          $($owl).owlCarousel({
            dots: false,
            nav: true,
            center: $center,
            loop: $loop,
            autoWidth:true,
            responsive:{
               0:{
                   items:2,
                   margin: 15
               },
               600:{
                   items:2,
                    margin: $m
               },
               // 1000:{
               //     items:$max,
               //     margin: $m,

               // }
            }
          });



        });
      }
    }
  });

