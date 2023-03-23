const itemsPerPage = 5;
let currentPage = 1;
const itemListDiv = document.getElementById("itemList");
const paginationDiv = document.getElementById("pagination");

// Array of items (name, image path, price, and discount)
const items = [
  {
    name: "Item 1",
    image: "/Image/pro1.jpg",
    price: 10.00,
    discount: 2.50
  },
  {
    name: "Item 2",
    image: "item2.jpg",
    price: 15.00,
    discount: null
  },
  {
    name: "Item 3",
    image: "item3.jpg",
    price: 20.00,
    discount: 5.00
  },
  {
    name: "Item 4",
    image: "item4.jpg",
    price: 12.00,
    discount: null
  },
  {
    name: "Item 5",
    image: "item5.jpg",
    price: 18.00,
    discount: 3.00
  },
  {
    name: "Item 6",
    image: "item6.jpg",
    price: 25.00,
    discount: null
  },
  {
    name: "Item 7",
    image: "item7.jpg",
    price: 30.00,
    discount: 7.50
  },
  {
    name: "Item 8",
    image: "item8.jpg",
    price: 22.00,
    discount: null
  },
  {
    name: "Item 9",
    image: "item9.jpg",
    price: 27.00,
    discount: 4.00
  },
  {
    name: "Item 10",
    image: "item10.jpg",
    price: 35.00,
    discount: null
  }
];

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
    pageLink.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = i; // Update the current page
        displayItems(items); // Display the items for the current page
    });

    paginationDiv.appendChild(pageLink);
    }
}
