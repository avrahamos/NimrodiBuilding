import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import roles from "../data/roles.json";

const initialRole = roles[0]; 

export const roleSlice = createSlice({
  name: "role",
  initialState: initialRole,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      const role = action.payload;
      if (roles.includes(role)) {
        return role;
      }
      return state;
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
