import { RecordData } from "./record-data";

export class SlidePanelData {
    date: Date;
    records: Array<RecordData>;

    constructor(date?: Date, records?: Array<RecordData>) {
        this.date = date ?? new Date();
        this.records = records ?? [];
    }
}