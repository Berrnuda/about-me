import React, { forwardRef } from "react";

function Skills(props: any, ref: React.Ref<HTMLDivElement>) {
  const skillList = [
    "HTML",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "CSS",
    "Tailwind-CSS",
    "React-Query",
    "Recoil",
    "Zustand",
    "Date-FNS",
    "StroyBook",
  ];

  return (
    <div id="skills" ref={ref} className="h-screen scroll-mt-60 border-b p-8">
      <h2 className="text-2xl font-semibold">기술스택</h2>
      <div className="mt-40 flex flex-wrap gap-12">
        {skillList.map((skill) => (
          <div
            key={skill}
            className="rounded-15 border-[1px] border-solid border-text-secondary px-10"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default forwardRef(Skills);
