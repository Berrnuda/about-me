import useDeviceType from "@/hooks/useDeviceType";
import { IconClose } from "@/utils/icon";
import classNames from "classnames";

interface CustomModalProps {
  content: React.ReactNode;
  closeIcon?: boolean;
  onClose?: () => void;
}

export default function CustomModal({ content, closeIcon = false, onClose }: CustomModalProps) {
  const deviceType = useDeviceType();

  const closeIconClassNames = classNames(
    "modal-close-icon",
    deviceType === "iPhone" ? "top-100" : "top-16"
  );

  return (
    <div className="modal">
      {closeIcon && <IconClose className={closeIconClassNames} onClick={onClose} />}
      {content}
    </div>
  );
}
