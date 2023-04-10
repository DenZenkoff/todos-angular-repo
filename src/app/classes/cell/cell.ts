import { Styles } from "src/app/enums/styles";
import { CellData } from "./cell-data";

export class Cell {
    data: CellData;
    style: string;
    isHidden: boolean;

    constructor(data?: CellData, isHidden?: boolean) {
        this.data = data ?? new CellData();
        this.style = data?.isWorkdate ? Styles.workday : Styles.holiday;
        this.isHidden = isHidden ?? true;
    }
}