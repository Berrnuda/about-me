import React, { forwardRef } from "react";
import SkillReact from "@/components/skill/React";
import SkillTailwind from "@/components/skill/Tailwind";
import SkillNext from "@/components/skill/Next";
import SkillReactQuery from "@/components/skill/ReactQuery";
import SkillTypeScript from "@/components/skill/TypeScript";
import SkillAxios from "@/components/skill/Axios";
import SkillJavaScript from "@/components/skill/JavaScript";
import SkillRecoil from "@/components/skill/Recoil";
import SkillZustand from "@/components/skill/Zustand";
import SkillCss from "@/components/skill/Css";
import SkillStoryBook from "@/components/skill/StoryBook";
import SkillClassNames from "@/components/skill/ClassNames";
import SkillHTML from "../skill/HTML";
import SkillDateFNS from "../skill/DateFns";

const skillComponents: { [key: string]: JSX.Element } = {
  HTML: <SkillHTML />,
  React: <SkillReact />,
  Next: <SkillNext />,
  JavaScript: <SkillJavaScript />,
  TypeScript: <SkillTypeScript />,
  CSS: <SkillCss />,
  Tailwind: <SkillTailwind />,
  ClassNames: <SkillClassNames />,
  Axios: <SkillAxios />,
  ReactQuery: <SkillReactQuery />,
  Recoil: <SkillRecoil />,
  Zustand: <SkillZustand />,
  DateFNS: <SkillDateFNS />,
  StroyBook: <SkillStoryBook />,
};

function Skills(props: any, ref: React.Ref<HTMLDivElement>) {
  const skillList = Object.keys(skillComponents);

  return (
    <div
      id="skills"
      ref={ref}
      className="min-h-screen scroll-mt-59 border-t border-b-text-secondary p-8"
    >
      <h2 className="text-2xl font-semibold">기술스택</h2>
      <div className="mt-40 flex flex-wrap gap-12">
        {skillList.map((skill) => (
          <div key={skill}>{skillComponents[skill] || <span>{skill}</span>}</div>
        ))}
      </div>
    </div>
  );
}

export default forwardRef(Skills);
