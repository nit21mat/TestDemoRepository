  	sap.ui.define([
	'sap/uxap/BlockBase',
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/ui/core/UIComponent',
	'sap/ui/core/Fragment',
	'sap/ui/model/json/JSONModel'

], function(jQuery, Controller, UIComponent, Fragment, JSONModel, BlockBase) {
	"use strict";

	
//	return Controller.extend("com.acc.trainingTestDemo.controller.PartiesBlock", {
	
	var PartiesBlock = BlockBase.extend("com.acc.trainingTestDemo.SharedBlocks.PartiesInvolved.PartiesBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "com.acc.trainingTestDemo.SharedBlocks.PartiesInvolved.PartiesBlock",
					type: "XML"
				},
				Expanded: {
					viewName: "com.acc.trainingTestDemo.SharedBlocks.PartiesInvolved.PartiesBlock",
					type: "XML"
				}
			}
		}
	});
//	return Controller.extend("com.acc.trainingTestDemo.SharedBlocks.PartiesInvolved.PartiesBlock", {

    return PartiesBlock, {

		onInit: function(oEvent) {
			var oModel = this.getView().getModel();
			var ssoaId = oEvent.getParameter("arguments").soaId;
			var oKeyParams = {
				Soaid: ssoaId
			};	
			var sViewPath = oModel.createKey("/SOAPartnerFunctionsSet", oKeyParams);
			this.getView().bindElement({
				path: sViewPath
			});
		//	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		//	oRouter.getRoute("View2").attachPatternMatched(this._onObjectMatched, this);
		}
	};
	});
