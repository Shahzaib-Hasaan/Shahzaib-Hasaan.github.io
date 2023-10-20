// Get the button and the dropdown content
const button = document.getElementById("dropdown-button");
const dropdown = document.getElementById("myDropdown");
const image = document.querySelector("img[alt='Tooltip Image']");

// Function to toggle the dropdown
function toggleDropdown() {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// Toggle the dropdown when the button or the image is clicked
button.addEventListener("click", toggleDropdown);
image.addEventListener("click", toggleDropdown);

// Close the dropdown when the user clicks outside of it
window.addEventListener("click", function(event) {
    if (event.target !== button && event.target !== image) {
        dropdown.style.display = "none";
    }
});

// Prevent the dropdown from closing when clicking inside it
dropdown.addEventListener("click", function(event) {
    event.stopPropagation();
});
