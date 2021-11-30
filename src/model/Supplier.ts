import { SuppliersEntity } from "../service/NorthwindService";
import Address from "./Address";
import BaseObject from "./BaseObject";

/**
 * @namespace ui5.typescript.helloworld.model
 */
export default class Supplier extends BaseObject<SuppliersEntity> {
    private id: number;
    private name: string;
    private concurrency: number;
    private address:Address;
    private nameValueState="None";

    constructor(data?: SuppliersEntity) {
        super();

        if (data) {
            this.id = data.ID;
            this.name = data.Name;
            this.concurrency = data.Concurrency;
            this.address = new Address(data.Address);
        }
    }
    public getId():number{
        return this.id;
    }
    public isValid():boolean{
        this.nameValueState = this.name?'None':'Error';
        return !!this.name;
    }
    public getJSON(): SuppliersEntity {
        return {
            ID: this.id,
            Name: this.name,
            Concurrency: this.concurrency,
            Address:this.address.getJSON()
        };
    }
}