// Write your JavaScript code here.

// load event handler to window 
window.addEventListener("load", function() {
    console.log("window loaded");

    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function() {
        let confirmation = confirm("Confirm that the shuttle is ready for takeoff?");
        if (confirmation === true) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = 100000;
        }
    });

    let landing = document.getElementById("landing");
    landing.addEventListener("click", function() {
        alert("The shuttle is landing. Landing is engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    });

    let abortMission = document.getElementById("missionAbort");
    abortMission.addEventListener("click", function() {
        let confirmation = confirm("Confirm that you want to abort the mission.");
        if (confirmation === true) {
            document.getElementById("flightStatus").innerHTML = "Mission Aborted";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    });

    let rocket = document.getElementById("rocket");
    let btnUp = document.getElementById("up");
    btnUp.addEventListener("click", function() {
        rocket.style.top = 10 + "px";
        parseInt(document.getElementById("spaceShuttleHeight").innerHTML += 10000);
    });
});
// Remember to pay attention to page loading!