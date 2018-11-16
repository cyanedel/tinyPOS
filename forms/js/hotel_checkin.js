"use strict";
!function ($) {
	console.log($('#nav-header').data("param"));
	// console.log(data);
	$('#customerName').on("blur", function(){
		$('#customerName-print').text($(this).val());
	});
}(jQuery);