import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCard } from '../trip-card/trip-card';
import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
})
export class TripListing implements OnInit {
  trips: Trip[] = [];

  constructor(
    private tripData: TripData,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit running');

    this.tripData.getTrips().subscribe({
      next: (data: Trip[]) => {
        console.log('Trips loaded:', data);

        this.trips = [...data];

        console.log(
          'Trips array after assignment:',
          this.trips.length
        );

        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('Error loading trips:', err);
      }
    });
  }
}