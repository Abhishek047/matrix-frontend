import { useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { AUTH_TOKEN_LS } from "../utils/constants";
import { User } from "firebase/auth";
// import { get } from "../api";
// import { endPoints } from "../api/endpoints";

export const useUser = () => {
  const [authInfo, setAuthInfo] = useState<{
    user: User | null;
    isLoading: boolean;
  }>(() => {
    const user = auth.currentUser;
    const isLoading = !user;
    return { isLoading, user };
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthInfo({ isLoading: false, user });
    });

    return unsubscribe;
  }, []);
  useEffect(() => {
    if (!authInfo.isLoading) {
      if (authInfo.user) {
        // fetch token and add
        if (!localStorage.getItem(AUTH_TOKEN_LS)) {
          (async () => {
            const token = await auth.currentUser?.getIdToken();
            localStorage.setItem(AUTH_TOKEN_LS, token || "");
          })();
        }
      }
    }
  }, [authInfo]);

  return { user: authInfo.user, loadingFirebaseUser: authInfo.isLoading };
};
