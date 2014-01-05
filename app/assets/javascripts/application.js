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
			t;

	function validateEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
	}

	function checkEmail(){
		var email = $("#new_user_email").val();
		validateEmail(email);
		if (validateEmail(email) === true) {
			$submit_button.show();
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
		t = setInterval(checkEmail, 500);
	});

	$request_form.on('submit', function(event){
		clearInterval(t);
		$request_form.hide();
		$thankyou_button.show();
	});

	// activate gif on mouseover
	$logo_gif.on('mouseover', function(){
		$(this).attr("src", "/assets/CapOnRed.gif");
	});

	// screenshots carousel (swipejs)
	window.mySwipe = new Swipe(document.getElementById('phone'),{
		speed: 400,
		auto: 3000,
		continuous: true,
		disableScroll: false,
		stopPropagation: true
	});

});