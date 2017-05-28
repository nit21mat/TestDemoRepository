sap.ui.define(['sap/uxap/BlockBase'], function(BlockBase) {
	"use strict";

	var GoalsBlock = BlockBase.extend("com.acc.trainingTestDemo.SharedBlocks.SSPDetails.SSPBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "com.acc.trainingTestDemo.SharedBlocks.SSPDetails.SSPBlock",
					type: "XML"
				},
				Expanded: {
					viewName: "com.acc.trainingTestDemo.SSPDetails.SSPBlock",
					type: "XML"
				}
			}
		}

	});
	return GoalsBlock;
}, true);