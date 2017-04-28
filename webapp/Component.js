sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/acc/trainingTestDemo/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.acc.trainingTestDemo.Component", {

		metadata: {
			manifest: "json",
			config: {
				sample: {
					stretch: true,
					files: [
						"./SharedBlocks/BenefitDetails/BenefitBlock.js",
						"./SharedBlocks/BenefitDetails/BenefitBlock.view.xml",
						"./SharedBlocks/PartiesInvolved/PartiesBlock.js",
						"./SharedBlocks/PartiesInvolved/PartiesBlock.view.xml",
						"./SharedBlocks/SSPDetails/SSPBlock.js",
						"./SharedBlocks/SSPDetails/SSPBlock.view.xml"
					]
				}
			}
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// create the views based on the url/hash
			this.getRouter().initialize();
		}
	});
});