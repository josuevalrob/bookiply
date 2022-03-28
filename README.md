### Bookiply FE Task
##Context:
Bookiply is a property management system that helps homeowners distribute and
manage their properties and bookings from one single platform.
To help homeowners understand how their properties perform across the different
channels, we decided to collect guests’ reviews and show them in our tool.
Goal:
We would like you to implement the feature following the design mock-up:
https://invis.io/UGYDRV8BRFA#/427604010_Case_Study_no_nav (assets can be
downloaded from: https://interview-task-api.bookiply.io/assets.zip)

## Nice to implement if you still have some time:
- Responsive version
- Pagination
- Filtering by score and by channels
Tech requirement
- Use React as front-end library (You can use `create-react-app` as your starting
point.)
- Request the reviews endpoint asynchronously and store the result in a Redux
store.
- You can use any CSS solution you’re familiar with.
- Usage of Typescript is highly appreciated
- The reviews API endpoint is: https://interview-task-api.bookiply.io/reviews (the
API is powered by https://github.com/typicode/json-server feel free to check the
doc for pagination/filtering etc).
Happy coding!

## Approach:
We are not using Redux, mainly cuz is overkill for this task.
For theme, we using Material Ui. 
For handling logic, we have *Adapters* and *Hooks*
The main component is the *Review* component, who is in charge for fetching the data 

├── src
│   ├── Adapters
│   │   ├── reviewsAdapter.test.tsx
│   │   ├── reviewsAdapter.tsx
│   │   └── reviewsExample.json
│   ├── Components
│   │   ├── App
│   │   │   ├── App.test.tsx
│   │   │   ├── App.tsx
│   │   │   ├── logo.svg
│   │   │   └── styles.tsx
│   │   ├── Header
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   └── Reviews
│   │       ├── Components
│   │       │   ├── Comment.tsx
│   │       │   └── styles.tsx
│   │       ├── assets
│   │       │   ├── thumb-down.svg
│   │       │   └── thumb-up.svg
│   │       ├── index.tsx
│   │       └── styles.tsx
│   ├── Hooks
│   │   └── reviews.tsx
│   ├── Redux
│   │   └── store.js
│   ├── Services
│   │   └── fetchReviews.ts
│   ├── assets
│   │   ├── AIRBNB.svg
│   │   ├── BOOKINGCOM.svg
│   │   ├── HOLIDU.svg
│   │   └── background.png
│   ├── index.css
│   ├── index.tsx

## How can we improve?
- We could/should add more tests, specially for the hooks.
- The redux approach, still an option, so with more time we could implement it
- The website is not responsive, so we could add some css to make it responsive
