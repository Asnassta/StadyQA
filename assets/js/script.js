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
  		arrows: false,
  		dots: true
	});
	/*=============/slider==============*/
	
});