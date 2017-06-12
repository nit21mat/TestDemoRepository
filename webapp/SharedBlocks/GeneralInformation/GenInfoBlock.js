sap.ui.define(['sap/uxap/BlockBase'], function(BlockBase) {
	"use strict";

	var GenInfoBlock = BlockBase.extend("com.acc.trainingTestDemo.SharedBlocks.GeneralInformation.GenInfoBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "com.acc.trainingTestDemo.SharedBlocks.GeneralInformation.GenInfoBlock",
					type: "XML"
				},
				Expanded: {
					viewName: "com.acc.trainingTestDemo.GenInfoBlock",
					type: "XML"
				}
			}
		}

	});
	return GenInfoBlock;
}, true);