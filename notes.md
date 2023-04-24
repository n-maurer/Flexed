For working with arrays in SQL
https://docs.data.world/documentation/sql/concepts/intermediate/Working%20with%20arrays.html
https://dev.to/erikwhiting88/how-to-implement-many-to-many-relationships-in-relational-databases-3311

Color Palette:
Main Red: #DE2F35
Off White: #F6F3F0
Dark Red: #780000
Dark Grey:#212529

Font:
Makinas 4 square font

Put stuff at bottom of page like links

Landing page idea
https://getbootstrap.com/docs/4.0/examples/carousel/

Select Stuff
https://react-select.com/home
good video for Select: https://www.youtube.com/watch?v=3u_ulMvTYZI

Homepage Reference
https://startbootstrap.com/previews/creative
https://startbootstrap.com/theme/creative

Sign in/ signup modals idea

Pg-admin preloaded muscle groups:
"""
INSERT INTO public.muscle_groups(name)
VALUES ('Triceps'),('Biceps'),('Chest'),('Glutes'),
('Abdominals'),('Forearms'),('Lats'),('Abductors'),('Adductors'),
('Calves'),('Hamstrings'),('Lower Back'),('Middle Back'),
('Neck'), ('Quadriceps'),('Traps'),('Shoulders');
"""

Triceps:
"""
INSERT INTO public.exercises(
account_id, name, muscle_group_id, reps, sets, duration)
VALUES (1, 'Triceps pushdown', 1, 8, 3, NULL),
(1, 'Close-grip bench press', 1, 10, 4, NULL),
(1, 'Overhead triceps extension', 1, 12, 3, NULL),
(1, 'Dips', 1, 8, 3, NULL),
(1, 'Skullcrushers', 1, 10, 4, NULL),
(1, 'Triceps kickbacks', 1, 12, 3, NULL),
(1, 'Reverse grip pushdowns', 1, 8, 3, NULL),
(1, 'Diamond push-ups', 1, 10, 4, NULL),
(1, 'Cable overhead triceps extension', 1, 12, 3, NULL),
(1, 'JM press', 1, 8, 3, NULL),
(1, 'Triceps dips on parallel bars', 1, 10, 4, NULL),
(1, 'Rope triceps pushdowns', 1, 12, 3, NULL),
(1, 'Seated triceps press', 1, 8, 3, NULL),
(1, 'Lying triceps extension', 1, 10, 4, NULL),
(1, 'Bench dips', 1, 12, 3, NULL),
(1, 'Overhead rope triceps extension', 1, 8, 3, NULL),
(1, 'Triceps dips with knees bent', 1, 10, 4, NULL),
(1, 'Overhead barbell triceps extension', 1, 12, 3, NULL),
(1, 'EZ-bar triceps extension', 1, 8, 3, NULL),
(1, 'Triceps pushdown with rope', 1, 10, 4, NULL);
"""

Biceps:
"""
INSERT INTO public.exercises(
account_id, name, muscle_group_id, reps, sets, duration)
VALUES (1, 'Barbell biceps curl', 2, 8, 3, NULL),
(1, 'Hammer curl', 2, 10, 4, NULL),
(1, 'Preacher curl', 2, 12, 3, NULL),
(1, 'Incline dumbbell curl', 2, 8, 3, NULL),
(1, 'Reverse curl', 2, 10, 4, NULL),
(1, 'Concentration curl', 2, 12, 3, NULL),
(1, 'Cable biceps curl', 2, 8, 3, NULL),
(1, 'Spider curl', 2, 10, 4, NULL),
(1, 'Zottman curl', 2, 12, 3, NULL),
(1, 'EZ-bar curl', 2, 8, 3, NULL),
(1, 'Alternating dumbbell curl', 2, 10, 4, NULL),
(1, 'Standing barbell curl', 2, 12, 3, NULL),
(1, 'Cross-body hammer curl', 2, 8, 3, NULL),
(1, 'Seated dumbbell curl', 2, 10, 4, NULL),
(1, 'Scott curl', 2, 12, 3, NULL),
(1, 'Close-grip EZ-bar curl', 2, 8, 3, NULL),
(1, 'Seated alternate hammer curl', 2, 10, 4, NULL),
(1, 'Drag curl', 2, 12, 3, NULL),
(1, 'One-arm cable curl', 2, 8, 3, NULL),
(1, 'Machine biceps curl', 2, 10, 4, NULL);
"""

