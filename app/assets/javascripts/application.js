// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {

	var $request_form = $("#request_form"),
			$request_button = $("#request_button"),
			$submit_button = $('#submit_button'),
			$thankyou_button = $("#thankyou_button"),
			$logo_gif = $("#logo_gif");

	function email_error(){
		$submit_button.css('background', 'rgba(242, 60, 96, .5)');
	}

	$thankyou_button.hide();
	$request_form.hide();
	$request_button.show();

	$request_button.on('click', function(){
		$request_button.hide();
		$request_form.show();
	});

	// $request_form.on('submit', function(event){
	// 	$request_form.hide();
	// 	$thankyou_button.show();
	// });

	$request_form
		.bind('ajax:error', function(){email_error()})
		.bind('ajax:success', function() {
			$request_form.hide();
			$thankyou_button.show();
		});

	$logo_gif.on('mouseover', function(){
		$(this).attr("src", "/assets/CapOnRed.gif");
	});

	// screenshots carousel
	$(function(){
		$("#slides").slidesjs({
			width: 421,
			height: 747,
			play: {
				effect: "slide",
				interval: 3000,
				auto: true,
				pauseOnHover: true
			}
		});
	});

});