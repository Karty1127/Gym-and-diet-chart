import { Injectable } from '@angular/core';

export interface Planner {
  title: string,
  subtitle: Subtitle,
  days: DayPlan[]
}

interface Subtitle {
  splits: string[];
}

export interface DayPlan {
  day: string;
  label: string;
  focus: string;
  exercises: Exercise[];
}

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  type: 'Compound' | 'Isolation';
  intensity: string;
  note: string;
}

export const GYM_PLAN: Planner = {
  "title": "Weekly Strength Program",
  "subtitle": {
    "splits": ["Chest+Biceps × 2", "Back+Triceps × 1", "Shoulder × 1", "Core+LowerBack × 1", "Legs × 1"]
  },
  "days": [
    {
      "day": "Monday",
      "label": "Chest + Biceps - A",
      "focus": "Chest | Biceps",
      "exercises": [
        {
          "name": "Machine Chest Press",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Compound",
          "intensity": "Basic",
          "note": "Sit upright, push handles forward, keep back flat against pad. Good starting point — fixed path reduces stability demand."
        },
        {
          "name": "Dumbbell Flat Press",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Compound",
          "intensity": "Basic",
          "note": "Lie flat on bench, dumbbells at chest level, press up and slightly inward. Safer than barbell for beginners."
        },
        {
          "name": "Push-Up (Standard)",
          "sets": 3,
          "reps": "10–15",
          "rest": "60 sec",
          "type": "Compound",
          "intensity": "Basic",
          "note": "Hands shoulder-width, body straight, lower chest to 1 inch from floor. Foundational bodyweight chest movement."
        },
        {
          "name": "Cable Chest Fly (Low to High)",
          "sets": 3,
          "reps": "15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Set cables low, step forward, arc hands upward and together in front of chest. Isolates lower-to-mid chest."
        },
        {
          "name": "Dumbbell Hammer Curl",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Palms facing each other throughout the curl. Targets brachialis and brachioradialis — easy on wrists."
        },
        {
          "name": "Cable Bicep Curl",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Attach straight bar to low cable, curl up with elbows fixed. Constant tension through the full range."
        },
        {
          "name": "Barbell Bench Press",
          "sets": 4,
          "reps": "8–10",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Intermediate",
          "note": "Grip slightly wider than shoulder-width, lower bar to mid-chest, drive up. Primary horizontal push movement."
        },
        {
          "name": "Incline Dumbbell Press",
          "sets": 3,
          "reps": "10–12",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Intermediate",
          "note": "Bench at 30–45°, press dumbbells from chest level upward. Shifts emphasis to upper chest and anterior delt."
        },
        {
          "name": "Dumbbell Chest Fly",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Slight elbow bend throughout, lower wide until stretch is felt, squeeze at top. Do not go too heavy."
        },
        {
          "name": "Cable Cross-Over (High to Low)",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Set cables high, step forward, pull hands down and together below chest. Targets lower chest fibers."
        },
        {
          "name": "EZ Bar Curl",
          "sets": 3,
          "reps": "10–12",
          "rest": "90 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "EZ bar reduces wrist strain vs straight bar. Curl with elbows pinned to sides, full range of motion."
        },
        {
          "name": "Incline Dumbbell Curl",
          "sets": 3,
          "reps": "12",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Sit on incline bench, let arms hang fully extended behind torso. Stretches long head of bicep maximally."
        },
        {
          "name": "Weighted Dips (Chest-Focused)",
          "sets": 4,
          "reps": "6–8",
          "rest": "2 min",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Lean forward 30° to shift load to chest, add weight via belt. Deep stretch at bottom. High pec recruitment."
        },
        {
          "name": "Barbell Guillotine Press",
          "sets": 4,
          "reps": "8–10",
          "rest": "2 min",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Lower bar to neck/upper chest instead of mid-chest. Maximizes upper pec stretch. Requires shoulder mobility — use moderate weight."
        },
        {
          "name": "Incline Cable Fly",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Advanced",
          "note": "Incline bench between low cables. Full stretch, full contraction on each rep. Superior to dumbbell fly for constant tension."
        },
        {
          "name": "Push-Up Variation (Archer Push-Up)",
          "sets": 3,
          "reps": "8–10 each",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Wide hand placement, lower toward one arm while extending the other. Unilateral load similar to single-arm press."
        },
        {
          "name": "Barbell Curl (Heavy, Cheat Allowed)",
          "sets": 4,
          "reps": "6–8",
          "rest": "90 sec",
          "type": "Isolation",
          "intensity": "Advanced",
          "note": "Use controlled hip momentum on the way up, slow eccentric on the way down (3–4 sec). Targets supramaximal loading."
        },
        {
          "name": "Spider Curl",
          "sets": 3,
          "reps": "10–12",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Advanced",
          "note": "Lie face-down on incline bench, let arms hang, curl dumbbells up. Eliminates swing and maximizes short-head peak contraction."
        }
      ]
    },
    {
      "day": "Tuesday",
      "label": "Back + Triceps",
      "focus": "Back | Triceps",
      "exercises": [
        {
          "name": "Lat Pulldown (Wide Grip)",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Compound",
          "intensity": "Basic",
          "note": "Sit at machine, pull bar to upper chest, lean back slightly. Beginner-friendly back-width movement."
        },
        {
          "name": "Seated Cable Row",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Compound",
          "intensity": "Basic",
          "note": "Pull handle to lower abdomen, retract shoulder blades, control the return. Good for mid-back thickness."
        },
        {
          "name": "Dumbbell Single-Arm Row",
          "sets": 3,
          "reps": "12 each",
          "rest": "60 sec",
          "type": "Compound",
          "intensity": "Basic",
          "note": "Brace on bench, pull dumbbell to hip, elbow travels straight back. Unilateral — corrects imbalances."
        },
        {
          "name": "Straight-Arm Pulldown",
          "sets": 3,
          "reps": "15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "High cable with rope, arms nearly straight, pull down to hips. Pure lat isolation — minimal bicep involvement."
        },
        {
          "name": "Tricep Pushdown (Rope)",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "High cable, pull rope down and split at bottom, elbows fixed at sides. Good first tricep exercise."
        },
        {
          "name": "Dumbbell Tricep Kickback",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Hinge forward, upper arm parallel to floor, extend forearm back fully. Isolates lateral head of tricep."
        },
        {
          "name": "Barbell Bent-Over Row",
          "sets": 4,
          "reps": "8–10",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Intermediate",
          "note": "Hinge to ~45°, overhand grip, pull bar to lower chest. One of the best overall back mass builders."
        },
        {
          "name": "Pull-Up (Bodyweight)",
          "sets": 3,
          "reps": "6–10",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Intermediate",
          "note": "Full hang to chin over bar. Use band assistance if needed. Overhand grip hits lat width."
        },
        {
          "name": "T-Bar Row",
          "sets": 3,
          "reps": "10–12",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Intermediate",
          "note": "Chest supported or freestanding, close neutral grip, pull to chest. Targets mid-back thickness."
        },
        {
          "name": "Rear Delt Dumbbell Fly",
          "sets": 3,
          "reps": "15–20",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Hinge 90°, arms hang, raise dumbbells to sides with slight elbow bend. Targets posterior delt and upper back."
        },
        {
          "name": "Close-Grip Bench Press",
          "sets": 3,
          "reps": "10–12",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Intermediate",
          "note": "Grip shoulder-width on barbell, lower to chest, elbows tucked. Primarily hits all three tricep heads."
        },
        {
          "name": "Skull Crushers (EZ Bar)",
          "sets": 3,
          "reps": "10–12",
          "rest": "90 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Lower EZ bar to forehead (don't actually crush skull), extend up. Hits long head with good stretch."
        },
        {
          "name": "Weighted Pull-Up",
          "sets": 4,
          "reps": "6–8",
          "rest": "2–3 min",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Add weight via belt or vest. Full dead hang to chin over bar. Requires solid bodyweight pull-up base."
        },
        {
          "name": "Pendlay Row",
          "sets": 4,
          "reps": "6–8",
          "rest": "2 min",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Bar returns to floor each rep (unlike bent-over row). Explosive pull from dead stop — trains rate of force development."
        },
        {
          "name": "Meadows Row",
          "sets": 3,
          "reps": "10–12 each",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Landmine attachment, staggered stance, pull to hip. Allows heavy unilateral load without lower-back fatigue."
        },
        {
          "name": "Straight-Arm Cable Pullover",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Advanced",
          "note": "Face cable stack high, pull rope in arc to hips. Full lat stretch at top. Superior for lat isolation and mind-muscle connection."
        },
        {
          "name": "Tricep Dip (Weighted, Parallel Bar)",
          "sets": 4,
          "reps": "8–10",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Upright torso to target triceps over chest. Add weight via belt. Heaviest tricep compound movement."
        },
        {
          "name": "JM Press",
          "sets": 3,
          "reps": "8–10",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Hybrid between close-grip bench and skull crusher. Lower bar toward face while elbows travel forward. Extreme tricep overload."
        }
      ]
    },
    {
      "day": "Wednesday",
      "label": "Shoulders",
      "focus": "Anterior Delt | Lateral Delt | Posterior Delt | Traps",
      "exercises": [
        {
          "name": "Dumbbell Shoulder Press (Seated)",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Compound",
          "intensity": "Basic",
          "note": "Seated, dumbbells at ear level, press overhead. Backrest provides stability for beginners."
        },
        {
          "name": "Dumbbell Lateral Raise",
          "sets": 3,
          "reps": "15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Slight forward lean, raise arms to shoulder height with pinky slightly up. Primary lateral delt builder."
        },
        {
          "name": "Dumbbell Front Raise",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Alternate arms, raise to shoulder height with slight elbow bend. Targets anterior delt."
        },
        {
          "name": "Machine Reverse Fly (Pec Deck)",
          "sets": 3,
          "reps": "15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Set machine for rear delt mode, reverse the movement to pull handles apart. Good for posterior delt beginners."
        },
        {
          "name": "Cable Face Pull",
          "sets": 3,
          "reps": "15–20",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Set cable at face height, pull rope to face with elbows flared. Targets rear delt and external rotators."
        },
        {
          "name": "Dumbbell Shrug",
          "sets": 3,
          "reps": "15–20",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Hold dumbbells at sides, shrug shoulders straight up, hold 1 sec at top. Basic trap builder."
        },
        {
          "name": "Barbell Overhead Press",
          "sets": 4,
          "reps": "8–10",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Intermediate",
          "note": "Standing press from front rack position. Core braced, press to lockout. Best overall shoulder mass builder."
        },
        {
          "name": "Arnold Press",
          "sets": 3,
          "reps": "10–12",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Intermediate",
          "note": "Start with palms facing you, rotate outward as you press up. Hits all three delt heads across the range."
        },
        {
          "name": "Cable Lateral Raise",
          "sets": 3,
          "reps": "15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Cable provides constant tension unlike dumbbells. Cross-body path with slight lean away from cable."
        },
        {
          "name": "Barbell Upright Row",
          "sets": 3,
          "reps": "10–12",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Intermediate",
          "note": "Overhand grip slightly wider than shoulder-width, pull to chin. Hits lateral delt and traps. Avoid if shoulder impingement present."
        },
        {
          "name": "Band Pull-Apart",
          "sets": 4,
          "reps": "20",
          "rest": "45 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Hold band in front at shoulder height, pull apart to chest level. Activates rear delt and external rotators — good for shoulder health."
        },
        {
          "name": "Barbell Shrug",
          "sets": 4,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Hold barbell with overhand grip, shrug straight up. Can load heavier than dumbbell variation."
        },
        {
          "name": "Seated Dumbbell Press (Heavy)",
          "sets": 4,
          "reps": "6–8",
          "rest": "2 min",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Heavy loading with controlled descent. Pause at bottom before pressing. Maximizes time under tension."
        },
        {
          "name": "Push Press",
          "sets": 4,
          "reps": "5–6",
          "rest": "2–3 min",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Use leg drive to initiate the press, lock out overhead. Allows supramaximal loading beyond strict press capacity."
        },
        {
          "name": "Lateral Raise Drop Set",
          "sets": 3,
          "reps": "10+10+10",
          "rest": "90 sec",
          "type": "Isolation",
          "intensity": "Advanced",
          "note": "Start heavy, drop 40% weight after failure twice without rest. Extreme lateral delt metabolic stress."
        },
        {
          "name": "Behind-the-Neck Press (Smith or Barbell)",
          "sets": 3,
          "reps": "8–10",
          "rest": "2 min",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Press from behind neck to lockout. Removes anterior delt from press — pure medial/lateral delt stimulus. Requires good shoulder mobility."
        },
        {
          "name": "Leaning Cable Lateral Raise",
          "sets": 3,
          "reps": "15 each",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Advanced",
          "note": "Hold rack with non-working arm, lean away, raise cable arm to shoulder height. Increases range of motion versus standard lateral raise."
        },
        {
          "name": "Snatch-Grip High Pull",
          "sets": 3,
          "reps": "6–8",
          "rest": "2 min",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Wide barbell grip, explosive pull from hang to shoulder height. Combines trap, delt, and upper back activation."
        }
      ]
    },
    {
      "day": "Thursday",
      "label": "Core + Lower Back",
      "focus": "Chest | Biceps",
      "exercises": [
        {
          "name": "Plank (Static Hold)",
          "sets": 3,
          "reps": "30–45 sec",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Forearms on floor, body straight, hips level. Foundational core stability exercise. Progress by extending hold duration."
        },
        {
          "name": "Crunch",
          "sets": 3,
          "reps": "15–20",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Lie on back, knees bent, hands behind ears, curl shoulders toward knees. Basic rectus abdominis isolation."
        },
        {
          "name": "Leg Raise (Lying)",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Flat on back, keep legs straight, raise to 90° and lower slowly. Lower abs and hip flexor activation."
        },
        {
          "name": "Bird Dog",
          "sets": 3,
          "reps": "10 each side",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "On all fours, extend opposite arm and leg simultaneously. Strengthens lower back with minimal spinal loading."
        },
        {
          "name": "Back Extension (Hyperextension Machine)",
          "sets": 3,
          "reps": "15",
          "rest": "60 sec",
          "type": "Compound",
          "intensity": "Basic",
          "note": "Hinge at hips over the pad, lower torso, then raise back to neutral. Directly trains erector spinae and glute-ham tie-in."
        },
        {
          "name": "Dead Bug",
          "sets": 3,
          "reps": "8–10 each side",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Lie on back, arms up, knees at 90°. Lower opposite arm and leg slowly without letting lower back arch. Safe and highly effective for deep core."
        },
        {
          "name": "Cable Crunch",
          "sets": 3,
          "reps": "15–20",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Kneel at high cable with rope at neck, crunch elbows toward knees. Allows progressive overload on abs unlike floor crunches."
        },
        {
          "name": "Hanging Leg Raise",
          "sets": 3,
          "reps": "10–15",
          "rest": "90 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Hang from pull-up bar, raise legs to parallel or higher. Requires grip and shoulder stability. Strong lower ab contraction."
        },
        {
          "name": "Russian Twist (Weighted)",
          "sets": 3,
          "reps": "15 each side",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Hold dumbbell or plate, lean back to 45°, rotate torso side to side. Oblique-focused rotational core work."
        },
        {
          "name": "Romanian Deadlift (Light, Posture-Focused)",
          "sets": 3,
          "reps": "12–15",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Intermediate",
          "note": "Hip hinge with slight knee bend, bar close to legs, flat back. Lower back and hamstring co-activation. On this day use light-moderate load."
        },
        {
          "name": "Pallof Press",
          "sets": 3,
          "reps": "12 each side",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Stand sideways to cable, hold at chest, press out and resist rotation. Anti-rotation core strength — functional for spine stability."
        },
        {
          "name": "Reverse Hyperextension",
          "sets": 3,
          "reps": "15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Face-down on hyperextension bench, raise legs behind you. Decompresses lumbar spine while training glute-ham-erector chain."
        },
        {
          "name": "Ab Wheel Rollout",
          "sets": 4,
          "reps": "10–12",
          "rest": "90 sec",
          "type": "Isolation",
          "intensity": "Advanced",
          "note": "Kneel, roll wheel forward to full extension (or standing), pull back with abs. One of the hardest ab exercises. Do not let hips drop."
        },
        {
          "name": "Dragon Flag",
          "sets": 3,
          "reps": "6–8",
          "rest": "90 sec",
          "type": "Isolation",
          "intensity": "Advanced",
          "note": "Lie on bench, grip behind head, raise entire body off bench supported only at shoulders. Extremely high core demand. Made famous by Bruce Lee."
        },
        {
          "name": "Toes to Bar",
          "sets": 3,
          "reps": "8–12",
          "rest": "90 sec",
          "type": "Isolation",
          "intensity": "Advanced",
          "note": "Hang from pull-up bar, bring toes to bar with controlled swing. Full hip flexor and rectus abdominis engagement."
        },
        {
          "name": "Copenhagen Plank",
          "sets": 3,
          "reps": "20–30 sec each",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Advanced",
          "note": "Side plank with top foot on bench, bottom leg off floor. Extreme lateral core and adductor demand. Protects the hip."
        },
        {
          "name": "Barbell Good Morning",
          "sets": 3,
          "reps": "10–12",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Bar on upper back, hinge forward with slight knee bend, chest toward floor, return. Directly trains erector spinae under load. Start light."
        },
        {
          "name": "Weighted Decline Crunch",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Advanced",
          "note": "Decline bench with plate or dumbbell held at chest. Gravity adds loading angle. Full stretch at bottom of each rep."
        }
      ]
    },
    {
      "day": "Friday",
      "label": "Legs",
      "focus": "Rectus Abdominis | Obliques | Transverse Abdominis | Erector Spinae | Glute-Ham tie-in",
      "exercises": [
        {
          "name": "Bodyweight Squat",
          "sets": 3,
          "reps": "15–20",
          "rest": "60 sec",
          "type": "Compound",
          "intensity": "Basic",
          "note": "Feet shoulder-width, descend until thighs parallel, keep chest up. Builds squat motor pattern before loading."
        },
        {
          "name": "Leg Press (Machine)",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Compound",
          "intensity": "Basic",
          "note": "Feet mid-plate, press away, lower to 90°. Machine removes balance demand — high quad overload safely."
        },
        {
          "name": "Glute Bridge (Bodyweight)",
          "sets": 3,
          "reps": "15–20",
          "rest": "60 sec",
          "type": "Compound",
          "intensity": "Basic",
          "note": "Lie on back, knees bent, drive hips to ceiling, squeeze glutes at top. Activates glutes before heavier hip thrust."
        },
        {
          "name": "Lying Leg Curl (Machine)",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Lie face-down, curl pad toward glutes. Pure hamstring isolation. Beginner-safe."
        },
        {
          "name": "Seated Calf Raise (Machine)",
          "sets": 3,
          "reps": "15–20",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Pads on knees, heels below platform, raise and lower slowly. Targets soleus — the deeper calf muscle."
        },
        {
          "name": "Step-Up (Dumbbell)",
          "sets": 3,
          "reps": "12 each",
          "rest": "60 sec",
          "type": "Compound",
          "intensity": "Basic",
          "note": "Step onto box or bench with one foot, drive through heel to stand. Unilateral quad and glute work."
        },
        {
          "name": "Barbell Hip Thrust",
          "sets": 4,
          "reps": "10–12",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Intermediate",
          "note": "Upper back on bench, bar across hips, drive hips to ceiling, squeeze glutes at top. Best glute mass builder."
        },
        {
          "name": "Bulgarian Split Squat (Dumbbell)",
          "sets": 3,
          "reps": "10 each",
          "rest": "2 min",
          "type": "Compound",
          "intensity": "Intermediate",
          "note": "Rear foot elevated, front foot forward, squat until rear knee near floor. Brutal quad and glute isolation per leg."
        },
        {
          "name": "Goblet Squat",
          "sets": 3,
          "reps": "10–12",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Intermediate",
          "note": "Hold dumbbell at chest, squat deep. Counterbalance improves torso position. Good transition to barbell squats."
        },
        {
          "name": "Stiff-Leg (Romanian) Deadlift",
          "sets": 3,
          "reps": "10–12",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Intermediate",
          "note": "Slight knee bend, hinge at hips, bar close to legs, flat back throughout. Hamstring and glute primary — not a lower back exercise."
        },
        {
          "name": "Standing Calf Raise (Single-Leg)",
          "sets": 4,
          "reps": "15–20 each",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Single-leg forces double the load. Full stretch at bottom, full contraction at top. Targets gastrocnemius."
        },
        {
          "name": "Leg Extension (Machine)",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Pure quad isolation. Pause at top for 1 sec. Use moderate weight — this is a finishing exercise, not a primary mover."
        },
        {
          "name": "Front Squat (Barbell)",
          "sets": 4,
          "reps": "6–8",
          "rest": "2–3 min",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Bar in front rack on deltoids, upright torso, squat deep. Hits quads more directly than back squat. Requires wrist and thoracic mobility."
        },
        {
          "name": "Barbell Hip Thrust (Pause Rep)",
          "sets": 4,
          "reps": "8–10",
          "rest": "2 min",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Hold 2-second pause at peak contraction. Eliminates momentum, maximizes glute time under tension."
        },
        {
          "name": "Nordic Hamstring Curl",
          "sets": 3,
          "reps": "5–8",
          "rest": "2 min",
          "type": "Isolation",
          "intensity": "Advanced",
          "note": "Kneel with feet anchored, lower torso toward floor resisting with hamstrings, push back up. One of the highest hamstring injury-prevention exercises."
        },
        {
          "name": "Hack Squat (Machine)",
          "sets": 4,
          "reps": "8–10",
          "rest": "2 min",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Feet low on platform to maximize quad depth. Guided path allows heavy loading without lower-back stress."
        },
        {
          "name": "Single-Leg Press (Machine)",
          "sets": 3,
          "reps": "10–12 each",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "One leg at a time on leg press. Exposes bilateral strength imbalances and corrects them under load."
        },
        {
          "name": "Glute-Ham Raise (GHR Machine)",
          "sets": 3,
          "reps": "8–10",
          "rest": "2 min",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Secure feet on GHR machine, lower body forward, curl back up using hamstrings. Full-range hamstring + lower back + glute integration."
        }
      ]
    },
    {
      "day": "Saturday",
      "label": "Chest + Biceps - B",
      "focus": "Glutes | Hamstrings | Quads | Calves | Core (integrated)",
      "exercises": [
        {
          "name": "Incline Machine Press",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Compound",
          "intensity": "Basic",
          "note": "Machine incline press at ~30°. Targets upper chest with guided path. Good for learning incline pressing pattern."
        },
        {
          "name": "Dumbbell Flat Press",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Compound",
          "intensity": "Basic",
          "note": "Same as Monday-A. Reinforce the foundational movement pattern."
        },
        {
          "name": "Cable Chest Fly (Mid Height)",
          "sets": 3,
          "reps": "15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Cables at shoulder height, hands meet in front of chest. Targets mid-pec fibers."
        },
        {
          "name": "Dumbbell Pullover",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Lie across bench, lower dumbbell behind head in arc, pull back over chest. Stretches the pec and serratus anterior."
        },
        {
          "name": "Resistance Band Bicep Curl",
          "sets": 3,
          "reps": "15–20",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Step on band, curl handles up with supinated grip. Portable and joint-friendly for early training stages."
        },
        {
          "name": "Seated Dumbbell Curl",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Basic",
          "note": "Seated eliminates any leg drive or torso sway. Strict form curl for beginners building the movement pattern."
        },
        {
          "name": "Incline Barbell Press",
          "sets": 4,
          "reps": "8–10",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Intermediate",
          "note": "Bench at 30–45°, lower to upper chest. Upper pec emphasis. Grip slightly narrower than flat bench."
        },
        {
          "name": "Dumbbell Flat Fly",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Lighter load with controlled arc, deep stretch at bottom. Stretch-focused version to chase pec hypertrophy."
        },
        {
          "name": "Pec Deck Machine Fly",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Machine provides stable arc. Good for mind-muscle connection — focus on squeezing pecs at each rep's peak."
        },
        {
          "name": "Push-Up (Wide Grip)",
          "sets": 3,
          "reps": "15–20",
          "rest": "60 sec",
          "type": "Compound",
          "intensity": "Intermediate",
          "note": "Hands wider than shoulder-width emphasizes chest over triceps. Use as a burnout finisher."
        },
        {
          "name": "Barbell Curl",
          "sets": 3,
          "reps": "10–12",
          "rest": "90 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Overhand grip on straight bar. Heavier than dumbbell curls. Keep elbows pinned. Full range from full extension to full contraction."
        },
        {
          "name": "Concentration Curl",
          "sets": 3,
          "reps": "12 each",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Intermediate",
          "note": "Seated, elbow braced on inner thigh, curl dumbbell. Completely eliminates cheating. Strong short-head peak contraction."
        },
        {
          "name": "Weighted Push-Up (Plate on Back)",
          "sets": 4,
          "reps": "12–15",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Place 10–25kg plate on upper back. Partner-assisted or rack-loaded. Progressive overload on a bodyweight movement."
        },
        {
          "name": "Cable Incline Fly",
          "sets": 3,
          "reps": "12–15",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Advanced",
          "note": "Incline bench between low cables. Constant tension throughout arc — superior chest stretch and contraction."
        },
        {
          "name": "Decline Barbell Press",
          "sets": 4,
          "reps": "8–10",
          "rest": "2 min",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Decline bench 15–30°. Targets lower pec. Use spotter or safety bars. Lower bar to lower chest."
        },
        {
          "name": "Push-Up to Dumbbell Row",
          "sets": 3,
          "reps": "10 each side",
          "rest": "90 sec",
          "type": "Compound",
          "intensity": "Advanced",
          "note": "Push-up on dumbbells, then row one dumbbell at the top. Chest + core + back in one movement."
        },
        {
          "name": "21s Barbell Curl",
          "sets": 3,
          "reps": "21 (7+7+7)",
          "rest": "90 sec",
          "type": "Isolation",
          "intensity": "Advanced",
          "note": "7 reps bottom-to-halfway, 7 reps halfway-to-top, 7 full reps. Hits all portions of the bicep range under fatigue."
        },
        {
          "name": "Bayesian Cable Curl",
          "sets": 3,
          "reps": "12 each",
          "rest": "60 sec",
          "type": "Isolation",
          "intensity": "Advanced",
          "note": "Stand facing away from low cable, cable behind you at hip height, curl. Maximal long-head bicep stretch — most effective for mass."
        }
      ]
    }
  ]
}

@Injectable({
  providedIn: 'root',
})

export class WorkoutDataService { }
