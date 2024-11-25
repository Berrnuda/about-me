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
import { PreviewData } from "@/pages";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism"; // 'esm' -> 'cjs'로 변경
import useMediaQuery from "@/hooks/useMediaQuery";

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

export default function TemagotchiModal({
  onClose,
  previews,
}: {
  onClose?: () => void;
  previews?: PreviewData[];
}) {
  const skillList = Object.keys(skillComponents);
  const { isDesktop } = useMediaQuery();

  const codeStringDesktop = `export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies["accessToken"];

  await queryClient.fetchQuery({
    queryKey: ["article", boardId],
    queryFn: () => getArticle(boardId as string, token),
    staleTime: Infinity,
  });
};

export const getArticle = async (articleId: string, token?: string): Promise<ArticleDetails> => {
  const headers = {
    Authorization: \`Bearer \${token}\`,
  };

  const response = await axiosInstance.get<ArticleDetails>(\`articles/\${articleId}\`, { headers });
  return response.data;
};
`;

  const codeStringMobile = `export const getServerSideProps: 
  GetServerSideProps = async (context) => {
  const token = 
    context.req.cookies["accessToken"];

  await queryClient.fetchQuery({
    queryKey: ["article", boardId],
    queryFn: () =>
      getArticle(
        boardId as string,
        token
      ),
    staleTime: Infinity,
  });
};

export const getArticle = async (
  articleId: string,
  token?: string
): Promise<ArticleDetails> => {
  const headers = {
    Authorization: \`Bearer \${token}\`,
  };

  const response = 
    await axios.get<ArticleDetails>(
      \`articles/\${articleId}\`,
      { headers }
    );
  return response.data;
};
`;

  const codeString = isDesktop ? codeStringDesktop : codeStringMobile;

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
                {/* <LinkPreview url="https://github.com/Codeit-Sprint-6th-Part-4-Team-6/Teamagotchi" />
                <LinkPreview url="https://copper-garlic-708.notion.site/4-6-1a606fabfbf64b7194551d0321f984eb?pvs=74" />
                <LinkPreview url="https://teamagotchi.netlify.app" /> */}
                {previews?.map((preview, index) => <LinkPreview data={preview} key={index} />)}
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-8">
              <p className="text-xl font-bold md:text-3xl">프로젝트 소개</p>
              <ul>
                <li>
                  - 팀을 생성하고 팀원을 구성하여 공통의 할 일을 만들어서 업무의 효율을 높이는
                  프로젝트입니다.
                </li>
                <li>
                  - 다른 프로젝트들과 비교했을때 배울점이 많고 실제로 사용할 수 있는 프로젝트가
                  될수있을것 같아서 선정하게 되었습니다.
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
            <div className="flex flex-col gap-4 md:gap-8">
              <p className="text-xl font-bold md:text-3xl">트러블 슈팅</p>
              <ul>
                <li>- SSR 도중 토큰을 가져오지 못하는 문제</li>
                <li className="ml-10">
                  └ 문제 : 토큰을 쿠키로 관리하는데 SSR 환경에서 API 호출을 할때 axios 인터셉터가
                  쿠키에 접근을 못하여 좋아요를 눌렀는지 안눌렀는지를 토큰으로 판단하는 페이지에서
                  정보를 못가져옴
                </li>
                <li className="ml-10">
                  └ 원인 추론 : 쿠키 대신 로컬스토리지를 이용해도 똑같은 결과가 나옴 <br />
                  CSR 환경에서는 인터셉터에서 쿠키를 잘 가져오는것으로 보아 SSR 환경에서 문제가
                  있는것으로 판단 <br />
                </li>
                <li className="ml-10">
                  └ 해결 : SSR 환경에서는 브라우저에 접근할 수 없으니 context를 이용하여 직접 쿠키를
                  가져오고 API 호출 함수에 토큰을 추가하여 config로 보내는것으로 해결
                </li>
                <li className="ml-10 mt-10">
                  {/* <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-lg border border-[#374151] bg-[#1F2937] p-4 text-sm">
                    <code>
                      <span className="text-pre-sky">export</span>{" "}
                      <span className="text-pre-function">const</span>{" "}
                      <span className="text-pre-blue">getServerSideProps</span>
                      <span className="text-pre-sky">:</span>{" "}
                      <span className="text-pre-orange">GetServerSideProps</span>{" "}
                      <span className="text-pre-sky">=</span>{" "}
                      <span className="text-pre-function">async</span>{" "}
                      <span className="text-pre-paren">(</span>context
                      <span className="text-pre-paren">)</span>{" "}
                      <span className="text-pre-function">={">"}</span>{" "}
                      <span className="text-pre-paren">
                        {"{"}
                        <br />
                      </span>
                      <span className="text-pre-function">&nbsp;&nbsp;const</span> token{" "}
                      <span className="text-pre-sky">=</span> context
                      <span className="text-pre-sky">.</span>req.cookies
                      <span className="text-pre-yellow">[</span>
                      <span className="text-pre-sky">&#34;</span>
                      <span className="text-pre-string">accessToken</span>
                      <span className="text-pre-sky">&#34;</span>
                      <span className="text-pre-yellow">]</span>
                      <span className="text-pre-sky">
                        ;<br />
                        <br />
                      </span>
                      <span className="text-pre-sky">&nbsp;&nbsp;await</span> queryClient
                      <span className="text-pre-sky">.</span>
                      <span className="text-pre-blue">fetchQuery</span>
                      <span className="text-pre-red">(</span>
                      <span className="text-pre-paren">
                        {"{"}
                        <br />
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;queryKey
                      <span className="text-pre-sky">:</span>{" "}
                      <span className="text-pre-yellow">[</span>
                      <span className="text-pre-sky">&#34;</span>
                      <span className="text-pre-string">article</span>
                      <span className="text-pre-sky">&#34;</span>
                      <span className="text-pre-sky">,</span> boardId
                      <span className="text-pre-yellow">]</span>
                      <span className="text-pre-sky">
                        ,<br />
                      </span>
                      <span className="text-pre-blue">&nbsp;&nbsp;&nbsp;&nbsp;queryFn</span>
                      <span className="text-pre-sky">:</span>{" "}
                      <span className="text-pre-yellow">()</span>{" "}
                      <span className="text-pre-function">={">"}</span>{" "}
                      <span className="text-pre-blue">getArticle</span>
                      <span className="text-pre-yellow">(</span>boardId{" "}
                      <span className="text-pre-sky">as</span>{" "}
                      <span className="text-pre-orange">string</span>
                      <span className="text-pre-sky">,</span> token
                      <span className="text-pre-yellow">)</span>
                      <span className="text-pre-sky">
                        ,<br />
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;staleTime
                      <span className="text-pre-sky">
                        : Infinity,
                        <br />
                      </span>
                      <span className="text-pre-paren">&nbsp;&nbsp;{"}"}</span>
                      <span className="text-pre-red">)</span>
                      <span className="text-pre-sky">
                        ;<br />
                      </span>
                      <span className="text-pre-paren">{"}"}</span>
                      <span className="text-pre-sky">
                        ;
                        <br />
                        <br />
                      </span>
                      <span className="text-pre-sky">export</span>{" "}
                      <span className="text-pre-function">const</span>{" "}
                      <span className="text-pre-blue">getArticle</span>{" "}
                      <span className="text-pre-sky">=</span>{" "}
                      <span className="text-pre-function">async</span>{" "}
                      <span className="text-pre-paren">(</span>articleId
                      <span className="text-pre-sky">:</span>{" "}
                      <span className="text-pre-orange">string</span>
                      <span className="text-pre-sky">,</span> token
                      <span className="text-pre-sky">?:</span>{" "}
                      <span className="text-pre-orange">string</span>
                      <span className="text-pre-paren">)</span>
                      <span className="text-pre-sky">:</span>{" "}
                      <span className="text-pre-orange">{"Promise<ArticleDetails>"}</span>{" "}
                      <span className="text-pre-function">={">"}</span>{" "}
                      <span className="text-pre-paren">
                        {"{"}
                        <br />
                      </span>
                      <span className="text-pre-function">&nbsp;&nbsp;const</span> headers{" "}
                      <span className="text-pre-sky">=</span>{" "}
                      <span>
                        {"{"}
                        <br />
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;Authorization
                      <span className="text-pre-sky">: `</span>
                      <span className="text-pre-string">Bearer</span>{" "}
                      <span className="text-pre-sky">${"{"}</span>token
                      <span className="text-pre-sky">
                        {"}`,"}
                        <br />
                      </span>
                      <span className="text-pre-paren">&nbsp;&nbsp;{"}"}</span>
                      <span className="text-pre-sky">
                        ;<br />
                        <br />
                      </span>
                      <span className="text-pre-function">&nbsp;&nbsp;const</span> response{" "}
                      <span className="text-pre-sky">= await</span> axiosInstance
                      <span className="text-pre-sky">.</span>
                      <span className="text-pre-blue">get</span>
                      <span className="text-pre-function">{"<"}</span>
                      <span className="text-pre-orange">ArticleDetails</span>
                      <span className="text-pre-function">{">"}</span>
                      <span className="text-pre-yellow">(</span>
                      <span className="text-pre-sky">`</span>
                      <span className="text-pre-string">articles/</span>
                      <span className="text-pre-sky">{"${"}</span>articleId
                      <span className="text-pre-sky">{"}`,"}</span>{" "}
                      <span className="text-pre-red">{"{"}</span> headers{" "}
                      <span className="text-pre-red">{"}"}</span>
                      <span className="text-pre-yellow">)</span>
                      <span className="text-pre-sky">
                        ;<br />
                      </span>
                      <span className="text-pre-sky">&nbsp;&nbsp;return</span> response
                      <span className="text-pre-sky">.</span>data
                      <span className="text-pre-sky">
                        ;<br />
                      </span>
                      <span className="text-pre-paren">{"}"}</span>
                      <span className="text-pre-sky">;</span>
                    </code>
                  </pre> */}
                  <SyntaxHighlighter
                    language={"typescript"}
                    style={coldarkDark}
                    wrapLongLines
                    showLineNumbers
                  >
                    {codeString}
                  </SyntaxHighlighter>
                </li>
              </ul>
            </div>
          </div>
        </div>
      }
    />
  );
}
