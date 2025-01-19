import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const axiosPublic = useAxiosPublic();

  // Create user with email and password
  const createUserByEmailPassword = async (email, pass) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, pass);
      return result;
    } catch (error) {
      // console.error("Error creating user: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      toast.success("Successfully login");
      setUser(result.user);
      return result;
    } catch (error) {
      // console.error("Error with Google login: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateUserInfo = async (name, photo) => {
    try {
      const update = await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      return update;
    } catch (error) {
      // console.log("Error from info update", error);
      throw error;
    }
  };

  // Sign in with existing account
  const signInByExistingAccount = async (email, pass) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, pass);
      return result;
    } catch (error) {
      // console.error("Error signing in: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      toast.success("Successfully Logout");

      setUser(null);
    } catch (error) {
      // console.error("Error signing out: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Observe user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res) {
            const token = res.data.token;
            localStorage.setItem("token", token);
          } else {
            localStorage.removeItem("token");
            setUser(null);
          }
        });
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [auth, axiosPublic]);

  // console.log(user);

  const authInfo = {
    user,
    loading,
    createUserByEmailPassword,
    handleGoogleLogin,
    signInByExistingAccount,
    handleLogout,
    updateUserInfo,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
