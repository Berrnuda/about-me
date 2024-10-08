import React, { forwardRef } from "react";

function Experience(props: any, ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      id="experience"
      ref={ref}
      className="h-screen scroll-mt-59 border-t border-b-text-secondary p-8"
    >
      <h2 className="text-2xl font-semibold">경력</h2>
    </div>
  );
}

export default forwardRef(Experience);
