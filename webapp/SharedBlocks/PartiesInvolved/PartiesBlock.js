sap.ui.define([
	'sap/uxap/BlockBase'
], function(BlockBase) {
	"use strict";

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
	return PartiesBlock;
}, true);