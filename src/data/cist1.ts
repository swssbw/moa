// CIST 데이터 타입 정의
export type CISTItem = {
  question?: string;
  desc?: string;
  subQuestion?: string[];
  src?: string[];
};

export type CISTData = {
  cognitiveId: number;
  cognitiveName: string;
  testId: string;
  items: CISTItem[];
};

export const data: CISTData[] = [
  {
    cognitiveId: 1,
    cognitiveName: '지남력',
    testId: 'CIST_01',
    items: [
      {
        question: '오늘 날짜를 말씀해주세요',
        subQuestion: ['올해는 몇 년도입니까?', '지금은 몇 월입니까?', '오늘은 며칠입니까?', '오늘은 무슨 요일입니까?'],
      },
      {
        question: '지금 ___님이 계신 여기는 어디인가요?',
      },
    ],
  },
  {
    cognitiveId: 2,
    cognitiveName: '기억력',
    testId: 'CIST_02',
    items: [
      {
        question: '지금부터 외우셔야 하는 문장 하나를 불러드리겠습니다. 끝까지 잘 듣고 따라 해 보세요.',
        subQuestion: ['민수는', '자전거를 타고', '공원에 가서', '11시부터', '야구를 했다'],
      },
      {
        question: '잘 하셨습니다. 제가 다시 한번 불러드리겠습니다. 이번에도 다시 여쭈어 볼테니 잘 듣고 따라해 보세요',
        subQuestion: ['민수는', '자전거를 타고', '공원에 가서', '11시부터', '야구를 했다'],
      },
      {
        question: '제가 이 문장을 나중에 여쭤보겠습니다. 잘 기억하세요',
      },
    ],
  },
  {
    cognitiveId: 3,
    cognitiveName: '주의력',
    testId: 'CIST_03',
    items: [
      {
        question: '제가 불러드리는 숫자를 그대로 따라 해 주세요.',
        desc: '(대상자가 잘 이해하지 못하는 경우) 제가 1-2-3 하고 부르면, 똑같이 1-2-3 이렇게 말씀해 주세요',
        subQuestion: ['6–9–7–3', '5–7–2–8–4'],
      },
      {
        question: '제가 불러드리는 말을 끝에서부터 거꾸로 따라 해 주세요. ',
        desc: '(대상자가 잘 이해하지 못하는 경우) OOO님 이름을 거꾸로 하면 OOO 이렇게 되지요? 마찬가지로 제가 부르는 말을 거꾸로 말씀해 주세요',
        subQuestion: ['금수강산'],
      },
    ],
  },
  {
    cognitiveId: 4,
    cognitiveName: '시공간 기능',
    testId: 'CIST_04',
    items: [
      {
        question:
          '(그림을 가리키며) 여기 점을 연결하여 그린 그림이 있습니다. 이 그림과 똑같이 되도록 (아래 반응 공간을 가리키며) 같은 위치에 그려보세요. 점을 연결해서 그리시면 됩니다. ',
        src: ['/image01.png', '/image02.png'],
      },
    ],
  },
  {
    cognitiveId: 5,
    cognitiveName: '집행 기능',
    testId: 'CIST_05',
    items: [
      {
        question: '여기 모양들이 정해진 순서로 나옵니다. 모양들을 보면서 어떤 순서로 나오는지 생각해 보세요.',
        desc: '자(도형을 왼쪽부터 하나씩 가리키며),네모,동그라미,세모,네모,빈칸,세모.그렇다면 여기 빈칸에는 무엇이 들어가야 할까요?',
        src: ['/image03.PNG'],
      },
      {
        question: '(맨 앞 그림을 가리키며) 여기 네 칸 중의 한 칸에 별이 하나 있습니다.',
        desc: '(두 번째 그림을 가리키며) 별이 이렇게 다른 위치로 이동합니다.어떤 식으로 이동하는지 잘 생각해 보십시오. (마지막 반응 칸을 가리키며) 여기서는 네 칸 중에 별이 어디에 위치하게 될까요?',
        src: ['/image04.PNG'],
      },
      {
        question: '카드에 숫자와 계절이 하나씩 적혀 있습니다.',
        desc: '‘1-봄-2-여름~’이렇게 연결되어 나갑니다. (화살 표시된 빈칸을 가리키며)여기는 무엇이 들어갈 차례일까요?',
        src: ['/image05.PNG'],
      },
    ],
  },
  {
    cognitiveId: 6,
    cognitiveName: '기억력',
    testId: 'CIST_06',
    items: [
      {
        question:
          '제가 조금 전에 외우라고 불러드렸던 문장을 다시 한번 말씀해 주세요. [조금 전에 외우라고 불러드렸던 문장(한 문장의 이야기)을 말씀해 보세요.]',
        subQuestion: ['민수', '자전거', '공원', '11시', '야구'],
      },
      {
        question: '제가 아까 어떤 사람의 이름을 말했는데 누구일까요?',
        subQuestion: ['영수', '민수', '진수'],
      },
      {
        question: '무엇을 타고 갔습니까?',
        subQuestion: ['버스', '오토바이', '자전거'],
      },
      {
        question: '어디에 갔습니까?',
        subQuestion: ['공원', '놀이터 ', '운동장'],
      },
      {
        question: '몇 시부터 했습니까?',
        subQuestion: ['10시', '11시', '12시'],
      },
      {
        question: '무엇을 했습니까?',
        subQuestion: ['농구', '축구', '야구'],
      },
    ],
  },
  {
    cognitiveId: 7,
    cognitiveName: '언어 기능',
    testId: 'CIST_07',
    items: [
      {
        question: '여기 있는 이 그림의 이름을 말씀해 주세요. 이것은 무엇입니까?',
        subQuestion: ['칫솔', '그네', '주사위'],
        src: ['/image06.PNG'],
      },
    ],
  },
  {
    cognitiveId: 8,
    cognitiveName: '집행 기능',
    testId: 'CIST_08',
    items: [
      {
        question:
          ' 지금부터 제가 그만이라고 말할 때까지 과일이나 채소를 최대한 많이 이야기해 주세요. 준비되셨지요? 자, 과일이나 채소 이름을 말씀해 주세요. 시작!',
        desc: '[반응기록/제한시간 1분] 0-8개: 0점 / 9-14개: 1점 / 15개 이상: 2점',
      },
    ],
  },
];
