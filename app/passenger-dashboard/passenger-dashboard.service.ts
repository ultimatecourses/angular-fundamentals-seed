import { Passenger } from "./models/passenger.interface";

export class PassengerDashboardService {
	constructor() {}

			getPassengers(): Passenger [] {
				return [{
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
}