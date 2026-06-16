import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { GYM_PLAN, Planner, Exercise, Notes } from './core/workout-data';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  imports: [MatTabsModule, MatTableModule, MatCardModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class App {
  protected readonly title = signal('Gym-and-diet-chart');
  readonly planner: Planner = GYM_PLAN;
  readonly notes: Notes = Notes;
  readonly selectedIntensity = signal('Basic');
  readonly displayedColumns: string[] = ['exercise', 'sets', 'reps', 'rest', 'type'] as const;
  private expandedExerciseName: string | null = null;

  public isExpandedRow = (_: number, row: Exercise) => this.isExpanded(row);

  public setIntensity(type: 'Basic' | 'Intermediate' | 'Advanced') {
    this.selectedIntensity.set(type);
  }

  public getFilteredExercises(exercises: Exercise[]): Exercise[] {
    return exercises.filter(e => e.intensity === this.selectedIntensity());
  }

  public isExpanded(row: Exercise): boolean {
    return this.expandedExerciseName === row.name;
  }

  public toggle(row: Exercise): void {
    this.expandedExerciseName =
      this.isExpanded(row) ? null : row.name;
  }
}