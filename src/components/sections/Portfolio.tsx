import React, { forwardRef } from "react";

function Portfolio(props: any, ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      id="portfolio"
      ref={ref}
      className="h-screen p-8 border-b scroll-mt-60"
    >
      <h2 className="text-2xl font-semibold">포트폴리오</h2>
    </div>
  );
}

export default forwardRef(Portfolio);
