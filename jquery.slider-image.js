jQuery.fn.imageResize = function () {

	  var image = this;
	  var orginalWidth = this.width();
	  	this.next().append("<label>Slider Image</label><div id='image-slider'></div>");
	  	$( "#image-slider" ).slider();
		$("#image-slider").slider({
		    value: 0,
		    min: 0,
		    max: 100,
		    slide: function (event, ui) {
		        var fraction = (1 + ui.value / 100),
		            newWidth = orginalWidth * fraction;
		        image.width(newWidth);
		    }
		});
};



jQuery.fn.imageRotation = function () {

	  var image = this;
	  var orginalWidth = this.width();
	  	this.next().append("<label>Slider Rotations</label><div id='image-rotation'></div>");
	  	$( "#image-rotation" ).slider();
		$("#image-rotation").slider({
		    value: 0,
		    min: 0,
		    max: 100,
		    slide: function (event, ui) {
		    	ui.value = ui.value*3.60;

				image.css({'transform':'rotate('+ui.value+'deg)','-ms-transform':'rotate('+ui.value+'deg)', '-webkit-transform':'rotate('+ui.value+'deg)'});
		        //image.width(newWidth);
		    }
		});
};

$(document).ready(function(){
	  $( "#image").imageResize();	 
	  $( "#image").imageRotation();	
});





// $(document).ready(function(){
// 	  $( "#image" ).draggable();	
// 	  $( "#slider" ).slider();
// 	  var orginalWidth = $("#image").width();

// 		$("#infoSlider").text(orginalWidth + ', 100%');

// 		$("#slider").slider({
// 		    value: 0,
// 		    min: 0,
// 		    max: 100,
// 		    slide: function (event, ui) {
// 		        var fraction = (1 + ui.value / 100),
// 		            newWidth = orginalWidth * fraction;
		  

// 		        $("#image").width(newWidth);
// 		    }
// 		});
// });

