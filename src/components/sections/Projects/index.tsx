import { useModalStore } from "@/store/useModalStore";
import React, { forwardRef } from "react";
import PortfolioCard, { SkillType } from "./Card";
import OpenMindIcon from "/public/images/Image3.png";
import ArbabaIcon from "/public/images/arbaba.png";
import TemagotchiIcon from "/public/images/Temagotchi.ico";
import TemagotchiModal from "@/components/modal/TemagotchiModal";
import OpenMindModal from "@/components/modal/OpenMindModal";
import ArbabaModal from "@/components/modal/ArbabaModal";

interface PreviewData {
  title: string;
  description: string;
  image: string;
  url: string;
}

interface ProjectsProps {
  previews: PreviewData[];
}

function Projects({ previews, ...props }: ProjectsProps, ref: React.Ref<HTMLDivElement>) {
  const { openModal } = useModalStore();

  const ModalOpenMind = () => {
    openModal("OpenMind", OpenMindModal, { previews: previews.slice(0, 3) });
  };

  const ModalArbaba = () => {
    openModal("Arbaba", ArbabaModal, { previews: previews.slice(3, 6) });
  };

  const ModalTemagotchiMind = () => {
    openModal("Temagotchi", TemagotchiModal, { previews: previews.slice(6, 9) });
  };

  const CardList = [
    {
      icon: TemagotchiIcon,
      title: "티마고치",
      description:
        "팀을 생성하고 팀원을 구성하여 공통의 할 일을 만들어서 업무의 효율을 높이는 프로젝트",
      skills: [
        "Next",
        "TypeScript",
        "Axios",
        "ReactQuery",
        "Zustand",
        "StroyBook",
        "Tailwind",
        "ClassNames",
      ] as SkillType[],
      onClick: ModalTemagotchiMind,
      day: "24.07.25 ~ 24.08.27",
    },
    {
      icon: ArbabaIcon,
      title: "아르바바와 40인의 사장들",
      description:
        "사장님도 알바생도 이용하는, 기존보다 높은 시급으로 알바를 빠르게 구할 수 있는 서비스",
      skills: ["Next", "TypeScript", "Axios", "Tailwind", "Recoil"] as SkillType[],
      onClick: ModalArbaba,
      day: "24.06.21 ~ 24.07.07",
    },
    {
      icon: OpenMindIcon,
      title: "오픈마인드",
      description: "질문과 답변을 통해 마음을 열고 대화 나누는 소통 플랫폼",
      skills: ["React", "JavaScript", "Axios", "Css"] as SkillType[],
      onClick: ModalOpenMind,
      day: "24.04.30 ~ 24.05.17",
    },
  ];

  return (
    <div
      id="Projects"
      ref={ref}
      className="mb-60 min-h-screen scroll-mt-59 border-t border-b-text-secondary p-4 md:p-8 xl:mb-0 xl:p-12"
    >
      <h2 className="text-xl font-semibold md:text-2xl xl:text-3xl">프로젝트</h2>
      <div className="mt-10 grid gap-6 md:mt-20 md:grid-cols-2 xl:mt-40 xl:grid-cols-3">
        {CardList.map((card, index) => (
          <PortfolioCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            skills={card.skills}
            onClick={card.onClick}
            day={card.day}
          />
        ))}
      </div>
    </div>
  );
}

export default forwardRef(Projects);
