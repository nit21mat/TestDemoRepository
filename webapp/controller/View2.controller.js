sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/ui/core/UIComponent',
	'sap/ui/core/Fragment',
	'sap/ui/model/json/JSONModel'

], function(jQuery, Controller, UIComponent, Fragment, JSONModel) {
	"use strict";
	var sViewPath;
	return Controller.extend("com.acc.trainingTestDemo.controller.View2", {
		
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("View2").attachPatternMatched(this._onObjectMatched, this);

		},
		onAfterRendering : function(oEvent){
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
				path: this.sViewPath
			});
			this.oObjectPageLayout = this.getView().byId("ObjectPageLayout");

		/*	this._getSOAPartnerFunctionsTable().bindItems({
				path: this.sViewPath + "/SOAPartnerFunctionsSet"
			});
			this._getSOABenefitTable().bindItems({
				path: this.sViewPath + "/SOABenefitsSet"
			});
			this._getSOASSPTable().bindItems({
				path: this.sViewPath + "/SSPHeaderDetailsSet"
			});*/

		},
		_getSOAPartnerFunctionsTable: function() {
			return this.byId("PartiesTable");
		},
		_getSOABenefitTable: function() {
			return this.byId("BenefitTable");
		},
		_getSOASSPTable: function() {
			return this.byId("SSPTable");
		}
	});

});