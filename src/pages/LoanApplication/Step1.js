import { useForm } from "react-hook-form";
import { useLoanForm } from "../../context/LoanFormContext";

const Step1 = () => {
  const { formData, setFormData } = useLoanForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const formSubmitHanlder = (data) => {
    setFormData({ ...formData, ...data });
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit(formSubmitHanlder)}>
      <h2 className="text-xl font-semibold text-gray-700">
        Step 1: Personal Information{" "}
      </h2>
      <div>
        <label className="block text-sm text-gray-600">Full Name</label>
        <input
          type="text"
          {...register("fullName", { required: "Full Name is required" })}
          className="w-full border rounded p-2"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm text-gray-600">Tazkira Number</label>
        <input
          type="text"
          {...register("tazkiraNumber", {
            required: "The Tazkira is required",
          })}
          className="w-full border rounded p-2"
        />
        {errors.tazkiraNumber && (
          <p className="text-red-500 text-sm">{errors.tazkiraNumber.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm text-gray-600">Phone Number</label>
        <input
          type="text"
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              value: /^[0-9]{10,12}$/,
              message: "Enter a valid number",
            },
          })}
          className="w-full border rounded p-2"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm text-gray-600">Email Address</label>
        <input
          type="email"
          {...register("email")}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step1;
