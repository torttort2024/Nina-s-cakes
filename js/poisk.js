// Функция поиска товаров
function searchProducts() {
    const searchText = document.getElementById("searchInput").value.toLowerCase().trim();
    const products = document.querySelectorAll(".product-item");
    let found = false;
    
    products.forEach(product => {
        const titleElement = product.querySelector(".card-title");
        if (!titleElement) return;
        
        const title = titleElement.innerText.toLowerCase();
        
        if (searchText === "" || title.includes(searchText)) {
            product.style.display = "block";
            if (title.includes(searchText) && searchText !== "") {
                found = true;
            }
        } else {
            product.style.display = "none";
        }
    });
    
    const noResults = document.getElementById("noResultsMsg");
    if (noResults) {
        if (searchText !== "" && !found) {
            noResults.style.display = "block";
        } else {
            noResults.style.display = "none";
        }
    }
}

// Функция сброса поиска
function resetSearch() {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.value = "";
    }
    
    const products = document.querySelectorAll(".product-item");
    products.forEach(product => {
        product.style.display = "block";
    });
    
    const noResults = document.getElementById("noResultsMsg");
    if (noResults) {
        noResults.style.display = "none";
    }
}

// Добавляем поиск по нажатию Enter
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                searchProducts();
            }
        });
    }
});

// Функция выбора товара (подсветка зеленой рамкой)
function selectProduct(cardElement) {
    // Убираем подсветку со всех карточек
    const allCards = document.querySelectorAll(".product-item .card");
    allCards.forEach(card => {
        card.classList.remove("selected-card");
    });
    
    // Добавляем подсветку выбранной карточке
    cardElement.classList.add("selected-card");
}