sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("ui5.sandbox.controller.Product", {
    onInit: function () {
      this.getOwnerComponent()
        .getRouter()
        .getRoute("productMandatory")
        .attachMatched(this._onRouteMatched, this);
      this.getOwnerComponent()
        .getRouter()
        .getRoute("productQuery")
        .attachMatched(this._onRouteMatched, this);
    },
    _onRouteMatched: function (oEvent) {
      // match the route with query
      var oArgs = oEvent.getParameter("arguments");
      var oQuery = oArgs["?query"];
      if (oQuery !== undefined) {
        var sProductId = oQuery.id;
      } else {
        // match the route with the mandatory parameter
        var oArgs = oEvent.getParameter("arguments");
        var sProductId = oArgs.productID;
      }
      this.getView().bindElement({
        path: `/Products(${sProductId})`,
      });
    },

    onListItemPressed: function (oEvent) {
      var oItem = oEvent.getSource();
      var oContext = oItem.getBindingContext();
      this.getOwnerComponent()
        .getRouter()
        .navTo("details", {
          id: this.getView().getBindingContext().getObject().ProductID,
          detailId: oContext.getProperty("OrderID"),
        });
    },
  });
});
