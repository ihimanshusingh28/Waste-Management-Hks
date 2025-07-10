// nav hero
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Add a click event listener to the hamburger icon
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-icon');
    const menu = document.querySelector('.menu');

   

    // Event listener for closing the menu when a menu item is clicked
    const menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', toggleMenu);
    });
});
// nav and hero

//login form

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    console.log(`Login: Username - ${username}, Password - ${password}`);
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
   
    console.log(`Register: Username - ${username}, Email - ${email}, Password - ${password}`);
});
// JavaScript to clear form fields on page load
window.onload = function() {
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
};

// Add event listener for the form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    // Perform login validation and processing here
    console.log(`Login: Username - ${username}, Password - ${password}`);
});
//login form

// Get the "Read More" button and more content
const readMoreButton = document.getElementById("read-more-button");
const moreContent = document.getElementById("more-content");


// about us
const learnMoreBtn = document.getElementById('learn-more');
const moreInfo = document.getElementById('more-info');

learnMoreBtn.addEventListener('click', () => {
    moreInfo.classList.toggle('show-info');
    if (moreInfo.classList.contains('show-info')) {
        learnMoreBtn.textContent = 'Show Less';
    } else {
        learnMoreBtn.textContent = 'Learn More';
    }
});
// more info
const learnMoreBtnStory = document.getElementById('learn-more-story');
const hiddenParagraphStory = document.getElementById('hidden-paragraph-story');

const learnMoreBtnMission = document.getElementById('learn-more-mission');
const hiddenParagraphMission = document.getElementById('hidden-paragraph-mission');

learnMoreBtnStory.addEventListener('click', () => {
    hiddenParagraphStory.classList.toggle('show-paragraph');

    if (hiddenParagraphStory.classList.contains('show-paragraph')) {
        learnMoreBtnStory.textContent = 'Show Less';
    } else {
        learnMoreBtnStory.textContent = 'Learn More';
    }
});

learnMoreBtnMission.addEventListener('click', () => {
    hiddenParagraphMission.classList.toggle('show-paragraph');

    if (hiddenParagraphMission.classList.contains('show-paragraph')) {
        learnMoreBtnMission.textContent = 'Show Less';
    } else {
        learnMoreBtnMission.textContent = 'Learn More';
    }
});



// Get the registration form element
const registerForm = document.getElementById('registerForm');

// Add a submit event listener to the form
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get user input values from the form
    const name = document.getElementById('registerName').value;
    
    const contact = document.getElementById('registerContact').value;
    const age = document.getElementById('registerAge').value;
    const address = document.getElementById('registerAddress').value;
    const pincode = document.getElementById('registerPincode').value;
}
)

