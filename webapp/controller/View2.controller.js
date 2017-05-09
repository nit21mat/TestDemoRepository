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
	return Controller.extend("com.acc.trainingTestDemo.controller.View2", {

		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("View2").attachPatternMatched(this._onObjectMatched, this);
			alert(this.sViewPath);
		},
		onAfterRendering: function(oEvent) {
			/*		this._getSOAPartnerFunctionsTable().bindItems({
						path: this.sViewPath + "/SOAPartnerFunctionsSet"
					});
					this._getSOABenefitTable().bindItems({
						path: this.sViewPath + "/SOABenefitsSet"
					});
					this._getSOASSPTable().bindItems({
						path: this.sViewPath + "/SSPHeaderDetailsSet"
					});*/
		},
		onExit: function() {
			//Do Nothing
		},
		_onObjectMatched: function(oEvent) {
			var oModel = this.getView().getModel("soaModel");
			var ssoaId = oEvent.getParameter("arguments").soaId;
			var oKeyParams = {
				Soaid: ssoaId
			};
			this.sViewPath = oModel.createKey("/SOAHeaderDetailsSet", oKeyParams);
			this.getView().bindElement({
				path: this.sViewPath,
				model: "soaModel"
			});
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