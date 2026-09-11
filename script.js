// DevOps Cloud Monitor

console.log("DevOps Cloud Monitor loaded successfully.");


// Update current time
function updateDateTime() {

    const now = new Date();

    const timeElement = document.getElementById("current-time");

    if (timeElement) {

        timeElement.textContent =
            now.toLocaleString();

    }
}


// Run immediately
updateDateTime();


// Update every second
setInterval(updateDateTime, 1000);


// Dashboard status
function showStatus() {

    alert(
        "DevOps Cloud Monitor is running successfully!"
    );

}