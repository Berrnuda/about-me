import CustomModal from "./CustomModal";

export default function ArbabaModal({ onClose }: { onClose?: () => void }) {
  return <CustomModal content={<div onClick={onClose}>아르바바 모달</div>} />;
}
