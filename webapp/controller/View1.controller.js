sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator',
	"sap/ui/core/format/DateFormat"
], function(jQuery, Controller, JSONModel, Filter, FilterOperator, DateFormat) {
	"use strict";

	return Controller.extend("com.acc.trainingTestDemo.controller.View1", {
		mFilterItems: {
			soaId: "soaId",
			applicant: "applicant",
			status: "status",
			EffDates: "EffDates"
		},
		onInit: function() {
			var oFilterBar;
			//	var sViewId = this.getView().getId();

			oFilterBar = this.byId("soaFilterBar");

			oFilterBar.registerFetchData(this.fFetchData);
			oFilterBar.registerApplyData(this.fApplyData);
			oFilterBar.registerGetFiltersWithValues(this.fGetFiltersWithValues);

			//	this.fVariantStub();

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

		onSearch: function() {
			this._filterTable(this._createFilters(this._getFilterBar()));
		},
		_filterTable: function(aFilters) {
			/*TODO:needs to be refactored during retrofit, try to replace 
  	  			bindAggregation with filter on rows binding*/
		/*	this._getSoaTable().bindAggregation("items", {
				path: '/SOASearchResultSet',
				filters: aFilters
			});*/
			var oItemBinding = this._getSoaTable().getBinding("items");
			oItemBinding.filter(aFilters);
			
		},
		_getSoaTable: function() {
			return this.byId("soaTable");
		},
		/**
		 * read the filter values set by the users
		 * and create filters
		 * @private
		 * @param oFilterBar: The Filter Bar embedded in the view.
		 * @return - the filter items table with values
		 */
		_createFilters: function(oFilterBar) {
			var aItems = oFilterBar.getAllFilterItems(true),
				iItems = aItems.length,
				aFilters = [],
				aItemFilters,
				i;
			for (i = 0; i < iItems; i++) {
				aItemFilters = this._getFiltersForItem(aItems[i], oFilterBar);
				if (aItemFilters) {
					aFilters = aFilters.concat(aItemFilters);
				}
			}
			return aFilters;
		},
		/**
		 * Get the filter values of every filter items.
		 * @private
		 * @param oItem: The current filter bar item being iterated
		 * @param oFilterBar: The FilterBar embedded in the view
		 * @return: Filter bar item value 
		 */
		_getFiltersForItem: function(oItem, oFilterBar) {
			var sName = oItem.getName(),
				oStartDate,
				oEndDate,
				oControl = oFilterBar.determineControlByFilterItem(oItem);

			if (sName === this.mFilterItems.soaId && oControl.getValue()) {
				return [new Filter("SoaIdRes", FilterOperator.Contains, oControl.getValue())];
			} else if (sName === this.mFilterItems.applicant && oControl.getValue()) {
				return [new Filter("ApplicantRes", FilterOperator.Contains, oControl.getValue())];
			} else if (sName === this.mFilterItems.status && oControl.getValue()) {
				return [new Filter("StatusRes", FilterOperator.Contains, oControl.getValue())];
			} else if (sName === this.mFilterItems.EffDates && oControl.getDateValue() && oControl.getSecondDateValue()) {
				oStartDate = this._fnParseDateFormat(oControl.getDateValue());
				oEndDate = this._fnParseDateFormat(oControl.getSecondDateValue());
				return [new Filter("ValidFromRes", FilterOperator.BT, oStartDate),
					new Filter("ValidToRes", FilterOperator.BT, oEndDate)
				];
			} else {
				return null;
			}
		},
		/**
		 * Returns the Filter Bar ID
		 * @private
		 * @return: SOA Table filter bar control Id
		 */
		_getFilterBar: function() {
			return this.byId("soaFilterBar");
		},
		/**
		 * Convert the filter date to local timezone format
		 * @private
		 * @param oDate: Filter date given by user
		 * @return: parsed filter item date value
		 */
		_fnParseDateFormat: function(oDate) {
			var oDateFormat = DateFormat.getDateInstance();
			return oDateFormat.parse(oDateFormat.format(oDate), true);
		}

	});
});