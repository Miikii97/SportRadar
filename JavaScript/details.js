document.addEventListener("DOMContentLoaded", () => {

  let urlParams = new URLSearchParams(window.location.search);
  let matchIndex = urlParams.get("match");

  if (matchIndex === null || !matches[matchIndex]) {
    document.querySelector(".match-card").innerHTML = "<p>Match not found.</p>";
    return;
  }

  let match = matches[matchIndex];


  document.getElementById("homeTeam").textContent = match.homeTeam?.name || "TBD";
  document.getElementById("awayTeam").textContent = match.awayTeam?.name || "TBD";




  let score = match.result ? `${match.result.homeGoals} - ${match.result.awayGoals}` : "vs";
  document.getElementById("score").textContent = score;


  document.getElementById("matchDate").textContent = match.dateVenue || "-";
  document.getElementById("matchTime").textContent = match.timeVenueUTC || "-";
  document.getElementById("status").textContent = match.status || "-";
  document.getElementById("stage").textContent = match.stage?.name || "-";
  document.getElementById("competition").textContent = match.originCompetitionName || "-";
  document.getElementById("stadium").textContent = match.stadium || "TBD";


  let highlightsList = document.getElementById("highlightsList");
  highlightsList.innerHTML = "";

  if (match.result?.goals && match.result.goals.length > 0) {
    match.result.goals.forEach(goal => {
      let li = document.createElement("li");
      li.textContent = `${goal.player} (${goal.team}) scored at ${goal.time}'`;
      highlightsList.appendChild(li);
    });
  } else {
    highlightsList.innerHTML = "<li>No highlights available.</li>";
  }
});
