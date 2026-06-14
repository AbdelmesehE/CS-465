import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripData {
  private apiUrl = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    return this.http
      .get<Trip[]>(this.apiUrl)
      .pipe(map((trips: Trip[]) => trips));
  }

  getTrip(tripCode: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.apiUrl}/${tripCode}`);
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiUrl, trip);
  }

  updateTrip(trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(
      `${this.apiUrl}/${trip.code}`,
      trip
    );
  }

  deleteTrip(tripCode: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${tripCode}`);
  }
}