export const calculateTotalExpenses = (expenses) => {
  return expenses.reduce(
    (total, expense) => total + Number(expense.amount || 0),
    0
  );
};