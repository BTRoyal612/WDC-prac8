function showActors() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var tableBody = document.getElementById("actors_name");
            tableBody.innerHTML = "";
            var actors = JSON.parse(this.responseText);

            for (let a of actors) {
                var row = document.createElement("tr");
                var first = document.createElement("td");
                var last = document.createElement("td");

                first.innerHTML = a["first_name"];
                last.innerHTML = a["last_name"];

                row.appendChild(first);
                row.appendChild(last);
                tableBody.appendChild(row);
            }
        }
    }

    xhttp.open("GET", "/showActors", true);
    xhttp.send();
}

function addActor() {
    var first = document.getElementById("actor-first-name").value;
    var last = document.getElementById("actor-last-name").value;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        }
    }

    xhttp.open("POST", "/addActor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ first: first, last: last }));
}