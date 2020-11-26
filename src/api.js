var getData = new XMLHttpRequest();
getData.withCredentials = true;

getData.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        console.log(this.responseText);
    }
});

getData.open("GET", "https://api.covid19api.com/dayone/country/united-kingdom/status/confirmed");

getData.send();

// for (const[key, value] of Object.entries(getData)) {
//     console.log(key, value);
// }

// const dailyStatsAll = async() => {
//     const dailyStatsResponse = await fetch('https://api.covid19api.com/country/united-kingdom/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z');
//     const dailyStatsDate = await dailyStatsResponse.json();
//     console.log(dailyStatsDate)
// }