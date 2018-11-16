"use strict";
!function ($) {
	var params = {"hello" : "world"}
	var formList = {
		"hotel_checkin" : "hotel_checkin",
		"hotel_off"     : "hotel_off"
	}

	function push(s, d){
		$('#nav-header').data("param", d);
		$( "#view-screen" ).load( "forms/screen/"+formList[s]+".html", function() { });
		$( "#view-print" ).load( "forms/print/"+formList[s]+".html", function() { });
		$.getScript( "forms/js/"+formList[s]+".js", function() { });
	}

	push("hotel_checkin", params );
}(jQuery);