document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value;
    const customerEmail = document.getElementById("customerEmail").value;
    const customerPhone = document.getElementById("customerPhone").value;
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;

    if (!customerName || !customerEmail || !customerPhone || !product) {
      alert("Por favor, preencha todos os campos corretamente.");
    }

    const order = {
      customerName: customerName,
      customerEmail: customerEmail,
      customerPhone: customerPhone,
      product: product,
      quantity: quantity,
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    addOrderToTable(order);
    document.getElementById("orderForm").reset();
  });

function addOrderToTable(order) {
  const tableBody = document.getElementById("orderTableBody");
  const row = document.createElement("tr");

  const cellCustomerName = document.createElement("td");
  cellCustomerName.textContent = order.customerName;
  row.appendChild(cellCustomerName);

  const cellCustomerEmail = document.createElement("td");
  cellCustomerEmail.textContent = order.customerEmail;
  row.appendChild(cellCustomerEmail);

  const cellCustomerPhone = document.createElement("td");
  cellCustomerPhone.textContent = order.customerPhone;
  row.appendChild(cellCustomerPhone);

  const cellProduct = document.createElement("td");
  cellProduct.textContent = order.product;
  row.appendChild(cellProduct);

  const cellQuantity = document.createElement("td");
  cellQuantity.textContent = order.quantity;
  row.appendChild(cellQuantity);

  tableBody.appendChild(row);
}

document.addEventListener("DOMContentLoaded", function () {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.forEach(addOrderToTable);
});

document.getElementById("clearButton").addEventListener("click", function () {

  document.getElementById("customerName").value = "";
  document.getElementById("customerEmail").value = "";
  document.getElementById("customerPhone").value = "";
  document.getElementById("product").value = "";
  document.getElementById("quantity").value = "";

  const tableBody = document.getElementById("orderTableBody");

  tableBody.innerHTML = "";

  localStorage.removeItem("orders");

});