
function updateTime() {
    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles")
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("hh:mm:ss [<small>]A[</small>]");

    let parisElement = document.querySelector("#paris");
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris")
    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format("hh:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime , 1000);

function updateCity(event) {
    event.preventDefault();
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let showCity = document.querySelector(".cities")
    showCity.innerHTML = `
     <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")} </div>
        </div>
            <div class="time">${cityTime.format("hh:mm:ss ")}<small>${cityTime.format("A")}</small></div>
     </div>                 
`;
}

let citiesElement = document.querySelector("#city");
citiesElement.addEventListener("change" , updateCity)