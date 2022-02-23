// Here i'm using jquery for filterable image gallery. I'm inspired by this youtube 
// tutorial "https://www.youtube.com/watch?v=ZjrqnxDEkzA&t=388s&ab_channel=OnlineTutorials"

// The ready event occurs when the DOM (document object model)
//  has been loaded. Because this event occurs after the document is ready,
//  it is a good place to have all other jQuery events and functions. 
// Like in the example above. The ready() method specifies what happens 
// when a ready event occurs.
$(document).ready(function () {
    // jQuery click event occurs when you click on an html element. 
    // jQuery click() method is used to trigger the click event.
    $('.list').click(function () {

        // storing the value of data-filter attribute of the button in value variable
        const value = $(this).attr('data-filter');

        // if the stored value is equal to All then display every item
        if (value == 'All') {
            // 1000 is passed as argument for the speed parameter
            $('.item').show('1000');
        }

        else {
            // The not() method returns elements that do not match a certain criteria.
            // The hide() method hides the selected elements
            $('.item').not('.' + value).hide('1000');
            // The filter() method returns elements that match a certain criteria.
            // only the matched items will be shown
            $('.item').filter('.' + value).show('1000');
        }
    })

    // add active class for changing the properties of the selected button
    // so that the user understands which button is pressed
    $('.list').click(function () {
        // the .siblings() method allows us to search through the siblings of these elements in the DOM tree
        // after adding active class in any of the child, remove the active class from other childs
        $(this).addClass('active').siblings().removeClass('active');
    })
})