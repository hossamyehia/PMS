import { iPage } from "src/app/core";
import { iProject } from "./iProject.model";

export interface iProjectResponse extends iPage{
    data: iProject[];
}