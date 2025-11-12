let matches = [ 
        { 
            season: 2026, 
            status: "played", 
            timeVenueUTC: "00:00:00", 
            dateVenue: "2025-11-03", 
            stadium: null, 
            homeTeam: { 
                name: "Al Shabab", 
                officialName: "Al Shabab FC", 
                slug: "al-shabab-fc", 
                abbreviation: "SHA", 
                teamCountryCode: "KSA", 
                stagePosition: null 
            }, 
            awayTeam: { 
                name: "Nasaf", 
                officialName: "FC Nasaf", 
                slug: "fc-nasaf-qarshi", 
                abbreviation: "NAS", 
                teamCountryCode: "UZB", 
                stagePosition: null 
            }, 
            result: { 
                homeGoals: 1, 
                awayGoals: 2, 
                winner: "Nasaf", 
                message: null, 
                goals: [], 
                yellowCards: [], 
                secondYellowCards: [], 
                directRedCards: [] 
            }, 
            stage: { 
                id: "ROUND OF 16", 
                name: "ROUND OF 16", 
                ordering: 4 
            }, 
            group: null, 
            originCompetitionId: "afc-champions-league", 
            originCompetitionName: "AFC Champions League", 
            sport: "football" 
        }, 
        { 
            season: 2026, 
            status: "scheduled", 
            timeVenueUTC: "16:00:00", 
            dateVenue: "2025-11-03", 
            stadium: null, 
            homeTeam: { 
                name: "Al Hilal", 
                officialName: "Al Hilal Saudi FC", 
                slug: "al-hilal-saudi-fc", 
                abbreviation: "HIL", 
                teamCountryCode: "KSA", 
                stagePosition: null 
            }, 
            awayTeam: { 
                name: "Shabab Al Ahli", 
                officialName: "SHABAB AL AHLI DUBAI", 
                slug: "shabab-al-ahli-club", 
                abbreviation: "SAH", 
                teamCountryCode: "UAE", 
                stagePosition: null 
            }, 
            result: { 
                homeGoals: 0, 
                awayGoals: 0, 
                winner: null, 
                winnerId: null, 
                message: null, 
                goals: [], 
                yellowCards: [], 
                secondYellowCards: [], 
                directRedCards: [], 
                scoreByPeriods: null 
            }, 
            stage: { 
                id: "ROUND OF 16", 
                name: "ROUND OF 16", 
                ordering: 4 
            }, 
            group: null, 
            originCompetitionId: "afc-champions-league", 
            originCompetitionName: "AFC Champions League", 
            sport: "football" 
        }, 
        { 
            season: 2026, 
            status: "scheduled", 
            timeVenueUTC: "15:25:00", 
            dateVenue: "2025-11-04", 
            stadium: null, 
            homeTeam: { 
                name: "Al Duhail", 
                officialName: "AL DUHAIL SC", 
                slug: "al-duhail-sc", 
                abbreviation: "DUH", 
                teamCountryCode: "QAT", 
                stagePosition: null 
            }, 
            awayTeam: { 
                name: "Al Rayyan", 
                officialName: "AL RAYYAN SC", 
                slug: "al-rayyan-sc", 
                abbreviation: "RYN", 
                teamCountryCode: "QAT", 
                stagePosition: null 
            }, 
            result: { 
                homeGoals: 0, 
                awayGoals: 0, 
                winner: null, 
                winnerId: null, 
                message: null, 
                goals: [], 
                yellowCards: [], 
                secondYellowCards: [], 
                directRedCards: [], 
                scoreByPeriods: null 
            }, 
            stage: { 
                id: "ROUND OF 16", 
                name: "ROUND OF 16", 
                ordering: 4 
            }, 
            group: null, 
            originCompetitionId: "afc-champions-league", 
            originCompetitionName: "AFC Champions League", 
            sport: "football" 
        }, 
        { 
            season: 2026, 
            status: "scheduled", 
            timeVenueUTC: "08:00:00", 
            dateVenue: "2025-11-04", 
            stadium: null, 
            homeTeam: { 
                name: "Al Faisaly", 
                officialName: "Al Faisaly FC", 
                slug: "al-faisaly-fc", 
                abbreviation: "FAI", 
                teamCountryCode: "KSA", 
                stagePosition: null 
            }, 
            awayTeam: { 
                name: "Foolad", 
                officialName: "FOOLAD KHOUZESTAN FC", 
                slug: "foolad-khuzestan-fc", 
                abbreviation: "FLD", 
                teamCountryCode: "IRN", 
                stagePosition: null 
            }, 
            result: { 
                homeGoals: 0, 
                awayGoals: 0, 
                winner: null, 
                winnerId: null, 
                message: null, 
                goals: [], 
                yellowCards: [], 
                secondYellowCards: [], 
                directRedCards: [], 
                scoreByPeriods: null 
            }, 
            stage: { 
                id: "ROUND OF 16", 
                name: "ROUND OF 16", 
                ordering: 4 
            }, 
            group: null, 
            originCompetitionId: "afc-champions-league", 
            originCompetitionName: "AFC Champions League", 
            sport: "football" 
        }, 
        { 
            season: 2026, 
            status: "scheduled", 
            timeVenueUTC: "00:00:00", 
            dateVenue: "2025-11-19", 
            stadium: null, 
            homeTeam: null, 
            awayTeam: { 
                name: "Urawa Reds", 
                officialName: "Urawa Red Diamonds", 
                slug: "urawa-red-diamonds", 
                abbreviation: "RED", 
                teamCountryCode: "JPN", 
                stagePosition: null 
            }, 
            result: null, 
            stage: { 
                id: "FINAL", 
                name: "FINAL", 
                ordering: 7 
            }, 
            group: null, 
            originCompetitionId: "afc-champions-league", 
            originCompetitionName: "AFC Champions League", 
            sport: "football" 
        } 
]  

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


