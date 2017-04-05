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
      [detail]="passenger" (edit)="handleEdit($event)"
      (edit)="handleEdit($event)"
      (remove)="handleRemove($event)">
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
  handleEdit(event: Passenger){
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
    console.log(this.passengers);
  }
  handleRemove(event: Passenger){
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }
}
