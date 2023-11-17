// ... (previous JavaScript code)

// Function to initialize the page
function initPage() {
    // Attach the submitForm function to the form submission event
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', submitForm);
    } else {
        console.error('Contact form not found.');
    }

    // Sample projects data
    const projectsData = [{
            name: "Project 1",
            description: "Description of Project 1",
            link: "https://example.com/project1"
        },
        {
            name: "Project 2",
            description: "Description of Project 2",
            link: "https://example.com/project2"
        },
        // Add more projects as needed
    ];

    // Sample social media data
    const socialData = [{
            name: "Instagram",
            link: "https://www.instagram.com/your_username"
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/your_username"
        },
        {
            name: "GitHub",
            link: "https://github.com/your_username"
        },
        {
            name: "Facebook",
            link: "https://www.facebook.com/your_username"
        },
    ];

    // Populate projects and social sections
    populateSection('projects', projectsData, createProjectItem);
    populateSection('social', socialData, createSocialItem);
}

// Call the initPage function on page load
window.onload = initPage;