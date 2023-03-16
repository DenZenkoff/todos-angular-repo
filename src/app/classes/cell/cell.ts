import { CellData } from "./cell-data";

export class Cell {
    data: CellData;
    style: string;
    isHidden: boolean;

    constructor(data?: CellData, style?: string, isHidden?: boolean) {
        this.data = data ?? new CellData();
        this.style = style ?? '';
        this.isHidden = isHidden ?? true;
    }
}