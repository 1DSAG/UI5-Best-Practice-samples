sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
    "use strict";
  
    return Controller.extend("ui5.sandbox.controller.Product", {

        
        onInit : function (){
            this.getOwnerComponent().getRouter().getRoute("product").attachMatched(this._onRouteMatched, this);
         },
         _onRouteMatched: function(oEvent) {
            var oArgs = oEvent.getParameter("arguments");
            this.getView().bindElement({
               path: "/Products(" + oArgs.productID + ")"
            })
         },

         onGoToOrderDetails: function (oEvent) {
            var oItem = oEvent.getSource();
            var oContext = oItem.getBindingContext();
            this.getOwnerComponent()
              .getRouter()
              .navTo("details");
          },

          onGoToOrderDetailsId: function (oEvent) {
            var oItem = oEvent.getSource();
            var oContext = oItem.getBindingContext();
            this.getOwnerComponent()
              .getRouter()
              .navTo("product", {
                productID: oContext.getProperty("ProductID"),
                detailId: oContext.getProperty("OrderID")
              });
          }

         

         

    });
  });
  