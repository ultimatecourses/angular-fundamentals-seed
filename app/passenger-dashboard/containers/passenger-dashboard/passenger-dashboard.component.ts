import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface'

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count 
        [items]="passengers">
      </passenger-count>
      <passenger-detail
      *ngFor="let passenger of passengers;"
      [detail]="passenger">
      </passenger-detail>
      <h1>Airline Passengers</h1>
    </div>
  `
})

export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];

  constructor() {}

  ngOnInit() {
    this.passengers = [{
      id: 1,
      fullname: 'Stephen Tyler',
      checkedIn: true,
      checkInDate: 14905420000000,
      children: [{name: 'Brian', age: 15}],
    }, {
      id: 2,
      fullname: 'Rose Tyler',
      checkedIn: true,
      checkInDate: null,
      children: [{name: 'Jessica', age: 1}],
    }, {
      id: 3,
      fullname: 'James Taylor',
      checkedIn: false,
      checkInDate: 14905420000000,
      children: null,
    }]
  }
}
