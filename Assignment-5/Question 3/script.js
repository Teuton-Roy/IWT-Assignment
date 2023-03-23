// item list array with sample data
const itemList = [
    {
      name: 'Item 1',
      image: 'Image/pro1.jpg',
      price: 10,
      discount: 2,
    },
    {
      name: 'Item 2',
      image: 'images/item2.jpg',
      price: 20,
      discount: 5,
    },
    {
      name: 'Item 3',
      image: 'images/item3.jpg',
      price: 15,
      discount: 0,
    },
    {
      name: 'Item 4',
      image: 'images/item4.jpg',
      price: 30,
      discount: 0,
    },
    {
      name: 'Item 5',
      image: 'images/item5.jpg',
      price: 25,
      discount: 10,
    },
    {
      name: 'Item 6',
      image: 'images/item6.jpg',
      price: 18,
      discount: 3,
    },
    {
      name: 'Item 7',
      image: 'images/item7.jpg',
      price: 12,
      discount: 1,
    },
    {
      name: 'Item 8',
      image: 'images/item8.jpg',
      price: 22,
      discount: 4,
    },
    {
      name: 'Item 9',
      image: 'images/item9.jpg',
      price: 28,
      discount: 0,
    },
    {
      name: 'Item 10',
      image: 'images/item10.jpg',
      price: 17,
      discount: 2,
    },
  ];
  
  const itemsPerPage = 5; // number of items per page
  let currentPage = 1; // current page number
  
  // function to display items for the given page
  
    function displayItems(pageNumber) {
        // calculate start and end index
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
    
        // get the item list element
        const itemListElement = document.getElementById('item-list');
    
        // clear the item list
        itemListElement.innerHTML = '';
    
        // get the items for the given page
        const items = itemList.slice(startIndex, endIndex);
    
        // display the items
        for (let item of items) {
            itemListElement.innerHTML += `
            <div class="item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
                <p>Discount: ${item.discount}%</p>
                </div>
            </div>
            `;
        }
        }

    // function to display pagination buttons
    function displayPaginationButtons() {
        // get the pagination element
        const paginationElement = document.getElementById('pagination');
      
        // calculate the number of pages
        const numberOfPages = Math.ceil(itemList.length / itemsPerPage);
      
        // clear the pagination element
        paginationElement.innerHTML = '';
      
        // display the pagination buttons
        for (let i = 1; i <= numberOfPages; i++) {
          // only display the necessary buttons
          if (i <= 5 || i === numberOfPages || (currentPage - 2 <= i && i <= currentPage + 2)) {
            paginationElement.innerHTML += `
              <button class="pagination-button" onclick="displayItems(${i})">${i}</button>
            `;
          }
          // add ellipses for skipped pages
          else if (paginationElement.lastChild.innerHTML !== '...') {
            paginationElement.innerHTML += `
              <span class="pagination-ellipsis">...</span>
            `;
          }
        }
      }
      

    // display the first page
    displayItems(currentPage);
    // display the pagination buttons   
    displayPaginationButtons();