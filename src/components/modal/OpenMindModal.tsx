import CustomModal from "./CustomModal";

export default function OpenMindModal({ onClose }: { onClose?: () => void }) {
  return <CustomModal content={<div>오픈마인드 모달</div>} />;
}
