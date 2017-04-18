sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator'
	], function(jQuery, Controller, JSONModel, Filter, FilterOperator) {
	"use strict";
	
    return Controller.extend("com.acc.trainingTestDemo.controller.View1", { 
     onInit: function () {
 			// set explored app's demo model on this sample
			 /*var oModel = new JSONModel(jQuery.sap.getModulePath("com.acc.trainingTestDemo.model", "/Status.json"));
			 this.getView().setModel(oModel,"status");*/
			 this.oFilterBar = null;
		var sViewId = this.getView().getId();
 
		this.oFilterBar = sap.ui.getCore().byId(sViewId + "--filterBar");
 
		this.oFilterBar.registerFetchData(this.fFetchData);
		this.oFilterBar.registerApplyData(this.fApplyData);
		this.oFilterBar.registerGetFiltersWithValues(this.fGetFiltersWithValues);
 
		// this.fVariantStub();
 
		this.onToggleSearchField();
 
		this.oFilterBar.fireInitialise();
 
		this._sHeader = this.oFilterBar.getHeader();
     },
     
     onToggleSearchField: function(oEvent) {
 
		var oSearchField = this.oFilterBar.getBasicSearch();
		if (!oSearchField) {
			var oBasicSearch = new sap.m.SearchField({
				showSearchButton: false
			});
		} else {
			oSearchField = null;
		}
 
		this.oFilterBar.setBasicSearch(oBasicSearch);
	},
 
	
		onSearch : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.getView().byId("idProductsTable");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
	});
});