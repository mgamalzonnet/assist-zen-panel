const data = [
  { name: "سارة", total: 265, solved: 230 },
  { name: "رحاب", total: 24, solved: 16 },
  { name: "هاجر", total: 12, solved: 10 },
  { name: "سارة محمد", total: 5, solved: 0 },
  { name: "لمى", total: 2, solved: 0 },
  { name: "هوازن", total: 4, solved: 1 },
  { name: "هند", total: 3, solved: 0 },
  { name: "روان", total: 9, solved: 0 },
  { name: "آية", total: 1, solved: 0 },
];

const maxVal = Math.max(...data.map((d) => d.total));

const EmployeeChart = () => {
  return (
    <div className="bg-card rounded-2xl shadow-sm border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="text-right">
          <h2 className="text-lg font-bold text-foreground">أداء الموظفين</h2>
          <p className="text-sm text-muted-foreground">مقارنة بين إجمالي المحادثات والمحلولة</p>
        </div>
        {/* <div /> */}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 justify-start mb-6">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-stat-teal" />
          <span className="text-sm text-muted-foreground">المحلولة</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-stat-blue" />
          <span className="text-sm text-muted-foreground">الإجمالي</span>
        </div>
      </div>

      {/* Bars */}
      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground w-20 text-right flex-shrink-0">{item.name}</span>
            <div className="flex-1 relative h-6">
              <div
                className="absolute top-0 right-0 h-full bg-stat-blue/20 rounded"
                style={{ width: `${(item.total / maxVal) * 100}%` }}
              />
              <div
                className="absolute top-0 right-0 h-full bg-stat-teal rounded"
                style={{ width: `${(item.solved / maxVal) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeChart;
