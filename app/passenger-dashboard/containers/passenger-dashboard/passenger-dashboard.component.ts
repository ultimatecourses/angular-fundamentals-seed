import { Component } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component ({
	selector: 'passenger-dashboard',
	styleUrls: ['passenger-dashboard.component.scss'],
	template: `
	 <div>
		<h3>Airline Passengers</h3>
		<ul>
			<li *ngFor='let passenger of passengers; let i = index;'>
				<span class='status'
				[class.checked-in]='passenger.checkedIn'></span>
				{{ i }}: {{ passenger.fullname }}
				<div class='date'>
				Check in date: {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase): 'Not checked in' }}
				</div>
				<div class='children'>
				Children: {{ passenger.children?.length || 0 }}
				</div>
			</li>
		</ul>
	 </div>`
})

export class PassengerDashboardComponent {
	passengers: Passenger[] =[{
		id: 1,
		fullname: 'Stephen',
		checkedIn: true,
		checkInDate: 543571599901
	  }, {
		id: 2,
		fullname: 'Rose',
		checkedIn: false,
		checkInDate: null, 
		children: [{ name: 'Ted', age: 12}, {name: 'Chloe', age: 7 }]
	  }, {
		id: 4,
		fullname: 'Louise',
		checkedIn: true,
		checkInDate: 543571599900,
		children: [{ name: 'Jessica', age: 1}]
	  }, {
		id: 5,
		fullname: 'Tina',
		checkedIn: false,
		checkInDate: null
	}]
}