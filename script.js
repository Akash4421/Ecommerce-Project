document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if (email === 'user@example.com' && password === 'password') {
        messageElement.textContent = 'Sign in successful!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Invalid email or password.';
        messageElement.style.color = 'red';
    }
});
