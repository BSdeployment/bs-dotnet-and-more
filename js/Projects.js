export function searchTables1() {
    // Get the input value from the search box
    var input = document.getElementById("searchInput").value.toLowerCase();

    // Get all the tables on the page
    var tables = document.getElementsByClassName("proj-cards-title");

    // Loop through each table and hide/show based on the search input
    for (var i = 0; i < tables.length; i++) {
        var table = tables[i];
        var rows = table.getElementsByClassName("proj-card");

        // Flag to track if any matching row is found in the current table
        var found = false;

        // Loop through each row and hide/show based on the search input
        for (var j = 0; j < rows.length; j++) {
            var row = rows[j];
            let rowData = row.getElementsByTagName("h4")[0]; // Assuming the cell you want to search is the first cell

            // If the cell's value matches the search input, show the row, otherwise hide it
            if (rowData) {
                let cellData = rowData.textContent;
                if (cellData.toLowerCase().startsWith(input)) {
                    row.style.display = "";
                    found = true; // Set the flag to true if a matching row is found in the current table
                } else {
                    row.style.display = "none";
                }
            }
        }

        // Hide or show the table based on the flag value
        if (found) {
            table.style.display = ""; // Show the table if a matching row is found
        } else {
            table.style.display = "none"; // Hide the table if no matching row is found
        }
    }
}
