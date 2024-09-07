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
      className="flex h-450 w-400 flex-col gap-12 rounded-2xl border border-text-secondary bg-bg-secondary pb-12"
      onClick={onClick}
    >
      <Image src={icon} alt={`${title} icon`} className="h-200 w-full" />
      <div className="flex flex-1 flex-col gap-8 p-8">
        <p className="text-2xl">{title}</p>
        <p>{description}</p>
        <div className="flex flex-wrap gap-8">{skills.map((skill) => skillComponents[skill])}</div>
      </div>
      <p className="px-8">{day}</p>
    </div>
  );
}
