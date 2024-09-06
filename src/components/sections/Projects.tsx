import React, { forwardRef } from "react";

function Projects(props: any, ref: React.Ref<HTMLDivElement>) {
  return (
    <div id="projects" ref={ref} className="h-screen scroll-mt-60 border-b p-8">
      <h2 className="text-2xl font-semibold">프로젝트</h2>
    </div>
  );
}

export default forwardRef(Projects);
