import { iEmployee } from "../../../subModules/employee/model/iEmployee.model";
import { iProject } from "../../projects/models";

export interface iTask{
    id: number,
    title: string,
    
status:string,
    description: string,
    creationDate: Date,
    modificationDate: Date,
    empolyee?: iEmployee,
    project?: iProject
}