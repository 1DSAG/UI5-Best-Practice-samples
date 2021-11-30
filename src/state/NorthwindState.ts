import Supplier from "../model/Supplier";
import NorthwindService from "../service/NorthwindService";
import BaseState from "./BaseState";

export type nwdata = {
    supplier: Supplier
}

/**
 * @namespace ui5.typescript.helloworld.state
 */
export default class GridToolState extends BaseState<NorthwindService,nwdata> {
    protected service: NorthwindService;
    public data: nwdata;

    constructor(service: NorthwindService) {
        super(service);
        this.data = {
            supplier:new Supplier()
        }
        this.updateModel();
    }
    public async getSupplier(id:number){
        const supplierEntity = await this.getService().getSupplierById(id);
        this.getData().supplier = new Supplier(supplierEntity.data);
        this.updateModel();
        return this.getData().supplier;
    }
    public async saveSupplier(){
        const supplier = this.getData().supplier;
        if(!supplier.isValid()){
            this.updateModel();
            throw Error("No valid supplier");
        }
        const supplierEntity = await this.getService().updateSupplier(supplier.getJSON())
        
        return this.getSupplier(supplier.getId());
    }
}