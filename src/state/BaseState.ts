import Object from "sap/ui/base/Object";
import JSONModel from "sap/ui/model/json/JSONModel";
import Log, { Level } from "sap/base/Log";
import BaseService from "../service/BaseService";

/**
 * @namespace ui5.typescript.helloworld.state
 */
export default abstract class BaseState<T,R extends object> extends Object {
    protected service: T;
    protected data: R;
    private model: JSONModel;
    private logger: Log;
    constructor(service:T) {
        super();        
        this.logger = (Log.getLogger("ui5.typescript.helloworld.state.BaseState", Level.INFO) as Log);
        this.service = service;
    }
    public getModel(): JSONModel {
        if (!this.model) {
            this.model = new JSONModel(this.data)
        }
        return this.model;
    }
    public updateModel(hardRefresh?: boolean): void {
        if (this.model) {
            this.model.refresh(hardRefresh ? true : false);
        }
    }
    protected getService(): T {
        return this.service;
    }
    protected getData(): R {
        return this.data;
    }
}