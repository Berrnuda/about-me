import { IconClose } from "@/utils/icon";

interface CustomModalProps {
  content: React.ReactNode;
  closeIcon?: boolean;
  onClose?: () => void;
}

export default function CustomModal({ content, closeIcon = false, onClose }: CustomModalProps) {
  return (
    <div className="modal">
      {closeIcon && <IconClose className="modal-close-icon" onClick={onClose} />}
      {content}
    </div>
  );
}
