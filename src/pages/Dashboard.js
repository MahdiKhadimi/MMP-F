import { useEffect, useState } from "react";
import { getAllLoans } from "../services/LoanService";

const Dashboard = () => {
  const [loans, setLoan] = useState([]);
  useEffect(() => {
    setLoan(getAllLoans);
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">My Loan Applications</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Purpose</th>
              <th className="px-4 py-2 border">Term</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan, index) => (
              <tr key={loan.id} className="hover:bg-gray-200 ">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{loan.amount} AFN </td>
                <td className="px-4 py-2 border">{loan.purpose}</td>
                <td className="px-4 py-2 border">{loan.term} months</td>
                <td className="px-4 py-2 border text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      loan.status === "pending"
                        ? "bg-yellow-500"
                        : loan.status === "approved"
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                  >
                    {loan.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
