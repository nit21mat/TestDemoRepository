sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/ui/core/UIComponent',
	'sap/ui/core/Fragment',
	'sap/ui/model/json/JSONModel'

], function(jQuery, Controller, UIComponent, Fragment, JSONModel) {
	"use strict";
	return Controller.extend("com.acc.trainingTestDemo.controller.View2", {

		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("View2").attachPatternMatched(this._onObjectMatched, this);
		},

		onExit: function() {
			//Do Nothing
		},
		_onObjectMatched: function(oEvent) {
			var oModel = this.getView().getModel();
			var ssoaId = oEvent.getParameter("arguments").soaId;
			var oKeyParams = {
				Soaid: ssoaId
			};
			var sViewPath = oModel.createKey("/SOAHeaderDetailsSet", oKeyParams);
			this.getView().bindElement({
				path: sViewPath
			});
			var oItemTemplate; // To be defined
			this._getSOAPartnerFunctionsTable().bindItems({
				path: sViewPath + "/SOAPartnerFunctionsSet",
				template: oItemTemplate,
				templateShareable: false
			});
		},
		_getSOAPartnerFunctionsTable: function() {
			return this.byId("ssptableid");
		}
	});

});