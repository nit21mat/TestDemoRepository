sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, Controller, JSONModel){
	"use strict";
	
    return Controller.extend("com.acc.trainingTestDemo.controller.View1", { 
     onInit: function () {
 			// set explored app's demo model on this sample
			// var oModel = new JSONModel(jQuery.sap.getModulePath("com.acc.trainingTestDemo.model", "/Status.json"));
			// this.getView().setModel(oModel);
     }
	});
});