//your JS code here. If required.
// Select all circles and buttons
let circles = Array.from(document.querySelectorAll('.circle'));
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

// Add event listener to the next button
nextButton.addEventListener('click', () => {
    // Find the current active circle
    let activeIndex = circles.findIndex(circle => circle.classList.contains('active'));
    
    // Remove active class from current circle and add to next one
    circles[activeIndex].classList.remove('active');
    circles[activeIndex + 1].classList.add('active');

    // Enable the prev button
    prevButton.disabled = false;

    // If all circles are active, disable the next button
    if(activeIndex + 1 === circles.length - 1) {
        nextButton.disabled = true;
    }
});

// Add event listener to the prev button
prevButton.addEventListener('click', () => {
    // Find the current active circle
    let activeIndex = circles.findIndex(circle => circle.classList.contains('active'));

    // Remove active class from current circle and add to previous one
    circles[activeIndex].classList.remove('active');
    circles[activeIndex - 1].classList.add('active');

    // Enable the next button
    nextButton.disabled = false;

    // If first circle is active, disable the prev button
    if(activeIndex - 1 === 0) {
        prevButton.disabled = true;
    }
});