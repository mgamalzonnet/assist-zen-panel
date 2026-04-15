import { useState } from "react";
import { Plus, Search, X } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";

interface Campaign {
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

const campaigns: Campaign[] = [
  {
    id: 1,
    name: "عملاء سابقين فورم التميز",
    preview: "لسه الفرصة قدامك! خصم %70 على باقة الترم كاملة 🚀 متاح لف...",
    channel: "فردي",
    channelId: "9816",
    status: "completed",
    target: 200,
    success: 194,
    date: "2026/04/09 14:41",
  },
  {
    id: 2,
    name: "مشتركين تجريبين",
    preview: "عيدينك وصلت! خصم %70 على باقة الترم كاملة 🔑 كود الخصم: 0...",
    channel: "فردي",
    channelId: "9816",
    status: "completed",
    target: 200,
    success: 164,
    date: "2026/04/09 12:17",
  },
  {
    id: 3,
    name: "مشتركين مدفوع منتهين",
    preview: "[template] whtscampain003",
    channel: "فردي",
    channelId: "9816",
    status: "completed",
    target: 199,
    success: 199,
    date: "2026/04/08 22:09",
  },
  {
    id: 4,
    name: "المشتركين",
    preview: "[template] whtscampain001",
    channel: "فردي",
    channelId: "9816",
    status: "completed",
    target: 199,
    success: 199,
    date: "2026/04/08 21:37",
  },
];

const StatusBadge = ({ status }: { status: Campaign["status"] }) => {
  const map = {
    completed: { label: "مكتمل", cls: "bg-emerald-100 text-emerald-700" },
    sending: { label: "جاري الإرسال", cls: "bg-blue-100 text-blue-700" },
    draft: { label: "مسودة", cls: "bg-secondary text-muted-foreground" },
    failed: { label: "فشل", cls: "bg-red-100 text-red-600" },
  };
  const s = map[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${s.cls}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {s.label}
    </span>
  );
};

const Campaigns = () => {
  const [search, setSearch] = useState("");

  const filtered = campaigns.filter((c) =>
    c.name.includes(search) || c.preview.includes(search)
  );

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />

      <main className="mr-[240px] p-6 lg:p-8">
        {/* Header */}
        <div className="text-right mb-8">
          <h1 className="text-2xl font-bold text-foreground">الحملات الإعلانية</h1>
          <p className="text-sm text-muted-foreground mt-1 max-w-2xl ">
            أرسل رسائل ترويجية أو إشعارات وتنبيهات مجمعة لجهات اتصالك بشكل آمن تماماً، مع نظام مانع الحظر (مولة متغيرة لكل رسالة عبر خوادم واصل).
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-6">
          {/* Search */}
          <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2.5 flex-1 max-w-md shadow-sm">
            <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث في الحملات..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none text-right"
            />
          </div>

          {/* New campaign button */}
          <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:bg-primary/90 transition-colors">
            <Plus className="w-4 h-4" />
            حملة جديدة
          </button>
        </div>
{/* Table */}
<div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
  <div className="overflow-x-auto">
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-border bg-secondary/40">
          {/* Reversed Header Order */}
          <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground">اسم الحملة</th>
          <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground">القناة المرسلة</th>
          <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground">الحالة</th>
          <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground">الإحصائيات</th>
          <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground">التاريخ</th>
          <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground">الإجراءات</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map((c) => {
          const pct = Math.round((c.success / c.target) * 100);
          return (
            <tr key={c.id} className="border-b border-border last:border-0 hover:bg-secondary/20 transition-colors">
              
              {/* 1. Name (Now First) */}
              <td className="py-4 px-5 text-right">
                <div className="font-semibold text-foreground">{c.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5 truncate max-w-xs">{c.preview}</div>
              </td>

              {/* 2. Channel */}
              <td className="py-4 px-5 text-right">
                <span className="text-sm text-foreground">
                  {c.channel}{" "}
                  <span className="text-primary font-medium">{c.channelId}</span>
                </span>
              </td>

              {/* 3. Status */}
              <td className="py-4 px-5">
                <div className="flex justify-start">
                  <StatusBadge status={c.status} />
                </div>
              </td>

              {/* 4. Stats */}
              <td className="py-4 px-5">
                <div className="text-right">
                  <div className="flex items-center justify-start gap-3 text-xs mb-1.5">
                    <span className="text-emerald-600 font-semibold">نجاح: {c.success}</span>
                    <span className="text-muted-foreground">الهدف: {c.target}</span>
                  </div>
                  <div className="w-28 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </td>

              {/* 5. Date */}
              <td className="py-4 px-5 text-right text-muted-foreground whitespace-nowrap font-mono text-xs">
                {c.date}
              </td>

              {/* 6. Actions (Now Last) */}
              <td className="py-4 px-5">
                <div className="flex justify-start">
                  <button className="flex items-center gap-1 text-xs text-red-500 hover:text-red-600 transition-colors">
                    <X className="w-3.5 h-3.5" />
                    حذف
                  </button>
                </div>
              </td>

            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
</div>
      </main>
    </div>
  );
};

export default Campaigns;
