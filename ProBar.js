(function (root) {
	"use strict";

	let colorBar = "#2a2a2a";
	let wrapper_color = "#ecf0f1";
	let speedAnimation = 0.3; // in seconds
	let wrapper = "body"; // default value of appending.
	let percent = false; // default 

	////////////////////
	// all functions. //
	////////////////////
	// first class instantiation.
	function proBar(options){
		options = options || {};

		if(options.color) { colorBar = options.color };
		if(options.bgColor) { wrapper_color = options.bgColor };
		if(options.speed) { speedAnimation = options.speed };
		if(options.wrapper) { wrapper = options.wrapper };
		if(options.percent) { percent = options.percent };

		let ProBar = {
          setSpeed,
          setColor,
          setWrapperColor,
          goto: function (percent,time = null) {
          	if(time != null) {setSpeed(time)}
          	move(percent);
          }
        };

		createBar(wrapper);

		// move the bar
		function move(percent){
			$(".progressBar").css({
				width: percent+"%",
				transition : "width "+speedAnimation+"s"
			});
			if(percent){				
				setInterval(function(){
					$(".percent").html(
					    Math.round( $(".progressBar").width() / $('.progressBar').parent().width() * 100 )+"%"
					  );
				},speedAnimation);
			}
		}
		function setSpeed(speed){
			speedAnimation = speed;
		}
		function setpercent(value){
			percent = value;
		}
		function setColor(color){
			colorBar = color;
			$(".progressBar").css({ 
				"background-color" : colorBar
			});
		}
		function setWrapperColor(color){
			wrapper_color = color;
			$("#wrapper-progressBar").css({ 
				"background-color" : wrapper_color
			});
		}
		return ProBar;
	}	

	var createBar = (element) => {
		var Css = `
			.progressBar {
				width : 0px;
				height : 5px;
				background-color: ${colorBar};
			}
			#wrapper-progressBar {
				width : 100%;
				height : 5px;
				background-color : ${wrapper_color}
			}
		`;

		var htmlBar = `<div id="wrapper-progressBar"><div class="progressBar"></div><div class="percent" style="text-align: center;"></div></div>`;
		$(wrapper).prepend(htmlBar);
		$("head").append(`
			<style>
				${Css}
			</style>
			`);
	}
	
	if (window.jQuery) {  
    	console.log("JQuery is installed !");
	    root.ProBar = proBar;
    } else {
        // jQuery is not loaded
        console.warn("No Jquery - add it as CDN");
        return false;
    }
}(this));