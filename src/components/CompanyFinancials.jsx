import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CompanyFinancials = ({ data }) => {
  const chartData = [
    { name: 'Revenue', value: data.revenue },
    { name: 'Profit', value: data.profit },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <p className="mt-4">Growth: {(data.growth * 100).toFixed(2)}%</p>
    </div>
  );
};

export default CompanyFinancials;
