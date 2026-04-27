import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}

/* SKILL.md Error state: Clear message + retry button */
export const ErrorState = ({
  title = "حدث خطأ",
  message = "فشل تحميل البيانات. تحقق من اتصالك وحاول مجدداً.",
  onRetry,
  className,
}: ErrorStateProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-16 text-center",
        className,
      )}
    >
      <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center">
        <AlertCircle className="w-8 h-8 text-destructive" aria-hidden />
      </div>
      <div className="space-y-1 max-w-xs">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
      {onRetry && (
        <Button onClick={onRetry} variant="outline" size="sm">
          حاول مجدداً
        </Button>
      )}
    </div>
  );
};
