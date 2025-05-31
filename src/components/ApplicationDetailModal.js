import RepaymentSchedule from "../components/RepaymentSchedule";

const ApplicationDetailModal = ({ application, onClose }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Application Details</h2>
      <p>
        <strong>Loan Amount:</strong> ${application.amount}
      </p>
      <p>
        <strong>Term:</strong> {application.term} months
      </p>
      <p>
        <strong>Status:</strong> {application.status}
      </p>

      {/* Show repayment schedule */}
      <RepaymentSchedule
        amount={application.amount}
        months={application.term}
      />

      <button
        onClick={onClose}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Close
      </button>
    </div>
  );
};

export default ApplicationDetailModal;
