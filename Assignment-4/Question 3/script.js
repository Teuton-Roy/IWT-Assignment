var items = [];

function addItem() {
var item = document.getElementById("item").value;
var price = parseFloat(document.getElementById("price").value);
if (item === "" || isNaN(price)) {
    alert("Please enter valid values for Item and Price");
    return;
}
var groceryList = document.getElementById("groceryList").getElementsByTagName("tbody")[0];
var newRow = groceryList.insertRow(groceryList.rows.length - 1);
var itemCell = newRow.insertCell(0);
var priceCell = newRow.insertCell(1);
var deleteCell = newRow.insertCell(2);
itemCell.innerHTML = item;
priceCell.innerHTML = price.toFixed(2);
deleteCell.innerHTML = '<button onclick="deleteItem(this)">Delete</button>';
items.push({item: item, price: price});
updateTotal();
document.getElementById("item").value = "";
document.getElementById("price").value = "";
}

function deleteItem(button) {
var index = button.parentNode.parentNode.rowIndex - 1;
items.splice(index, 1);
document.getElementById("groceryList").deleteRow(button.parentNode.parentNode.rowIndex);
    updateTotal();
}

    function updateTotal() {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    document.getElementById("totalPrice").innerHTML = total.toFixed(2);
}
