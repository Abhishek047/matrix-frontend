import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  connectAuthEmulator,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8_XdOtbR9-jrLehX17pVo-Rc0o1Y3bJw",
  authDomain: "matrix-cfa77.firebaseapp.com",
  projectId: "matrix-cfa77",
  storageBucket: "matrix-cfa77.appspot.com",
  messagingSenderId: "956437103507",
  appId: "1:956437103507:web:c7799c92e778f821549e66",
  measurementId: "G-Y7T24BZYW7",
};

const app = initializeApp(firebaseConfig);
const authEmulator = "http://127.0.0.1:9099";

// Configure Auth emulator (if needed)
export const auth = getAuth(app);

if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, authEmulator);
}

export const analytics = getAnalytics(app);
const storage = getStorage(app);

export interface UploadFileParams {
  pathname: string;
  file: File;
  progressFn: (val: number) => void;
}

export const uploadFile = async ({
  pathname,
  file,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  progressFn = (_) => {},
}: UploadFileParams) => {
  try {
    const imageRef = ref(storage, pathname);
    const uploadTask = uploadBytesResumable(imageRef, file);
    const url = await new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          progressFn(progress);
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Uploading...");
              break;
            default:
              console.log("default");
          }
        },
        (error) => {
          console.log(error, "error in upload");
          reject(error.message);
        },
        async () => {
          const downloadURL = getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        }
      );
    });
    return url;
  } catch (error) {
    throw new Error(error as string);
  }
};
export const deleteFile = async (url: string) => {
  const imageRef = ref(storage, url);
  try {
    await deleteObject(imageRef);
    console.log("Delete successful");
    return true;
  } catch (err) {
    console.log(err, "Delete Failed");
    return true;
  }
};
export const loginWithPassword = async (email: string, password: string) => {
  await setPersistence(auth, browserLocalPersistence);
  const userDetails = await signInWithEmailAndPassword(auth, email, password);
  return userDetails;
};
export const logOut = async () => {
  await auth.signOut();
  return true;
};
export default app;