Chest:
INSERT INTO public.exercises(
account_id, name, muscle_group_id, reps, sets, duration)
VALUES (1, 'Barbell bench press', 3, 8, 3, NULL),
(1, 'Incline dumbbell press', 3, 10, 4, NULL),
(1, 'Decline bench press', 3, 12, 3, NULL),
(1, 'Dumbbell fly', 3, 8, 3, NULL),
(1, 'Cable crossover', 3, 10, 4, NULL),
(1, 'Incline bench press', 3, 12, 3, NULL),
(1, 'Push-up', 3, 8, 3, NULL),
(1, 'Pec deck fly', 3, 10, 4, NULL),
(1, 'Dips', 3, 12, 3, NULL),
(1, 'Barbell pullover', 3, 8, 3, NULL),
(1, 'Low-incline barbell bench press', 3, 10, 4, NULL),
(1, 'Standing cable fly', 3, 12, 3, NULL),
(1, 'Incline dumbbell fly', 3, 8, 3, NULL),
(1, 'Wide-grip barbell bench press', 3, 10, 4, NULL),
(1, 'Hammer-grip dumbbell bench press', 3, 12, 3, NULL),
(1, 'Push-up with feet elevated', 3, 8, 3, NULL),
(1, 'Machine chest press', 3, 10, 4, NULL),
(1, 'One-arm dumbbell bench press', 3, 12, 3, NULL),
(1, 'Barbell floor press', 3, 8, 3, NULL),
(1, 'Wide-grip push-up', 3, 10, 4, NULL);

Glutes:
INSERT INTO public.exercises(
account_id, name, muscle_group_id, reps, sets, duration)
VALUES (1, 'Barbell hip thrust', 4, 10, 4, NULL),
(1, 'Glute bridge', 4, 12, 3, NULL),
(1, 'Bulgarian split squat', 4, 8, 3, NULL),
(1, 'Single-leg deadlift', 4, 10, 4, NULL),
(1, 'Hip abduction', 4, 12, 3, NULL),
(1, 'Hip extension', 4, 8, 3, NULL),
(1, 'Cable kickback', 4, 10, 4, NULL),
(1, 'Kettlebell swing', 4, 12, 3, NULL),
(1, 'Reverse lunge', 4, 8, 3, NULL),
(1, 'Step-up', 4, 10, 4, NULL),
(1, 'Barbell deadlift', 4, 12, 3, NULL),
(1, 'Glute-ham raise', 4, 8, 3, NULL),
(1, 'Donkey kick', 4, 10, 4, NULL),
(1, 'Pistol squat', 4, 12, 3, NULL),
(1, 'Curtsy lunge', 4, 8, 3, NULL),
(1, 'Good morning', 4, 10, 4, NULL),
(1, 'Sumo squat', 4, 12, 3, NULL),
(1, 'Fire hydrant', 4, 8, 3, NULL),
(1, 'Side-lying leg lift', 4, 10, 4, NULL),
(1, 'Hip thrust with abduction', 4, 12, 3, NULL);

