sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("ui5.sandbox.controller.MainView", {
      onInit: function () {
        ///// Example of simple i18n controller setting //////
        // get ressource bundle
        const resourceBunde = this.getOwnerComponent()
          .getModel("i18n")
          .getResourceBundle();
        // get text from ressource bundle
        let sButtonText = resourceBunde.getText(
          "controller.mainView.buttonText"
        );
        // get button
        const button = this.byId("controllerI18nText");
        //set text to button
        button.setText(sButtonText);

        ///// Example of i18n placeholer usage //////
        // generate two random numbers
        let randomNumberOne = Math.floor(Math.random() * (200 - 100) + 100);
        let randomNumberTwo = Math.floor(Math.random() * (50 - 1) + 1);
        let buttonTextWithPlaceholer = resourceBunde.getText(
          "controller.mainView.buttonTextPlaceholer",
          [randomNumberOne, randomNumberTwo]
        );
        // get button
        const buttonPlaceholder = this.byId("controllerI18nPlaceholderText");
        //set text to button
        buttonPlaceholder.setText(buttonTextWithPlaceholer);

        ///// Example of i18n placeholer usage with xml usage //////
        //creating JSON Model with random number
        let data = {
          randomNumber: Math.floor(Math.random() * (9999 - 8999) + 8999)
        };
        let jsonModel = new JSONModel(data);
        this.getView().setModel(jsonModel, "xmlPlaceholderData");
      }
    });
  }
);
