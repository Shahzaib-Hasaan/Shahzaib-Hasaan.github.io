// Get the previous and next button elements
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Replace "X" and "Y" with the actual links to the previous and next blog posts
const previousPostLink = "blog-post1.html"; // Replace with the actual link
const nextPostLink = "blog-post2.html"; // Replace with the actual link

// Check if this is the first post and disable the "Previous" button
if (document.referrer === "" || previousPostLink === "") {
    prevButton.classList.add('disabled');
}

// Check if this is the last post and disable the "Next" button
if (nextPostLink === "") {
    nextButton.classList.add('disabled');
}
