export default function InventoryTable({ items, onEdit, onDelete }) {
  return (
    <table className="w-full bg-white rounded shadow mt-4">
      <thead>
        <tr className="text-left bg-gray-100">
          <th className="p-2">Item</th>
          <th className="p-2">Location</th>
          <th className="p-2">Quantity</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, idx) => (
          <tr key={idx} className="border-t">
            <td className="p-2">{item.name}</td>
            <td className="p-2">{item.location}</td>
            <td className="p-2">{item.quantity}</td>
            <td className="p-2">
              <button onClick={() => onEdit(item)} className="text-blue-500">Edit</button>
              <button onClick={() => onDelete(item.id)} className="text-red-500 ml-2">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
