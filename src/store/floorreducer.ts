import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialAccess = [true, false, false, false, false]; 

export const floorSlice = createSlice({
  name: "floorAccess",
  initialState: { floorAccess: initialAccess },
  reducers: {
    changeAccess: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.floorAccess[index] = !state.floorAccess[index]; 
    },
  },
});

export const { changeAccess } = floorSlice.actions;
export default floorSlice.reducer;
