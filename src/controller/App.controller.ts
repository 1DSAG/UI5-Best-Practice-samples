import MessageBox from "sap/m/MessageBox";
import AppComponent from "../Component";
import BaseController from "./BaseController";
import NorthwindState from "../state/NorthwindState";
import BusyIndicator from "sap/ui/core/BusyIndicator";

/**
 * @namespace ui5.typescript.helloworld.controller
 */
export default class AppController  extends BaseController {

	private northwindState:NorthwindState;
	public onInit() : void {
		// apply content density mode to root view
		this.getView().addStyleClass((this.getOwnerComponent() as AppComponent).getContentDensityClass());

		this.northwindState = (this.getOwnerComponent() as AppComponent).northwindState;
		this.getView().setModel(this.northwindState.getModel(), "state");
		
		this.northwindState.getSupplier(1);
	}

	public sayHello() : void {
		MessageBox.show("Hello World!");
	}

	public async onSaveSupplier(){
		BusyIndicator.show(0);
		try {
			await this.northwindState.saveSupplier();			
		} catch (error) {
			MessageBox.error(error?.message);
			console.error(error);
		}finally{
			BusyIndicator.hide();
		}
	}
}