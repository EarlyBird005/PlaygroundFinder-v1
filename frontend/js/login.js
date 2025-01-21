document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    // Event listener for form submission
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Collect form data
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        // Validate the inputs
        if (!email || !password) {
            errorMessage.textContent = 'Please enter both email and password.';
            return;
        }

        // Prepare the data to send to the server
        const loginData = { email, password };
        console.log("login credentials:", loginData);
        try {
            // Send a POST request to the login API
            const response = await fetch('http://127.0.0.1:5000/api/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData),
                credentials: 'include'
            });
            // console.log("response.ok:", response);
            if (response.ok) {
                const result = await response.json(); // Parse the JSON response
                alert(`Result: ${JSON.stringify(result)}`);
                // Redirect to the home page
                //window.location.href = './index.html';
                setTimeout(() => {
                    window.location.href = './index.html';
                }, 500);
            } else {
                // Handle server errors (e.g., invalid credentials)
                const error = await response.json();
                errorMessage.textContent = error.msg || error.message || 'Login failed. Please try again.';
            }
        } catch (err) {
            // Handle network or unexpected errors
            console.error('An error occurred:', err);
            errorMessage.textContent = 'An error occurred. Please try again later.';
        }
    });
});