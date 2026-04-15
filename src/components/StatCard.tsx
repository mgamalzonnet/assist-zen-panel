import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  colorClass: string;
}

const StatCard = ({ title, value, subtitle, icon: Icon, colorClass }: StatCardProps) => {
  return (
    <div className={`${colorClass} rounded-2xl p-6 text-primary-foreground relative overflow-hidden min-h-[140px] flex flex-col justify-center shadow-lg`}>
      <div className="absolute top-4 left-4 opacity-30">
        <Icon className="w-8 h-8" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-primary-foreground/10" />
      <div className="relative z-10 text-center">
        <div className="text-5xl font-bold mb-1 font-cairo">{value}</div>
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-sm opacity-80">{subtitle}</div>
      </div>
    </div>
  );
};

export default StatCard;
