document.querySelector('.search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    alert(`You searched for: ${query}`);
    // Here you can add functionality to fetch and display search results from different platforms
});
