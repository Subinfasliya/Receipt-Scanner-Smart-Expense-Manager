import { create } from "zustand";

const initialReceiptData = {
  storeName: "",
  date: "",
  time: "",
  totalAmount: "",
  note: "",
  items: [],
  rawText: "",
};

export const useReceiptStore = create((set) => ({
  image: null,
  receiptData: initialReceiptData,

  setImage: (file) => set({ image: file }),

  setReceiptData: (data) => set({ receiptData: data }),

  //   updateField: (key, value) =>
  //     set((state) => ({
  //       parseData: {
  //         ...state.parsedData,
  //         [key]: value,
  //       },
  //     })),

  clearReceiptData: () =>
    set({
      image:null,
      receiptData: initialReceiptData,
    }),
}));
