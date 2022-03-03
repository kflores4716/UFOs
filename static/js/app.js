// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Start a mew function to build a table
function buildTable(data) {
    // Clear the table of existing data
    tbody.html("");
    // Loop through each object in the data and append row and cells for each value
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// Start a new function for our scraping button
function handleClick() {
    // Create variable so we can add date function
    let date = d3.select("#datetime").property("value");
    // Set default filter and save to a new variable
    let filteredData = tableData;
    // Create an if statement to check for a date and return only the info from that date
    if (date) {
        // Apply filter to the table data to only keep rows where datetime value matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // If no date was entered, filteredData will return the original tableData
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Call buildTable function to show users the original table
buildTable(tableData);

