import { toast } from "react-toastify";
import { useLoanForm } from "../../context/LoanFormContext";

const Step4Confirm = () => {
  const { formData, setFormData, setStep } = useLoanForm();

  const handleSubmit = () => {
    const applications = JSON.parse(localStorage.getItem("applications")) || [];
    applications.push({ ...formData, id: Date.now(), status: "pending" });
    localStorage.setItem("applications", JSON.stringify(applications));

    toast.success("Loan application submmitted!");
    setFormData({
      // step 1
      fullName: "",
      tazkiraNumber: "",
      phone: "",
      email: "",

      // step 2
      amount: "",
      purpose: "",
      term: 12,
      repaymentFrequency: "",

      // step 3
      income: "",
      dependents: "",
      expense: "",
    });
    setStep(1);
  };
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Confirm Your Details</h2>
      <div className="grid gap-2 text-sm">
        <div>
          <strong>Full Name:</strong> {formData.fullName}
        </div>
        <div>
          <strong>Phone Number:</strong> {formData.phone}
        </div>
        <div>
          <strong>National ID/Tazkira Number:</strong> {formData.tazkiraNumber}
        </div>
        <div>
          <strong>Email Address:</strong> {formData.email}
        </div>

        <div>
          <strong>Loan Amount:</strong> {formData.amount} AFN
        </div>
        <div>
          <strong>Purpose:</strong> {formData.purpose}
        </div>
        <div>
          <strong>Term:</strong> {formData.term} months
        </div>
        <div>
          <strong>Repayment Frequency:</strong> {formData.repaymentFrequency}
        </div>

        <div>
          <strong>Income:</strong> {formData.income} AFN
        </div>
        <div>
          <strong>Dependents:</strong> {formData.dependents}
        </div>
        <div>
          <strong>Expenses:</strong> {formData.expense} AFN
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={() => {
            setStep(3);
          }}
        >
          Back
        </button>
        <button
          className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-600"
          onClick={handleSubmit}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Step4Confirm;
