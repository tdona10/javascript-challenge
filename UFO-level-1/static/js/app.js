// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

// Reference to the table body
var tbody = d3.select("tbody");

// Values for each sighting
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append one table row (tr) for each UFO Sighting 
    var row = tbody.append("tr");

    // Console.log each UFO Sighting 
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        // Append a table data (td) for each value
        var cell = row.append("td");
        cell.text(value);
    });
});


// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input date 
    var inputElement = d3.select("#datetime");
    // Get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");
    // console.log input value
    console.log(inputValue);
    // Filter Data by input datetime 
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    // console.log filter values
    console.log(filteredData);
    // Filter selection for each
    filteredData.forEach(function(selections) {

    console.log(selections);
    // Append one table row (tr) for each UFO Sighting object
    var row = tbody.append("tr");
    // Use Object.entries to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append a table data (td) for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});