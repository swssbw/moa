import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface DiagnosisState {
  currentIndex: number;
  subIndex: number;
  setCurrentIndex: (index: number) => void;
  setSubIndex: (index: number) => void;
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
    currentIndex: 0,
    subIndex: 0,
    setCurrentIndex: (index: number) => set({ currentIndex: index }),
    setSubIndex: (index: number) => set({ subIndex: index }),
    goToNext: () =>
      set((state) => {
        // 현재 서브인덱스가 3이면 메인 인덱스를 증가시키고 서브인덱스를 0으로 리셋
        if (state.subIndex === 2) {
          return {
            currentIndex: state.currentIndex + 1,
            subIndex: 0,
          };
        }
        // 그렇지 않으면 서브인덱스만 증가
        return {
          subIndex: state.subIndex + 1,
        };
      }),
    goToPrevious: () =>
      set((state) => {
        // 현재 서브인덱스가 0이면 이전 메인 인덱스의 마지막 서브인덱스로 이동
        if (state.subIndex === 0) {
          return {
            currentIndex: state.currentIndex - 1,
            subIndex: 2,
          };
        }
        // 그렇지 않으면 서브인덱스만 감소
        return {
          subIndex: state.subIndex - 1,
        };
      }),
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
