import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Sidebar from "../../components/Sidebar";

export default function InventoryPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "inventory"));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-6 w-full">
        <h1 className="text-2xl font-bold mb-4">Inventory List</h1>
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">Item Name</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Warehouse</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.quantity}</td>
                <td className="border p-2">{item.warehouse}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
