import { create } from "zustand";

// Add Expense Form Store

export const useFormStore = create((set) => ({
  image: null,
  formData: {
    date: "",
    time: "",
    storeName: "",
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
        storeName: "",
        category: "",
        amount: "",
        note: "",
      },
    }),
}));

// Expense Store

const savedExpenses = JSON.parse(localStorage.getItem("expenses") || "[]");

export const useExpenseStore = create((set, get) => ({
  expenses: Array.isArray(savedExpenses) ? savedExpenses : [],

  addExpense: (expense) =>
    set((state) => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));

      const newExpense = {
        ...expense,
        userId: currentUser.id,
      };

      const updatedExpenses = [...state.expenses, newExpense];

      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));

      return { expenses: updatedExpenses };
    }),

  getUserExpenses: (userId) => {
    const allExpenses = get().expenses;
    return allExpenses.filter((expense) => expense.userId === userId);
  },
}));
