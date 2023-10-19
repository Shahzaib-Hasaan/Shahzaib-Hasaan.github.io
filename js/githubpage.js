// Sample data for blog posts (you should load this dynamically from a database):
const blogPosts = [
    { title: "GitHub Post Title 1", date: "2023-09-30", link: "blog-post1.html" },
    { title: "GitHub Post Title 2", date: "2023-09-25", link: "blog-post2.html" },
    { title: "GitHub Post Title 3", date: "2023-09-20", link: "blog-post3.html" },
    { title: "GitHub Post Title 4", date: "2023-09-15", link: "blog-post4.html" },
    { title: "GitHub Post Title 5", date: "2023-09-10", link: "blog-post5.html" },
    { title: "GitHub Post Title 6", date: "2023-09-05", link: "blog-post6.html" },
    { title: "GitHub Post Title 7", date: "2023-09-01", link: "blog-post7.html" },
    // Add more posts
];

// Number of posts to display per page and current page number
const postsPerPage = 5;
let currentPage = 1;

// Function to sort and display blog posts
function displayBlogPosts() {
    // Sort blogPosts based on sorting criteria (New to Old or Old to New)
    // This logic should be added to your sorting buttons.

    // Calculate the start and end index for the current page
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    // Get the current page's blog posts
    const currentPosts = blogPosts.slice(startIndex, endIndex);

    // Render currentPosts on the page
    const blogPostsContainer = document.querySelector('.blog-posts');
    blogPostsContainer.innerHTML = ''; // Clear the container
    currentPosts.forEach(post => {
        // Create HTML elements for each blog post and append them to the container
        const blogPostElement = document.createElement('div');
        blogPostElement.innerHTML = `
        <h2>${post.title}</h2>
        <p class="blog-meta">Posted on ${post.date} by Shahzaib Hassan</p>
        <p>Content of the blog post...</p>
        <a href="${post.link}" class="read-more">Read More</a>
    `;
    
        blogPostsContainer.appendChild(blogPostElement);
    });
}
// Event listener for "New to Old" sorting button
document.getElementById('newToOldButton').addEventListener('click', () => {
    blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort from new to old
    displayBlogPosts();
});

// Event listener for "Old to New" sorting button
document.getElementById('oldToNewButton').addEventListener('click', () => {
    blogPosts.sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort from old to new
    displayBlogPosts();
});


// Event listener for "Previous Page" button
document.getElementById('prevPageButton').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayBlogPosts();
    }
});

// Event listener for "Next Page" button
document.getElementById('nextPageButton').addEventListener('click', () => {
    if (currentPage < Math.ceil(blogPosts.length / postsPerPage)) {
        currentPage++;
        displayBlogPosts();
    }
});

// Initial display of blog posts
displayBlogPosts();