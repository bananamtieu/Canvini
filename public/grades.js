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
})
