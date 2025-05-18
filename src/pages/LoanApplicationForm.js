import { LoanFormProvider } from "../context/LoanFormContext";
import Step1 from "./LoanApplication/Step1";

const LoanApplicationForm = () => {
  return (
    <LoanFormProvider>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
        <Step1 />
      </div>
    </LoanFormProvider>
  );
};

export default LoanApplicationForm;
