/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import { ModalIds } from '.';

interface useModalsProps {
  modalId: ModalIds | null,
  data?: any,
  open: (id: ModalIds, data?: any) => void,
  close: () => void
}

export const useModals = create<useModalsProps>((set) => ({
  modalId: null,
  data: { } as any,
  open: (id: ModalIds, data?: any) => set({ modalId: id, data }),
  close: () => set({ modalId: null, data: { } })
}))