sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
  "use strict";

  return Controller.extend("ui5.sandbox.controller.MainView", {

    dataRequest: function(event, number){
      this.getOwnerComponent().getModel().read(`/Products(${number})`)
    }
  });
});
