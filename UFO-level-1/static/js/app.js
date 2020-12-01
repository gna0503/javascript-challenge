// from data.js
var tableData = data;

// YOUR CODE HERE!

// Filter data function
  // Get a reference to the table body
  var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
  tbody.html("");
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(people);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
  filteredData.forEach((dfo)=> {
    // console.log(dfo);
    var row = tbody.append("tr");
    Object.entries(dfo).forEach(([key, value]) => {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

;};
 



