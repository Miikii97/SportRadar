// Build Table Header
let html = `
<table class="table">
  <thead>
    <tr>
      <th style="width:100px;">Date</th>
      <th style="width:10px;">|</th>
      <th style="width:60px;">Hour</th>
      <th>Home</th>
      <th>Result</th>
      <th>Away</th>
    </tr>
  </thead>
  </tbody>
`;

// Loop over matches
for (let val of matches) {
    let date = `${val.dateVenue}`;
    let hour = `${val.timeVenueUTC}`;
    let home = val.homeTeam?.name || "TBD";
    let away = val.awayTeam?.name || "TBD";
    let result = val.status === "played" && val.result
        ? `${val.result.homeGoals} - ${val.result.awayGoals}`
        : "vs";

    html += `
      <tr>
        <td>${date}</td>
        <td>|</td>
        <td>${hour}</td>
        <td>${home}</td>
        <td>${result}</td>
        <td>${away}</td>
      </tr>`;
}

document.getElementById("result").innerHTML = html;