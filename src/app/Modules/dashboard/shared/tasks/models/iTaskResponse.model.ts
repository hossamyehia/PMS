import { iPage } from "src/app/core";
import { iTask } from "./iTask.model";


export interface iTaskResponse extends iPage{
    data: iTask[];
}