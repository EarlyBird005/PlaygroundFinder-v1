document.addEventListener("DOMContentLoaded", () => {
    const navContainer = document.querySelector(".nav-container");

    // Function to check if the user is logged in
    function isLoggedIn() {
        // Retrieve the 'token' cookie
        const cookies = document.cookie.split("; ");
        const tokenCookie = cookies.find(cookie => cookie.startsWith("token="));
        console.log("token:", token);
        return tokenCookie ? true : false;
    }

    // Function to log out the user
    function logout() {
        // Clear the 'token' cookie by setting it with an expired date
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        updateNavLinks();
    }

    // Function to update navigation links based on login status
    function updateNavLinks() {
        if (isLoggedIn()) {
            // User is logged in, show Logout
            navContainer.innerHTML = `
                <a href="./index.html">Home</a>
                <a href="./search.html">Playgrounds</a>
                <a href="./about.html">About</a>
                <a href="./contact.html">Contact</a>
                <a href="#" id="logout-link">Logout</a>
            `;

            // Attach logout event listener
            document.getElementById("logout-link").addEventListener("click", (e) => {
                e.preventDefault();
                logout();
                alert("You have been logged out!");
            });
        } else {
            // User is not logged in, show Login/Register
            navContainer.innerHTML = `
                <a href="./index.html">Home</a>
                <a href="./search.html">Playgrounds</a>
                <a href="./about.html">About</a>
                <a href="./contact.html">Contact</a>
                <a href="./register.html">Register</a>
                <a href="./login.html">Login</a>
            `;
        }
    }

    // Initial update of navigation links
    updateNavLinks();
});
