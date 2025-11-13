document.addEventListener("DOMContentLoaded", function () {

  let storedMatches = localStorage.getItem("matches");
  let matchesArray = storedMatches ? JSON.parse(storedMatches) : matches;

  var calendarEl = document.getElementById("main_calendar");

  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    events: matchesArray.map((match, index) => {
      let home = match.homeTeam?.name || "TBD";
      let away = match.awayTeam?.name || "TBD";
      return {
        title: `${home} vs ${away}`,
        start: `${match.dateVenue}T${match.timeVenueUTC}`,
        allDay: false,
        extendedProps: { matchIndex: index },
      };
    }),
    eventColor: "#6b6b6bff",
    eventDisplay: "block",
    height: "auto",
    eventClick: function (info) {
      const matchIndex = info.event.extendedProps.matchIndex;
      window.location.href = `details.html?match=${matchIndex}`;
    },
  });

  calendar.render();


  const form = document.getElementById("newMatchForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let homeTeam = document.getElementById("homeTeam").value;
    let awayTeam = document.getElementById("awayTeam").value;
    let dateVenue = document.getElementById("dateVenue").value;
    let timeVenueUTC = document.getElementById("timeVenueUTC").value;
    let stadium = document.getElementById("stadium").value;

    let newMatch = {
      homeTeam: { name: homeTeam },
      awayTeam: { name: awayTeam },
      dateVenue: dateVenue,
      timeVenueUTC: timeVenueUTC,
      stadium: stadium,
      status: "scheduled",
    };


    matchesArray.push(newMatch);
    localStorage.setItem("matches", JSON.stringify(matchesArray));


    calendar.addEvent({
      title: `${homeTeam} vs ${awayTeam}`,
      start: `${dateVenue}T${timeVenueUTC}`,
      allDay: false,
      extendedProps: { matchIndex: matchesArray.length - 1 },
    });


    form.reset();
    var modalEl = document.getElementById("addMatchModal");
    var modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  });
});
