import { get } from "../../api";
import { endPoints } from "../../api/endpoints";
import { AppDispatch, store } from "../store";
import { updateUserCompany, updateUserData } from "../slice/user.slice";
import { UserCompanyInfo, UserInfo } from "../modal/user.modal";
import { OWNER } from "../../utils/constants";

export const getUser = () => async (dispatch: AppDispatch) => {
  if (store.getState().user.info.isLoading) {
    return;
  }
  dispatch(
    updateUserData({
      isLoading: true,
      data: null,
      hasError: null,
    })
  );
  try {
    const { data } = await get(endPoints.user.getUser);
    const user = data.data.user as UserInfo;
    dispatch(
      updateUserData({
        isLoading: false,
        data: user,
        hasError: null,
      })
    );
    if (user.userType === OWNER) {
      dispatch(
        updateUserCompany({
          isLoading: false,
          data: data.data.company as UserCompanyInfo,
          hasError: null,
        })
      );
    }
  } catch (error) {
    console.log(error);
    dispatch(
      updateUserData({
        isLoading: false,
        data: null,
        hasError: (error as Record<string, string>).message,
      })
    );
  }
};
