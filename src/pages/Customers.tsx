import { useState } from "react";
import { Search, Plus, Upload, Download, Users } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";

interface Contact {
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

const contacts: Contact[] = [
  {
    id: 1,
    name: "Om bader",
    avatar: "O",
    avatarColor: "bg-indigo-600",
    phone: "+966566778044",
    email: "—",
    company: "—",
    tags: [],
    source: "whatsapp",
    addedDate: "١٣ أبريل ٢٠٢٦",
  },
  {
    id: 2,
    name: "Nsreen",
    avatar: "N",
    avatarColor: "bg-blue-500",
    phone: "+966559809096",
    email: "—",
    company: "—",
    tags: [],
    source: "whatsapp",
    addedDate: "٧ أبريل ٢٠٢٦",
  },
  {
    id: 3,
    name: "F-15",
    avatar: "F",
    avatarColor: "bg-teal-500",
    phone: "+966558571446",
    email: "—",
    company: "—",
    tags: [],
    source: "whatsapp",
    addedDate: "٤ أبريل ٢٠٢٦",
  },
  {
    id: 4,
    name: "M",
    avatar: "M",
    avatarColor: "bg-blue-600",
    phone: "+966501298975",
    email: "—",
    company: "—",
    tags: [],
    source: "whatsapp",
    addedDate: "١٥ أبريل ٢٠٢٦",
  },
  {
    id: 5,
    name: "Esraa Alharbi",
    avatar: "E",
    avatarColor: "bg-emerald-500",
    phone: "+966598930009",
    email: "—",
    company: "—",
    tags: [],
    source: "whatsapp",
    addedDate: "١٥ أبريل ٢٠٢٦",
  },
  {
    id: 6,
    name: "💜 Zoooz",
    avatar: "Z",
    avatarColor: "bg-purple-500",
    phone: "+966534541476",
    email: "—",
    company: "—",
    tags: [],
    source: "whatsapp",
    addedDate: "١٣ أبريل ٢٠٢٦",
  },
  {
    id: 7,
    name: "إبتسام الزهراني",
    avatar: "إ",
    avatarColor: "bg-amber-500",
    phone: "+966502016151",
    email: "—",
    company: "—",
    tags: [],
    source: "whatsapp",
    addedDate: "٥ أبريل ٢٠٢٦",
  },
  {
    id: 8,
    name: "—",
    avatar: ".",
    avatarColor: "bg-sky-600",
    phone: "+966564661152",
    email: "—",
    company: "—",
    tags: ["مشتركين-حالين-2"],
    source: "api",
    addedDate: "٨ أبريل ٢٠٢٦",
  },
  {
    id: 9,
    name: "Sara",
    avatar: "S",
    avatarColor: "bg-sky-500",
    phone: "+966512345678",
    email: "—",
    company: "—",
    tags: [],
    source: "whatsapp",
    addedDate: "١٢ أبريل ٢٠٢٦",
  },
  {
    id: 10,
    name: "هنادي العمري",
    avatar: "ه",
    avatarColor: "bg-rose-500",
    phone: "+966523456789",
    email: "—",
    company: "—",
    tags: [],
    source: "whatsapp",
    addedDate: "١٠ أبريل ٢٠٢٦",
  },
];

const SourceBadge = ({ source }: { source: Contact["source"] }) => {
  if (source === "whatsapp") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        واتساب
      </span>
    );
  }
  if (source === "api") {
    return (
      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground">
        api
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground">
      يدوي
    </span>
  );
};

const Customers = () => {
  const [search, setSearch] = useState("");

  const filtered = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search),
  );

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />

      <main className="mr-[240px] p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          {/* Title */}
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-4 h-4 text-primary" />
              </div>
              جهات الاتصال
            </h1>
            <span className="bg-secondary text-foreground text-sm font-bold px-3 py-1 rounded-lg">
              {contacts.length.toLocaleString()}
            </span>
          </div>
          {/* Action buttons */}
          <div className="flex items-center gap-2">
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
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/40">
                  <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground">
                    الاسم
                  </th>
                  <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground">
                    الهاتف
                  </th>
                  <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground">
                    البريد
                  </th>
                  <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground">
                    الشركة
                  </th>
                  <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground">
                    الوسوم
                  </th>
                  <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground">
                    المصدر
                  </th>
                  <th className="py-3.5 px-4 text-right font-semibold text-muted-foreground">
                    تاريخ الإضافة
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((contact) => (
                  <tr
                    key={contact.id}
                    className="border-b border-border last:border-0 hover:bg-secondary/20 transition-colors cursor-pointer"
                  >
                    {/* 1. Name and Avatar */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3 justify-start">
                        <div
                          className={`w-9 h-9 rounded-full ${contact.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                        >
                          {contact.avatar}
                        </div>
                        <span className="font-semibold text-foreground">
                          {contact.name}
                        </span>
                      </div>
                    </td>

                    {/* 2. Phone */}
                    <td className="py-4 px-4 text-right font-mono text-sm">
                      {contact.phone}
                    </td>

                    {/* 3. Email */}
                    <td className="py-4 px-4 text-right text-muted-foreground">
                      {contact.email}
                    </td>

                    {/* 4. Company */}
                    <td className="py-4 px-4 text-right text-muted-foreground">
                      {contact.company}
                    </td>

                    {/* 5. Tags */}
                    <td className="py-4 px-4">
                      <div className="flex gap-1 justify-start flex-wrap">
                        {contact.tags.length > 0 ? (
                          contact.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full"
                            >
                              {tag}
                            </span>
                          ))
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </div>
                    </td>

                    {/* 6. Source */}
                    <td className="py-4 px-4">
                      <div className="flex justify-start">
                        <SourceBadge source={contact.source} />
                      </div>
                    </td>

                    {/* 7. Date Added */}
                    <td className="py-4 px-4 text-right text-muted-foreground whitespace-nowrap">
                      {contact.addedDate}
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

export default Customers;
