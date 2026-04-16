import { Star, Download } from "lucide-react";

interface Employee {
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

const employees: Employee[] = [
  {
    id: 1,
    name: "سارة مصطفى",
    avatar: "سا",
    avatarColor: "bg-amber-400",
    total: 265,
    solved: 230,
    pending: 35,
    rating: 5.0,
    ratingCount: 111,
    shift: "00:00 — 06:05",
    loginTime: "6 ساعات 35 دقيقة",
    responseTime: "31 دقيقة",
    speed: "4 دقائق",
    completion: 87,
  },
  {
    id: 2,
    name: "رحاب",
    avatar: "ره",
    avatarColor: "bg-blue-500",
    total: 24,
    solved: 16,
    pending: 8,
    rating: 5.0,
    ratingCount: 3,
    shift: "متصل الآن — 05:49",
    loginTime: "7 ساعات 316 دقيقة",
    responseTime: "11 دقيقة",
    speed: "4 دقائق",
    completion: 67,
  },
  {
    id: 3,
    name: "هاجر",
    avatar: "ها",
    avatarColor: "bg-purple-500",
    total: 12,
    solved: 10,
    pending: 2,
    rating: null,
    ratingCount: 0,
    shift: "متصل الآن — 06:05",
    loginTime: "7 ساعات 30 دقيقة",
    responseTime: "29 دقيقة",
    speed: "2 دقائق",
    completion: 83,
  },
  {
    id: 4,
    name: "سارة محمد",
    avatar: "سا",
    avatarColor: "bg-amber-400",
    total: 5,
    solved: 0,
    pending: 5,
    rating: null,
    ratingCount: 0,
    shift: "متصل الآن — 11:58",
    loginTime: "1 ساعة 37 دقيقة",
    responseTime: "37 دقيقة",
    speed: "6 دقائق",
    completion: 0,
  },
  {
    id: 5,
    name: "لمى",
    avatar: "لم",
    avatarColor: "bg-pink-500",
    total: 2,
    solved: 0,
    pending: 2,
    rating: null,
    ratingCount: 0,
    shift: "متصل الآن — 12:02",
    loginTime: "1 ساعة 33 دقيقة",
    responseTime: "1 ساعة 32 دقيقة",
    speed: "—",
    completion: 0,
  },
  {
    id: 6,
    name: "هوازن",
    avatar: "هو",
    avatarColor: "bg-green-500",
    total: 4,
    solved: 1,
    pending: 3,
    rating: 5.0,
    ratingCount: 1,
    shift: "متصل الآن — 11:46",
    loginTime: "1 ساعة 319 دقيقة",
    responseTime: "28 دقيقة",
    speed: "1 دقيقة",
    completion: 25,
  },
  {
    id: 7,
    name: "هند",
    avatar: "هن",
    avatarColor: "bg-green-600",
    total: 3,
    solved: 0,
    pending: 3,
    rating: null,
    ratingCount: 0,
    shift: "متصل الآن — 12:02",
    loginTime: "1 ساعة 33 دقيقة",
    responseTime: "48 دقيقة",
    speed: "5 دقائق",
    completion: 0,
  },
  {
    id: 8,
    name: "روان",
    avatar: "رو",
    avatarColor: "bg-yellow-500",
    total: 9,
    solved: 0,
    pending: 9,
    rating: null,
    ratingCount: 0,
    shift: "متصل الآن — 12:00",
    loginTime: "1 ساعة 35 دقيقة",
    responseTime: "31 دقيقة",
    speed: "—",
    completion: 0,
  },
  {
    id: 9,
    name: "آية",
    avatar: "آي",
    avatarColor: "bg-red-400",
    total: 1,
    solved: 0,
    pending: 1,
    rating: null,
    ratingCount: 0,
    shift: "متصل الآن — 11:59",
    loginTime: "1 ساعة 36 دقيقة",
    responseTime: "1 ساعة 36 دقيقة",
    speed: "—",
    completion: 0,
  },
];

const PerformanceTable = () => {
  return (
    <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pb-4">
        <div className="text-right">
          <h2 className="text-lg font-bold text-foreground">
            تفاصيل أداء الفريق
          </h2>
          <p className="text-sm text-muted-foreground">
            إحصائيات تفصيلية لكل موظف
          </p>
        </div>
        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 ease-out border border-border rounded-lg px-3 py-1.5 hover:bg-secondary/60">
          تصدير
          <Download className="w-4 h-4" />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-t  border-border bg-secondary/50">
              <th className="py-3 px-4 text-center font-semibold text-muted-foreground">
                #
              </th>
              <th className="py-3 px-4 text-right font-semibold text-muted-foreground">
                الموظف
              </th>
              <th className="py-3 px-4 text-center font-semibold text-muted-foreground">
                الإجمالي
              </th>
              <th className="py-3 px-4 text-center font-semibold text-muted-foreground">
                محلولة
              </th>
              <th className="py-3 px-4 text-center font-semibold text-muted-foreground">
                الانتظار
              </th>
              <th className="py-3 px-4 text-right font-semibold text-muted-foreground">
                التقييم
              </th>
              <th className="py-3 px-4 text-right font-semibold text-muted-foreground">
                الشفت
              </th>
              <th className="py-3 px-4 text-right font-semibold text-muted-foreground">
                وقت التحقيق
              </th>
              <th className="py-3 px-4 text-right font-semibold text-muted-foreground">
                وقت الدخول
              </th>
              <th className="py-3 px-4 text-right font-semibold text-muted-foreground">
                سرعة الرد
              </th>
              <th className="py-3 px-4 text-right font-semibold text-muted-foreground">
                الإنجاز
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr
                key={emp.id}
                className="border-t border-border hover:bg-secondary/30 transition-colors"
              >
                <td className="py-4 px-4 text-center text-muted-foreground">
                  {String(emp.id).padStart(2, "0")}
                </td>
                <td className="py-4 px-4 text-right">
                  <div className="flex items-center gap-3 justify-start">
                    <div
                      className={`w-8 h-8 rounded-full ${emp.avatarColor} flex items-center justify-center text-primary-foreground text-xs font-bold`}
                    >
                      {emp.avatar}
                    </div>
                    <span className="font-semibold">{emp.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-center font-bold">{emp.total}</td>
                <td className="py-4 px-4 text-center font-medium text-stat-teal">
                  {emp.solved}
                </td>
                <td className="py-4 px-4 text-center font-medium text-stat-orange">
                  {emp.pending}
                </td>
                <td className="py-4 px-4 text-right">
                  {emp.rating ? (
                    <div className="flex items-center gap-1 justify-start">
                      <span className="text-xs text-muted-foreground">
                        ({emp.ratingCount})
                      </span>
                      <span className="font-medium">{emp.rating}</span>
                      <Star className="w-4 h-4 fill-warning text-warning" />
                    </div>
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </td>
                <td className="py-4 px-4 text-right">
                  <span
                    className={`text-xs ${emp.shift.includes("متصل") ? "text-success font-medium" : "text-muted-foreground"}`}
                  >
                    {emp.shift.includes("متصل") && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-success ml-1" />
                    )}
                    {emp.shift}
                  </span>
                </td>
                <td className="py-4 px-4 text-right text-muted-foreground">
                  {emp.loginTime}
                </td>
                <td className="py-4 px-4 text-right text-muted-foreground">
                  {emp.responseTime}
                </td>
                <td className="py-4 px-4 text-right text-muted-foreground">
                  {emp.speed}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      {emp.completion}%
                    </span>
                    <div className="w-20 h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          emp.completion >= 80
                            ? "bg-success"
                            : emp.completion >= 50
                              ? "bg-stat-blue"
                              : emp.completion > 0
                                ? "bg-stat-orange"
                                : "bg-muted-foreground/30"
                        }`}
                        style={{ width: `${emp.completion}%` }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceTable;
