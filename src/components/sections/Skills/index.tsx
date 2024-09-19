import React, { forwardRef } from "react";
import ProgressBar from "./Progressbar";

const skills = [
  { title: "HTML 5", percent: 80 },
  { title: "React", percent: 40 },
  { title: "Next.js", percent: 60 },
  { title: "JavaScript", percent: 70 },
  { title: "TypeScript", percent: 60 },
  { title: "CSS", percent: 35 },
  { title: "Tailwind CSS", percent: 70 },
  { title: "ClassNames", percent: 35 },
  { title: "Axios", percent: 80 },
  { title: "React Query", percent: 85 },
  { title: "Recoil", percent: 75 },
  { title: "Zustand", percent: 70 },
  { title: "Date FNS", percent: 25 },
  { title: "StoryBook", percent: 65 },
  { title: "Notion", percent: 80 },
  { title: "Github", percent: 85 },
  { title: "Jira", percent: 80 },
];

function Skills(props: any, ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      id="skills"
      ref={ref}
      className="min-h-screen scroll-mt-59 border-t border-b-text-secondary p-8"
    >
      <div className="flex flex-col items-center">
        <ul className="w-full">
          {skills.map((skill) => (
            <ProgressBar key={skill.title} title={skill.title} percent={skill.percent} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default forwardRef(Skills);
