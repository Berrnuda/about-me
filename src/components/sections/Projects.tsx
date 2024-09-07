import React, { forwardRef } from "react";
import Github from "/public/images/github-test.png";
import Notion from "/public/images/Notion.png";
import OpenMind from "/public/images/OpenMind.ico";
import Arbaba from "/public/images/arbaba.png";
import Temagotchi from "/public/images/Temagotchi.ico";
import Image from "next/image";
import Link from "next/link";

function Projects(props: any, ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      id="projects"
      ref={ref}
      className="h-screen scroll-mt-59 border-t border-b-text-secondary p-8"
    >
      <h2 className="text-2xl font-semibold">프로젝트</h2>
      <div className="mt-40 grid grid-cols-1 gap-16">
        <div className="grid grid-cols-2 items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <p>오픈마인드</p>
            <div className="flex gap-4">
              <Link href="https://github.com/12Team-Project/git12Team" target="_blank">
                <Image src={Github} alt="github" width={24} height={24} />
              </Link>
              <Link
                href="https://broken-princess-732.notion.site/12-47d7f99cca2d45edbdb711cedfec0f42?pvs=74"
                target="_blank"
              >
                <Image src={Notion} alt="Notion" width={24} height={24} />
              </Link>
              <Link href="https://open-mind-12team.netlify.app" target="_blank">
                <Image src={OpenMind} alt="OpenMind" width={24} height={24} />
              </Link>
            </div>
            <p>24.04.30 ~ 24.05.17</p>
          </div>
          <p className="text-xl">질문과 답변을 통해 마음을 열고 대화를 나누는 소통 플랫폼</p>
        </div>
        <div className="grid grid-cols-2 items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <p>아르바바와 40인의 사장들</p>
            <div className="flex gap-4">
              <Link href="https://github.com/sprint6-team12/arbaba-40owners" target="_blank">
                <Image src={Github} alt="github" width={24} height={24} />
              </Link>
              <Link
                href="https://tan-maize-34b.notion.site/part3-12-2e36b18474754374ba9640bd24dac669?pvs=74"
                target="_blank"
              >
                <Image src={Notion} alt="Notion" width={24} height={24} />
              </Link>
              <Link href="https://the-julge-6-12.vercel.app/" target="_blank">
                <Image src={Arbaba} alt="Arbaba" width={24} height={24} />
              </Link>
            </div>
            <p>24.06.21 ~ 24.07.07</p>
          </div>
          <p className="text-xl">
            사장님도 알바생도 이용하는, 기존보다 높은 시급으로 알바를 빠르게 구할 수 있는 서비스
          </p>
        </div>
        <div className="grid grid-cols-2 items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <p>티마고치</p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/Codeit-Sprint-6th-Part-4-Team-6/Teamagotchi"
                target="_blank"
              >
                <Image src={Github} alt="github" width={24} height={24} />
              </Link>
              <Link
                href="https://copper-garlic-708.notion.site/4-6-1a606fabfbf64b7194551d0321f984eb?pvs=74"
                target="_blank"
              >
                <Image src={Notion} alt="Notion" width={24} height={24} />
              </Link>
              <Link href="https://teamagotchi.netlify.app/" target="_blank">
                <Image src={Temagotchi} alt="Temagotchi" width={24} height={24} />
              </Link>
            </div>
            <p>24.07.25 ~ 24.08.27</p>
          </div>
          <p className="text-xl">
            팀을 생성하고 팀원을 구성하여 공통의 할 일을 만들어서 업무의 효율을 높이는 프로젝트
          </p>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Projects);
