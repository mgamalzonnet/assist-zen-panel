import type { DeviceStatus } from "@/types";

interface DeviceStatusBadgeProps {
  status: DeviceStatus;
}

const DeviceStatusBadge = ({ status }: DeviceStatusBadgeProps) => {
  const map: Record<DeviceStatus, { label: string; cls: string }> = {
    blocked_temp:  { label: "محظور مؤقتاً",    cls: "bg-orange-100 text-orange-600 border border-orange-200" },
    waiting_scan:  { label: "في انتظار المسح",  cls: "bg-yellow-100 text-yellow-700 border border-yellow-200" },
    connected:     { label: "متصل",             cls: "bg-emerald-100 text-emerald-700 border border-emerald-200" },
  };
  const s = map[status];
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${s.cls}`}>
      {s.label}
    </span>
  );
};

export default DeviceStatusBadge;
