import { AddressEntity, SuppliersEntity } from "../service/NorthwindService";
import BaseObject from "./BaseObject";

/**
 * @namespace ui5.typescript.helloworld.model
 */
export default class Address extends BaseObject {
    private street: string;
    private city: string;
    private zipCode: string;
    private state: string;
    private country: string;

    constructor(data?: AddressEntity) {
        super();

        if (data) {
            this.street = data.Street;
            this.city = data.City;
            this.zipCode = data.ZipCode;
            this.state = data.State;
            this.country = data.Country;
        }
    }

    public getJSON(): AddressEntity {
        return {
            Street:this.street,
            City:this.city,
            ZipCode:this.zipCode,
            State:this.state,
            Country:this.country
        };
    }
}