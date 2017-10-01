$(function(){
	console.log('Hello world');

	animateHeader();

	function animateHeader(){
		$('#h-404')
		.velocity({
			opacity: 1,
			scaleX: 1.5
		},{
			duration: 500
		})
		.velocity({
			scaleY: 1.5
		},{
			duration: 500
		});
	}
});