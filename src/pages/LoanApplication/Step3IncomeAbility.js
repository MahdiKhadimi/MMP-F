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
    setStep(3);
  };
  return (
    <form className="space-y-6 " onSubmit={handleSubmit(formSubmitHandler)}>
      <h2 className="text-xl font-semibold">Income & Repayment Ability </h2>

      {/* Monthly Income */}
      <div>
        <label className="mb-1 text-gray-600 text-sm">
          Monthly Income (AFN)
        </label>
        <input
          className="w-full p-2 border rounded-md"
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

      {/* Number of dependents */}
      <div>
        <label className="mb-1 text-gray-600 text-sm">
          Number of Dependents
        </label>
        <input
          className="w-full p-2 border rounded-md"
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

      {/* Number of dependents */}
      <div>
        <label className="mb-1 text-gray-600 text-sm">
          Monthly Expense (optional)
        </label>
        <input
          className="w-full p-2 border rounded-md"
          type="number"
          {...register("expense")}
        />
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => {
            setStep(2);
          }}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2"
        >
          Next
        </button>
      </div>
    </form>
  );
};
export default Step3IncomeAbility;
