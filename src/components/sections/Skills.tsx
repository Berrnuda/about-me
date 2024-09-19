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
    // <div
    //   id="skills"
    //   ref={ref}
    //   className="min-h-screen scroll-mt-59 border-t border-b-text-secondary p-8"
    // >
    //   <h2 className="text-2xl font-semibold">기술스택</h2>
    //   <div className="mt-40 flex flex-wrap gap-12">
    //     {skillList.map((skill) => (
    //       <div key={skill}>{skillComponents[skill]}</div>
    //     ))}
    //   </div>
    // </div>
    <div
      id="skills"
      ref={ref}
      className="min-h-screen scroll-mt-59 border-t border-b-text-secondary p-8"
    >
      <div className="flex flex-col items-center">
        <ul className="w-full">
          <li className="flex justify-between">
            <p className="flex w-120 justify-center text-sm">HTML5</p>
            <div className="flex h-16 w-[90%] flex-col justify-center rounded-4 bg-[#333333] px-1">
              <div className="w-[80%]">
                <div className="from-customFirst to-customSecond flex h-16 items-center justify-end bg-gradient-to-r">
                  <span className="text-[#000] mr-10">80 %</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default forwardRef(Skills);
