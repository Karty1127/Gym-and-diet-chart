import { ChangeDetectionStrategy, Component, OnInit, signal, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { GYM_PLAN, Planner, Exercise } from './core/services/data/WorkoutDataService';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabsModule, MatTableModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class App implements OnInit {
  protected readonly title = signal('Gym-and-diet-chart');
  public planner!: Planner;
  public selectedIntensity: string = 'Basic';
  public displayedColumns: string[] = ['exercise', 'sets', 'reps', 'rest', 'type'];
  private expandedExerciseName: string | null = null;

  public isExpandedRow = (_: number, row: Exercise) => this.isExpanded(row);

  ngOnInit() {
    console.log('Angular version:', VERSION.full);
    this.planner = GYM_PLAN;
  }

  public selectIntermediate(type: string) {
    this.selectedIntensity = type;
  }

  public getFilteredExercises(exercises: any[]): any[] {
    return exercises.filter(e => e.intensity === this.selectedIntensity);
  }

  public isExpanded(row: Exercise): boolean {
    return this.expandedExerciseName === row.name;
  }

  public toggle(row: Exercise): void {
    this.expandedExerciseName =
      this.isExpanded(row) ? null : row.name;
  }
}