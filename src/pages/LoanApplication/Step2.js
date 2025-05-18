import { useForm } from "react-hook-form";
import { useLoanForm } from "../../context/LoanFormContext";

const Step2 = () => {
  const { formData, setFormData, step, setStep } = useLoanForm();
  const loanReasons = [
    "Start a business",
    "Medical emergency",
    "Education",
    "Home improvement",
    "Other",
  ];

  const repaymentOptions = ["Monthly", "Bi-weekly", "Weekly"];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const formSubmitHandler = (data) => {
    setFormData({ ...formData, ...data });
    setStep(3);
  };

  return (
    <form className="space-y-6 " onSubmit={handleSubmit(formSubmitHandler)}>
      <h2 className="text-xl font-semibold">Loan Details</h2>

      {/* Amount */}
      <div>
        <label className="block mb-1 font-sm">Loan Amount (AFN)</label>
        <input
          type="number"
          {...register("amount", {
            required: "Loan amount is required",
            min: 100,
          })}
          className="w-full p-2 border rounded-md"
        />
        {errors.amount && (
          <p className="text-red-500 text-sm">{errors.amount.message}</p>
        )}
      </div>
      {/* Purpose */}
      <div>
        <label className="block mb-1 font-sm">Loan Purpose</label>
        <select
          {...register("purpose", { required: "Purpose is required" })}
          className="w-full p-2 border rounded-md"
        >
          <option value="">-- Select --</option>
          {loanReasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
        {errors.purpose && (
          <p className="text-red-500 text-sm">{errors.purpose.message}</p>
        )}
      </div>

      {/* Term */}
      <div>
        <label className="block mb-1 font-sm">Loan Term (months)</label>
        <input
          type="range"
          min={1}
          max={24}
          {...register("term")}
          defaultValue={formData.term}
          className="w-full"
        />
        <p className="text-sm text-gray-600 mt-1">{formData.term} months</p>
      </div>
      {/* Repayment Frequency */}
      <div>
        <label className="block mb-1 font-medium">Repayment Frequency</label>
        <select
          {...register("repaymentFrequency", {
            required: "Repayment frequency is required",
          })}
          className="w-full p-2 border rounded-md"
        >
          <option value="">-- Select --</option>
          {repaymentOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.repaymentFrequency && (
          <p className="text-red-500 text-sm">
            {errors.repaymentFrequency.message}
          </p>
        )}
      </div>
      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Next
        </button>
      </div>
    </form>
  );
};
export default Step2;
