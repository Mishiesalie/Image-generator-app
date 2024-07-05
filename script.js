//javascript

const API_KEY = "tiPGSSsgw9JBOq3x-dxdjpUKpApceJ7xqjHcua9bGGY";
const API_URL = "https://api.unsplash.com/search/photos";
const imageContainer = document.getElementById("imageContainer");
const searchButton = document.getElementById("searchImageButton");
const searchInput = document.getElementById("searchImageInput");
const generateMore = document.getElementById("generateMore");

let currentPage = 1;
