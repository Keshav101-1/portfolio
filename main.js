var typed = new Typed(".text", {
    strings: [ "Student","Learning FrontEnd Developer", "Learning Web Developer"],
    typeSpeed: 10,
    backSpeed: 10,
    backDelay: 1000,
    loop: true,
});


    document.getElementById('okButton').addEventListener('click', function() {
        document.getElementById('contactForm').reset();
        $('#submissionModal').modal('hide');
    });

