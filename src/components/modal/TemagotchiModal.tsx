import CustomModal from "./CustomModal";

export default function TemagotchiModal({ onClose }: { onClose?: () => void }) {
  return <CustomModal content={<div onClick={onClose}>티마고치 모달</div>} />;
}
