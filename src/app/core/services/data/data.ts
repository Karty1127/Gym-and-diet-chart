import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Data {
  
  public gymPlanner = {
    "title": "6-DAY GYM PLAN",
    "subtitle": {
      "splits": ["Push/Pull × 2", "Shoulder × 1", "Legs × 1"]
    },
    "days": [
      {
        "day": "Monday",
        "label": "Push - A",
        "focus": "Chest | Triceps",
        "exercises": [
          { "name": "Barbell Bench Press", "sets": 4, "reps": "6–8", "rest": "2–3 min", "type": "Compound" },
          { "name": "Barbell Overhead Press", "sets": 4, "reps": "6–8", "rest": "2–3 min", "type": "Compound" },
          { "name": "Incline Dumbbell Press", "sets": 3, "reps": "10–12", "rest": "90 sec", "type": "Isolation" },
          { "name": "Dumbbell Lateral Raise", "sets": 3, "reps": "15–20", "rest": "60 sec", "type": "Isolation" },
          { "name": "Weighted Dips", "sets": 3, "reps": "10–12", "rest": "90 sec", "type": "Isolation" },
          { "name": "Skull Crushers (EZ Bar)", "sets": 3, "reps": "10–12", "rest": "90 sec", "type": "Isolation" }
        ]
      },
      {
        "day": "Tuesday",
        "label": "Pull - A",
        "focus": "Back | Biceps",
        "exercises": [
          { "name": "Barbell Bent-Over Row", "sets": 4, "reps": "6–8", "rest": "2–3 min", "type": "Compound" },
          { "name": "Weighted Pull-Ups", "sets": 4, "reps": "6–8", "rest": "2–3 min", "type": "Compound" },
          { "name": "Dumbbell Single-Arm Row", "sets": 3, "reps": "10–12", "rest": "90 sec", "type": "Isolation" },
          { "name": "Rear Delt Dumbbell Fly", "sets": 3, "reps": "15–20", "rest": "60 sec", "type": "Isolation" },
          { "name": "Barbell Curl", "sets": 3, "reps": "10–12", "rest": "90 sec", "type": "Isolation" },
          { "name": "Hammer Curl", "sets": 3, "reps": "12–15", "rest": "60 sec", "type": "Isolation" }
        ]
      },
      {
        "day": "Wednesday",
        "label": "Shoulder",
        "focus": "Anterior delt | Lateral delt | Posterior delt | Traps",
        "exercises": [
          { "name": "Dumbbell overhead press", "sets": 4, "reps": "6–8", "rest": "2–3 min", "type": "Compound" },
          { "name": "Arnold press", "sets": 3, "reps": "10–12", "rest": "90 sec", "type": "Compound" },
          { "name": "Dumbbell lateral raise", "sets": 3, "reps": "12 each", "rest": "90 sec", "type": "Isolation" },
          { "name": "Dumbbell front raise", "sets": 3, "reps": "6–8", "rest": "2 min", "type": "Isolation" },
          { "name": "Face pull", "sets": 4, "reps": "15–20", "rest": "60 sec", "type": "Isolation" },
          { "name": "Reverse pec deck machine", "sets": 3, "reps": "15", "rest": "60 sec", "type": "Isolation" }
        ]
      },
      {
        "day": "Thursday",
        "label": "Push - B",
        "focus": "Chest | Triceps",
        "exercises": [
          { "name": "Incline Barbell Press", "sets": 4, "reps": "8–10", "rest": "2–3 min", "type": "Compound" },
          { "name": "Dumbbell Shoulder Press", "sets": 4, "reps": "10–12", "rest": "90 sec", "type": "Compound" },
          { "name": "Dumbbell Flat Fly", "sets": 3, "reps": "12–15", "rest": "60 sec", "type": "Isolation" },
          { "name": "Dumbbell Lateral Raise", "sets": 3, "reps": "15–20", "rest": "60 sec", "type": "Isolation" },
          { "name": "Close-Grip Bench Press", "sets": 3, "reps": "10–12", "rest": "90 sec", "type": "Isolation" },
          { "name": "Overhead Dumbbell Extension", "sets": 3, "reps": "12–15", "rest": "60 sec", "type": "Isolation" }
        ]
      },
      {
        "day": "Friday",
        "label": "Pull - B",
        "focus": "Back | Biceps",
        "exercises": [
          { "name": "Conventional Deadlift", "sets": 4, "reps": "4–5", "rest": "3 min", "type": "Compound" },
          { "name": "Chin-Ups", "sets": 3, "reps": "8–10", "rest": "2 min", "type": "Compound" },
          { "name": "T-Bar Row", "sets": 3, "reps": "10–12", "rest": "90 sec", "type": "Isolation" },
          { "name": "Incline Dumbbell Curl", "sets": 3, "reps": "12", "rest": "60 sec", "type": "Isolation" },
          { "name": "Reverse Curl", "sets": 3, "reps": "12–15", "rest": "60 sec", "type": "Isolation" },
          { "name": "Face Pull (Band or Cable)", "sets": 3, "reps": "15–20", "rest": "60 sec", "type": "Isolation" }
        ]
      },
      {
        "day": "Saturday",
        "label": "Legs",
        "focus": "Glutes | Hamstrings | Quads | Core",
        "exercises": [
          { "name": "Barbell Hip Thrust", "sets": 4, "reps": "10–12", "rest": "90 sec", "type": "Compound" },
          { "name": "Bulgarian Split Squat", "sets": 3, "reps": "10 each", "rest": "2 min", "type": "Compound" },
          { "name": "Front Squat (or Hack Squat)", "sets": 3, "reps": "8–10", "rest": "2 min", "type": "Isolation" },
          { "name": "Stiff-Leg Deadlift", "sets": 3, "reps": "10–12", "rest": "90 sec", "type": "Isolation" },
          { "name": "Single-Leg Calf Raise", "sets": 4, "reps": "15–20", "rest": "60 sec", "type": "Isolation" },
          { "name": "Ab Wheel Rollout", "sets": 3, "reps": "10–12", "rest": "60 sec", "type": "Isolation" }
        ]
      },
    ],
  }
}
