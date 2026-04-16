import { useState } from "react";
import { Plus, Search, X } from "lucide-react";
import StatusBadge from "@/components/campaigns/StatusBadge";
import { campaigns } from "@/data/campaigns";

const Campaigns = () => {
  const [search, setSearch] = useState("");

  const filtered = campaigns.filter(
    (c) => c.name.includes(search) || c.preview.includes(search)
  );

  return (
    <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="text-right mb-8">
          <h1 className="text-2xl font-bold text-foreground">الحملات الإعلانية</h1>
          <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
            أرسل رسائل ترويجية أو إشعارات وتنبيهات مجمعة لجهات اتصالك بشكل آمن تماماً، مع نظام مانع الحظر (مولة متغيرة لكل رسالة عبر خوادم واصل).
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-6">
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
                      <td className="py-4 px-5 text-right">
                        <div className="font-semibold text-foreground">{c.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5 truncate max-w-xs">{c.preview}</div>
                      </td>
                      <td className="py-4 px-5 text-right">
                        <span className="text-sm text-foreground">
                          {c.channel}{" "}
                          <span className="text-primary font-medium">{c.channelId}</span>
                        </span>
                      </td>
                      <td className="py-4 px-5">
                        <div className="flex justify-start">
                          <StatusBadge status={c.status} />
                        </div>
                      </td>
                      <td className="py-4 px-5">
                        <div className="text-right">
                          <div className="flex items-center justify-start gap-3 text-xs mb-1.5">
                            <span className="text-emerald-600 font-semibold">نجاح: {c.success}</span>
                            <span className="text-muted-foreground">الهدف: {c.target}</span>
                          </div>
                          <div className="w-28 h-1.5 bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-5 text-right text-muted-foreground whitespace-nowrap font-mono text-xs">
                        {c.date}
                      </td>
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
      </div>
  );
};

export default Campaigns;
