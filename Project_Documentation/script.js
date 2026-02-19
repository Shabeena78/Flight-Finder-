function searchFlight() {

    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let date = document.getElementById("date").value;
    let results = document.getElementById("results");

    if(from === "" || to === "" || date === "") {
        results.innerHTML = "<p>Please fill all details!</p>";
        return;
    }

    let flights = [
        {name: "Air India", price: 5000, duration: "2h 30m"},
        {name: "IndiGo", price: 4500, duration: "2h 45m"},
        {name: "SpiceJet", price: 4800, duration: "3h"}
    ];

    let output = `<h3>Flights from ${from} to ${to} on ${date}</h3>`;

    flights.forEach(flight => {
        output += `<p>${flight.name} - ₹${flight.price} - ${flight.duration}</p>`;
    });

    results.innerHTML = output;
}
