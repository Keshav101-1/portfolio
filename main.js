var typed = new Typed(".text", {
    strings: [ "I am Student","Learning FrontEnd Developer", "Learning Web Developer"],
    typeSpeed: 10,
    backSpeed: 10,
    backDelay: 1000,
    loop: true,
});


document.getElementById('okButton').addEventListener('click', function() {
    var form = document.getElementById('contactForm');
    if (form) {
        form.reset(); 
    }
    $('#submissionModal').modal('hide');
});


