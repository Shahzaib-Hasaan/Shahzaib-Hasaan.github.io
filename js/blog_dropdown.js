// Get the button and the dropdown content
const button = document.getElementById("dropdown-button");
const dropdown = document.getElementById("myDropdown");

// Toggle the dropdown when the button is clicked
button.addEventListener("click", function() {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});

// Close the dropdown when the user clicks outside of it
window.addEventListener("click", function(event) {
    if (event.target !== button) {
        dropdown.style.display = "none";
    }
});

// Prevent the dropdown from closing when clicking inside it
dropdown.addEventListener("click", function(event) {
    event.stopPropagation();
});
