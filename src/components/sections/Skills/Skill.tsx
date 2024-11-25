export default function Skill({ title, percent }: { title: string; percent: number }) {
  const percentToText = (per: number) => {
    if (per >= 80 && per <= 100) return "상";
    else if (per >= 60 && per < 80) return "중";
    else return "하";
  };

  return (
    <div className="flex items-center gap-4 rounded-lg border border-[#E5E7EB] bg-[#ffffff] p-6 shadow-md transition-shadow hover:shadow-lg">
      {/* Title */}
      <p className="flex-1 text-lg font-semibold text-[#374151]">{title}</p>

      {/* Progress Bar */}
      <div className="relative h-4 w-40 rounded-full bg-[#D1D5DB]">
        <div
          className={`absolute left-0 top-0 h-4 rounded-full transition-all ${
            percent >= 80
              ? "bg-[#22C55E]" // Green
              : percent >= 60
                ? "bg-[#FACC15]" // Yellow
                : "bg-[#EF4444]" // Red
          }`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>

      {/* Percent Text */}
      <span
        className={`ml-4 text-sm font-medium ${
          percent >= 80
            ? "text-[#16A34A]" // Green
            : percent >= 60
              ? "text-[#CA8A04]" // Yellow
              : "text-[#DC2626]" // Red
        }`}
      >
        {percentToText(percent)}
      </span>
    </div>
  );
}
