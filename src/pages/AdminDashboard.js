import { useEffect, useState } from "react";
import { getAllLoans, updateLoanStatus } from "../services/LoanService";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [loans, setLoans] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortKey, setSortKey] = useState(null);

  useEffect(() => {
    setLoans(getAllLoans());
  }, []);

  const filteredLoans = loans.filter((loan) => {
    return filter === "all" ? true : loan.status === filter;
  });

  const sortedData = [...filteredLoans].sort((a, b) => {
    if (sortKey === "amount") {
      return b.amount - a.amount;
    } else {
      return new Date(b.createdAt) - new Date(a.createdAts);
    }
  });

  const handleStatusChange = (id, status) => {
    const updated = updateLoanStatus(id, status);
    toast.success(
      `The has been ${status === "rejected" ? "Reacted" : "Accepted"}`
    );

    setLoans(updated);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      <div className="flex gap-4 mb-2">
        <select
          className="border p-2 rounded"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
        <select
          className="p-2 rounded border"
          onChange={(e) => {
            setSortKey(e.target.value);
          }}
        >
          <option value="date">Newest</option>
          <option value="amount">Amount (High to Low)</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Applicant</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Term</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((loan) => (
              <tr key={loan.id} className="p-2 border-t">
                <td className="border p-2">{loan.fullName}</td>
                <td className="border p-2">{loan.amount} AFN</td>
                <td className="border p-2">{loan.term} months</td>
                <td className="border p-2">
                  <span
                    className={`px-2 py-1 rounded text-white text-sm ${
                      loan.status === "pending"
                        ? "bg-yellow-500"
                        : loan.status === "approved"
                        ? "bg-green-600"
                        : "bg-red-500"
                    }`}
                  >
                    {loan.status}
                  </span>
                </td>
                <td className="border p-2">{loan.createdAt?.slice(0, 10)}</td>
                <td className="border p-2 flex gap-2">
                  {loan.status === "pending" && (
                    <>
                      <button
                        onClick={() => handleStatusChange(loan.id, "approved")}
                        className="bg-green-500 text-white px-2 py-1 rounded text-sm"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleStatusChange(loan.id, "rejected")}
                        className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  {loan.status !== "pending" && (
                    <span className="text-gray-400 italic">No actions</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
