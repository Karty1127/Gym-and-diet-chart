import { TestBed } from '@angular/core/testing';

import { WorkoutDataService } from './WorkoutDataService';

describe('Data', () => {
  let service: WorkoutDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
