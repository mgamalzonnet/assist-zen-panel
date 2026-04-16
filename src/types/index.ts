// ─── Shared domain types ──────────────────────────────────────────────────────

export interface Employee {
  id: number;
  name: string;
  avatar: string;
  avatarColor: string;
  total: number;
  solved: number;
  pending: number;
  rating: number | null;
  ratingCount: number;
  shift: string;
  loginTime: string;
  responseTime: string;
  speed: string;
  completion: number;
}

export interface Message {
  id: number;
  text: string;
  time: string;
  from: "agent" | "customer";
  status?: "sent" | "delivered" | "read";
  type?: "text" | "image" | "video";
}

export interface Conversation {
  id: number;
  name: string;
  phone: string;
  avatar: string;
  avatarColor: string;
  lastMessage: string;
  time: string;
  channel: string;
  unread?: number;
  replies?: number;
  messageType?: "image" | "video" | "text";
  assignedTo?: string;
  tag?: string;
  messages: Message[];
}

export interface TeamMember {
  id: number;
  name: string;
  email: string;
  avatar: string;
  avatarColor: string;
  role: "manager" | "employee";
  channel: string;
  joinDate: string;
}

export interface Contact {
  id: number;
  name: string;
  avatar: string;
  avatarColor: string;
  phone: string;
  email: string;
  company: string;
  tags: string[];
  source: "whatsapp" | "api" | "manual";
  addedDate: string;
}

export interface Campaign {
  id: number;
  name: string;
  preview: string;
  channel: string;
  channelId: string;
  status: "completed" | "sending" | "draft" | "failed";
  target: number;
  success: number;
  date: string;
}

export type DeviceStatus = "blocked_temp" | "waiting_scan" | "connected";

export interface Device {
  id: number;
  number: string;
  label: string;
  status: DeviceStatus;
  showQr?: boolean;
}
