import { create } from "zustand";

interface UploadModal {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useUploadModal = create<UploadModal>((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
}));

export default useUploadModal;
