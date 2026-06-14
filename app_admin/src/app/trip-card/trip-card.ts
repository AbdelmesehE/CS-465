import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css',
})
export class TripCard implements OnChanges {
  @Input() trip: any;

  constructor(private tripData: TripData) {}

  ngOnChanges(): void {
    console.log('Trip card received:', this.trip);
  }

  deleteTrip(): void {
    if (confirm(`Are you sure you want to delete ${this.trip.name}?`)) {
      this.tripData.deleteTrip(this.trip.code).subscribe({
        next: () => {
          console.log('Trip deleted:', this.trip.code);
          window.location.reload();
        },
        error: (err) => {
          console.error('Error deleting trip:', err);
        }
      });
    }
  }
}