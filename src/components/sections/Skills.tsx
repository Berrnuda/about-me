import React, { forwardRef } from "react";

function Skills(props: any, ref: React.Ref<HTMLDivElement>) {
  return (
    <div id="skills" ref={ref} className="h-screen scroll-mt-60 border-b p-8">
      <h2 className="text-2xl font-semibold">기술스택</h2>
    </div>
  );
}

export default forwardRef(Skills);
