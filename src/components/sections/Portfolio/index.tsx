import { useModalStore } from "@/store/useModalStore";
import React, { forwardRef } from "react";
import PortfolioCard from "./Card";
import OpenMindIcon from "/public/images/Image3.png";
import ArbabaIcon from "/public/images/arbaba.png";
import TemagotchiIcon from "/public/images/Temagotchi.ico";
import TemagotchiModal from "@/components/modal/TemagotchiModal";
import OpenMindModal from "@/components/modal/OpenMindModal";
import ArbabaModal from "@/components/modal/ArbabaModal";

function Portfolio(props: any, ref: React.Ref<HTMLDivElement>) {
  const { openModal } = useModalStore();

  const ModalOpenMind = () => {
    openModal("OpenMind", OpenMindModal, {});
  };

  const ModalArbaba = () => {
    openModal("OpenMind", ArbabaModal, {});
  };

  const ModalTemagotchiMind = () => {
    openModal("OpenMind", TemagotchiModal, {});
  };

  return (
    <div id="portfolio" ref={ref} className="h-screen scroll-mt-60 border-b p-8">
      <h2 className="text-2xl font-semibold">포트폴리오</h2>
      <div className="mt-40 flex w-full gap-12">
        <PortfolioCard
          icon={OpenMindIcon}
          title="오픈마인드"
          description="질문과 답변을 통해 마음을 열고 대화 나누는 소통 플랫폼"
          skills={["React", "JavaScript", "Axios", "Css"]}
          onClick={ModalOpenMind}
          day="24.04.30 ~ 24.05.17"
        />
        <PortfolioCard
          icon={ArbabaIcon}
          title="아르바바와 40인의 사장들"
          description="사장님도 알바생도 이용하는, 기존보다 높은 시급으로 알바를 빠르게 구할 수 있는 서비스"
          skills={["Next", "TypeScript", "Recoil", "Tailwind"]}
          onClick={ModalArbaba}
          day="24.06.21 ~ 24.07.07"
        />
        <PortfolioCard
          icon={TemagotchiIcon}
          title="티마고치"
          description="팀을 생성하고 팀원을 구성하여 공통의 할 일을 만들어서 업무의 효율을 높이는 프로젝트"
          skills={[
            "Next",
            "TypeScript",
            "Axios",
            "ReactQuery",
            "Zustand",
            "StroyBook",
            "Tailwind",
            "ClassNames",
          ]}
          onClick={ModalTemagotchiMind}
          day="24.07.25 ~ 24.08.27"
        />
      </div>
    </div>
  );
}

export default forwardRef(Portfolio);
