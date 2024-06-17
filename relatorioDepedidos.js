document.addEventListener('DOMContentLoaded', function() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const tableBody = document.getElementById('orderTableBody');
  const clearButton = document.getElementById('clearButton');

  orders.forEach(order => {
      const row = document.createElement('tr');

      const cellCustomerName = document.createElement('td');
      cellCustomerName.textContent = order.customerName;
      row.appendChild(cellCustomerName);

      const cellCustomerEmail = document.createElement('td');
      cellCustomerEmail.textContent = order.customerEmail;
      row.appendChild(cellCustomerEmail);

      const cellCustomerPhone = document.createElement('td');
      cellCustomerPhone.textContent = order.customerPhone;
      row.appendChild(cellCustomerPhone);

      const cellProduct = document.createElement('td');
      cellProduct.textContent = order.product;
      row.appendChild(cellProduct);

      const cellQuantity = document.createElement('td');
      cellQuantity.textContent = order.quantity;
      row.appendChild(cellQuantity);

      const cellStatus = document.createElement('td');
      cellStatus.textContent = order.status;
      row.appendChild(cellStatus);

      tableBody.appendChild(row);
  });

  clearButton.addEventListener('click', function(){
      localStorage.removeItem('orders'); 
      tableBody.innerHTML = '';
  });
});