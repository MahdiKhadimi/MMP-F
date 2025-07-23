import { useForm, useFormContext } from "react-hook-form";
import { useLoanForm } from "../../context/LoanFormContext";

const Step3IncomeAbility = () => {
  const { formData, setFormData, step, setStep } = useLoanForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      income: formData.income,
      dependents: formData.dependents,
      expense: formData.expense,
    },
  });

  const formSubmitHandler = (data) => {
    setFormData({ ...formData, ...data });
    setStep(4);
  };
  return (
    <form className="space-y-6 theme-bg" onSubmit={handleSubmit(formSubmitHandler)}>
      <h2 className="text-xl font-semibold form-label">Income & Repayment Ability</h2>
      <div>
        <label className="form-label">Monthly Income (AFN)</label>
        <input
          className="form-element w-full"
          type="number"
          {...register("income", {
            required: "The income is required",
            min: { value: 1000, message: "Minimum income is 1000 AFN" },
          })}
        />
        {errors.income && (
          <p className="text-red-500 text-sm ">{errors.income.message}</p>
        )}
      </div>
      <div>
        <label className="form-label">Number of Dependents</label>
        <input
          className="form-element w-full"
          type="number"
          {...register("dependents", {
            required: "The dependents is required",
            min: {
              value: 0,
              message: "Minimum dependents should be 0 or more",
            },
          })}
        />
        {errors.dependents && (
          <p className="text-red-500 text-sm ">{errors.dependents.message}</p>
        )}
      </div>
      <div>
        <label className="form-label">Monthly Expense (AFN)</label>
        <input
          className="form-element w-full"
          type="number"
          {...register("expense", {
            required: "The expense is required",
            min: { value: 0, message: "Expense cannot be negative" },
          })}
        />
        {errors.expense && (
          <p className="text-red-500 text-sm ">{errors.expense.message}</p>
        )}
      </div>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 focus:ring-2 focus:ring-blue-500"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
        >
          Next
        </button>
      </div>
    </form>
  );
};
export default Step3IncomeAbility;
