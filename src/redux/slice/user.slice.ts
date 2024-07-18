import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModal } from "../modal/user.modal";

const initialState = new UserModal();
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    userData: (state, _action: PayloadAction) => ({
      ...state,
    }),
  },
});

export const { userData } = userSlice.actions;

export default userSlice.reducer;
