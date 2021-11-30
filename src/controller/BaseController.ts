import Controller from "sap/ui/core/mvc/Controller";
import History from "sap/ui/core/routing/History";
import Router from "sap/ui/core/routing/Router";
import UIComponent from "sap/ui/core/UIComponent";
import Model from "sap/ui/model/Model";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
/**
 * @namespace ui5.typescript.helloworld.controller
 */
export default class BaseController extends Controller {
	public getRouter(): Router {
		return (this.getOwnerComponent() as UIComponent).getRouter();
	}
	public getModel(name?: string): Model {
		return this.getView().getModel(name);
	}
	public setModel(model: Model, name?: string): void {
		this.getView().setModel(model, name);
	}
	public getResourceBundle(): ResourceBundle {
		return (((this.getOwnerComponent() as UIComponent).getModel("i18n") as ResourceModel).getResourceBundle() as ResourceBundle);
	}
	public onNavBack(): void {
		const sPreviousHash = History.getInstance().getPreviousHash();

		if (sPreviousHash !== undefined) {
			// eslint-disable-next-line
			history.go(-1);
		} else {
			this.getRouter().navTo("master", {},{}, true);
		}
	}
}