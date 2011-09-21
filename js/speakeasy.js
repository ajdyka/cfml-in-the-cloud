//speakeasy is a simple slide system for presentations

var speakEasy={
	
	initialize: function(){
		//add fragment identifiers to each slide
		
		speakEasy.updateSlideIdentifiers();
		
		//add event listeners to footer elements
		var firstSlideButton=document.querySelector('footer [rel=home]');
		if(firstSlideButton){
			firstSlideButton.addEventListener('click', speakEasy.firstSlide, false);
		}

		var nextSlideButton=document.querySelector('footer [rel=next]');

		if(nextSlideButton){
			nextSlideButton.addEventListener('click', speakEasy.nextSlide, false);
		}
		
		var previousSlideButton=document.querySelector('footer [rel=previous]');

		if(previousSlideButton){
			previousSlideButton.addEventListener('click', speakEasy.previousSlide, false);
		}
	
		var lastSlideButton=document.querySelector('footer [rel=last]');

		if(lastSlideButton){
			lastSlideButton.addEventListener('click', speakEasy.lastSlide, false);
		}
		
		var gotoSlide=document.querySelector('footer input');

		if(gotoSlide){
			gotoSlide.addEventListener('change', speakEasy.gotoSlide, true);
			gotoSlide.addEventListener('input', speakEasy.gotoSlide, true);
		}
		
		document.addEventListener('keydown', speakEasy.changeSlides, true);
		

	},

	changeSlides: function(event){
		
		switch(event.keyCode){
			
			case 39: case 32: //right
			
				speakEasy.nextSlide();
				break;
			case 37: //left

				speakEasy.previousSlide();
				break;
							
			case 38: //up
			
				speakEasy.firstSlide();
				break;
			case 40: //down
			
				speakEasy.lastSlide();
				break;
			
				// if ((event.keyCode>)&&(event.keyCode<))
// 			we could catch numbers here and jump to that slide

			default: 

		
		}
		return false;
	},
	
	updateSlideIdentifiers: function(){
		var slides=document.querySelectorAll('.slide');
		for (var i=0; i < slides.length; i++) {
			// slides[i].id="slide"+[i]
		};
	},
	
	nextSlide: function(){
		var currentSlide=document.querySelector('#current-slide')
		
		if (currentSlide){
			var theNextSlide=currentSlide.nextElementSibling;
			
			if(currentSlide==theNextSlide) {
				return false
			}
			
			if (theNextSlide){
				currentSlide.id="";
				var mostRecentSlide=document.querySelector('#most-recent')
				if (mostRecentSlide){
					mostRecentSlide.id=""
				}
				
				currentSlide.id="most-recent";				
			}
			
			theNextSlide.id="current-slide";
			
		}
		speakEasy.updateControls();
		return true
	},

	previousSlide: function(){
		var currentSlide=document.querySelector('#current-slide')
		if (currentSlide){
			var thePreviousSlide=currentSlide.previousElementSibling;
			
			if(currentSlide==thePreviousSlide) {
				return false
			}
			
			if (thePreviousSlide){
				currentSlide.id="";
				thePreviousSlide.id="current-slide"
				
				var mostRecentSlide=document.querySelector('#most-recent')
				if (mostRecentSlide){
					mostRecentSlide.id=""
				}
				
				currentSlide.id="most-recent";
			}
		}
		
		speakEasy.updateControls();
		return true
		
	},
	
	firstSlide: function(){
		var currentSlide=document.querySelector('#current-slide')
		
		if (currentSlide){
			var theFirstSlide=currentSlide.parentNode.firstElementChild;
			
			if(currentSlide==theFirstSlide) {
				return false
			}
			
			if (theFirstSlide){
				currentSlide.id="";
				theFirstSlide.id="current-slide";
				
				var mostRecentSlide=document.querySelector('#most-recent')
				if (mostRecentSlide){
					mostRecentSlide.id=""
				}
				
				currentSlide.id="most-recent";
			}
		}
		speakEasy.updateControls();
		return true
		
	},
	
	lastSlide: function(){
		var currentSlide=document.querySelector('#current-slide')
		
		if (currentSlide){
			var theLastSlide=currentSlide.parentNode.lastElementChild;
			
			if(currentSlide==theLastSlide) {
				return false
			}
	
			if (theLastSlide){
				currentSlide.id="";
				theLastSlide.id="current-slide";
				
				var mostRecentSlide=document.querySelector('#most-recent')
				if (mostRecentSlide){
					mostRecentSlide.id=""
				}
				
				currentSlide.id="most-recent";
			}
		}
		speakEasy.updateControls();
		return true
		
	},
	
	getHTML: function (){
		//get the document's HTML
		var head=document.querySelector('head');
	},
	
	gotoSlide: function (e){
		//go to the slide
		var gotoSlide=document.querySelector('footer input');
		if (gotoSlide){
			var next=gotoSlide.value;
			
			var currentSlide=document.querySelector('#current-slide')
			

			if (currentSlide){
				var slideArray=document.querySelectorAll('.slide');
				
				var nextSlide=slideArray[parseInt(next)-1]
				
				if(currentSlide==nextSlide) {
					return false
				}
				
				if (nextSlide){
					currentSlide.id="";
					nextSlide.id="current-slide";

					var mostRecentSlide=document.querySelector('#most-recent')
					if (mostRecentSlide){
						mostRecentSlide.id=""
					}

					currentSlide.id="most-recent";
				}
			}
			
		}
		
		return true
		
	},
	
	updateControls: function (){
		//call this to set control states after a slide change
		var gotoSlide=document.querySelector('footer input');
		var slideArray=document.querySelectorAll('.slide');
		var currentSlide=document.querySelector('#current-slide');

		for (var i=0; i < slideArray.length; i++) {
			if(slideArray[i]===currentSlide){
				gotoSlide.value=i+1;
			}
		};
	},
		
}

// document.addEventListener('click', speakEasy.nextSlide, true);


window.addEventListener('load', speakEasy.initialize, true);