import { Ingredient } from "./ingredient.model";

export class User{
    constructor(public name: string, public email: string, public uid: string, public listaCompras: Ingredient[]){}
}