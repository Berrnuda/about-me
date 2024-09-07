import Image, { StaticImageData } from "next/image";
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

const skillComponents: { [key: string]: JSX.Element } = {
  React: <SkillReact />,
  Axios: <SkillAxios />,
  Tailwind: <SkillTailwind />,
  Next: <SkillNext />,
  ReactQuery: <SkillReactQuery />,
  TypeScript: <SkillTypeScript />,
  JavaScript: <SkillJavaScript />,
  Recoil: <SkillRecoil />,
  Zustand: <SkillZustand />,
  Css: <SkillCss />,
  StroyBook: <SkillStoryBook />,
  ClassNames: <SkillClassNames />,
};

type SkillType =
  | "React"
  | "Axios"
  | "Tailwind"
  | "Next"
  | "ReactQuery"
  | "TypeScript"
  | "JavaScript"
  | "Recoil"
  | "Zustand"
  | "Css"
  | "StroyBook"
  | "ClassNames";

export default function PortfolioCard({
  icon,
  title,
  description,
  skills,
  onClick,
  day,
}: {
  icon: StaticImageData;
  title: string;
  description: string;
  skills: SkillType[];
  onClick: () => void;
  day: string;
}) {
  return (
    <div
      className="xl:p-8 flex min-h-[350px] flex-col gap-4 rounded-2xl border border-text-secondary bg-bg-secondary p-4 md:p-6"
      onClick={onClick}
    >
      <Image
        src={icon}
        alt={`${title} icon`}
        className="xl:h-210 h-150 w-full rounded-t-2xl object-cover md:h-180"
      />
      <div className="flex flex-1 flex-col gap-4">
        <p className="xl:text-2xl text-xl font-semibold md:text-xl">{title}</p>
        <p className="xl:text-xl text-sm md:text-base">{description}</p>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div key={skill}>{skillComponents[skill]}</div>
          ))}
        </div>
      </div>
      <p className="text-gray-500 xl:text-base mt-4 text-xs md:text-sm">{day}</p>
    </div>
  );
}
