## Project Name

FitLog

## Short Description

FitLog is a gym workout planner built with Next.js. Users can browse a list of exercises, view the details of each one, build a daily plan, save favorites for later, and track the total exercises, minutes, and calories of their plan.

## Technologies Used

- Next.js (App Router)
- React and TypeScript
- Tailwind CSS and daisyUI
- React Context API (global state)
- React Icons
- React Toastify
- REST API (https://api.abcz.workers.dev/api/fitlog)

## Key Features

1. **Browse workouts:** Exercises are fetched from an API and shown as cards with image, equipment, duration, calories, and rating.
2. **Workout details page:** Each exercise has its own details page reachable from the "View Details" button.
3. **My Plan page:** Users can add workouts to "Today's Plan" or move them to "Saved", with both lists organized in separate tabs.
4. **Live stats:** The plan shows total exercises, minutes, and calories, and the numbers update instantly when the list changes.
5. **Sort and remove:** Workouts can be sorted by rating, duration, or calories burned, and any card can be removed with a toast notification as feedback.