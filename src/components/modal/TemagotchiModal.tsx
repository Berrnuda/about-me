import Image from "next/image";
import LinkPreview from "../linkpreview";
import SkillAxios from "../skill/Axios";
import SkillClassNames from "../skill/ClassNames";
import SkillNext from "../skill/Next";
import SkillReactQuery from "../skill/ReactQuery";
import SkillStoryBook from "../skill/StoryBook";
import SkillTailwind from "../skill/Tailwind";
import SkillTypeScript from "../skill/TypeScript";
import SkillZustand from "../skill/Zustand";
import CustomModal from "./CustomModal";
import TemagotchiIcon from "/public/images/Temagotchi.ico";

const skillComponents: { [key: string]: JSX.Element } = {
  Next: <SkillNext />,
  TypeScript: <SkillTypeScript />,
  Axios: <SkillAxios />,
  ReactQuery: <SkillReactQuery />,
  Zustand: <SkillZustand />,
  StoryBook: <SkillStoryBook />,
  Tailwind: <SkillTailwind />,
  classNames: <SkillClassNames />,
};

export default function TemagotchiModal({ onClose }: { onClose?: () => void }) {
  const skillList = Object.keys(skillComponents);

  return (
    <CustomModal
      onClose={onClose}
      closeIcon
      content={
        <div className="flex h-full w-full flex-col space-y-6 p-4 md:space-y-12">
          <Image src={TemagotchiIcon} alt="OpenMindIcon" className="h-200 w-full object-cover" />
          <div className="flex flex-col gap-12">
            <h1 className="text-xl font-bold md:text-3xl">티마고치</h1>
            <table className="min-w-full divide-y divide-none">
              <tbody className="divide-y divide-none">
                <tr className="flex">
                  <th className="min-w-[100] flex-none basis-1/3 p-4 text-left text-sm text-text-secondary md:min-w-[200] md:text-xl">
                    프로젝트 제목
                  </th>
                  <td className="flex-1 p-4 text-left text-sm md:text-xl">티마고치</td>
                </tr>
                <tr className="flex">
                  <th className="min-w-[100] flex-none basis-1/3 p-4 text-left text-sm text-text-secondary md:min-w-[200] md:text-xl">
                    진행 기간
                  </th>
                  <td className="flex-1 p-4 text-left text-sm md:text-xl">24.07.25 ~ 24.08.27</td>
                </tr>
                <tr className="flex">
                  <th className="min-w-[100] flex-none basis-1/3 p-4 text-left text-sm text-text-secondary md:min-w-[200] md:text-xl">
                    라이브러리
                  </th>
                  <td className="flex-1 p-4 text-left text-sm md:text-xl">
                    <div className="flex flex-wrap gap-4 md:gap-8">
                      {skillList.map((skill) => (
                        <div key={skill}>{skillComponents[skill]}</div>
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex flex-col gap-4 md:gap-8">
              <p className="text-xl font-bold md:text-3xl">Link</p>
              <div className="flex flex-wrap gap-6 md:gap-8">
                <LinkPreview url="https://github.com/Codeit-Sprint-6th-Part-4-Team-6/Teamagotchi" />
                <LinkPreview url="https://copper-garlic-708.notion.site/4-6-1a606fabfbf64b7194551d0321f984eb?pvs=74" />
                <LinkPreview url="https://teamagotchi.netlify.app" />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-8">
              <p className="text-xl font-bold md:text-3xl">프로젝트 소개</p>
              <ul>
                <li>- 코드잇에서 진행한 프로젝트 입니다.</li>
                <li>
                  - 팀을 생성하고 팀원을 구성하여 공통의 할 일을 만들어서 업무의 효율을 높이는
                  프로젝트입니다.
                </li>
                <li>
                  - 총 세번의 프로젝트중 마지막 프로젝트로, 다른 프로젝트들과 비교했을때 배울점이
                  많고 실제로 사용할 수 있는 프로젝트가 될수있을것 같아서 선정하게 되었습니다.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 md:gap-8">
              <p className="text-xl font-bold md:text-3xl">내가 기여한 부분</p>
              <ul>
                <li>- 원활한 이슈 관리를 위해 지라를 셋팅하고 사용하였습니다.</li>
                <li>- 전역적으로 사용 가능한 모달 컴포넌트를 만들었습니다.</li>
                <li className="ml-10">
                  └ 모달의 고유 id, 컴포넌트, props를 store에 저장시켜 전역적으로 선언해둔 modal
                  wrapper로 모달을 띄웁니다.
                </li>
                <li className="ml-10">
                  └ 모바일과 PC의 디자인을 다르게 설정하고, 애니메이션 효과를 주었습니다.
                </li>
                <li>- 자유게시판 페이지를 담당하여 만들었습니다.</li>
                <li className="ml-10">
                  └ SSR로 초기 데이터를 미리 불러오고 React-Query의 prefetch를 이용하여 데이터들을
                  미리 캐싱해두는 기능을 구현하였습니다.
                </li>
                <li className="ml-10">
                  └ router를 이용해 페이지,검색,정렬 기능에 따른 url을 업데이트하고 해당 url로
                  들어갔을경우 그에 맞는 데이터가 보여지도록 구현했습니다.
                </li>
                <li className="ml-10">
                  └ 게시글 상세보기 페이지에서 React-query의 onMutate를 이용하여 댓글과 좋아요
                  부분에서 옵티미스틱 UI 기능을 구현하였습니다.
                </li>
                <li>- 소셜 로그인 기능을 구현하였습니다.</li>
                <li className="ml-10">
                  └ 카카오와 구글 로그인 버튼 클릭시 지정한 URL로 리다이렉트되고 동의를 받은 후
                  서버에 인가코드를 보내 발급받은 토큰을 이용하였습니다.
                </li>
                <li> - 할 일 상세보기 사이드바를 제작하였습니다.</li>
                <li className="ml-10">
                  └ 상세보기 페이지와 사이드바의 싱크를 맞추기 위해 컴포넌트 단에서 관리되던 상태를
                  페이지로 올려 각각의 props로 전달해주고, React-Query의 invalidateQueries를 이용해
                  다른 컴포넌트들과 공통적으로 쓰이는 데이터들을 서버최신의 데이터로 갱신시켰습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      }
    />
  );
}
