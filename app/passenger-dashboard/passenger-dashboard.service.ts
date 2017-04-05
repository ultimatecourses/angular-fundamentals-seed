import { Passenger } from './models/passenger.interface';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw ';

import {Req} from "awesome-typescript-loader/dist/checker/protocol";


const PASSENGER_API: string ='/api/passengers';


@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json()));

  }
  updatePassenger(passenger: Passenger): Observable<Passenger> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http
    // Old way to do it: .put(PASSENGER_API + '/' + passenger.id)
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json()));

  }
  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
    // Old way to do it: .put(PASSENGER_API + '/' + passenger.id)
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json()));

  }
}
