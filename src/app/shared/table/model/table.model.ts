import { defaultColConf, TableOperator, tableColDef } from "./";

interface Table{
    colDefs: tableColDef[];
    data: any[];
    operators:  TableOperator[];
    defaultColConf?: defaultColConf;
}
export default Table;