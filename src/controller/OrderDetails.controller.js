sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
    "use strict";
  
    return Controller.extend("ui5.sandbox.controller.Details", {

        
        onInit : function (){
            this.getOwnerComponent().getRouter().getRoute("details").attachMatched(this._onRouteMatched, this);
         },
         _onRouteMatched: function(oEvent) {
            var oArgs = oEvent.getParameter("arguments");
            this.getView().bindElement({
               path: `/Products(${oArgs.id})/Order_Details(OrderID=${oArgs.detailId},ProductID=${oArgs.id})`
            })
         }

    });
  });
  