import { useEffect } from "react";
import { auth } from "../services/firebase";
import { AUTH_TOKEN_LS } from "../utils/constants";
import { get } from "../api";
import { endPoints } from "../api/endpoints";

export const useUser = () => {
  const firebaseUser = auth.currentUser;
  useEffect(() => {
    if (firebaseUser && !localStorage.getItem(AUTH_TOKEN_LS)) {
      (async () => {
        const token = await auth.currentUser?.getIdToken();
        localStorage.setItem(AUTH_TOKEN_LS, token || "");
      })();
    }
    (async () => {
      const { data } = await get(
        `${endPoints.user.getUser}?email=newcomp1@email.com`
      );
      console.log(data);
    })();
    // if (firebaseUser?.email) {
    // }
  }, [firebaseUser]);

  return { user: firebaseUser, isLoading: false };
};
