import { useForm } from "react-hook-form";
import { LoanFormProvider, useLoanForm } from "../context/LoanFormContext";
import Step1 from "./LoanApplication/Step1";
import Step2 from "./LoanApplication/Step2";

const LoanApplicationForm = () => {
  const { formData, setFormData, step, setStep } = useLoanForm();
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
    </div>
  );
};

export default LoanApplicationForm;
