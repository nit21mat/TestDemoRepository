sap.ui.define([
	'jquery.sap.global',
	"sap/ui/core/UIComponent",
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel'
], function(jQuery, Fragment, Controller, JSONModel, UIComponent) {
	"use strict";

	return Controller.extend("com.acc.trainingTestDemo.controller.View2", {

		onInit: function() {
			this._getRouter()
				.attachRouteMatched(this.onRouteMatched, this);
		},

		onExit: function() {
			//Do Nothing
		},
		_getRouter: function() {
			return UIComponent.getRouterFor(this);
		}

	});

});