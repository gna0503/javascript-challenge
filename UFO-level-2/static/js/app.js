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
// var new_tbody = document.createElement('tbody');
// populate_with_new_rows(new_tbody);
// old_tbody.parentNode.replaceChild(new_tbody, old_tbody)
 

  // var tbody = d3.select("tbody");
  // $("#tbody").empty();
  // tbody.innerhtml="";
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry= d3.select("#country");
  var inputShape = d3.select("#shape");
  // var inputState = d3.select("#state");

  // Get the value property of the input element
  var inputValue_date = inputDate.property("value");
  var inputValue_city = inputCity.property("value");
  var inputValue_state = inputState.property("value");
  var inputValue_country= inputCountry.property("value");
  var inputValue_shape = inputShape.property("value");
  
//   console.log(inputValue);
//   console.log(people);

  var query = {
    datetime: inputValue_date,
    city: inputValue_city,
    state: inputValue_state,
    country: inputValue_country,
    shape: inputValue_shape

  };
  var filteredData = tableData.filter(search, query);

  function search(ufo){
    return Object.keys(this).every((key) => ufo[key] === this[key]);
}


  // var filteredData = tableData.filter(ufo => {
  //   ufo.datetime === inputValue_date;
  //   ufo.city === inputValue_city;
  // });
  
  filteredData.forEach((ufo)=> {
    // console.log(ufo);
    
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
     // populate_with_new_rows(new_tbody);
  
    });
});

;};
 