Abs:
INSERT INTO public.exercises(
account_id, name, muscle_group_id, reps, sets, duration)
VALUES (1, 'Barbell hip thrust', 4, 10, 4, NULL),
(1, 'Glute bridge', 4, 12, 3, NULL),
(1, 'Bulgarian split squat', 4, 8, 3, NULL),
(1, 'Single-leg deadlift', 4, 10, 4, NULL),
(1, 'Hip abduction', 4, 12, 3, NULL),
(1, 'Hip extension', 4, 8, 3, NULL),
(1, 'Cable kickback', 4, 10, 4, NULL),
(1, 'Kettlebell swing', 4, 12, 3, NULL),
(1, 'Reverse lunge', 4, 8, 3, NULL),
(1, 'Step-up', 4, 10, 4, NULL),
(1, 'Barbell deadlift', 4, 12, 3, NULL),
(1, 'Glute-ham raise', 4, 8, 3, NULL),
(1, 'Donkey kick', 4, 10, 4, NULL),
(1, 'Pistol squat', 4, 12, 3, NULL),
(1, 'Curtsy lunge', 4, 8, 3, NULL),
(1, 'Good morning', 4, 10, 4, NULL),
(1, 'Sumo squat', 4, 12, 3, NULL),
(1, 'Fire hydrant', 4, 8, 3, NULL),
(1, 'Side-lying leg lift', 4, 10, 4, NULL),
(1, 'Hip thrust with abduction', 4, 12, 3, NULL);

