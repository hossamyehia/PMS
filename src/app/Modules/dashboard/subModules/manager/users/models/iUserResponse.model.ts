import { iPage } from "src/app/core";
import { IUserModel } from "./iUser.model";




export interface iUserResponse extends iPage{
    data: IUserModel[];
}