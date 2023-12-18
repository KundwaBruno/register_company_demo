import { IBageProps } from "@/utils/types/t_badge";

function Badge({ label }: IBageProps) {
  return (
    <div className="hidden rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs text-primary md:block">
      <p className="line-clamp-1">{label}</p>
    </div>
  );
}

export default Badge;
