sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
  "use strict";

  return Controller.extend("ui5.sandbox.controller.MainView", {
    returnFromCallMe: function() {
      return 0;
    },
    conditionalWithinAFunction: function() {
      return true;
    },
    callMe: function() {
      return this.conditionalWithinAFunction() ? this.returnFromCallMe() : 1;
    }
  });
});
