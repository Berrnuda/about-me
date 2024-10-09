import { useEffect, useState } from "react";

export default function ProgressBar({ title, percent }: { title: string; percent: number }) {
  const [currentPercent, setCurrentPercent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentPercent(0);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCurrentPercent(current);
      if (current >= percent) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 1500 / percent);
  };

  useEffect(() => {
    handleClick();
  }, [percent]);

  return (
    <li
      className={`mb-12 flex cursor-pointer justify-between ${isAnimating ? "pointer-events-none" : ""}`}
      onClick={handleClick}
    >
      <p className="flex w-120 justify-center text-sm">{title}</p>
      <div className="flex h-24 w-[90%] flex-col justify-center rounded-4 bg-[#333333] px-1 font-bold">
        <div
          style={{
            minWidth: "45px",
            width: `${currentPercent}%`,
            transition: "width 0.01s ease-in-out",
          }}
        >
          <div className="flex h-24 items-center justify-end rounded-4 bg-gradient-to-r from-customFirst to-customSecond">
            <span className="mr-10 text-[#000]">{currentPercent} %</span> {/* 숫자 증가 */}
          </div>
        </div>
      </div>
    </li>
  );
}
