import { Component} from '@angular/core';
import { RecordData } from '../RecordData';
import { RecordsService } from 'src/app/home/records.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {

  recordData = new Array<RecordData>();
  service: RecordsService;
  enableEdit = false;
  enableEditIndex = 0;

  constructor(service: RecordsService) {
    this.service = service;
  }

  async ngOnInit() {
    this.recordData = await this.service.getRecordsAsync();
  }

  public RemoveItem(removeableRecordData: RecordData) {

    this.service.RemoveRecordAsync(removeableRecordData);

    const res = this.recordData.filter(obj => obj.id !== removeableRecordData.id);

    this.recordData = res;
  }

  saveItem(record: RecordData) {
    this.service.UpdateRecordAsync(record);
  }

  enableEditMethod(e: Event, i: number) {
    this.enableEdit = true;
    this.enableEditIndex = i;
    console.log(i, e);
  }
}


