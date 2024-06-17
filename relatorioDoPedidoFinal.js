
  // assume you have an array of orders made on the day
  const orders = [
    {
      id: 1,
      description: "Order 1",
      products: [
        { product: "Product 1", color: "Red", size: "Large", quantity: 2 },
        { product: "Product 2", color: "Blue", size: "Small", quantity: 3 }
      ]
    },
    {
      id: 2,
      description: "Order 2",
      products: [
        { product: "Product 3", color: "Green", size: "Medium", quantity: 1 },
        { product: "Product 4", color: "Yellow", size: "Large", quantity: 2 }
      ]
    },
    // ...
  ];

  // function to generate the final report
  function generateFinalReport() {
    const reportHtml = `
      <h1>Relatório Final dos Pedidos do Dia</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Pedido ID</th>
            <th>Descrição do Pedido</th>
            <th>Produtos Fabricados</th>
          </tr>
        </thead>
        <tbody>
    `;

    orders.forEach((order) => {
      reportHtml += `
        <tr>
          <td>${order.id}</td>
          <td>${order.description}</td>
          <td>
            <ul>
              ${order.products.map((product) => `
                <li>
                  ${product.product} - ${product.color} - ${product.size} - ${product.quantity}
                </li>
              `).join("")}
            </ul>
          </td>
        </tr>
      `;
    });

    reportHtml += `
        </tbody>
      </table>
    `;

    document.getElementById("report-container").innerHTML = reportHtml;
  }

  // call the function to generate the report
  generateFinalReport();
