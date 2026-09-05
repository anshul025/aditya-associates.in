import { Sprout } from "lucide-react";

export default function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#d97706] py-3.5 overflow-hidden border-y border-[#0f382c]/20" data-testid="marquee-strip">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-6 text-[#131c18] font-display font-bold text-sm sm:text-base uppercase tracking-widest whitespace-nowrap">
            {item}
            <Sprout size={16} className="text-[#0f382c]" />
          </span>
        ))}
      </div>
    </div>
  );
}
