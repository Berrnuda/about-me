import useMediaQuery from "@/hooks/useMediaQuery";
import { useModalStore } from "@/store/useModalStore";
import React, { useState, useEffect } from "react";

export default function ScrollProgressBar() {
  const [width, setWidth] = useState(0);
  const { isMobile } = useMediaQuery();
  const { modalType } = useModalStore();

  const handleScroll = () => {
    const element = document.documentElement;
    const ScrollTop = element.scrollTop || document.body.scrollTop;
    const ScrollHeight = element.scrollHeight || document.body.scrollHeight;
    const percent = (ScrollTop / (ScrollHeight - element.clientHeight)) * 100;

    setWidth(percent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (modalType && isMobile) return null;

  return (
    <div
      className="fixed left-0 top-58 z-[25] h-2"
      style={{
        width: `${width}%`,
        borderRadius: `0px 2px 0px 0px`,
        background: `linear-gradient(90deg, #1e3a8a, #3b82f6)`,
      }}
    />
  );
}
