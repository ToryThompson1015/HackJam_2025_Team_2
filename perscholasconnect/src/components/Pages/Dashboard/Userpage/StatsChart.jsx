import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "JAN", applications: 30 },
  { name: "FEB", applications: 50 },
  { name: "MAR", applications: 80 },
];

export default function StatsChart() {
  return (
    <div className="bg-white p-6 shadow rounded-md">
      <h2 className="font-bold text-lg mb-4">Vacancy Stats</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="applications" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
