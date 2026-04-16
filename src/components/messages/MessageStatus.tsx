import { CheckCheck, Check } from "lucide-react";

interface MessageStatusProps {
  status?: string;
}

const MessageStatus = ({ status }: MessageStatusProps) => {
  if (status === "read") return <CheckCheck className="w-3.5 h-3.5 text-sky-400" />;
  if (status === "delivered") return <CheckCheck className="w-3.5 h-3.5 text-white/60" />;
  return <Check className="w-3.5 h-3.5 text-white/60" />;
};

export default MessageStatus;
