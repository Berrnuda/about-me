import Image from "next/image";
import CustomModal from "./CustomModal";
import OpenMindIcon from "/public/images/Image3.png";
import SkillReact from "../skill/React";
import SkillJavaScript from "../skill/JavaScript";
import SkillCss from "../skill/Css";
import SkillAxios from "../skill/Axios";
import LinkPreview from "../linkpreview";

const skillComponents: { [key: string]: JSX.Element } = {
  React: <SkillReact />,
  JavaScript: <SkillJavaScript />,
  CSS: <SkillCss />,
  Axios: <SkillAxios />,
};

export default function OpenMindModal({ onClose }: { onClose?: () => void }) {
  const skillList = Object.keys(skillComponents);

  return (
    <CustomModal
      onClose={onClose}
      closeIcon
      content={
        <div className="flex h-full w-full flex-col space-y-6 p-4 md:space-y-12">
          <Image src={OpenMindIcon} alt="OpenMindIcon" className="h-200 w-full object-cover" />
          <div className="flex flex-col gap-12">
            <h1 className="text-xl font-bold md:text-3xl">오픈 마인드</h1>
            <table className="min-w-full divide-y divide-none">
              <tbody className="divide-y divide-none">
                <tr className="flex">
                  <th className="min-w-[100] flex-none basis-1/3 p-4 text-left text-sm text-text-secondary md:min-w-[200] md:text-xl">
                    프로젝트 제목
                  </th>
                  <td className="flex-1 p-4 text-left text-sm md:text-xl">오픈마인드</td>
                </tr>
                <tr className="flex">
                  <th className="min-w-[100] flex-none basis-1/3 p-4 text-left text-sm text-text-secondary md:min-w-[200] md:text-xl">
                    진행 기간
                  </th>
                  <td className="flex-1 p-4 text-left text-sm md:text-xl">24.04.30 ~ 24.05.17</td>
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
                <LinkPreview url="https://github.com/12Team-Project/git12Team" />
                <LinkPreview url="https://broken-princess-732.notion.site/12-47d7f99cca2d45edbdb711cedfec0f42?pvs=74" />
                <LinkPreview url="https://open-mind-12team.netlify.app" />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-8">
              <p className="text-xl font-bold md:text-3xl">프로젝트 소개</p>
              <ul>
                <li>- 코드잇에서 진행한 프로젝트로 리스트페이지를 담당하였습니다.</li>
                <li>- 질문과 답변을 통해 마음을 열고 대화를 나누는 소통 플랫폼 입니다.</li>
                <li>
                  - api, 페이지네이션, 로컬스토리지, 무한스크롤 등 라이브러리들과 협업을 경험해보기
                  위한 첫 기초 프로젝트 입니다.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 md:gap-8">
              <p className="text-xl font-bold md:text-3xl">내가 기여한 부분</p>
              <ul>
                <li>- 페이지네이션을 라이브러리 없이 직접 만들어서 사용하였습니다.</li>
                <li>
                  - api의 sort와 limit를 이용하여 페이지네이션을 작업하려다, 페이지를 넘겼을때 잠깐
                  로딩 텀이 생겨서 이때의 지식으로는 어떻게 할 방법이 생각이 안나서 처음부터 모든
                  데이터를 불러온 후 filter를 이용하여 기능을 구현했습니다.
                </li>
                <li>- 마찬가지로 filter를 이용하여 검색 기능과 정렬 기능을 구현했습니다.</li>
                <li>- 로컬스토리지를 이용하여 사용자의 정보를 확인했습니다.</li>
              </ul>
            </div>
          </div>
        </div>
      }
    />
  );
}
