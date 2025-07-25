import { createContext, useContext, useState } from "react";

const LoanFormContext = createContext();

export const useLoanForm = () => useContext(LoanFormContext);

export const LoanFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
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
  const [step, setStep] = useState(1);

  const resetForm = () => {
    setFormData({});
    setStep(1);
  };

  return (
    <LoanFormContext.Provider
      value={{ formData, setFormData, step, setStep, resetForm }}
    >
      {children}
    </LoanFormContext.Provider>
  );
};
