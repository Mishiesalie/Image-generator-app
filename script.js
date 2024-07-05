//javascript

const API_KEY = "tiPGSSsgw9JBOq3x-dxdjpUKpApceJ7xqjHcua9bGGY";
const API_URL = "https://api.unsplash.com/search/photos";
const imageContainer = document.getElementById("imageContainer");
const searchButton = document.getElementById("searchImageButton");
const searchInput = document.getElementById("searchImageInput");
const generateMore = document.getElementById("generateMore");

let currentPage = 1;

function searchImages(query, page = 1) {
    const headers = new Headers({
      'Authorization': `Client-ID ${API_KEY}`
    });

    const params = new URLSearchParams({
        query: query,
        // per_page: 12,
        page: page,
    });

    fetch(`${API_URL}?${params}`, { method: 'GET', headers: headers })
    .then(response => response.json())
    .then(data => {
      if (page === 1) {
        imageContainer.innerHTML = "";
      }

      data.results.forEach(result => {
        const imageCard = document.createElement("div");
        imageCard.className = "image-card";

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

