import { db } from "../lib/firebase";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDocs,
} from "firebase/firestore";

const inventoryRef = collection(db, "inventory");

export const addItem = async (item) => addDoc(inventoryRef, item);
export const deleteItem = async (id) => deleteDoc(doc(db, "inventory", id));
export const updateItem = async (id, item) => updateDoc(doc(db, "inventory", id), item);
export const getItems = async () => {
  const snapshot = await getDocs(inventoryRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
