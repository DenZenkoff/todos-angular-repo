export class CellData {
    date: Date;
    recordsCount: number;
    isWorkdate: boolean;

    constructor(date?: Date, recordsCount?: number) {
        const day = date?.getDay();
        
        this.date = date ?? new Date;
        this.recordsCount = recordsCount ?? 0;
        this.isWorkdate = day && day >= 1 && day <= 5 ? true : false;
    }
}
