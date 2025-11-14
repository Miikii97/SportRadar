// Sports Tournament Match Tracker //

A web application that displays sports matches in a calendar and allows users to view details or add new matches. The project uses FullCalendar, Bootstrap, and LocalStorage to create a dynamic and interactive match-tracking system.

// Features //

1. Match Calendar

Displays all scheduled matches in a monthly view

Shows each match as a simple dot to keep the calendar clean

Clicking a match opens a details page

2. Match Details Page

Shows participating teams

Displays date, time, stadium, status, stage, competition

Shows match highlights (goals, cards, etc.)

Supports both default and user-created matches

3. Add New Match

Modal form allows users to add custom matches

New matches are:

Added to the calendar

Stored in localStorage

Persisted after page refresh

4. LocalStorage Integration

Users’ added matches remain saved

Calendar loads from saved data first, fallback to default matches

// Project Structure //
/CSS
├── bracket.css
├── details.css
├── index.css
├── navbar_footer.css

/JavaScript
├── bracket.js
├── calendar.js
├── carousel.js
├── details.js
├── matches_table.js
├── matches.js
index.html
details.html
bracket.html
README.md

// Technologies Used //

HTML5
CSS3
JavaScript
Bootstrap 5
FullCalendar.js
LocalStorage API

// How It Works //

1. Loading Matches

On page load, the app checks localStorage for saved matches

If none exist, it loads default matches from matches.js

2. Calendar Setup

Each match becomes a FullCalendar event

A dot marks the match day

Clicking the event opens the details page with the match ID

3. Adding a Match

User fills out the form in the modal

Match is pushed to the array and saved in localStorage

Calendar updates instantly without refreshing

4. Viewing Match Details

The page reads the match index from the URL

Displays full match info using details.js

// Author //

Miki Milenovikj
A sports enthusiast and web developer building interactive web tools.
