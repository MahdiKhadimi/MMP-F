import { useEffect, useState } from "react";
import { getAllLoans } from "../services/LoanService";
import LoanDetailModal from "../components/LoanDetailModal";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Dashboard = () => {
  const [loans, setLoans] = useState([]);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    setLoans(getAllLoans);
  }, []);

  return (
    <div className="p-4 theme-bg">
      <h1 className="text-xl font-bold mb-4">My Loan Applications</h1>
      <div className="space-y-4">
        {loans.map((loan) => (
          <div
            key={loan.id}
            className="card border border-gray-200 dark:border-gray-700"
          >
            <div
              onClick={() => {
                setExpanded(loan.id);
              }}
              className="cursor-pointer p-2 flex justify-between items-center bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all rounded-md"
            >
              <div>
                <p className="font-medium">
                  {loan.amount} AFN for {loan.purpose}
                </p>
                <span
                  className={`text-sm font-semibold ${
                    loan.status === "pending"
                      ? "text-yellow-500"
                      : loan.status === "approved"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {loan.status.toUpperCase()}
                </span>
              </div>
              <div>
                {expanded === loan.id ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            {expanded === loan.id && (
              <div className="p-4 text-sm space-y-2 border-y">
                <p>
                  <strong>Full Name:</strong> {loan.fullName}
                </p>
                <p>
                  <strong>Phone:</strong> {loan.phone}
                </p>
                <p>
                  <strong>Term:</strong> {loan.term} months
                </p>
                <p>
                  <strong>Monthly Income:</strong> {loan.income} AFN
                </p>
                <p>
                  <strong>Dependents:</strong> {loan.dependents}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
