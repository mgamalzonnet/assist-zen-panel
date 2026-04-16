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
    <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="text-right">
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-3 justify-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <UserPlus className="w-5 h-5 text-primary" />
              </div>
              إدارة الفريق
            </h1>
            <p className="text-sm text-muted-foreground mt-1">إضافة وإدارة الموظفين وصلاحياتهم.</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:bg-primary/90 transition-colors">
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
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/40">
                  <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground">الموظف</th>
                  <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground">الصلاحية</th>
                  <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground">القسم / القناة</th>
                  <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground">تاريخ الانضمام</th>
                  <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground">الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((member) => (
                  <tr key={member.id} className="border-b border-border last:border-0 hover:bg-secondary/20 transition-colors">
                    {/* Employee */}
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3 justify-start">
                        <div className={`w-9 h-9 rounded-full ${member.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                          {member.avatar}
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-foreground">{member.name}</div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5 justify-start">
                            <Mail className="w-3 h-3" />
                            <span>{member.email}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Role */}
                    <td className="py-4 px-5">
                      <div className="flex justify-start">
                        <RoleBadge role={member.role} />
                      </div>
                    </td>

                    {/* Channel */}
                    <td className="py-4 px-5 text-right">
                      <span className={`text-sm ${member.channel === "عام (الكل)" ? "text-muted-foreground" : "text-primary font-medium"}`}>
                        {member.channel}
                      </span>
                    </td>

                    {/* Join date */}
                    <td className="py-4 px-5 text-right text-muted-foreground">{member.joinDate}</td>

                    {/* Actions */}
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
