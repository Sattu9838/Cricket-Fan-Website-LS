document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log('Form submitted with:', { name, email, message });
    
    alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
    
    document.getElementById('contact-form').reset();
});
