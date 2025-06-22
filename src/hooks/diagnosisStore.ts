import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface DiagnosisState {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  goToNext: () => void;
  goToPrevious: () => void;
  baseFontSize: number;
  increaseBaseFontSize: () => void;
  decreaseBaseFontSize: () => void;
  resetBaseFontSize: () => void;
  setBaseFontSize: (size: number) => void;
}

export const useDiagnosisStore = create<DiagnosisState>()(
  devtools((set) => ({
    currentIndex: 1,
    setCurrentIndex: (index: number) => set({ currentIndex: index }),
    goToNext: () => set((state) => ({ currentIndex: state.currentIndex + 1 })),
    goToPrevious: () => set((state) => ({ currentIndex: state.currentIndex - 1 })),
    baseFontSize: 16, // 기본 폰트 사이즈
    increaseBaseFontSize: () =>
      set((state) => {
        const newSize = Math.min(state.baseFontSize + 2, 24);
        document.documentElement.style.fontSize = `${newSize}px`;
        return { baseFontSize: newSize };
      }),
    decreaseBaseFontSize: () =>
      set((state) => {
        const newSize = Math.max(state.baseFontSize - 2, 12);
        document.documentElement.style.fontSize = `${newSize}px`;
        return { baseFontSize: newSize };
      }),
    resetBaseFontSize: () =>
      set(() => {
        document.documentElement.style.fontSize = '16px';
        return { baseFontSize: 16 };
      }),
    setBaseFontSize: (size: number) =>
      set(() => {
        const newSize = Math.min(Math.max(size, 12), 24); // 12px ~ 24px 사이로 제한
        document.documentElement.style.fontSize = `${newSize}px`;
        return { baseFontSize: newSize };
      }),
  }))
);
