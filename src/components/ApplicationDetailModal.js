import RepaymentSchedule from "../components/RepaymentSchedule";

const ApplicationDetailModal = ({ application, onClose }) => {
  return (
    <div className="p-4 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h2 className="text-lg font-bold mb-2 dark:bg-gray-900 text-gray-900 dark:text-gray-100">Application Details</h2>
      <p className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <strong className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">Loan Amount:</strong> ${application.amount}
      </p>
      <p className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <strong className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">Term:</strong> {application.term} months
      </p>
      <p className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <strong className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">Status:</strong> {application.status}
      </p>

      {/* Show repayment schedule */}
      <RepaymentSchedule
        amount={application.amount}
        months={application.term}
      />

      <button
        onClick={onClose}
        className="mt-4 bg-blue-600 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-2 rounded"
      >
        Close
      </button>
    </div>
  );
};

export default ApplicationDetailModal;
