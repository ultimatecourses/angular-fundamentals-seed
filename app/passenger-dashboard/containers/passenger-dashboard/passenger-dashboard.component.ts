import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component ({
	selector: 'passenger-dashboard',
	styleUrls: ['passenger-dashboard.component.scss'],
	template: `
	 <div>
		 <passenger-count
			[items]='passengers'>
		 </passenger-count>
		 <passenger-detail 
			 *ngFor= 'let passenger of passengers'
			[detail]='passenger'
			(edit)='handleEdit($event)'
			(remove)='handleRemove($event)'>
		 </passenger-detail>
	 </div>`
})

export class PassengerDashboardComponent implements OnInit {
	passengers: Passenger[];
	constructor(){}
		ngOnInit() {
		console.log('ngOnInit');
		this.passengers = [{
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
		handleEdit(event) {
			console.log(event);
			console.log('handle edit')
		}
		handleRemove(event) {
			console.log(event);
			console.log('handle remove')
		}
	}