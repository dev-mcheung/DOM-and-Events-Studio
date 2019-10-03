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
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;
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

    rocket.style.position = "inherit";
    rocket.style.top = "0px";
    rocket.style.right = "0px";

    btnUp.addEventListener("click", function() {
        rocket.style.top = parseInt(rocket.style.top) - 10 + 'px';
        let shuttleHeight = document.getElementById("spaceShuttleHeight").innerHTML;
        document.getElementById("spaceShuttleHeight").innerHTML = parseInt(shuttleHeight) + Number(10000);
    });

    let right = document.getElementById("right");

    right.addEventListener("click", function() {
        rocket.style.right = parseInt(rocket.style.right) - 10 + 'px';
    });

    let down = document.getElementById("down");

    down.addEventListener("click", function() {
        rocket.style.top = parseInt(rocket.style.top) + 10 + 'px';
        let shuttleHeight = document.getElementById("spaceShuttleHeight").innerHTML;
        document.getElementById("spaceShuttleHeight").innerHTML = parseInt(shuttleHeight) - Number(10000);
    });

    let left = document.getElementById("left");

    left.addEventListener("click", function() {
        rocket.style.right = parseInt(rocket.style.right) + 10 + 'px';
    });
});
// Remember to pay attention to page loading!