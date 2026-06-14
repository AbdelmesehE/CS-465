import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css',
})
export class EditTrip implements OnInit {
  trip: Trip = {
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
    private route: ActivatedRoute,
    private router: Router,
    private tripData: TripData,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    console.log('Editing trip code:', code);

    if (code) {
      this.tripData.getTrip(code).subscribe({
        next: (data) => {
          console.log('Trip loaded for edit:', data);
          this.trip = data;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error loading trip:', err);
        }
      });
    }
  }

  updateTrip(): void {
    this.tripData.updateTrip(this.trip).subscribe({
      next: () => {
        console.log('Trip updated:', this.trip);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error updating trip:', err);
      }
    });
  }
}