import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface GlobalState {
  targetName: string;
  setTargetName: (name: string) => void;
}

export const useGlobalStore = create<GlobalState>()(
  devtools(
    persist(
      (set) => ({
        targetName: '',
        setTargetName: (name: string) => set({ targetName: name }),
      }),
      {
        name: 'global-store', // localStorage key 이름
        // storage: createJSONStorage(() => sessionStorage), // 필요시 sessionStorage로 변경 가능
      }
    )
  )
);
