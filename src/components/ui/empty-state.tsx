import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

/* SKILL.md Empty state: Icon + message + CTA */
export const EmptyState = ({ icon: Icon, title, description, action, className }: EmptyStateProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-16 text-center",
        className,
      )}
    >
      <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
        <Icon className="w-8 h-8 text-muted-foreground" aria-hidden />
      </div>
      <div className="space-y-1 max-w-xs">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {action && (
        <Button onClick={action.onClick} size="sm">
          {action.label}
        </Button>
      )}
    </div>
  );
};
