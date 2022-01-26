sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("ui5.sandbox.controller.MainView", {
    dataRequest: function (event, number) {
      this.getOwnerComponent().getModel().read(`/Products(${number})`);
    },

    onNavToSettingsPress: function () {
      this.getOwnerComponent().getRouter().navTo("settings");
    },

    onListItemPressed: function (oEvent) {
      var oItem = oEvent.getSource();
      var oContext = oItem.getBindingContext();
      this.getOwnerComponent()
        .getRouter()
        .navTo("productMandatory", {
          productID: oContext.getProperty("ProductID"),
        });
    }
  });
});
