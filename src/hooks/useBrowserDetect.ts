import { useState, useEffect } from "react";

export default function useBrowserDetect() {
  const [browser, setBrowser] = useState<string>("Unknown");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (/chrome/i.test(userAgent) && !/edge|edg/i.test(userAgent)) {
      setBrowser("Chrome");
    } else if (/safari/i.test(userAgent) && !/chrome/i.test(userAgent)) {
      setBrowser("Safari");
    } else {
      setBrowser("Other");
    }
  }, []);

  return browser;
}
