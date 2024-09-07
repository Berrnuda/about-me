import Image from "next/image";
import React, { forwardRef } from "react";
import Profile from "/public/images/Profile.jpg";
import Link from "next/link";

function Introduction(props: any, ref: React.ForwardedRef<HTMLDivElement>) {
  return (
    <div id="introduction" ref={ref} className="h-screen scroll-mt-60 p-8">
      <div className="flex flex-col items-center gap-24">
        <div className="flex w-full justify-around gap-12 md:gap-0">
          <div className="flex flex-col items-center gap-12">
            <Image
              src={Profile}
              alt="Profile"
              width={128}
              height={128}
              className="rounded-full py-20"
            />
            <p className="text-3xl font-bold">김제완</p>
            <p className="text-xl">프론트엔드 개발자</p>
          </div>
          <div className="flex flex-col justify-center gap-24">
            <div className="flex gap-12">
              <Link href="https://github.com/Berrnuda">Github</Link>
              <Link href="https://linktr.ee/Berrnuda">Linktree</Link>
              <Link href="https://velog.io/@berrnuda">Velog</Link>
            </div>
            <p>MBTI: ISTP</p>
            <p>Tel: +82 10-8072-4389</p>
            <p>e-Mail: jeeee_in@naver.com</p>
          </div>
        </div>
        <p>
          항상 배우는것을 좋아하고 만들어봤던 기술들을 내 기술로 만드려고 노력합니다. 적용해보고
          싶은 기술들은 시간이 날때마다 혼자 만들어보는 버릇이 있습니다. 팀원들의 코드 리뷰나 다른
          개발자분들의 코드를 주의깊게 보고 항상 이해하려고 노력합니다. 솔직히 CSS는 자신 없습니다
          ^^..
        </p>
      </div>
    </div>
  );
}

export default forwardRef(Introduction);
