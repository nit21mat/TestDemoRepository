sap.ui.define(['sap/uxap/BlockBase'], function(BlockBase) {
	"use strict";

	var GoalsBlock = BlockBase.extend("com.acc.trainingTestDemo.SharedBlocks.BenefitDetails.BenefitBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "com.acc.trainingTestDemo.SharedBlocks.BenefitDetails.BenefitBlock",
					type: "XML"
				},
				Expanded: {
					viewName: "com.acc.trainingTestDemo.SharedBlocks.BenefitDetails.BenefitBlock",
					type: "XML"
				}
			}
		}
	});
	return GoalsBlock;
}, true);