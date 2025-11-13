document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('main_calendar'); // make sure this matches your HTML

  let events = matches.map((match, index) => {
    let home = match.homeTeam?.name || "TBD";
    let away = match.awayTeam?.name || "TBD";
    let title = `${home} vs ${away}`;
    let dateTime = `${match.dateVenue}T${match.timeVenueUTC}`;

    return {
      title: title,
      start: dateTime,
      allDay: false,
      extendedProps: {
        status: match.status,
        stage: match.stage?.name || "",
        competition: match.originCompetitionName || "",
        matchIndex: index
      }
    };
  });

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: events,
    eventColor: '#6b6b6bff',
    eventDisplay: 'block',
    height: 'auto',

    eventClick: function(info) {
      const matchIndex = info.event.extendedProps.matchIndex;
      window.location.href = `details.html?match=${matchIndex}`;
    }
  });

  calendar.render();
});