function OrderDetailsList({ className }) {
  return (
    <div className={`${className} overflow-auto`}>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-scroll">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 overflow-scroll">
          <tr>
            <th  scope="col" className="px-6 py-3">Product Name</th>
            <th scope="col" className="px-6 py-3">Category</th>
            <th scope="col" className="px-6 py-3">VEG/NON VEG</th>
            <th scope="col" className="px-6 py-3">PRICE</th>
            <th scope="col" className="px-6 py-3">QTY</th>
            <th scope="col" className="px-6 py-3">Tax Percentage</th>
            <th scope="col" className="px-6 py-3">Tax</th>

            <th scope="col" className="px-6 py-3">CHARGES</th>
            <th scope="col" className="px-6 py-3">Total Price</th>
            <th scope="col" className="px-6 py-3">
              Mark as product Accepted
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-2 border-blue-500 ">Margheretta Pizza</th>
            <td className="px-6 py-4">Pizza</td>
            <td className="px-6 py-4">Veg</td>
            <td className="px-6 py-4">Rs.123</td>
            <td className="px-6 py-4 border-2 border-blue-500">3</td>
            <td className="px-6 py-4">30%</td>
            <td className="px-6 py-4">Rs.50</td>
            <td className="px-6 py-4">Rs.173</td>
            <td className="px-6 py-4">Rs.203</td>
            <td className="px-6 py-4">
            <div className="flex items-center ps-4">
    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
</div>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderDetailsList;
