import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="bg-slate-900 text-white h-screen p-4 fixed">
      <h2 className="text-xl font-bold mb-4">WMS</h2>
      <nav className="flex flex-col space-y-3">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/inventory">Inventory</Link>
        <Link href="/warehouses">Warehouses</Link>
        <Link href="/reports">Reports</Link>
      </nav>
    </aside>
  );
}
