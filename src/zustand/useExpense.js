import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useExpenses = create(
  persist(
    (set) => ({
      expenses: [],

      // Renamed for clarity: Appends a new expense
      addExpense: (payload) =>
        set((state) => ({
          expenses: [...state.expenses, payload],
        })),

      // Correctly filters out the deleted item
      deleteExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter((item) => item.id !== id),
        })),

      // FIXED: Safely updates the item and returns un-targeted items intact
      updateExpense: (id, payload) =>
        set((state) => ({
          expenses: state.expenses.map((item) =>
            item.id === id ? { ...item, ...payload } : item,
          ),
        })),
    }),
    { name: "expenses" }, // Storage key
  ),
);
