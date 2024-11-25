import React, { forwardRef, useState } from "react";
// import ProgressBar from "./Progressbar";
import Skill from "./Skill";

const skills = [
  // { title: "HTML 5", percent: 80 },
  // { title: "ClassNames", percent: 35 },
  // { title: "Date FNS", percent: 25 },
  // { title: "StoryBook", percent: 65 },
  { title: "React", percent: 60, type: "프레임워크" },
  { title: "Next.js", percent: 70, type: "프레임워크" },
  { title: "JavaScript", percent: 70, type: "언어" },
  { title: "TypeScript", percent: 60, type: "언어" },
  { title: "CSS", percent: 60, type: "언어" },
  { title: "Tailwind CSS", percent: 70, type: "라이브러리" },
  { title: "Axios", percent: 80, type: "라이브러리" },
  { title: "React Query", percent: 85, type: "라이브러리" },
  { title: "Recoil", percent: 75, type: "라이브러리" },
  { title: "Zustand", percent: 70, type: "라이브러리" },
  { title: "Notion", percent: 80, type: "툴" },
  { title: "Github", percent: 85, type: "툴" },
  { title: "Jira", percent: 80, type: "툴" },
];

const FILTER_OPTIONS = ["전체", "프레임워크", "라이브러리", "언어", "툴"];

function Skills(props: any, ref: React.Ref<HTMLDivElement>) {
  const [filter, setFilter] = useState("전체");

  const filteredSkills =
    filter === "전체" ? skills : skills.filter((skill) => skill.type === filter);

  return (
    <div
      id="skills"
      ref={ref}
      className="min-h-screen scroll-mt-59 border-t border-b-text-secondary p-8"
    >
      <div className="mt-40 flex flex-col items-center">
        {/* 필터 버튼 */}
        <div className="mb-8 flex gap-4">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`rounded px-4 py-2 text-18 ${
                filter === option ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
        {/* 필터링된 스킬 목록 */}
        <ul className="flex w-full flex-wrap gap-12">
          {filteredSkills.map((skill) => (
            // <ProgressBar key={skill.title} title={skill.title} percent={skill.percent} />
            <Skill key={skill.title} title={skill.title} percent={skill.percent} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default forwardRef(Skills);
