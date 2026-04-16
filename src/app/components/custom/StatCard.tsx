interface StatCardProps {
  value: string;
  label: string;
  color?: 'blue' | 'purple';
}

export default function StatCard({ value, label, color = 'blue' }: StatCardProps) {
  const colorClasses = {
    blue: 'text-blue-400',
    purple: 'text-purple-400'
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <div className={`text-3xl font-bold ${colorClasses[color]} mb-1`}>{value}</div>
      <div className="text-sm text-white/60">{label}</div>
    </div>
  );
}