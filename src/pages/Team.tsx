import { useState } from "react";
import { UserPlus, Search, MoreHorizontal, Mail } from "lucide-react";
import RoleBadge from "@/components/team/RoleBadge";
import { teamMembers } from "@/data/team";

const Team = () => {
  const [search, setSearch] = useState("");

  const filtered = teamMembers.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 pt-16 sm:pt-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-8">
        <div className="text-right">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-3 justify-start">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <UserPlus className="w-5 h-5 text-primary" />
            </div>
            إدارة الفريق
          </h1>
          <p className="text-sm text-muted-foreground mt-1">إضافة وإدارة الموظفين وصلاحياتهم.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:bg-primary/90 transition-colors self-start sm:self-auto flex-shrink-0">
          <UserPlus className="w-4 h-4" />
          إضافة موظف جديد
        </button>
      </div>

      {/* Search */}
      <div className="bg-card border border-border rounded-2xl px-4 py-3 flex items-center gap-3 mb-6 shadow-sm">
        <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="بحث بالاسم أو البريد الإلكتروني..."
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none text-right"
        />
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[540px]">
            <thead>
              <tr className="border-b border-border bg-secondary/40">
                <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground whitespace-nowrap">الموظف</th>
                <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground whitespace-nowrap">الصلاحية</th>
                <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground whitespace-nowrap hidden sm:table-cell">القسم / القناة</th>
                <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground whitespace-nowrap hidden md:table-cell">تاريخ الانضمام</th>
                <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground whitespace-nowrap">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((member) => (
                <tr key={member.id} className="border-b border-border last:border-0 hover:bg-secondary/20 transition-colors">
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3 justify-start">
                      <div className={`w-9 h-9 rounded-full ${member.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                        {member.avatar}
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-foreground whitespace-nowrap">{member.name}</div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5 justify-start">
                          <Mail className="w-3 h-3" />
                          <span className="hidden sm:inline">{member.email}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex justify-start">
                      <RoleBadge role={member.role} />
                    </div>
                  </td>
                  <td className="py-4 px-5 text-right hidden sm:table-cell">
                    <span className={`text-sm ${member.channel === "عام (الكل)" ? "text-muted-foreground" : "text-primary font-medium"}`}>
                      {member.channel}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-right text-muted-foreground whitespace-nowrap hidden md:table-cell">{member.joinDate}</td>
                  <td className="py-4 px-5">
                    <div className="flex justify-start">
                      <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
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

export default Team;
