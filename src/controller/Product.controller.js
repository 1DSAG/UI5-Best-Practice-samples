sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
    "use strict";
  
    return Controller.extend("ui5.sandbox.controller.Product", {

        
        onInit : function (){
            this.getOwnerComponent().getRouter().getRoute("product").attachMatched(this._onRouteMatched, this);
         },
         _onRouteMatched: function(oEvent) {
            var oArgs = oEvent.getParameter("arguments");
            this.getView().bindElement({
               path: `/Products(${oArgs.productID})`
            })
         },

          onListItemPressed: function (oEvent) {
            var oItem = oEvent.getSource();
            var oContext = oItem.getBindingContext();
            this.getOwnerComponent()
              .getRouter()
              .navTo("details", {
                id: this.getView().getBindingContext().getObject().ProductID,
                detailId: oContext.getProperty("OrderID")
              });
          }

         

         

    });
  });
  