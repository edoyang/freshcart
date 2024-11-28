import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (
      /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
    ) {
      setDeviceType("mobile");
    } else if (/tablet|ipad|playbook|silk/i.test(userAgent)) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }
  }, []);

  return deviceType; // Returns "mobile", "tablet", or "desktop"
};

export default useDeviceType;
