import { createContext, useContext, useState } from "react";

const LoanFormContext = createContext();

export const useLoanForm = () => useContext(LoanFormContext);

export const LoanFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    tazkiraNumber: "",
    phone: "",
    email: "",
  });
  return (
    <LoanFormContext.Provider value={{ formData, setFormData }}>
      {children}
    </LoanFormContext.Provider>
  );
};
