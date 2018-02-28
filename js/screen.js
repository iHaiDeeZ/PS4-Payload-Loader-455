(function() {
	function randomShape(array) {
		return array[Math.floor(Math.random() * array.length)];
	}

	function loadingScreen() {
		var cross = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/cross.png";
		var circle = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/circle.png";
		var triangle = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/triangle.png";
		var square = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/square.png";
		var elements = document.querySelectorAll(".ps-icon");
		Array.prototype.forEach.call(elements, function(el, i) {
			setTimeout(function() {
				el.style.animation = "scaling";
				el.style.animationDuration = "1s";
				el.style.animationIterationCount = "1";
				el.style.backgroundImage = "url(" + randomShape([triangle, square, circle, cross]) + ")";
			}, i * 400);
			el.style.animation = "";
			el.style.animationDuration = "";
			el.style.animationIterationCount = "";
		});

		function changeShape() {
			var elements = document.querySelectorAll(".ps-icon");
			Array.prototype.forEach.call(elements, function(el, i) {
				setTimeout(function() {
					el.style.animation = "scaling";
					el.style.animationDuration = "1s";
					el.style.animationIterationCount = "1";
					el.style.backgroundImage = "url(" + randomShape([triangle, square, circle, cross]) + ")";
				}, 100 + i * 300);
				el.style.animation = "";
				el.style.animationDuration = "";
				el.style.animationIterationCount = "";
			});
		}
		setInterval(changeShape, 3000);
	}
	loadingScreen();
})();