// --------------------------------------//
// Select the 1rd slide container
let slide1Container = document.getElementById("slide_1_matches");

// 1st Match
let match_1 = matches[0];

let home_1 = match_1.homeTeam?.name || "TBD";
let away_1 = match_1.awayTeam?.name || "TBD";
let result_1 = match_1.status === "played" && match_1.result
    ? `${match_1.result.homeGoals} - ${match_1.result.awayGoals}`
    : "vs";

let matchHTML_1 = `
  <h3>${match_1.dateVenue} | ${match_1.timeVenueUTC}</h3>
  <h3>${home_1} ${result_1} ${away_1}</h3>
`;

// Project into the div(slide 1) in html
slide1Container.innerHTML = matchHTML_1;
// --------------------------------------//


// --------------------------------------//
// Select the 2rd slide container
let slide2Container = document.getElementById("slide_2_matches");

// 2nd Match
let match_2 = matches[1];

let home_2 = match_2.homeTeam?.name || "TBD";
let away_2 = match_2.awayTeam?.name || "TBD";
let result_2 = match_2.status === "played" && match_2.result
    ? `${match_2.result.homeGoals} - ${match_2.result.awayGoals}`
    : "vs";

let matchHTML_2 = `
  <h3>${match_2.dateVenue} | ${match_2.timeVenueUTC}</h3>
  <h3>${home_2} ${result_2} ${away_2}</h3>
`;

// Project into the div(slide 2) in html
slide2Container.innerHTML = matchHTML_2;
// --------------------------------------//


// --------------------------------------//
// Select the 3rd slide container
let slide3Container = document.getElementById("slide_3_matches");

// 3rd Match
let match_3 = matches[2];

let home_3 = match_3.homeTeam?.name || "TBD";
let away_3 = match_3.awayTeam?.name || "TBD";
let result_3 = match_3.status === "played" && match_3.result
    ? `${match_3.result.homeGoals} - ${match_3.result.awayGoals}`
    : "vs";

let matchHTML_3 = `
  <h3>${match_3.dateVenue} | ${match_3.timeVenueUTC}</h3>
  <h3>${home_3} ${result_3} ${away_3}</h3>
`;

// Project into the div(slide 3) in html
slide3Container.innerHTML = matchHTML_3;
// --------------------------------------//