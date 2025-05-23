import { Dialog } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";

const LoanDetailModal = ({ loan, onClose }) => {
  return (
    <Dialog
      open={!!loan}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
    >
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Loan Details</h2>
          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="space-y-2 text-sm">
          <p>
            <strong>Full Name:</strong> {loan.fullName}
          </p>
          <p>
            <strong>Phone:</strong> {loan.phone}
          </p>
          <p>
            <strong>Amount:</strong> {loan.amount} AFN
          </p>
          <p>
            <strong>Purpose:</strong> {loan.purpose}
          </p>
          <p>
            <strong>Term:</strong> {loan.term} months
          </p>
          <p>
            <strong>Income:</strong> {loan.monthlyIncome} AFN
          </p>
          <p>
            <strong>Dependents:</strong> {loan.dependents}
          </p>
          <p>
            <strong>Status:</strong> {loan.status}
          </p>
        </div>
      </div>
    </Dialog>
  );
};

export default LoanDetailModal;
