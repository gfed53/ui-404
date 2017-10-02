$(function(){
	console.log('Hello world');

	setInterval(animateHeader, 2000);

	animateHeader();

	function animateHeader(){
		let base = 10;
		let choices = [600,750,900];
		let points = [];

		for(let i = 0; i < 4; i++){
			points[i] = choices[Math.floor(Math.random() * choices.length)];
		}

		console.log(points);

		$('#h-404')
		.velocity({
			scaleX: 1.5
		},{
			duration: points[0]
		})
		.velocity({
			scaleY: 1.5
		},{
			duration: points[1]
		})
		.velocity({
			scaleY: 0.75
		},{
			duration: points[2]
		})
		.velocity({
			scaleX: 0.75
		},{
			duration: points[3]
		});
	}
});