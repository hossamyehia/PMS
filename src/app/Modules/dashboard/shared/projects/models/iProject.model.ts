import { iManager } from "../../../subModules/manager/models/iManager.model";
import { iTask } from "../../tasks/models";

export interface iProject {
    id?: number;
    title: string;
    description: string,
    creationDate?: Date,
    modificationDate?: Date;
    manager?: iManager;
    task?: iTask[];
}