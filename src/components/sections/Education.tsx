import React, { forwardRef } from "react";
import ViewPort from "../viewport";

function Education(props: any, ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      id="education"
      ref={ref}
      className="flex h-screen scroll-mt-59 flex-col border-t border-b-text-secondary p-8"
    >
      <h2 className="text-2xl font-semibold">교육</h2>
      <div className="mt-40 flex flex-grow flex-col gap-8">
        <p className="text-2xl">코드잇</p>
        <p>코드잇 스프린트 프론트엔드 6기</p>
        <p>24.03.07 ~ 24.09.02</p>

        <p className="mt-20 text-2xl">스터디</p>
        <p>leetcode-study</p>
        <p>24.09.24 ~ </p>
      </div>
      {/* ViewPort는 항상 하단에 위치하게 됨 */}
      <ViewPort />
    </div>
  );
}

export default forwardRef(Education);
