//  This code block interacts with the menu icon in the header section of the mobile view
//  Here I'm adding an event listener in the menu icon and when the icon is clicked the hidden
//  nav links will be displayed as flex items

//  select the elements by the className
const navItems = document.querySelector('.navItems');
const menuIcon = document.querySelector('.menu');

// Adding event listener in hamburger menu
menuIcon.addEventListener('click', show);

// event function
function show() {
    // Showing the nav items as a flex item which has 0 margin at top
    navItems.style.display = 'flex';
    navItems.style.top = 0;
}


// For adding event listener in the menu icon, very much inspired by this youtube tutorial
// https://www.youtube.com/watch?v=1iS0r238G4g&ab_channel=DeltatyCode