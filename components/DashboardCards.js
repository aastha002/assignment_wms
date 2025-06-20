import PropTypes from 'prop-types'; // ✅ REQUIRED import

export default function DashboardCards({ stats }) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {stats.map(({ label, value }) => (
        <div key={label} className="bg-white p-4 rounded shadow text-center">
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      ))}
    </div>
  );
}

DashboardCards.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};
