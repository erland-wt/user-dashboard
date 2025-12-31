# User Dashboard

A React-based user dashboard that demonstrates clean architecture,
async data handling, and performance-aware UI development.

## Features
- Fetch users from external API
- Search and filter users in real time
- Client-side pagination
- Loading, error, and empty state handling
- Error boundary for UI safety

## Tech Stack
- React
- JavaScript (ES6+)
- Custom Hooks
- Fetch API

## Architecture
- UI components separated from logic
- Custom hooks for data fetching
- Derived state for filtering and pagination

## Performance & Optimization
- Memoized filtering and pagination using `useMemo`
- Avoided unnecessary re-renders
- Clean one-way data flow

## How to Run Locally
```bash
npm install
npm run dev
