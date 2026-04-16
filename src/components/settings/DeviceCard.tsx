import { Smartphone, Link, Trash2, QrCode } from "lucide-react";
import type { Device } from "@/types";
import DeviceStatusBadge from "./DeviceStatusBadge";
import QrPlaceholder from "./QrPlaceholder";

interface DeviceCardProps {
  device: Device;
}

const DeviceCard = ({ device }: DeviceCardProps) => (
  <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
    {/* Device row */}
    <div className="flex items-center justify-between px-6 py-4">
      {/* Actions */}
      <div className="flex items-center gap-3">
        {device.status === "blocked_temp" && (
          <button className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors font-medium">
            <Link className="w-3.5 h-3.5" />
            ربط
          </button>
        )}
        <button className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-600 transition-colors font-medium">
          <Trash2 className="w-3.5 h-3.5" />
          حذف
        </button>
      </div>

      {/* Status badge */}
      <DeviceStatusBadge status={device.status} />

      {/* Device info */}
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="font-semibold text-foreground font-mono">{device.number}</div>
          <div className="text-xs text-muted-foreground mt-0.5">{device.label}</div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
          <Smartphone className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </div>

    {/* QR section */}
    {device.showQr && (
      <div className="border-t border-border px-6 py-6 text-center bg-secondary/20">
        <div className="flex items-center justify-center gap-2 mb-4 text-foreground font-semibold">
          <QrCode className="w-4 h-4" />
          قم بمسح الكود (QR) لربط رقمك
        </div>
        <QrPlaceholder />
        <p className="text-xs text-muted-foreground mt-3">
          افتح واتساب ← الأجهزة المرتبطة ← ربط جهاز ← امسح الكود
        </p>
      </div>
    )}
  </div>
);

export default DeviceCard;
