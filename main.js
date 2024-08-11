var typed = new Typed(".text", {
    strings: [ "I am Student","Learning FrontEnd Developer", "Learning Web Developer"],
    typeSpeed: 10,
    backSpeed: 10,
    backDelay: 1000,
    loop: true,
});


document.getElementById('okButton').addEventListener('click', function() {
    // Ensure the form with id 'contactForm' exists
    var form = document.getElementById('contactForm');
    if (form) {
        form.reset(); // Reset the form fields
    }

    // Ensure the modal is properly referenced and close it
    $('#submissionModal').modal('hide');
});


