import { UserPlus, Search, MoreHorizontal, Mail } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";

interface TeamMember {
  id: number;
  name: string;
  email: string;
  avatar: string;
  avatarColor: string;
  role: "manager" | "employee";
  channel: string;
  joinDate: string;
}

const team: TeamMember[] = [
  { id: 1, name: "آية", email: "aya424523@gmail.com", avatar: "آ", avatarColor: "bg-red-400", role: "employee", channel: "عام (الكل)", joinDate: "٢٠٢٦/٤/١٣" },
  { id: 2, name: "اسماء", email: "asmaaljlan88@gmail.com", avatar: "ا", avatarColor: "bg-indigo-500", role: "employee", channel: "عام (الكل)", joinDate: "٢٠٢٦/٤/١١" },
  { id: 3, name: "ليان", email: "layan.alfhme2@gmail.com", avatar: "ل", avatarColor: "bg-teal-500", role: "employee", channel: "عام (الكل)", joinDate: "٢٠٢٦/٤/٥" },
  { id: 4, name: "هوازن", email: "hawazen7289@gmail.com", avatar: "ه", avatarColor: "bg-amber-500", role: "manager", channel: "عام (الكل)", joinDate: "٢٠٢٦/٤/٥" },
  { id: 5, name: "نسمة", email: "eng.nesma.dimofinf@gmail.com", avatar: "ن", avatarColor: "bg-blue-500", role: "employee", channel: "7070", joinDate: "٢٠٢٦/٤/٥" },
  { id: 6, name: "هاجر", email: "hajer.team@gmail.com", avatar: "ها", avatarColor: "bg-purple-500", role: "employee", channel: "عام (الكل)", joinDate: "٢٠٢٦/٤/٤" },
  { id: 7, name: "سارة مصطفى", email: "sara.mostafa@gmail.com", avatar: "سا", avatarColor: "bg-amber-400", role: "employee", channel: "عام (الكل)", joinDate: "٢٠٢٦/٤/٢" },
  { id: 8, name: "رحاب", email: "rehab.team@gmail.com", avatar: "ره", avatarColor: "bg-blue-400", role: "employee", channel: "9816", joinDate: "٢٠٢٦/٤/١" },
];

const RoleBadge = ({ role }: { role: "manager" | "employee" }) => {
  if (role === "manager") {
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 border border-purple-200">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
        مدير
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
      موظف
    </span>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />

      <main className="mr-[240px] p-6 lg:p-8">
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
          {/* Reversed Header Order */}
          <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground">الموظف</th>
          <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground">الصلاحية</th>
          <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground">القسم / القناة</th>
          <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground">تاريخ الانضمام</th>
          <th className="py-3.5 px-5 text-right font-semibold text-muted-foreground">الإجراءات</th>
        </tr>
      </thead>
      <tbody>
        {team.map((member) => (
          <tr key={member.id} className="border-b border-border last:border-0 hover:bg-secondary/20 transition-colors">
            
            {/* 1. Employee (Now First) */}
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

            {/* 2. Role */}
            <td className="py-4 px-5">
              <div className="flex justify-start">
                <RoleBadge role={member.role} />
              </div>
            </td>

            {/* 3. Channel */}
            <td className="py-4 px-5 text-right">
              <span className={`text-sm ${member.channel === "عام (الكل)" ? "text-muted-foreground" : "text-primary font-medium"}`}>
                {member.channel}
              </span>
            </td>

            {/* 4. Join date */}
            <td className="py-4 px-5 text-right text-muted-foreground">{member.joinDate}</td>

            {/* 5. Actions (Now Last) */}
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
      </main>
    </div>
  );
};

export default Team;
