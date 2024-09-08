import { useState, useEffect } from "react";

export default function useDeviceType() {
  const [deviceType, setDeviceType] = useState("Unknown");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    console.log(userAgent);

    if (userAgent.indexOf("android") > -1) {
      setDeviceType("android");
    } else if (
      userAgent.indexOf("iphone") > -1 ||
      userAgent.indexOf("ipad") > -1 ||
      userAgent.indexOf("ipod") > -1
    ) {
      setDeviceType("iPhone");
    } else {
      setDeviceType("Unknown");
    }
  }, []);

  return deviceType;
}
