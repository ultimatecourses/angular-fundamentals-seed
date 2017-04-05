import { Component, Input } from '@angular/core';
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
  <div>
    <span class="status" 
          [class.checked-in]="detail.checkedIn">
    </span>
      {{ detail.fullname }}
    <div class="date">
      Check in date: 
      {{ detail.checkedInDate ? (detail.checkInDate | date: 'yMMMd' ) : "Not yet" }}
    </div>
    <div class="children">
      Children: {{ detail.children?.length || 0 }}
    </div>
  </div>
  `
})
export class PassengerDetailComponent {
  @Input()
  detail: Passenger;
  constructor(){}
}
