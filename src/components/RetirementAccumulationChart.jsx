import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatIndianCurrency } from "../utils/sipCalculator";

function formatAxisValue(value) {
  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(1)}Cr`;
  }

  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(1)}L`;
  }

  if (value >= 1000) {
    return `₹${(value / 1000).toFixed(0)}K`;
  }

  return `₹${value}`;
}

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="sip-chart-tooltip">
      <strong>Age {label}</strong>
      {payload.map((entry) => (
        <p key={entry.dataKey}>
          {entry.name}: ₹ {formatIndianCurrency(entry.value)}
        </p>
      ))}
    </div>
  );
}

export default function RetirementAccumulationChart({ yearlyProjection }) {
  const chartData = yearlyProjection.map((entry) => ({
    age: entry.age,
    accumulated: Math.round(entry.accumulated),
    targetCorpus: Math.round(entry.targetCorpus),
  }));

  if (!chartData.length) {
    return (
      <p className="sip-chart__note">
        Adjust your ages to view the retirement savings projection chart.
      </p>
    );
  }

  return (
    <div className="sip-chart-library">
      <ResponsiveContainer width="100%" height={320}>
        <AreaChart
          data={chartData}
          margin={{ top: 12, right: 12, left: 4, bottom: 0 }}
        >
          <defs>
            <linearGradient id="retirementAccumulationGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#087bb2" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#087bb2" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="4 4" stroke="#dbe8ef" vertical={false} />
          <XAxis
            dataKey="age"
            tick={{ fill: "#607083", fontSize: 12 }}
            axisLine={{ stroke: "#dbe8ef" }}
            tickLine={false}
            label={{ value: "Age", position: "insideBottom", offset: -2, fill: "#607083" }}
          />
          <YAxis
            tickFormatter={formatAxisValue}
            tick={{ fill: "#607083", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={72}
          />
          <Tooltip content={<ChartTooltip />} />
          <Legend
            verticalAlign="top"
            height={36}
            formatter={(value) =>
              value === "accumulated" ? "Projected Savings" : "Target Corpus"
            }
          />
          <Line
            type="monotone"
            dataKey="targetCorpus"
            name="targetCorpus"
            stroke="#f3c63f"
            strokeWidth={2}
            strokeDasharray="6 4"
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="accumulated"
            name="accumulated"
            stroke="#087bb2"
            strokeWidth={3}
            fill="url(#retirementAccumulationGradient)"
            dot={false}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
