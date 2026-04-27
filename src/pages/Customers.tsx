import { useState } from "react";
import { Search, Plus, Upload, Download, Users } from "lucide-react";
import SourceBadge from "@/components/customers/SourceBadge";
import { contacts } from "@/data/contacts";

const Customers = () => {
  const [search, setSearch] = useState("");

  const filtered = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );

  return (
    <div className="p-4 pt-16 sm:pt-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Users className="w-4 h-4 text-primary" />
            </div>
            جهات الاتصال
          </h1>
          <span className="bg-secondary text-foreground text-sm font-bold px-3 py-1 rounded-lg">
            {contacts.length.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <button className="flex items-center gap-1.5 border border-border text-muted-foreground px-3 py-2 rounded-xl text-sm hover:bg-secondary transition-colors">
            <Download className="w-4 h-4" />
            تصدير
          </button>
          <button className="flex items-center gap-1.5 border border-border text-muted-foreground px-3 py-2 rounded-xl text-sm hover:bg-secondary transition-colors">
            <Upload className="w-4 h-4" />
            استيراد
          </button>
          <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-semibold shadow-sm hover:bg-primary/90 transition-colors">
            <Plus className="w-4 h-4" />
            إضافة جهة اتصال
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-card border border-border rounded-2xl px-4 py-3 flex items-center gap-3 mb-6 shadow-sm">
        <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ابحث بالاسم أو الرقم أو البريد..."
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none text-right"
        />
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="border-b border-border bg-secondary/40">
                <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground whitespace-nowrap">الاسم</th>
                <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground whitespace-nowrap">الهاتف</th>
                <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground whitespace-nowrap hidden md:table-cell">البريد</th>
                <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground whitespace-nowrap hidden md:table-cell">الشركة</th>
                <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground whitespace-nowrap hidden lg:table-cell">الوسوم</th>
                <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground whitespace-nowrap">المصدر</th>
                <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground whitespace-nowrap hidden lg:table-cell">تاريخ الإضافة</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((contact) => (
                <tr
                  key={contact.id}
                  className="border-b border-border last:border-0 hover:bg-secondary/20 transition-colors cursor-pointer"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3 justify-start">
                      <div className={`w-9 h-9 rounded-full ${contact.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                        {contact.avatar}
                      </div>
                      <span className="font-semibold text-foreground whitespace-nowrap">{contact.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right font-mono text-sm whitespace-nowrap">{contact.phone}</td>
                  <td className="py-4 px-4 text-right text-muted-foreground hidden md:table-cell">{contact.email}</td>
                  <td className="py-4 px-4 text-right text-muted-foreground hidden md:table-cell">{contact.company}</td>
                  <td className="py-4 px-4 hidden lg:table-cell">
                    <div className="flex gap-1 justify-start flex-wrap">
                      {contact.tags.length > 0 ? (
                        contact.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-full"
                          >
                            {tag}
                          </span>
                        ))
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-start">
                      <SourceBadge source={contact.source} />
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right text-muted-foreground whitespace-nowrap hidden lg:table-cell">
                    {contact.addedDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
