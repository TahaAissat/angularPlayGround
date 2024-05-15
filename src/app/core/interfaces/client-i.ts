import { StateClient } from "../enums/state-client";

export interface ClientI {
    name : string,
    state : StateClient,
    totalCaHt : number,
    tva : number,
    comment : string,
    id : number
}
