import { db } from "../lib/firebase";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDocs,
} from "firebase/firestore";

const warehousesRef = collection(db, "warehouses");

export const addWarehouse = (warehouse) => addDoc(warehousesRef, warehouse);
export const deleteWarehouse = (id) => deleteDoc(doc(db, "warehouses", id));
export const updateWarehouse = (id, data) => updateDoc(doc(db, "warehouses", id), data);
export const getWarehouses = async () => {
  const snapshot = await getDocs(warehousesRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
