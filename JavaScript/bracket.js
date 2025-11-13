document.addEventListener("DOMContentLoaded", () => {
  if (!matches || matches.length === 0) {
    console.error("No match data found!");
    return;
  }

  // Loop through your first few matches and assign them to divs
  let ids = ["match_1", "match_2", "match_3", "match_4", "semifinal_1", "semifinal_2", "final_match"];

  ids.forEach((id, index) => {
    let match = matches[index];
    if (!match) return;

    let container = document.getElementById(id);
    if (!container) return;

    let homeName = match.homeTeam?.name || "TBD";
    let awayName = match.awayTeam?.name || "TBD";
    let dateTime = `${match.dateVenue} | ${match.timeVenueUTC}`;
    let result = match.status === "played" && match.result
      ? `${match.result.homeGoals} - ${match.result.awayGoals}`
      : "vs";

    container.querySelector(".home").textContent = homeName;
    container.querySelector(".away").textContent = awayName;
    container.querySelector(".datetime").textContent = `${dateTime} (${result})`;
  });
});
