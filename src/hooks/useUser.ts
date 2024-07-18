import { auth } from "../services/firebase";

export const useUser = () => {
  const firebaseUser = auth.currentUser;
  return { user: firebaseUser, isLoading: false };
};
