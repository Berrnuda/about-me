import useBrowserDetect from "@/hooks/useBrowserDetect";
import useDeviceType from "@/hooks/useDeviceType";
import useMediaQuery from "@/hooks/useMediaQuery";
import { IconClose } from "@/utils/icon";
import classNames from "classnames";

interface CustomModalProps {
  content: React.ReactNode;
  closeIcon?: boolean;
  onClose?: () => void;
}

export default function CustomModal({ content, closeIcon = false, onClose }: CustomModalProps) {
  const { isMobile } = useMediaQuery();
  const deviceType = useDeviceType();
  const browser = useBrowserDetect();

  const closeIconClassNames = classNames(
    "modal",
    isMobile && deviceType === "iPhone" && browser === "Safari" ? "mt-80" : ""
  );

  return (
    <div className={closeIconClassNames}>
      {closeIcon && <IconClose className="modal-close-icon" onClick={onClose} />}
      {content}
    </div>
  );
}
