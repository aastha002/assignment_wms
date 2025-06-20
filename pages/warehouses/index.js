import Sidebar from "../../components/Sidebar";

export default function WarehousesPage() {
  const warehouses = [
    { id: 1, name: "Warehouse A", location: "Delhi" },
    { id: 2, name: "Warehouse B", location: "Mumbai" },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-6 w-full">
        <h1 className="text-2xl font-bold mb-4">Warehouses</h1>
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">Warehouse Name</th>
              <th className="border p-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {warehouses.map((wh) => (
              <tr key={wh.id}>
                <td className="border p-2">{wh.name}</td>
                <td className="border p-2">{wh.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
