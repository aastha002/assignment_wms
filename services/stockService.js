import { db } from "../lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const stockMovementsRef = collection(db, "stockMovements");

export const recordMovement = (movement) => addDoc(stockMovementsRef, movement);
export const getMovements = async () => {
  const snapshot = await getDocs(stockMovementsRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
