import { create } from "zustand";
import { loadExpenses, saveExpenses } from "../storage/storage";

// Add Expense Form Store

export const useFormStore = create((set) => ({
  image: null,
  formData: {
    date: "",
    time: "",
    merchant: "",
    category: "",
    amount: "",
    note: "",
  },

  // for Image
  setImage: (image) => set({ image }),

  // for manual entry
  setField: (field, value) =>
    set((state) => ({ formData: { ...state.formData, [field]: value } })),

  // OCR or bulk data load cheyyan
  setFormData: (data) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ...data,
      },
    })),

  //   for clear form
  resetForm: () =>
    set({
      image: null,
      formData: {
        date: "",
        time: "",
        merchant: "",
        category: "",
        amount: "",
        note: "",
      },
    }),
}));

// Expense Store

export const useExpenseStore = create((set, get) => ({
  expenses: loadExpenses(),

  // Create

  addExpense: (expense) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const newExpense = {
      ...expense,
      id: crypto.randomUUID(),
      userId: currentUser.id,
    };

    const updatedExpenses = [...get().expenses, newExpense];

    saveExpenses(updatedExpenses);

    set({ expenses: updatedExpenses });
  },

  // Read

  getExpenseById: (id) => {
    return get().expenses.filter((expense) => expense.id === id);
  },

  // Update

  updateExpense: (id, updatedData) => {
    const updatedExpenses = get().expenses.map((expense) =>
      expense.id === id ? { ...expense, ...updatedData } : expense,
    );

    saveExpenses(updatedExpenses);

    set({expenses:updatedExpenses})
  },

  // Delete

  deleteExpense: (expenseId) => {
    const updatedExpenses = get().expenses.filter(
      (expense) => expense.id !== expenseId,
    );

    saveExpenses(updatedExpenses);

    set({ expenses: updatedExpenses });
  },
}));
