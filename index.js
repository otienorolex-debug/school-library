const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault()
});  

    const searchresults = document.getElementById('search-results');
    const addbooksection = document.getElementById('add-book-section');

    const booklistsection = document.getElementById('book-list-section');
