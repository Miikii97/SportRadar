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

// // Build Table Header
// let html = `
// <table class="table">
//   <thead>
//     <tr>
//       <th style="width:100px;">Date</th>
//       <th style="width:10px;">|</th>
//       <th style="width:60px;">Hour</th>
//       <th>Home</th>
//       <th>Result</th>
//       <th>Away</th>
//     </tr>
//   </thead>
//   </tbody>
// `;

// // Loop over matches
// for (let val of matches) {
//     let date = `${val.dateVenue}`;
//     let hour = `${val.timeVenueUTC}`;
//     let home = val.homeTeam?.name || "TBD";
//     let away = val.awayTeam?.name || "TBD";
//     let result = val.status === "played" && val.result
//         ? `${val.result.homeGoals} - ${val.result.awayGoals}`
//         : "vs";

//     html += `
//       <tr>
//         <td>${date}</td>
//         <td>|</td>
//         <td>${hour}</td>
//         <td>${home}</td>
//         <td>${result}</td>
//         <td>${away}</td>
//       </tr>`;
// }

// document.getElementById("result").innerHTML = html;



// // To loop the matches which are going to be shown on the carousel-slider
// const slideIds = ["slide_1_matches", "slide_2_matches", "slide_3_matches", "slide_4_matches", "slide_5_matches"];

// for (let i = 0; i < 5; i++) {
//     const container = document.getElementById(slideIds[i]);
//     const match = matches[i];

//     const home = match.homeTeam?.name || "TBD";
//     const away = match.awayTeam?.name || "TBD";
//     const result = match.status === "played" && match.result
//         ? `${match.result.homeGoals} - ${match.result.awayGoals}`
//         : "vs";

//     container.innerHTML = `
//         <h3>${match.dateVenue} | ${match.timeVenueUTC}</h3>
//         <h3>${home} ${result} ${away}</h3>
//     `;
// }