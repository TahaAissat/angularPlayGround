import { StateClient } from "../enums/state-client";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI {
    name! : string;
    state = StateClient.ACTIVE;
    totalCaHt!: number;
    tva : number = 20;
    comment! : string;
    id! : number;

    constructor(obj? : Partial<Client>){
        if(obj){
            Object.assign(this, obj)
        }
    }
}
