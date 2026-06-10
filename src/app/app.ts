import { Component, OnInit, signal, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { Data } from './core/services/data/data';
import { MatTableModule } from '@angular/material/table';

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  type: 'Compound' | 'Isolation';
}

export interface DayPlan {
  day: string;
  label: string;
  focus: string;
  exercises: Exercise[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabsModule, MatTableModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Gym-and-diet-chart');
  public GymData: any
  public displayedColumns: string[] = ['exercise', 'sets', 'reps', 'rest', 'type'];

  constructor(private data: Data) { }

  ngOnInit() {
    console.log('Angular version:', VERSION.full);
    this.GymData = this.data.gymPlanner.days;
    console.log(this.GymData)
  }
}