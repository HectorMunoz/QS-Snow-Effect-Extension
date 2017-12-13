define( [ "./jquery.flurry.min", "./properties"
],
function ( flurry, props) {

	return {
		definition: props,
		paint: function ($element, layout ) {
			//add your rendering code here

 			var color = layout.props.myColor.color;
 			var character = layout.props.mySymbol;
            var outsideInside = layout.props.outsideInside;
            var inside = 'body', outside = '.qv-object-content-container';
            var whereToSnow = outsideInside? inside: outside;

 			//To reset the effect
			if (typeof $(inside).flurry() === "object")
				$(inside).flurry('destroy');
			if (typeof $(outside).flurry() === "object")
				$(outside).flurry('destroy');

            var flurryOptions = {
				character: character, 
				color:  color,
				frequency: 100,
				height: 600,
				speed: 3000,
				small: 8,
				large: 48,
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
			};
            
			//$('.qv-chart-scrollable').flurry(flurryOptions);
            $( document ).ready(function() {
			     $(whereToSnow).flurry(flurryOptions);
            });
		}
	};

} );

