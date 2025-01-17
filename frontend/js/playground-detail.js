
// Function to fetch and display playground details dynamically
function fetchPlaygroundDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');  // Get the 'id' parameter from the URL

    fetch(`http://localhost:5000/api/playground/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log("data:", data);
            // Set the title and address
            document.getElementById('playground-name').innerText = data.name;
            document.getElementById('playground-address').innerText = data.address;

            // Set the image
            // document.getElementById('playground-image').src = data.image || '/placeholder.svg';

            // Set the description
            document.getElementById('playground-description').innerText = data.description;

            // Populate tags dynamically
            // const tagsContainer = document.getElementById('tags');
            // tagsContainer.innerHTML = '';
            // data.tags.forEach(tag => {
            //     const badge = document.createElement('span');
            //     badge.classList.add('badge');
            //     badge.innerText = tag;
            //     tagsContainer.appendChild(badge);
            // });

            // Populate features dynamically
            // const featuresList = document.getElementById('features-list');
            // featuresList.innerHTML = '';
            // data.features.forEach(feature => {
            //     const li = document.createElement('li');
            //     li.innerText = feature;
            //     featuresList.appendChild(li);
            // });

            // Set sidebar location and hours
            document.getElementById('sidebar-address').innerText = data.address;
            document.getElementById('sidebar-hours').innerText = `Open daily: ${data.timing}`;
        })
        .catch(error => {
            console.error('Error fetching playground details:', error);
            alert('Failed to load playground details.');
        });
}

// Call the function to fetch and display the details when the page loads
window.onload = fetchPlaygroundDetails;