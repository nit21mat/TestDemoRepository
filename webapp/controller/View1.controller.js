sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator'
], function(jQuery, Controller, JSONModel, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("com.acc.trainingTestDemo.controller.View1", {
		onInit: function() {
			// set explored app's demo model on this sample
			/*var oModel = new JSONModel(jQuery.sap.getModulePath("com.acc.trainingTestDemo.model", "/Status.json"));
			this.getView().setModel(oModel,"status");*/
			var oFilterBar = this.byId("filterBar");
			var sViewId = this.getView().getId();

			// this.oFilterBar = sap.ui.getCore().byId(sViewId + "--filterBar");

			oFilterBar.registerFetchData(this.fFetchData);
			oFilterBar.registerApplyData(this.fApplyData);
			oFilterBar.registerGetFiltersWithValues(this.fGetFiltersWithValues);

			this.fVariantStub();

			//this.onToggleSearchField();

			oFilterBar.fireInitialise();

			this._sHeader = oFilterBar.getHeader();
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
		fFetchData: function() {

			var sGroupName;
			var oJsonParam;
			var oJsonData = [];

			var oItems = this.getAllFilterItems(true);
			for (var i = 0; i < oItems.length; i++) {
				oJsonParam = {};
				sGroupName = null;
				if (oItems[i].getGroupName) {
					sGroupName = oItems[i].getGroupName();
					oJsonParam.group_name = sGroupName;
				}

				oJsonParam.name = oItems[i].getName();

				var oControl = this.determineControlByFilterItem(oItems[i]);
				if (oControl) {
					oJsonParam.value = oControl.getValue();
					oJsonData.push(oJsonParam);
				}
			}

			return oJsonData;
		},
		fApplyData: function(oJsonData) {

			var sGroupName;

			for (var i = 0; i < oJsonData.length; i++) {

				sGroupName = null;

				if (oJsonData[i].group_name) {
					sGroupName = oJsonData[i].group_name;
				}

				var oControl = this.determineControlByName(oJsonData[i].name, sGroupName);
				if (oControl) {
					oControl.setValue(oJsonData[i].value);
				}
			}
		},
		fGetFiltersWithValues: function() {
			var i;
			var oControl;
			var aFilters = this.getFilterGroupItems();

			var aFiltersWithValue = [];

			for (i = 0; i < aFilters.length; i++) {
				oControl = this.determineControlByFilterItem(aFilters[i]);
				if (oControl && oControl.getValue && oControl.getValue()) {
					aFiltersWithValue.push(aFilters[i]);
				}
			}

			return aFiltersWithValue;
		},
		
		fVariantStub: function() {
		var oVM = this.oFilterBar._oVariantManagement;
		oVM.initialise = function() {
			this.fireEvent("initialise");
			this._setStandardVariant();
			this._setSelectedVariant();
		};
		},

		onSearch: function(oEvent, oFilterBar) {
           var oItems = oFilterBar.getAllFilterItems(true);
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