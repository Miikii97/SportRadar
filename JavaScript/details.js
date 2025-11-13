document.addEventListener("DOMContentLoaded", () => {
  // Get the match index from URL
  let urlParams = new URLSearchParams(window.location.search);
  let matchIndex = urlParams.get("match");

  if (matchIndex === null || !matches[matchIndex]) {
    document.querySelector(".match-card").innerHTML = "<p>Match not found.</p>";
    return;
  }

  let match = matches[matchIndex];

  // Set team names
  document.getElementById("homeTeam").textContent = match.homeTeam?.name || "TBD";
  document.getElementById("awayTeam").textContent = match.awayTeam?.name || "TBD";

  // Set logos (you can change src to your local images if available)
  document.getElementById("homeLogo").src = `/pictures/teams/${match.homeTeam?.slug || "placeholder"}.png`;
  document.getElementById("awayLogo").src = `/pictures/teams/${match.awayTeam?.slug || "placeholder"}.png`;

  // Set score
  let score = match.result ? `${match.result.homeGoals} - ${match.result.awayGoals}` : "vs";
  document.getElementById("score").textContent = score;

  // Set other info
  document.getElementById("matchDate").textContent = match.dateVenue || "-";
  document.getElementById("matchTime").textContent = match.timeVenueUTC || "-";
  document.getElementById("status").textContent = match.status || "-";
  document.getElementById("stage").textContent = match.stage?.name || "-";
  document.getElementById("competition").textContent = match.originCompetitionName || "-";
  document.getElementById("stadium").textContent = match.stadium || "TBD";

  // Match highlights
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
