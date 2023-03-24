import items from "./items.js";

const itemsPerPage = 5;
let currentPage = 1;
const itemListDiv = document.getElementById("item-list");
const paginationDiv = document.getElementById("pagination");

function displayItems(items) {
  itemListDiv.innerHTML = "";
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);
  for (let i = 0; i < paginatedItems.length; i++) {
    const item = paginatedItems[i];
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="item-info">
        <h3>${item.name}</h3>
        <div class="price">
          <span class="original-price">$${item.price}</span>
          ${item.discount ? `<span class="discounted-price">$${item.price - item.discount}</span>` : ""}
        </div>
      </div>
    `;
    itemListDiv.appendChild(itemDiv);
  }
  displayPagination(items.length);
}

function displayPagination(totalItems) {
  paginationDiv.innerHTML = "";
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.textContent = i;
    if (i === currentPage) {
      pageLink.classList.add("active");
    }
    pageLink.addEventListener("click", function () {
      currentPage = i;
      displayItems(items);
    });
    paginationDiv.appendChild(pageLink);
  }
}

displayItems(items)