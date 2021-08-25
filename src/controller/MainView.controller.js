sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("ui5.sandbox.controller.MainView", {
      onInit: function () {
        ///// Example of simple i18n controller setting //////
        // get ressource bundle
        let oResourceBunde = this.getOwnerComponent()
          .getModel("i18n")
          .getResourceBundle();
        // get text from ressource bundle
        let sButtonText = oResourceBunde.getText(
          "controller.mainView.buttonText"
        );
        // get button
        let oButton = this.byId("controllerI18nText");
        //set text to button
        oButton.setText(sButtonText);

        ///// Example of i18n placeholer usage //////
        // generate two random numbers
        let iRandomNumberOne = Math.floor(Math.random() * (200 - 100) + 100);
        let iRandomNumberTwo = Math.floor(Math.random() * (50 - 1) + 1);
        let sButtonTextWithPlaceholer = oResourceBunde.getText(
          "buttonTextPlaceholer",
          [iRandomNumberOne, iRandomNumberTwo]
        );
        // get button
        let oButtonPlaceholder = this.byId("controllerI18nPlaceholderText");
        //set text to button
        oButtonPlaceholder.setText(sButtonTextWithPlaceholer);

        ///// Example of i18n placeholer usage with xml usage //////
        //creating JSON Model with random number
        var oData = {
          randomNumber: Math.floor(Math.random() * (9999 - 8999) + 8999)
        };
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel, "xmlPlaceholderData");
      }
    });
  }
);
