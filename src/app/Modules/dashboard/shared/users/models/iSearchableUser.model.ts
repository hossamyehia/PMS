import { iPage } from "src/app/core";

export interface iSearchableUser extends iPage{
    userName: string;
    email:string;
    country:string;
    groups:any
}