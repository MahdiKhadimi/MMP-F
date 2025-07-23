const RepaimentSechdule = ({ amount = 12000, months = 6, onClose }) => {
  const monthlyPayment = amount / months;

  console.log(amount);

  const schedule = Array.from({ length: months }, (_, i) => {
    const dueDate = new Date();
    dueDate.setMonth(dueDate.getMonth() + i + 1);

    return {
      id: i + 1,
      dueDate: dueDate.toLocaleDateString(),
      amount: monthlyPayment.toFixed(2),
      remaining: (amount - monthlyPayment * (i + 1)).toFixed(2),
    };
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md relative dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl dark:bg-gray-900 text-gray-900 dark:text-gray-100"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-4 dark:bg-gray-900 text-gray-900 dark:text-gray-100">Repaiment Scheduale</h2>
        <table className="w-full text-sm text-left border dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <thead className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <tr>
              <th className="p-2 border dark:bg-gray-900 text-gray-900 dark:text-gray-100">#</th>
              <th className="p-2 border dark:bg-gray-900 text-gray-900 dark:text-gray-100">Due Date</th>
              <th className="p-2 border dark:bg-gray-900 text-gray-900 dark:text-gray-100">Monthly Amount</th>
              <th className="p-2 border dark:bg-gray-900 text-gray-900 dark:text-gray-100">Remaining Balance</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item) => (
              <tr key={item.id} className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <td className="p-2 border dark:bg-gray-900 text-gray-900 dark:text-gray-100">{item.id}</td>
                <td className="p-2 border dark:bg-gray-900 text-gray-900 dark:text-gray-100">{item.dueDate}</td>
                <td className="p-2 border dark:bg-gray-900 text-gray-900 dark:text-gray-100">${item.amount}</td>
                <td className="p-2 border dark:bg-gray-900 text-gray-900 dark:text-gray-100">${item.remaining}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RepaimentSechdule;
