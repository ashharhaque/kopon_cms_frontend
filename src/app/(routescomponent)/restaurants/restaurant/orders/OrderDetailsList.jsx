function OrderDetailsList({ className }) {
  return (
    <div className={`${className}`}>
      <table className="flex border-spacing-3 justify-around">
        <thead>
          <td>Product Name</td>
          <td>Category</td>
          <td>VEG/NON VEG</td>
          <td>PRICE</td>
          <td>QTY</td>
          <td>Tax Percentage</td>
          <td>Tax</td>

          <td>CHARGES</td>
          <td>Total Price</td>
        </thead>

        <tbody>
          <tr>
            <td>Margheretta Pizza</td>
            <td>Pizza</td>
            <td>Veg</td>
            <td>Rs.123</td>
            <td>3</td>
            <td>30%</td>
            <td>Rs.50</td>
            <td>Rs.173</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderDetailsList;
