export const getAllLoans = () => {
  const data = localStorage.getItem("applications");
  return data ? JSON.parse(data) : [];
};

export const saveLoanApplication = (application) => {
  const current = getAllLoans();
  const updated = [
    ...current,
    {
      ...application,
      id: Date.now(),
      status: "pending",
      createdAt: new Date().toISOString(),
    },
  ];
  localStorage.setItem("applications", JSON.stringify(updated));
};

export const updateLoanStatus = (id, status) => {
  const loans = getAllLoans();

  const updated = loans.map((loan) => {
    return loan.id === id ? { ...loan, status: status } : loan;
  });
  localStorage.setItem("applications", JSON.stringify(updated));
  return updated;
};
