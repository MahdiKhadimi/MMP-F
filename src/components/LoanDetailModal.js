import { Dialog } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";

const LoanDetailModal = ({ loan, onClose }) => {
  return (
    <Dialog
      open={!!loan}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
    >
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="flex justify-between items-center mb-4 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <h2 className="text-lg font-semibold dark:bg-gray-900 text-gray-900 dark:text-gray-100">Loan Details</h2>
          <button onClick={onClose} className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <FaTimes />
          </button>
        </div>
        <div className="space-y-2 text-sm dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <p>
            <strong className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">Full Name:</strong> {loan.fullName}
          </p>
          <p>
            <strong className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">Phone:</strong> {loan.phone}
          </p>
          <p>
            <strong className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">Amount:</strong> {loan.amount} AFN
          </p>
          <p>
            <strong className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">Purpose:</strong> {loan.purpose}
          </p>
          <p>
            <strong className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">Term:</strong> {loan.term} months
          </p>
          <p>
            <strong className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">Income:</strong> {loan.monthlyIncome} AFN
          </p>
          <p>
            <strong className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">Dependents:</strong> {loan.dependents}
          </p>
          <p>
            <strong className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">Status:</strong> {loan.status}
          </p>
        </div>
      </div>
    </Dialog>
  );
};

export default LoanDetailModal;
