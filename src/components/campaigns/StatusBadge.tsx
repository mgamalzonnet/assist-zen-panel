import type { Campaign } from "@/types";

interface StatusBadgeProps {
  status: Campaign["status"];
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const map: Record<Campaign["status"], { label: string; cls: string }> = {
    completed: { label: "مكتمل", cls: "bg-emerald-100 text-emerald-700" },
    sending:   { label: "جاري الإرسال", cls: "bg-primary/10 text-primary border border-primary/20" },
    draft:     { label: "مسودة", cls: "bg-secondary text-muted-foreground" },
    failed:    { label: "فشل", cls: "bg-red-100 text-red-600" },
  };
  const s = map[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${s.cls}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {s.label}
    </span>
  );
};

export default StatusBadge;
