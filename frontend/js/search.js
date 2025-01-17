
// Function to create a card dynamically
function createCard(playground) {
    const detailsUrl = `playground-detail.html?id=${playground._id}`; // URL to individual page
    // const detailsUrl = `http://localhost:5000/api/playground/${playground._id}`; // URL to individual page
   return `
        <div class="card">
          <h3>${playground.name}</h3>
          <p>${playground.description}</p>
          <div class="image-placeholder">${playground.image ? `<img src="${playground.image}" alt="${playground.name}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;">` : 'Image Placeholder'}</div>
          <p><strong>Opening Time:</strong> ${playground.timing}</p>
          <button onclick="location.href='${detailsUrl}'">View Details</button>
        </div>
      `;
}

// Fetch data from API and populate cards
async function fetchPlaygrounds() {
    const container = document.getElementById('playgrounds-container');
    try {
        const response = await fetch('http://localhost:5000/api/playground/');
        const data = await response.json();

        // Loop through the data and add cards dynamically
        data.forEach(playground => {
            container.innerHTML += createCard(playground);
        });
    } catch (error) {
        console.error('Error fetching playgrounds:', error);
        container.innerHTML = '<p>Failed to load playgrounds. Please try again later.</p>';
    }
}

// Call the function to fetch and display data
fetchPlaygrounds();