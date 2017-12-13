define([], function () {
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
        defaultValue: "❄❅❆"
    };

    var myColor = {
        label: "Color",
        component: "color-picker",
        ref: "props.myColor",
        type: "string",
        defaultValue: "#ffffff"
    };

    var outsideInside = {
        type: "boolean",
        component: "switch",
        translation: "Let it Snow!",
        ref: "props.outsideInside",
        defaultValue: true,
        options: [{
            value: true,
            label: "outside"
										}, {
            value: false,
            label: "inside"
										}],
        defaultValue: true
    }

    var appearanceSection = {
        uses: "settings",
        items: {
            mySettings: {
                type: "items",
                label: "Settings",
                items: {
                    mySymbol: mySymbol,
                    myColor: myColor,
                    outsideInside: outsideInside
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