import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  UserCompanyInfoType,
  UserInfoType,
  UserModal,
} from "../modal/user.modal";

const initialState = new UserModal();
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateUserData: (state, action: PayloadAction<UserInfoType>) => ({
      ...state,
      info: action.payload,
    }),
    updateUserCompany: (state, action: PayloadAction<UserCompanyInfoType>) => ({
      ...state,
      companyInfo: action.payload,
    }),
  },
});

export const { updateUserData, updateUserCompany } = userSlice.actions;

export default userSlice.reducer;
