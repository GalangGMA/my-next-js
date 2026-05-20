import { create } from "zustand";

type UiStore = {
  isMessageContactPanelOpen: boolean;
  setMessageContactPanelOpen: (open: boolean) => void;
  closeMessageContactPanel: () => void;
};

export const useUiStore = create<UiStore>((set) => ({
  isMessageContactPanelOpen: false,
  setMessageContactPanelOpen: (open) => set({ isMessageContactPanelOpen: open }),
  closeMessageContactPanel: () => set({ isMessageContactPanelOpen: false }),
}));
