import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

import libs from './lib/dependencies';
window.libs = libs;

$(document).foundation();


$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['firstPage', 'secondPage'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',

		//Scrolling
		// hybrid:true,
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: false,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#fff', '#fff'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});
$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});


$(document).ready(function() {
	// function getParameterByName(name) {
	//     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	//     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	//     results = regex.exec(location.search);
	//     return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	// }
	//
	// var KualalumpurV = getParameterByName('Kualalumpur');
	//
	// if (KualalumpurV == 'Studio') {
	// 	alert("Hello! I am an alert box!");
	// }

	 var options = {dataAnimationIn: 'fade-in', dataShowDelay: 0};
   var $modal = $('#menu');//define your variables
   var delay = 2000;

   //check if session variable exists.
   //If NOT then call your function.
   if (!sessionStorage.getItem("is_already_opened_once")) {
      modalHandler($modal,delay);//call your function
   }

   function modalHandler($modal,delay){
      $modal.foundation('open');

      setTimeout(function(){
         $modal.foundation('close');
         //set the session_variable
         sessionStorage.setItem('is_already_opened_once', true);
      },delay);
   }

});
$(document).on(
  'open.zf.reveal', '[data-reveal]', function () {
		$('.mleft').css( "background-color", "transparent" );
		$('.mright').css( "background-color", "transparent" );
  }
);
$(document).on(
	'closed.zf.reveal', '[data-reveal]', function () {
		$('.mleft').css( "background-color", "rgba(255, 255, 255, 0.72)" );
		$('.mright').css( "background-color", "rgba(255, 255, 255, 0.72)" );
  }
);
 window.addEventListener('scroll', function(e){
	 if (window.scrollY > 10){

		 $('#logotext').addClass('black');
		 $('#logotext').removeClass('transparent');
	 }
	 else{
		 $('#logotext').addClass('transparent');
		 $('#logotext').removeClass('black');
	 }
 });

// var myEl = document.getElementById('yes');
//
// myEl.addEventListener('click', function() {
// 			localStorage.setItem("KLmenu", false);
// }, false);
// /**
//  * @param String name
//  * @return String
//  */

function getParameterByName(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var menu = getParameterByName('menu');
if (menu){
		// $('body').removeClass('is-reveal-open');
		// $('#menu').removeClass('displayBlock');

		var id = '#menu';
		var modal = new Foundation.Reveal($('#menu'), {animationIn: "none"});
		modal.toggle();
		// modal.close();
		setTimeout(function(){modal.toggle(); }, 100);

}
