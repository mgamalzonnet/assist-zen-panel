interface RoleBadgeProps {
  role: "manager" | "employee";
}

const RoleBadge = ({ role }: RoleBadgeProps) => {
  if (role === "manager") {
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 border border-purple-200">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
        مدير
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
      موظف
    </span>
  );
};

export default RoleBadge;
