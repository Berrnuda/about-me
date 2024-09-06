import React, { forwardRef } from "react";

function Introduction(props: any, ref: React.ForwardedRef<HTMLDivElement>) {
  return (
    <div id="introduction" ref={ref} className="h-screen scroll-mt-60 border-b p-8">
      <h2 className="text-2xl font-semibold">자기소개</h2>
    </div>
  );
}

export default forwardRef(Introduction);
