define( [ "./jquery.flurry.min", "./properties"
],
function ( flurry, props) {

	return {
		definition: props,
		paint: function ($element, layout ) {
			//add your rendering code here

 			var color = layout.props.myColor.color;
 			var character = layout.props.mySymbol;

 			//To reset the effect
			if (typeof $('body').flurry() === "object")
				$('body').flurry('destroy');

			$('body').flurry({
				character: character, 
				color:  color,
				frequency: 100,
				height: 600,
				speed: 3000,
				small: 28,
				large: 68,
				wind: 40,
				windVariance: 20,
				rotation: 90,
				rotationVariance: 180,
				startOpacity: 1,
				endOpacity: 0.5 ,
				opacityEasing: "cubic-bezier(1,.3,.6,.74)",
				blur: true,
				overflow: "hidden",
				zIndex: 9999
			}
			);
		}
	};

} );