All:
INSERT INTO public.exercises(
account_id, name, muscle_group_id, reps, sets, duration)
VALUES (1, 'Triceps pushdown', 1, 8, 3, NULL),
(1, 'Close-grip bench press', 1, 10, 4, NULL),
(1, 'Overhead triceps extension', 1, 12, 3, NULL),
(1, 'Dips', 1, 8, 3, NULL),
(1, 'Skullcrushers', 1, 10, 4, NULL),
(1, 'Triceps kickbacks', 1, 12, 3, NULL),
(1, 'Reverse grip pushdowns', 1, 8, 3, NULL),
(1, 'Diamond push-ups', 1, 10, 4, NULL),
(1, 'Cable overhead triceps extension', 1, 12, 3, NULL),
(1, 'JM press', 1, 8, 3, NULL),
(1, 'Triceps dips on parallel bars', 1, 10, 4, NULL),
(1, 'Rope triceps pushdowns', 1, 12, 3, NULL),
(1, 'Seated triceps press', 1, 8, 3, NULL),
(1, 'Lying triceps extension', 1, 10, 4, NULL),
(1, 'Bench dips', 1, 12, 3, NULL),
(1, 'Overhead rope triceps extension', 1, 8, 3, NULL),
(1, 'Triceps dips with knees bent', 1, 10, 4, NULL),
(1, 'Overhead barbell triceps extension', 1, 12, 3, NULL),
(1, 'EZ-bar triceps extension', 1, 8, 3, NULL),
(1, 'Triceps pushdown with rope', 1, 10, 4, NULL),
(1, 'Barbell biceps curl', 2, 8, 3, NULL),
(1, 'Hammer curl', 2, 10, 4, NULL),
(1, 'Preacher curl', 2, 12, 3, NULL),
(1, 'Incline dumbbell curl', 2, 8, 3, NULL),
(1, 'Reverse curl', 2, 10, 4, NULL),
(1, 'Concentration curl', 2, 12, 3, NULL),
(1, 'Cable biceps curl', 2, 8, 3, NULL),
(1, 'Spider curl', 2, 10, 4, NULL),
(1, 'Zottman curl', 2, 12, 3, NULL),
(1, 'EZ-bar curl', 2, 8, 3, NULL),
(1, 'Alternating dumbbell curl', 2, 10, 4, NULL),
(1, 'Standing barbell curl', 2, 12, 3, NULL),
(1, 'Cross-body hammer curl', 2, 8, 3, NULL),
(1, 'Seated dumbbell curl', 2, 10, 4, NULL),
(1, 'Scott curl', 2, 12, 3, NULL),
(1, 'Close-grip EZ-bar curl', 2, 8, 3, NULL),
(1, 'Seated alternate hammer curl', 2, 10, 4, NULL),
(1, 'Drag curl', 2, 12, 3, NULL),
(1, 'One-arm cable curl', 2, 8, 3, NULL),
(1, 'Machine biceps curl', 2, 10, 4, NULL)
(1, 'Barbell bench press', 3, 8, 3, NULL),
(1, 'Incline dumbbell press', 3, 10, 4, NULL),
(1, 'Decline bench press', 3, 12, 3, NULL),
(1, 'Dumbbell fly', 3, 8, 3, NULL),
(1, 'Cable crossover', 3, 10, 4, NULL),
(1, 'Incline bench press', 3, 12, 3, NULL),
(1, 'Push-up', 3, 8, 3, NULL),
(1, 'Pec deck fly', 3, 10, 4, NULL),
(1, 'Dips', 3, 12, 3, NULL),
(1, 'Barbell pullover', 3, 8, 3, NULL),
(1, 'Low-incline barbell bench press', 3, 10, 4, NULL),
(1, 'Standing cable fly', 3, 12, 3, NULL),
(1, 'Incline dumbbell fly', 3, 8, 3, NULL),
(1, 'Wide-grip barbell bench press', 3, 10, 4, NULL),
(1, 'Hammer-grip dumbbell bench press', 3, 12, 3, NULL),
(1, 'Push-up with feet elevated', 3, 8, 3, NULL),
(1, 'Machine chest press', 3, 10, 4, NULL),
(1, 'One-arm dumbbell bench press', 3, 12, 3, NULL),
(1, 'Barbell floor press', 3, 8, 3, NULL),
(1, 'Wide-grip push-up', 3, 10, 4, NULL),
(1, 'Barbell hip thrust', 4, 10, 4, NULL),
(1, 'Glute bridge', 4, 12, 3, NULL),
(1, 'Bulgarian split squat', 4, 8, 3, NULL),
(1, 'Single-leg deadlift', 4, 10, 4, NULL),
(1, 'Hip abduction', 4, 12, 3, NULL),
(1, 'Hip extension', 4, 8, 3, NULL),
(1, 'Cable kickback', 4, 10, 4, NULL),
(1, 'Kettlebell swing', 4, 12, 3, NULL),
(1, 'Reverse lunge', 4, 8, 3, NULL),
(1, 'Step-up', 4, 10, 4, NULL),
(1, 'Barbell deadlift', 4, 12, 3, NULL),
(1, 'Glute-ham raise', 4, 8, 3, NULL),
(1, 'Donkey kick', 4, 10, 4, NULL),
(1, 'Pistol squat', 4, 12, 3, NULL),
(1, 'Curtsy lunge', 4, 8, 3, NULL),
(1, 'Good morning', 4, 10, 4, NULL),
(1, 'Sumo squat', 4, 12, 3, NULL),
(1, 'Fire hydrant', 4, 8, 3, NULL),
(1, 'Side-lying leg lift', 4, 10, 4, NULL),
(1, 'Hip thrust with abduction', 4, 12, 3, NULL),
(1, 'Crunches', 5, 15, 3, NULL),
(1, 'Plank', 5, 30, 3, NULL),
(1, 'Leg raises', 5, 12, 4, NULL),
(1, 'Sit-ups', 5, 10, 3, NULL),
(1, 'Bicycle crunches', 5, 20, 4, NULL),
(1, 'Reverse crunches', 5, 15, 3, NULL),
(1, 'Russian twists', 5, 12, 4, NULL),
(1, 'Hanging leg raises', 5, 10, 3, NULL),
(1, 'Mountain climbers', 5, 30, 3, NULL),
(1, 'Flutter kicks', 5, 20, 4, NULL),
(1, 'Side plank', 5, 30, 3, NULL),
(1, 'Windshield wipers', 5, 12, 4, NULL),
(1, 'Crossover crunches', 5, 15, 3, NULL),
(1, 'Dead bug', 5, 10, 3, NULL),
(1, 'V-sit', 5, 20, 4, NULL),
(1, 'Scissor kicks', 5, 15, 3, NULL),
(1, 'Toe touchers', 5, 12, 4, NULL),
(1, 'Seated Russian twist', 5, 20, 3, NULL),
(1, 'Hip raises', 5, 15, 4, NULL),
(1, 'L-sit', 5, 10, 3, NULL);
