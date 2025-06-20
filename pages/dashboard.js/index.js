import Sidebar from "../../components/Sidebar";
import DashboardCards from "../../components/DashboardCards";
import InventoryChart from "../../components/InventoryChart";

export default function DashboardPage() {
  const stats = [
    { label: "Total Inventory", value: "11,400" },
    { label: "Warehouse A", value: "4,500" },
    { label: "Warehouse B", value: "6,900" },
    { label: "Low Stock Alerts", value: 2 },
  ];

  const pieData = {
    labels: ["Warehouse A", "Warehouse B", "Low Stock Alerts"],
    datasets: [
      {
        label: "Inventory",
        data: [4500, 6900, 2],
        backgroundColor: ["#3b82f6", "#10b981", "#facc15"],
      },
    ],
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-6 w-full">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <DashboardCards stats={stats} />
        <InventoryChart data={pieData} />
      </main>
    </div>
  );
}
