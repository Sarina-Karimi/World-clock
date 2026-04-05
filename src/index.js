import moment from "moment";
import moment from "moment-timezone";
function updateTime() {
    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector("#date");
    let losAngelesTimeElement = losAngelesElement.querySelector("#time");
    let losAngelesTime = moment().tz("America/Los-Angeles")
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("hh:mm:ss [<small>A</small>] ");

}

updateTime();
setInterval(updateTime , 1000);