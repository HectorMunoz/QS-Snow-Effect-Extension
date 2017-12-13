define( [], function () {
	'use strict';
	// *****************************************************************************
	// Dimensions & Measures
	// *****************************************************************************
	// None
	// *****************************************************************************
	// Appearance section
	// *****************************************************************************
	var mySymbol = {
		ref: "props.mySymbol",
		label: "Symbol",
		type: "string",
		defaultValue : "❄❅❆"
	};	

	var myColor = {
		label:"Color",
		component: "color-picker",
		ref: "props.myColor",
		type: "string",
		defaultValue: "#ffffff"
	};

	var appearanceSection = {
		uses: "settings",
		items: {
			mySettings: {
	            type: "items",
	            label: "Settings",
	            items: {
					mySymbol: mySymbol,
					myColor: myColor
				}
			}
		}
	};
	// *****************************************************************************
	// Main properties panel definition
	// Only what is defined here is returned from properties.js
	// *****************************************************************************
	return {
		type: "items",
		component: "accordion",
		items: {
			appearance: appearanceSection
		}
	};
});