sap.ui.define([
	'jquery.sap.global',
	"sap/ui/core/UIComponent",
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel'
], function(jQuery, Fragment, Controller, JSONModel, UIComponent) {
	"use strict";
	var soaId;
	return Controller.extend("com.acc.trainingTestDemo.controller.View2", {

		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("View2").attachPatternMatched(this._onObjectMatched, this);
		},

		onExit: function() {
			//Do Nothing
		},
		_onObjectMatched: function(oEvent) {
			this.getView().bindElement({
				path: "/" + oEvent.getParameter("arguments").soaId,
				model: ""
			});
		}

	});

});