sap.ui.define([
                'jquery.sap.global',
                'sap/ui/core/mvc/Controller',
                'sap/ui/core/UIComponent',
                'sap/ui/core/Fragment',
                'sap/ui/model/json/JSONModel'
], function(jQuery, Controller, UIComponent, Fragment, JSONModel) {
                "use strict";
                var soaId;
                return Controller.extend("com.acc.trainingTestDemo.controller.View2", {

                                onInit: function() {
                                                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                                                oRouter.getRoute("View2").attachPatternMatched(this._onObjectMatched, this);
                                                // set data model on view

                                },

                                onExit: function() {
                                                //Do Nothing
                                },
                                _onObjectMatched: function(oEvent) {
                                                this.getView().bindElement({
                                                                path: "/" + oEvent.getParameter("arguments").soaId,
                                                                model: ""
                                                });
                                                var oData = {
                                                                soaHeader: {
                                                                                soaId: oEvent.getParameter("arguments").soaId
                                                                }
                                                };
                                                var oModel = new JSONModel(oData);
                                                this.getView().setModel(oModel);
                                }

                });

});
