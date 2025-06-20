"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    if (typeof window !== "undefined") {
      const unsubscribe = onAuthStateChanged(auth, async (u) => {
        setUser(u);
        if (u) {
          try {
            const docSnap = await getDoc(doc(db, "users", u.uid));
            if (docSnap.exists()) setRole(docSnap.data().role);
          } catch (error) {
            console.error("Error fetching user role:", error);
          }
        }
        setLoading(false);
      });

      return () => unsubscribe();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, role, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
