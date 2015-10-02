$(document).ready(function() {
	//select h2 elements 
	$('#faqs h2').toggle(
		function() {
			$(this).toggleClass('minus');
			$(this).next().show();
		},
		function() {
			$(this).toggleClass('minus');
			$(this).next().hide();
		}
	)
	
}
)