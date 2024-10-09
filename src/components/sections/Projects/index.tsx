import { useModalStore } from "@/store/useModalStore";
import React, { forwardRef, useEffect } from "react";
import PortfolioCard from "./Card";
import OpenMindIcon from "/public/images/Image3.png";
import ArbabaIcon from "/public/images/arbaba.png";
import TemagotchiIcon from "/public/images/Temagotchi.ico";
import TemagotchiModal from "@/components/modal/TemagotchiModal";
import OpenMindModal from "@/components/modal/OpenMindModal";
import ArbabaModal from "@/components/modal/ArbabaModal";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function Projects(props: any, ref: React.Ref<HTMLDivElement>) {
  const { openModal } = useModalStore();
  const queryClient = useQueryClient();

  const ModalOpenMind = () => {
    openModal("OpenMind", OpenMindModal, {});
  };

  const ModalArbaba = () => {
    openModal("OpenMind", ArbabaModal, {});
  };

  const ModalTemagotchiMind = () => {
    openModal("OpenMind", TemagotchiModal, {});
  };

  const urls = [
    "https://github.com/12Team-Project/git12Team",
    "https://broken-princess-732.notion.site/12-47d7f99cca2d45edbdb711cedfec0f42?pvs=74",
    "https://open-mind-12team.netlify.app",
    "https://github.com/sprint6-team12/arbaba-40owners",
    "https://tan-maize-34b.notion.site/part3-12-2e36b18474754374ba9640bd24dac669?pvs=74",
    "https://the-julge-6-12.vercel.app",
    "https://github.com/Codeit-Sprint-6th-Part-4-Team-6/Teamagotchi",
    "https://copper-garlic-708.notion.site/4-6-1a606fabfbf64b7194551d0321f984eb?pvs=74",
    "https://teamagotchi.netlify.app",
  ];

  const fetchPreview = async (url: string) => {
    try {
      const response = await axios.get(`/api/preview?url=${encodeURIComponent(url)}`);
      const data = await response.data;
      return data;
    } catch (error) {
      console.error("Failed to fetch preview", error);
    }
  };

  useEffect(() => {
    urls.forEach((url) => {
      queryClient.prefetchQuery({
        queryKey: ["linkPreview", url],
        queryFn: () => fetchPreview(url),
        staleTime: Infinity,
      });
    });
  });

  return (
    <div
      id="Projects"
      ref={ref}
      className="mb-60 min-h-screen scroll-mt-59 border-t border-b-text-secondary p-4 md:p-8 xl:mb-0 xl:p-12"
    >
      <h2 className="text-xl font-semibold md:text-2xl xl:text-3xl">프로젝트</h2>
      <div className="mt-10 grid gap-6 md:mt-20 md:grid-cols-2 xl:mt-40 xl:grid-cols-3">
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
        <PortfolioCard
          icon={ArbabaIcon}
          title="아르바바와 40인의 사장들"
          description="사장님도 알바생도 이용하는, 기존보다 높은 시급으로 알바를 빠르게 구할 수 있는 서비스"
          skills={["Next", "TypeScript", "Axios", "Tailwind", "Recoil"]}
          onClick={ModalArbaba}
          day="24.06.21 ~ 24.07.07"
        />
        <PortfolioCard
          icon={OpenMindIcon}
          title="오픈마인드"
          description="질문과 답변을 통해 마음을 열고 대화 나누는 소통 플랫폼"
          skills={["React", "JavaScript", "Axios", "Css"]}
          onClick={ModalOpenMind}
          day="24.04.30 ~ 24.05.17"
        />
      </div>
    </div>
  );
}

export default forwardRef(Projects);
