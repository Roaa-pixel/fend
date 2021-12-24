/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
$(document).ready(function(){     
    var _dockPanel;
    var content = document.createElement('div');
    content.innerHTML = "";
    var liststart = document.createElement('ul');
    var listelement1 = document.createElement('li');
    var listelement2 = document.createElement('li');
    listelement1.innerHTML = '<a href="#tabs-1">One</a>';
    listelement2.innerHTML = '<a href="#tabs-2">Two</a>';
    liststart.appendChild(listelement1);
    liststart.appendChild(listelement2);
    var t1 = document.createElement('div');
    var t2 = document.createElement('div');

    t1.id = "tabs-1";
    t2.id = "tabs-2";

    t1.innerHTML = "Tab 1";
    t2.innerHTML = "Tab 2";

    content.appendChild(liststart);
    content.appendChild(t1);
    content.appendChild(t2);
    var html = [
      '<div>',
      '<nav class="navbar navbar-default">',

      '<ul class="nav navbar-nav">',
      '<li class="active"><a href="#">Home</a></li>',
      ' <li><a href="#">Page 1</a></li>',
      '<li><a href="#">Page 2</a></li>',
      '</ul>',

      '</nav>',
      '</div>'
    ].join('\n');
    $("#navbar1").append(html);
    $("#navbar2").append(content);
});

// Scroll to section on link click

// Set sections as active


