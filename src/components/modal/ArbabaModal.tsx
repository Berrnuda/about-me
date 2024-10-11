import Image from "next/image";
import CustomModal from "./CustomModal";
import SkillNext from "../skill/Next";
import SkillTypeScript from "../skill/TypeScript";
import SkillAxios from "../skill/Axios";
import SkillTailwind from "../skill/Tailwind";
import SkillRecoil from "../skill/Recoil";
import ArbabaIcon from "/public/images/arbaba.png";
import LinkPreview from "../linkpreview";
import { PreviewData } from "@/pages";

const skillComponents: { [key: string]: JSX.Element } = {
  Next: <SkillNext />,
  TypeScript: <SkillTypeScript />,
  Axios: <SkillAxios />,
  Tailwind: <SkillTailwind />,
  Recoil: <SkillRecoil />,
};

export default function ArbabaModal({
  onClose,
  previews,
}: {
  onClose?: () => void;
  previews?: PreviewData[];
}) {
  const skillList = Object.keys(skillComponents);

  return (
    <CustomModal
      onClose={onClose}
      closeIcon
      content={
        <div className="flex h-full w-full flex-col space-y-6 p-4 md:space-y-12">
          <Image src={ArbabaIcon} alt="OpenMindIcon" className="h-200 w-full object-cover" />
          <div className="flex flex-col gap-12">
            <h1 className="text-xl font-bold md:text-3xl">아르바바와 40인의사장들</h1>
            <table className="min-w-full divide-y divide-none">
              <tbody className="divide-y divide-none">
                <tr className="flex">
                  <th className="min-w-[100] flex-none basis-1/3 p-4 text-left text-sm text-text-secondary md:min-w-[200] md:text-xl">
                    프로젝트 제목
                  </th>
                  <td className="flex-1 p-4 text-left text-sm md:text-xl">
                    아르바바와 40인의사장들
                  </td>
                </tr>
                <tr className="flex">
                  <th className="min-w-[100] flex-none basis-1/3 p-4 text-left text-sm text-text-secondary md:min-w-[200] md:text-xl">
                    진행 기간
                  </th>
                  <td className="flex-1 p-4 text-left text-sm md:text-xl">24.06.21 ~ 24.07.07</td>
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
                {/* <LinkPreview url="https://github.com/sprint6-team12/arbaba-40owners" />
                <LinkPreview url="https://tan-maize-34b.notion.site/part3-12-2e36b18474754374ba9640bd24dac669?pvs=74" />
                <LinkPreview url="https://the-julge-6-12.vercel.app" /> */}
                {previews?.map((preview, index) => <LinkPreview data={preview} key={index} />)}
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-8">
              <p className="text-xl font-bold md:text-3xl">프로젝트 소개</p>
              <ul>
                <li>
                  - 급하게 일손이 필요한 자리에 더 많은 시급을 제공해서 아르바이트생을 구할 수 있는
                  서비스입니다.
                </li>
                <li>
                  - 제공된 프로젝트중에서 난이도는 중간이었지만 경험삼을게 많다 생각하여 고르게
                  되었습니다.
                </li>
                <li>
                  - 프로젝트중 객체에 대한 pr을 올리고 팀원들의 긍정적인 코드리뷰를 받고나서 객체를
                  적극적으로 활용하였습니다.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 md:gap-8">
              <p className="text-xl font-bold md:text-3xl">내가 기여한 부분</p>
              <ul>
                <li>- 로그인, 회원가입 페이지를 담당하였습니다.</li>
                <li className="ml-10">
                  └ 페이지가 아닌 모달로 띄우고, 한 모달 안에서 css를 이용하여 폼을 변환하도록
                  구현하였습니다.
                </li>
                <li className="ml-10">
                  └ 태블릿, 데스크탑 화면에서는 translate를 이용하여 좌우로 폼을 변환시키고, 모바일
                  화면에서는 scale를 이용하여 애니메이션 효과를 주었습니다.
                </li>
                <li>- 유저 데이터쪽 전역 상태 관리를 담당하였습니다.</li>
                <li className="ml-10">
                  └ useAuth 커스텀 훅을 만들어서 사용하기 편하도록 구현하였습니다.
                </li>
                <li className="ml-10">
                  └ 유저의 토큰, 아이디값, 타입, 로그인상태를 전역으로 관리했습니다.
                </li>
                <li>- 알림 컴포넌트를 담당하였습니다.</li>
                <li className="ml-10">
                  └ 알림이 온 날짜와 현재 날짜를 계산하여 일정 시간이 지나면 표시되지 않도록
                  하였습니다. (api 기능에서 알림을 지우는 기능이 없어서 이렇게 처리)
                </li>
                <li>- 가게 정보 상세 페이지를 담당하였습니다.</li>
                <li className="ml-10">
                  └ 미들웨어를 사용하지 않고 토큰과 로그인값을 이용하여 페이지 접근을 막았습니다.
                </li>
                <li className="ml-10">
                  └ SSR을 이용하여 페이지 로딩 전에 초기 데이터를 불러오도록 하였습니다.
                </li>
                <li className="ml-10">
                  └ IntersectionObserver를 이용하여 무한스크롤을 구현하였습니다.
                </li>
                <li>- 필터 컴포넌트를 담당하였습니다.</li>
                <li className="ml-10">
                  └ 특정 키값을 배열이 아닌 중복된 키값으로 여러개를 호출해야 되는 api가 있었는데
                  작성된 api 호출 코드가 url에 담아서 보내는게 아닌 config를 담아서 보내는 로직이라
                  최대한 원래것을 수정하지 않고 URLSearchParams를 이용하여 똑같은 키값에 여러 값을
                  담아 보내는 형식으로 구현하였습니다.
                </li>
                <li className="ml-10">
                  └ Date의 toIsoString 형식으로 바꾸면 UTC 기준으로 시간이 작성되어 오프셋을 이용해
                  한국시간으로 바꾸는 로직을 추가하였습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      }
    />
  );
}
