import React, { useEffect, useState } from "react";
import classNames from "classnames";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useModalStore } from "@/store/useModalStore";

export default function ModalWrapper() {
  const { modalType, ModalComponent, modalProps, closeModal } = useModalStore();
  const { isMobile } = useMediaQuery();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (modalType && ModalComponent) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsVisible(false);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalType, ModalComponent]);

  if (!modalType || !ModalComponent) return null;

  const enhancedModalProps = {
    ...modalProps,
    onClose: closeModal,
  };

  const modalClass = classNames(
    "modal-container-base transition-transform",
    isMobile
      ? `modal-container-mobile duration-1000 flex justify-center ${isVisible ? `-translate-y-0` : `translate-y-full`}`
      : `modal-container duration-500 ease-in-out ${isVisible ? `scale-1` : `scale-0`}`
  );

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className={modalClass} onClick={(e) => e.stopPropagation()}>
        <ModalComponent {...enhancedModalProps} />
      </div>
    </div>
  );
}
