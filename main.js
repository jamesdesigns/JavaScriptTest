//Your js here

// Get current date and time
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear().toString().substr(-2);



// Get current Time
// let time = today.getHours() + ":" + today.getMinutes();
let hours = today.getHours();
let minutes = today.getMinutes();
let ampm = hours >= 12 ? 'PM' : 'AM';

if (hours > 12) {
    hours = hours - 12;
}
if (minutes < 10) {
    minutes = "0" + minutes;
}

document.getElementById("currentTime").innerHTML = `<span style="margin-left:38%;">${hours} : ${minutes}</span> <span style="font-size:35%;font-weight:bold;margin-top:90px;">${ampm}</span>`;


// Assign Months to a variable named month
const month = ['January','February','March', 'April','May','June','July', 'August','September','October','November','December']
document.getElementById("spellOutDate").innerHTML = month[today.getMonth()];
const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
document.getElementById("spellOutDate").innerHTML = `${day[today.getDay()]}, ${month[today.getMonth()]} ${dd}`;
today = mm + '/' + yyyy;
document.getElementById("todaysDate").innerHTML = `${today}`;

