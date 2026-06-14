import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-trip.html',
  styleUrl: './add-trip.css',
})
export class AddTrip {
  newTrip: Trip = {
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: '',
    image: '',
    description: ''
  };

  constructor(
    private tripData: TripData,
    private router: Router
  ) {}

  saveTrip(): void {
    this.tripData.addTrip(this.newTrip).subscribe({
      next: (trip) => {
        console.log('Trip added:', trip);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error adding trip:', err);
      }
    });
  }
}