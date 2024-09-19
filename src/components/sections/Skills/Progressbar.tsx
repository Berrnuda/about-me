export default function ProgressBar({ title, percent }: { title: string; percent: number }) {
  return (
    <li className="mb-8 flex justify-between">
      <p className="flex w-120 justify-center text-sm">{title}</p>
      <div className="flex h-16 w-[90%] flex-col justify-center rounded-4 bg-[#333333] px-1">
        <div style={{ width: `${percent}%` }}>
          <div className="from-customFirst to-customSecond flex h-16 items-center justify-end rounded-4 bg-gradient-to-r">
            <span className="mr-10 text-[#000]">{percent} %</span>
          </div>
        </div>
      </div>
    </li>
  );
}
