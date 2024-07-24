import { useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { AUTH_TOKEN_LS } from "../utils/constants";
import { User } from "firebase/auth";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import { getUser } from "../redux/action/user.action";

export const useUser = () => {
  const [authInfo, setAuthInfo] = useState<{
    user: User | null;
    isLoading: boolean;
  }>(() => {
    const user = auth.currentUser;
    const isLoading = !user;
    return { isLoading, user };
  });
  const { isLoading, data: userData } = useAppSelector(
    (state: RootState) => state.user.info
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthInfo({ isLoading: false, user });
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!authInfo.isLoading && authInfo.user) {
      if (!localStorage.getItem(AUTH_TOKEN_LS)) {
        (async () => {
          const token = await auth.currentUser?.getIdToken();
          localStorage.setItem(AUTH_TOKEN_LS, token || "");
        })();
      }
    }
  }, [authInfo]);

  useEffect(() => {
    if (authInfo.user && !isLoading && !userData) {
      dispatch(getUser());
    }
  }, [authInfo, isLoading, dispatch, userData]);

  return { user: authInfo.user, loadingFirebaseUser: authInfo.isLoading };
};
