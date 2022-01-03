export default function countdown() {
    const countDate = new Date("Oct 28, 2022 00:00:00").getTime()
    const now = new Date().getTime()
    const gap = countDate - now

    const second = 1000;
    const minutes = second * 60
    const hour = minutes * 60
    const days = hour * 24

    const textDay = Math.floor(gap / days)
    const textHour = Math.floor((gap % days) / hour) 
    const textMinutes = Math.floor((gap % hour) / minutes)
    const textSeconds = Math.floor((gap % minutes) / second) 

    function makeMeTwoDigits(n){
        return (n < 10 ? "0" : "") + n;
    }

    document.getElementById("days").innerHTML = textDay
    document.getElementById("hours").innerHTML = makeMeTwoDigits(textHour)
    document.getElementById("minutes").innerHTML = makeMeTwoDigits(textMinutes)
    document.getElementById("seconds").innerHTML = makeMeTwoDigits(textSeconds)
}

setInterval(countdown, 1000)