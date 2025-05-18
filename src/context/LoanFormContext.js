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
  });
  const [step, setStep] = useState(1);
  return (
    <LoanFormContext.Provider value={{ formData, setFormData, step, setStep }}>
      {children}
    </LoanFormContext.Provider>
  );
};
