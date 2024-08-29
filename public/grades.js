document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("assignmentSearch");
    const table = document.querySelector(".grades tbody");
    const rows = table.getElementsByTagName("tr");

    searchInput.addEventListener("input", function() {
        const filter = searchInput.value.toUpperCase();

        // Loop through table rows
        for (let i = 0; i < rows.length; i++) {
            const assignmentName = rows[i].getElementsByTagName("td")[0];
            if (assignmentName) {
                const textValue = assignmentName.textContent || assignmentName.innerText;
                if (textValue.toUpperCase().startsWith(filter)) {
                    rows[i].style.display = "";
                } else {
                    rows[i].style.display = "none";
                }
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const categorySortButton = document.getElementById("categorySort");
    const table = document.querySelector(".grades tbody");
    let ascending = true; // Start with ascending order

    categorySortButton.addEventListener("click", function() {
        const rows = Array.from(table.rows);
        
        rows.sort((a, b) => {
            const cellA = a.cells[1].textContent.trim();
            const cellB = b.cells[1].textContent.trim();
            
            if (ascending) {
                return cellA.localeCompare(cellB); // Ascending order
            } else {
                return cellB.localeCompare(cellA); // Descending order
            }
        });
        
        // Append sorted rows back to the table
        rows.forEach(row => table.appendChild(row));
        
        // Toggle the sort order for the next click
        ascending = !ascending;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const categorySortButton = document.getElementById("dateSort");
    const table = document.querySelector(".grades tbody");
    let ascending = true; // Start with ascending order

    categorySortButton.addEventListener("click", function() {
        const rows = Array.from(table.rows);
        
        rows.sort((a, b) => {
            const dateA = new Date(a.cells[2].textContent.trim());
            const dateB = new Date(b.cells[2].textContent.trim());
            
            if (ascending) {
                return dateA - dateB; // Ascending order
            } else {
                return dateB - dateA; // Descending order
            }
        });
        
        // Append sorted rows back to the table
        rows.forEach(row => table.appendChild(row));
        
        // Toggle the sort order for the next click
        ascending = !ascending;
    });
});