sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/ui/core/UIComponent',
	'sap/ui/core/Fragment',
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageToast'

], function(jQuery, Controller, UIComponent, Fragment, JSONModel, MessageToast) {
	"use strict";
	var sViewPath;
	var oSoaId;

	return Controller.extend("com.acc.trainingTestDemo.controller.View2", {

		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("View2").attachPatternMatched(this._onObjectMatched, this);
		},
		onExit: function() {
			//Do Nothing
		},
		_onObjectMatched: function(oEvent) {
			var oModel = this.getView().getModel("soaModel");
			var ssoaId = oEvent.getParameter("arguments").soaId;
			sap.ui.getCore().AppContext = new Object();
			sap.ui.getCore().AppContext.soaId = ssoaId;
			var oKeyParams = {
				SoaIdRes: ssoaId
			};
			// this.sViewPath = oModel.createKey("/SOAHeaderDetailsSet", oKeyParams);
			this.sViewPath = oModel.createKey("/SOASearchResultSet", oKeyParams);
			this.getView().bindElement({
				path: this.sViewPath,
				model: "soaModel"
			});

		},
		_getSOAPartnerFunctionsTable: function() {
			this.byId("PartiesTable");
		},
		handleLink1Press: function(oEvent) {
			var msg = 'SOA Search Page',
				msgToast = MessageToast;
			msgToast.show(msg);
		},
		handleLink2Press: function(oEvent) {
			var msg = 'SSP Details Page',
				msgToast = MessageToast;
			msgToast.show(msg);
		},

		onBackPress: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View1");
		}

	});

});