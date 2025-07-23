import { useForm } from "react-hook-form";
import { useLoanForm } from "../../context/LoanFormContext";

const Step1 = () => {
  const { formData, setFormData, step, setStep } = useLoanForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const formSubmitHanlder = (data) => {
    setFormData({ ...formData, ...data });
    setStep(2);
  };
  return (
    <form className="space-y-4 theme-bg" onSubmit={handleSubmit(formSubmitHanlder)}>
      <h2 className="text-xl font-semibold form-label">Step 1: Personal Information </h2>
      <div>
        <label className="form-label">Full Name</label>
        <input
          type="text"
          {...register("fullName", { required: "Full Name is required" })}
          className="form-element w-full"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}
      </div>
      <div>
        <label className="form-label">Tazkira Number</label>
        <input
          type="text"
          {...register("tazkiraNumber", {
            required: "The Tazkira is required",
          })}
          className="form-element w-full"
        />
        {errors.tazkiraNumber && (
          <p className="text-red-500 text-sm">{errors.tazkiraNumber.message}</p>
        )}
      </div>
      <div>
        <label className="form-label">Phone Number</label>
        <input
          type="text"
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              value: /^[0-9]{10,12}$/,
              message: "Enter a valid number",
            },
          })}
          className="form-element w-full"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <label className="form-label">Email Address</label>
        <input
          type="email"
          {...register("email")}
          className="form-element w-full"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step1;
