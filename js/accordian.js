// accordion.js

// Get all accordion items
const accordionItems = document.querySelectorAll('.accordion-item');

// Add a click event listener to each item
accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');

    title.addEventListener('click', () => {
        // Toggle the content's display when the title is clicked
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
