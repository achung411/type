var setScreenDimensions = function() {
	var windowHeight = window.outerHeight;
	var windowWidth = window.outerWidth;
	console.log("Current window dimensions: ", windowHeight, "x", windowWidth);
	$('div#display').css('height', windowHeight);
};
var getMessage = function() {
	return $('#message').val();
};
var submitMessage = function(message) {
	console.log('Submitting message: ', message);
	$('#shownMessage').html(message);
	hideForm();
};
var showForm = function() {
	$('form').removeClass('hidden');
	$('#display').addClass('hidden');
};
var hideForm = function() {
	$('form').addClass('hidden');
	$('#display').removeClass('hidden');
};

$(document).ready(function() {
	var msg = 'Hello.';

	window.addEventListener('resize', function() {
		setScreenDimensions();
	}, true);
	$('#showform').click(function() {
		showForm();
	});
	$('#hideform').click(function() {
		hideForm();
	});
	$('div#display').click(function() {
		showForm();
		$('#message').select();
	});
	$('#message').blur(function() {
		var messageText = getMessage();
		submitMessage(messageText);
	});
	$('#submitform').click(function(e) {
		e.preventDefault();
		submitMessage();
	});

	setScreenDimensions();
	submitMessage(msg);
});