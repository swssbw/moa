import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface State {
  answer1: string[];
  setAnswer1: (answer: string[]) => void;

  answer2: Record<string, string>;
  setAnswer2: (answer: Record<string, string>) => void;

  answer4: string[];
  setAnswer4: (answer: string[]) => void;

  answer5: Record<string, Record<string, string>>;
  setAnswer5: (answer: Record<string, Record<string, string>>) => void;

  answer6: Record<string, Record<string, string>>;
  setAnswer6: (answer: Record<string, Record<string, string>>) => void;

  answer7: Record<string, Record<string, string>>;
  setAnswer7: (answer: Record<string, Record<string, string>>) => void;

  answer11: number;
  setAnswer11: (idx: number, answer: number) => void;
  answer12: number;
  setAnswer12: (answer: number) => void;
  answer13: number;
  setAnswer13: (answer: number) => void;

  totalScore: number[];
  calculateTotalScore: () => void;
}

export const useADASStore = create<State>()(
  devtools((set, get) => ({
    answer1: [],
    setAnswer1: (answer: string[]) =>
      set(
        () => ({
          answer1: answer,
        }),
        false,
        'setAnswer1'
      ),
    answer2: {},
    setAnswer2: (answer) =>
      set(
        () => ({
          answer2: answer,
        }),
        false,
        'setAnswer2'
      ),

    answer4: [],
    setAnswer4: (answer: string[]) =>
      set(
        () => ({
          answer4: answer,
        }),
        false,
        'setAnswer4'
      ),

    answer5: {},
    setAnswer5: (answer: Record<string, Record<string, string>>) =>
      set(
        () => ({
          answer5: answer,
        }),
        false,
        'setAnswer5'
      ),

    answer6: {},
    setAnswer6: (answer: Record<string, Record<string, string>>) =>
      set(
        () => ({
          answer6: answer,
        }),
        false,
        'setAnswer6'
      ),

    answer7: {},
    setAnswer7: (answer: Record<string, Record<string, string>>) =>
      set(
        () => ({
          answer7: answer,
        }),
        false,
        'setAnswer7'
      ),

    answer11: 0,
    setAnswer11: (idx: number, answer: number) =>
      set(
        () => ({
          [`answer${idx}`]: answer,
        }),
        false
      ),
    answer12: 0,
    setAnswer12: (answer: number) =>
      set(
        () => ({
          answer12: answer,
        }),
        false,
        'setAnswer12'
      ),
    answer13: 0,
    setAnswer13: (answer: number) =>
      set(
        () => ({
          answer13: answer,
        }),
        false,
        'setAnswer13'
      ),

    totalScore: [],
    calculateTotalScore: () => {
      const answer1 = get().answer1;
      const answer1WrongCount = 12 - answer1.length;
      const answer2 = get().answer2;
      const answer2WrongCount = Object.values(answer2).filter((v) => v === 'wrong').length;
      const answer4 = get().answer4;
      const answer4WrongCount = 12 - answer4.length;
      const answer5 = get().answer5;
      const answer5WrongCount = Object.values(answer5).filter((item) => item.result === 'wrong').length;
      const answer6 = get().answer6;
      const answer6WrongCount = Object.values(answer6).filter((item) => item.result === 'wrong').length;
      const answer7 = get().answer7;
      const answer7WrongCount = Object.values(answer7).filter((item) => item.result === 'wrong').length;
      const answer11 = get().answer11;
      const answer12 = get().answer12;
      const answer13 = get().answer13;
      const total = [
        answer1WrongCount,
        answer2WrongCount,
        0,
        answer4WrongCount,
        answer5WrongCount,
        answer6WrongCount,
        answer7WrongCount,
        0,
        0,
        0,
        answer11,
        answer12,
        answer13,
      ];

      set({ totalScore: total }, false, 'calculateTotalScore');
    },
  }))
);
