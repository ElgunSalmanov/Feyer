import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card: [],
};

const slice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      if (
        state.card.find((item) => item.id === action.payload.id) !==
          undefined &&
        state.card.find(
          (item) => item.selectedSize === action.payload.selectedSize
        )
      ) {
        state.card.find(
          (item) =>
            item.id === action.payload.id &&
            item.selectedSize === action.payload.selectedSize
        ).count += action.payload.count;
        return;
      }

      state.card.push(action.payload);
    },
    removeFromCard: (state, action) => {
      if (
        state.card.find((item) => item.id === action.payload.id) !==
          undefined &&
        state.card.find(
          (item) => item.selectedSize === action.payload.selectedSize
        )
      ) {
        state.card = state.card.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

export const { addToCard, removeFromCard } = slice.actions;
export default slice.reducer;
