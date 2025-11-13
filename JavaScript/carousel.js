// To loop the matches which are going to be shown on the carousel-slider
const slideIds = ["slide_1_matches", "slide_2_matches", "slide_3_matches", "slide_4_matches", "slide_5_matches"];

for (let i = 0; i < 5; i++) {
    const container = document.getElementById(slideIds[i]);
    const match = matches[i];

    const home = match.homeTeam?.name || "TBD";
    const away = match.awayTeam?.name || "TBD";
    const result = match.status === "played" && match.result
        ? `${match.result.homeGoals} - ${match.result.awayGoals}`
        : "vs";

    container.innerHTML = `
        <h3>${match.dateVenue} | ${match.timeVenueUTC}</h3>
        <h3>${home} ${result} ${away}</h3>
    `;
}