import { Component, OnInit } from '@angular/core';
import { AsyncService } from '../../shared/async-service.service';

@Component({
  selector: 'app-time-range-input',
  templateUrl: './time-range-input.component.html',
  styleUrls: ['./time-range-input.component.css']
})
export class TimeRangeInputComponent implements OnInit {
  startDateInput: string = '';
  endDateInput: string = '';
  constructor(private asyncService: AsyncService) {
  }
  ngOnInit() {
  }
  Click() {
    if(this.startDateInput&&this.endDateInput)
    this.asyncService.downloadSubject.next({start:this.startDateInput,end:this.endDateInput});
    }
}
