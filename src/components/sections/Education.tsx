import React, { forwardRef } from "react";

function Education(props: any, ref: React.Ref<HTMLDivElement>) {
  return (
    <div id="education" ref={ref} className="h-screen scroll-mt-60 p-8">
      <h2 className="text-2xl font-semibold">교육</h2>
    </div>
  );
}

export default forwardRef(Education);
