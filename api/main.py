from fastapi import FastAPI
from routers import muscle_groups, exercises, workouts, w_e_table, dates, ex_wo_dates, accounts


app = FastAPI()
app.include_router(accounts.router, tags=['Accounts'])
app.include_router(muscle_groups.router, tags=['Muscle Groups'])
app.include_router(exercises.router, tags=['Exercises'])
app.include_router(workouts.router, tags=['Workouts'])
app.include_router(w_e_table.router, tags=['Workout Exercise Relationship Table'])
app.include_router(dates.router, tags=['Date Workout Relationship Table'])
app.include_router(ex_wo_dates.router, tags=['Exercise Workout Date Table'])
