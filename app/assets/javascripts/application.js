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
			$logo_gif = $("#logo_gif"),
			$email_field = $("#new_user_email"),
			$phone_container = $("#phone_container"),
			email,
			t;

	function checkZindex(){
		var main_container = document.getElementById('main_container');
		return getComputedStyle(main_container).getPropertyValue('z-index');
	}

	function validateEmail(email) {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
	}

	function checkEmail(){
		email = $email_field.val();
		button = $submit_button.css('display');
		if (validateEmail(email) === true) {
			$submit_button.animate({marginLeft: -200, opacity:"show"}, 500);
		} else if (validateEmail(email) === false && button == 'block') {
			$submit_button.animate({marginLeft: -195, opacity:"hide"}, 500);
		} else {
			$submit_button.hide();
		}
	}

	function checkEmailMobile(){
		email = $email_field.val();
		button = $submit_button.css('display');
		if (validateEmail(email) === true) {
			$phone_container.animate({marginTop: '120px', opacity: 1}, 200);
			$submit_button.fadeIn(500);
		} else if (validateEmail(email) === false && button == 'block') {
			$phone_container.animate({marginTop: '0', opacity: 1}, 600);
			$submit_button.fadeOut(300);
		} else {
			$submit_button.hide();
		}
	}


	$thankyou_button.hide();
	$request_form.hide();
	$submit_button.hide();
	$request_button.show();

	$request_button.on('click', function(){
		$request_button.hide();
		$request_form.show();
		if (checkZindex() < 2) {
			t = setInterval(checkEmailMobile, 500);
		} else {
			t = setInterval(checkEmail, 500);
		}
	});

	$request_form.on('submit', function(event){
		clearInterval(t);
		$request_form.hide();
		$thankyou_button.show();
	});

	// activate gif on hover
	$logo_gif.on('mouseover', function(){
		$(this).attr("src", "/assets/CapOnRed.gif");
	});

	// image carousel
	window.mySwipe = new Swipe(document.getElementById('phone'),{
		speed: 400,
		auto: 3000,
		continuous: true,
		disableScroll: false,
		stopPropagation: true
	});

});