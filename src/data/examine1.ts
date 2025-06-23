type ADASITEM = {
  cognitiveId: number;
  cognitiveName: string;
  testId: string;
  cognitiveSubId?: number; // TODO: delete
  description?: string[]; // TODO: delete
  instructions?: { situation: string; script: string }[]; // TODO: delete
  content?: {
    name: string;
    hint: string;
    // src?: string;
  }[]; // TODO: delete
  evaluation?: {
    name: string;
    score: number;
  }[];
  items: {
    name?: string;
    description: string[];
    instructions: { situation: string; script: string }[];
    content: {
      name: string;
      hint: string;
    }[];
  }[];
};

export const data: ADASITEM[] = [
  {
    cognitiveId: 1,
    cognitiveName: '단어회상(A)',
    testId: 'ADAS_01',
    items: [
      {
        description: [''],
        instructions: [
          {
            situation: '첫 번째 시행 전, 검사자는 다음과 같이 지시한다.',
            script:
              '이제 제가 이 흰색 카드 위에 쓰여진 몇 개의 단어를 한 번에 하나씩 보여드리겠습니다. 각 단어를 소리 내어 읽으면서 이 단어를 기억하려고 노력해보세요. 잠시 후 보여드렸던 단어를 모두 기억하는지 여쭤보겠습니다. 준비되셨습니까? 이 단어를 읽고 기억해 보세요.',
          },
          {
            situation: '상황에 따라, 검사자는 다음과 같이 말할 수 있다.',
            script: '소리 내어 읽고 단어를 기억해보세요',
          },
          {
            situation: '10개의 단어를 보여주고 난 후, 검사자는 대상자에게 가능한 한 많은 단어를 회상해보라고 한다.',
            script: '좋습니다. 이제 제가 보여드렸던 단어들 중에서 생각나는 단어를 모두 말씀해주세요.',
          },
          {
            situation:
              '대상자가 본인이 회상할 수 있는 모든 단어들을 다 말한 것처럼 보이면, 회상할 수 있는 단어가 더 있는지 알아보기 위해, 다음과 같이 묻는다.',
            script: '기억나는 단어가 또 있습니까?',
          },
        ],
        content: [
          { name: '참기름', hint: '' },
          { name: '팔', hint: '' },
          { name: '해변', hint: '' },
          { name: '편지', hint: '' },
          { name: '공주', hint: '' },
          { name: '오두막', hint: '' },
          { name: '기둥', hint: '' },
          { name: '영수증', hint: '' },
          { name: '잎', hint: '' },
          { name: '소방차', hint: '' },
        ],
      },
    ],
  },
  {
    cognitiveId: 2,
    cognitiveName: '명령 시행',
    testId: 'ADAS_02',
    items: [
      {
        description: [
          '대상자가 자신이 실수 했다는 것을 인지하는 경우 또는 다른 시도를 요청하는 경우에만 2차 시도를 제안한다. 정답으로 채점하려면 대상자가 지시에 따라 모든 사항을 정확하게 수행하여야 한다.',
        ],
        instructions: [
          {
            situation: '시작하려면 다음처럼 말한다.',
            script: '지금부터 제가 말씀드리는 대로 몇가지를 해주시기 바랍니다. 먼저...',
          },
        ],
        content: [
          { name: '주먹을 쥐어 보세요', hint: '' },
          { name: '손가락으로 천장을 가리킨 다음 바닥을 가리키세요', hint: '' },
        ],
      },
      {
        description: [
          '세 번째 및 네 번째 명령을 위해 연필, 손목 시계, 카드를 대상자의 왼쪽에서 오른쪽으로 책상 위에 순서대로 놓고 지시한다.',
        ],
        instructions: [],
        content: [
          { name: '연필을 카드 위에 놓았다가. 다시 제자리에 놓아주세요', hint: '' },
          { name: '손목 시계를 연필의 반대 편에 놓고, 카드를 뒤집으세요', hint: '' },
        ],
      },
      {
        description: ['책상 위에 놓여 있던 연필을 손목 시계, 카드를 치운 후 다음과 같이 지시한다.'],
        instructions: [],
        content: [{ name: '눈을 감고, 손가락 두 개로 양쪽 어깨를 각각 두 번식 두드리세요.', hint: '' }],
      },
    ],
  },
  {
    cognitiveId: 3,
    cognitiveName: '구성 실행력',
    testId: 'ADAS_03',
    items: [
      {
        description: [
          '대상자가 또 다른 시도를 요청하는 경우 또는 1차 시도에 대한 불만족을 표시하는 경우에만 2차 시도를 제안한다.',
          '구성 실행력의 총점은 추후에 계산된다. 따라서 검사 용지에 점수를 기록할 필요는 없다.',
        ],
        instructions: [
          {
            situation: '검사 시작 전, 다음과 같이 지시한다.',
            script: '종이에 어떤 도형이 그려져 있습니다. 종이의 빈 공간에 이 도형과 똑같이 그려보세요.',
          },
        ],
        content: [
          { name: '동그라미', hint: '/3_1.PNG' },
          { name: '두 개의 겹쳐진 직사각형', hint: '/3_2.PNG' },
          { name: '마름모(다이아몬드)', hint: '/3_3.PNG' },
          { name: '정육면체', hint: '/3_4.PNG' },
        ],
      },
    ],
  },
  {
    cognitiveId: 4,
    cognitiveName: '단어 지연 회상',
    testId: 'ADAS_04',
    items: [
      {
        description: [],
        instructions: [
          {
            situation: '검사 시작 전, 다음과 같이 지시한다.',
            script:
              '몇 분 전에 제가 (단어 카드를 가리키며)이 카드에 인쇄된 단어 몇 가지를 읽어보라고 했습니다. 카드에 있었던 단어 중에 기억나는 것을 모두 말씀해 주십시오.',
          },
          {
            situation: '대상자가 어떤 단어도 기억나지 않는다고 말하면, 다음과 같이 묻는다.',
            script: '그저 최선을 다하시면 됩니다. 확실하지 않다면 추측하셔도 됩니다.',
          },
          {
            situation: '필요한 경우 다음과 같이 말하여 대상자를 격려한다.',
            script: '또 있습니까?',
          },
          {
            situation:
              '반응이 없거나 “또 있습니까?”라고 물은 후에 대상자가 더 이상 추가적인 단어를 기억해내지 못하는 것이 명백한 경우 검사를 중단한다.',
            script: '',
          },
        ],
        content: [
          { name: '참기름', hint: '' },
          { name: '팔', hint: '' },
          { name: '해변', hint: '' },
          { name: '편지', hint: '' },
          { name: '공주', hint: '' },
          { name: '오두막', hint: '' },
          { name: '기둥', hint: '' },
          { name: '영수증', hint: '' },
          { name: '잎', hint: '' },
          { name: '소방차', hint: '' },
        ],
      },
    ],
  },
  {
    cognitiveId: 5,
    cognitiveName: '사물 및 손가락 이름 말하기',
    testId: 'ADAS_05',
    items: [
      {
        name: '사물 이름 말하기',
        description: ['물건을 무작위로 보여준다. 대상자가 물건을 만지도록 허용하지 않는다.'],
        instructions: [
          {
            situation: '대상자에게 다음과 같이 지시한다.',
            script:
              '제가 지금부터 몇 가지 물건들을 보여드리겠습니다. 물건의 이름을 말씀해 주시겠습니까? 이것을 무엇이라고 부릅니까? (사물을 보여줌)',
          },
          {
            situation: '계속해서 무작위로 사물을 보여준다. 각 사물에 대한 첫 질문은 다음과 같아야 한다.',
            script: '이것을 무엇이라고 부릅니까?” 또는 “이것의 이름은 무엇입니까?',
          },
          {
            situation: '만약 대상자가 그 사물의 기능을 설명하면 다음과 같이 말한다.',
            script: '맞습니다. 그런데 그건 쓰임새를 말하는 것이고 이 물건의 이름은 무엇입니까?',
          },
          {
            situation: '만약 대상자가 대답하지 않거나 오답을 말했을 때만, 검사자는 그 사물에 해당하는 힌트를 읽어준다.',
            script: '여전히 대상자가 대답하지 않거나 오답을 말한다면, 그 다음 사물을 보여준다.',
          },
        ],
        content: [
          {
            name: '꽃',
            hint: '주로 정원에서 키우는 것',
          },
          {
            name: '침대',
            hint: '누워 자는 곳',
          },
          {
            name: '호루라기',
            hint: '입으로 불 때 소리가 나는 것',
          },
          {
            name: '연필',
            hint: '글씨를 쓸 때 사용하는 것',
          },
          {
            name: '지갑',
            hint: '돈을 넣어 두는 것',
          },
          {
            name: '가면',
            hint: '얼굴을 가릴 때 쓰는 것',
          },
          {
            name: '가위',
            hint: '종이를 자르는 것',
          },
          {
            name: '머리빗',
            hint: '머리카락에 사용하는 것',
          },
          {
            name: '딸랑이',
            hint: '갓난 아기의 장난감',
          },
          {
            name: '하모니카',
            hint: '악기',
          },
          {
            name: '청진기',
            hint: '의사가 심장 소리를 들을 때 사용하는 것',
          },
          {
            name: '족집게',
            hint: '손으로 잡기 힘든 작은 물건을 집을 때 사용하는 것',
          },
        ],
      },
      {
        name: '손가락 이름 말하기',
        description: ['무작위로 실시한다.'],
        instructions: [
          {
            situation: '대상자에게 다음과 같이 지시한다.',
            script:
              '지금부터 제가 어르신의 손의 일부를 가리키면 그 부분의 이름을 말씀해 주세요. 이것을 무엇이라고 부릅니까?',
          },
          {
            situation: '네 개의 손가락에 대해서, 상황에 따라 다음과 같이 질문한다.',
            script: '이 손가락을 다른 이름으로 뭐라고 합니까?',
          },
        ],
        content: [
          {
            name: '엄지',
            hint: '',
          },
          {
            name: '검지/집게 손가락',
            hint: '',
          },
          {
            name: '중지/장지/가운데 손가락',
            hint: '',
          },
          {
            name: '약지',
            hint: '',
          },
          {
            name: '소지/새끼 손가락',
            hint: '',
          },
        ],
      },
    ],
  },
  {
    cognitiveId: 6,
    cognitiveName: '',
    testId: 'ADAS_06',
    items: [
      {
        description: ['명시된 경우를 제외하고, 답변은 정확해야 한다.', '너무 일반적이거나 모호한 답변은 명확히 한다.'],
        instructions: [],
        content: [
          {
            name: '성명',
            hint: '성함을 성과 이름을 전부 말씀해 주시겠습니까?',
          },
          {
            name: '연도',
            hint: '올해는 몇 년도입니까?',
          },
          {
            name: '월',
            hint: '지금이 몇 월달입니까?',
          },
          {
            name: '일',
            hint: '오늘이 며칠입니까?” (±1일)',
          },
          {
            name: '요일',
            hint: '오늘이 무슨 요일입니까?',
          },
          {
            name: '계절',
            hint: '지금이 무슨 계절입니까?(1주일 내로 시작되거나, 2주 전에 끝난 계절)',
          },
          {
            name: '시간',
            hint: '지금이 몇 시인지 시계를 보지 말고 말씀해주십시오. (±1시간)',
          },
          {
            name: '장소',
            hint: '지금 우리가 있는 장소의 이름이 무엇입니까?',
          },
        ],
      },
    ],
  },
  {
    cognitiveId: 7,
    cognitiveName: '지남력',
    testId: 'ADAS_05',
    items: [
      {
        description: ['명시된 경우를 제외하고, 답변은 정확해야 한다.', '너무 일반적이거나 모호한 답변은 명확히 한다.'],
        instructions: [],
        content: [
          {
            name: '성명',
            hint: '성함을 성과 이름을 전부 말씀해 주시겠습니까?',
          },
          {
            name: '연도',
            hint: '올해는 몇 년도입니까?',
          },
          {
            name: '월',
            hint: '지금이 몇 월달입니까?',
          },
          {
            name: '일',
            hint: '오늘이 며칠입니까?” (±1일)',
          },
          {
            name: '요일',
            hint: '오늘이 무슨 요일입니까?',
          },
          {
            name: '계절',
            hint: '지금이 무슨 계절입니까?(1주일 내로 시작되거나, 2주 전에 끝난 계절)',
          },
          {
            name: '시간',
            hint: '지금이 몇 시인지 시계를 보지 말고 말씀해주십시오. (±1시간)',
          },
          {
            name: '장소',
            hint: '지금 우리가 있는 장소의 이름이 무엇입니까?',
          },
        ],
      },
    ],
  },
  // {
  //   cognitiveId: 8,
  //   cognitiveSubId: 0,
  //   cognitiveName: '단어 재인',
  //   testId: 'word-recognition-a',
  //   description: ['명시된 경우를 제외하고, 답변은 정확해야 한다.', '너무 일반적이거나 모호한 답변은 명확히 한다.'],
  //   instructions: [
  //     {
  //       situation: '본 하위 검사의 학습 시행을 시작할 때 검사자는 다음과 같이 지시한다.',
  //       script:
  //         '이제 제가 이 흰색 카드에 쓰여진 몇 개의 단어를 보여드릴 겁니다. 각 단어를 소리 내어 읽으면서, 해당 단어를 기억하려고 노력해 보십시오. 잠시 후에 보여드렸던 단어를 보두 기억하는지 여쭈어보겠습니다. 준비되셨습니까? 이 단어를 읽고 기억해 보십시오.',
  //     },
  //     {
  //       situation: '상황에 따라 검사자는 다음과 같이 대상자의 반응을 유도한다.',
  //       script: '소리 내어 읽고 단어를 기억해 보세요.',
  //     },
  //     {
  //       situation: '재인 검사를 시행하는 동안 검사자는 다음과 같이 말해야 한다.',
  //       script:
  //         '이제 또 다른 단어들을 보여드리겠습니다. 이 단어들 중에서 어떤 것은 방금 보여드렸던 것이고, 어떤 것은 보여드리지 않은 것입니다. 각 단어를 보면서 그 단어가 방금 제가 보여드린 것인지를 말씀해 주세요.',
  //     },
  //     {
  //       situation: '검사자는 첫 번째 단어를 보여주면서 다음과 같이 말한다.',
  //       script: '지금 이 단어는 제가 아까 보여드렸던 것인가요 아닌가요? / 제가 아까 이 단어를 보여드렸습니까?',
  //     },
  //     {
  //       situation: '두 번째 단어를 보여주기 전에도 같은 지시를 한다. 나머지 단어부터는 다음과 같이 말한다.',
  //       script: '이것은 어떻습니까?',
  //     },
  //     {
  //       situation: '만약 대상자가 확신이 없다는 표현을 하면, 다음과 같이 격려하는 것이 좋다.',
  //       script: '부담없이 할 수 있는 만큼 잘 맞춰 보십시오.',
  //     },
  //   ],
  //   content: [
  //     {
  //       name: '간호사',
  //       hint: '',
  //     },
  //     {
  //       name: '교과서',
  //       hint: '',
  //     },
  //     {
  //       name: '마법사',
  //       hint: '',
  //     },
  //     {
  //       name: '마차',
  //       hint: '',
  //     },
  //     {
  //       name: '표범',
  //       hint: '',
  //     },
  //     {
  //       name: '상업',
  //       hint: '',
  //     },
  //     {
  //       name: '하늘',
  //       hint: '',
  //     },
  //     {
  //       name: '기차',
  //       hint: '',
  //     },
  //     {
  //       name: '동전',
  //       hint: '',
  //     },
  //     {
  //       name: '배',
  //       hint: '',
  //     },
  //     {
  //       name: '공공기관',
  //       hint: '',
  //     },
  //     {
  //       name: '지도',
  //       hint: '',
  //     },
  //     {
  //       name: '도끼',
  //       hint: '',
  //     },
  //     {
  //       name: '종이',
  //       hint: '',
  //     },
  //     {
  //       name: '시금치',
  //       hint: '',
  //     },
  //     {
  //       name: '우유',
  //       hint: '',
  //     },
  //     {
  //       name: '부피',
  //       hint: '',
  //     },
  //     {
  //       name: '숲',
  //       hint: '',
  //     },
  //     {
  //       name: '닻',
  //       hint: '',
  //     },
  //     {
  //       name: '보석',
  //       hint: '',
  //     },
  //     {
  //       name: '토끼',
  //       hint: '',
  //     },
  //     {
  //       name: '기금',
  //       hint: '',
  //     },
  //     {
  //       name: '끝',
  //       hint: '',
  //     },
  //     {
  //       name: '과자',
  //       hint: '',
  //     },
  //   ],
  // },
  // {
  //   cognitiveId: 9,
  //   cognitiveSubId: 0,
  //   cognitiveName: '단어 인지 하부 검사 지침 기억하기',
  //   testId: 'word-recognition-b',
  //   description: [
  //     '이 항목은 대상자가 단어 재인 검사 수행 도중에 과제 내용을 잘 기억하고 있는지를 평가하는 것이다. 단어 재인 과제를 시행하면서 대상자에게 과제를 상기시킨 횟수로 평가한다. 만약 과제를 완료하지 못했거나 시도하지도 못했다면 이 과제는 채점하지 않는다.',
  //   ],
  //   instructions: [],
  //   content: [],
  //   evaluation: [
  //     {
  //       name: '상기시킴 없음(0)',
  //       score: 0,
  //     },
  //     {
  //       name: '상기시킴 1회',
  //       score: 1,
  //     },
  //     {
  //       name: '상기시킴 2회',
  //       score: 2,
  //     },
  //     {
  //       name: '상기시킴 3-4회',
  //       score: 3,
  //     },
  //     {
  //       name: '상기시킴 5-6회',
  //       score: 4,
  //     },
  //     {
  //       name: '상기시킴 7회 이상',
  //       score: 5,
  //     },
  //   ],
  // },
  // {
  //   cognitiveId: 10,
  //   cognitiveSubId: 1,
  //   cognitiveName: '숫자 지우기(연습)',
  //   testId: 'number-eraser-practice',
  //   description: [
  //     '과제를 이해했는지 확인하기 위해 실수를 고쳐주고, 필요 시 다시 설명한다.',
  //     '30초 후에 또는 대상자가 마지막 줄을 끝냈을 때(둘 중 먼저 발생하는 시점에) 연습을 중단한다.',
  //     '연습용 과제는 채점하지 않는다.',
  //   ],
  //   instructions: [
  //     {
  //       situation: '연습용 양식을 위쪽으로 하여 대상자 앞에 놓는다. 시작하려면 다음과 같이 말한다.',
  //       script:
  //         '이 페이지 위쪽에 숫자 2개가 있습니다. 이쪽 줄에는 이러한 숫자들이 다른 숫자들과 섞여 있습니다. 여기부터 시작해서” (줄의 시작을 가리키며) “페이지 위쪽에 있는 숫자 2개와 같은 숫자를 지워주십시오. 가능한 빨리 지워보십시오.',
  //     },
  //   ],
  //   content: [],
  //   evaluation: [],
  // },
  // {
  //   cognitiveId: 10,
  //   cognitiveSubId: 2,
  //   cognitiveName: '숫자 지우기',
  //   testId: 'number-eraser',
  //   description: [
  //     '45초 후에 또는 대상자가 마지막 줄을 끝냈을 때(둘 중 먼저 발생하는 시점) 검사를 중단한다.',
  //     '다음의 경우에 페이지의 위를 가리키며 대상자에게 검사 방법을 다시 알려준다.',
  //     '① 대상자가 점사 시작 시(첫째 줄에서) 부정확한 숫자를 4개 이상 지운 경우',
  //     '② 대상자가 막힌 것처럼 보이고, 질문을 했을 때, 지금 하고 있는 검사에 대해 설명하지 못하는 경우',
  //     '③ 목표 숫자 2개 중 1개만 지우고 있는 것이 명백한 경우',
  //   ],
  //   instructions: [
  //     {
  //       situation: '채점용 양식을 위쪽으로 하여 대상자 앞에 놓는다. 시작하려면 다음과 같이 말한다.',
  //       script:
  //         '이 페이지 위쪽에 숫자 2개가 있습니다. 이쪽 줄에는 이러한 숫자들이 다른 숫자들과 섞여 있습니다. 여기부터 시작해서” (줄의 시작을 가리키며) “페이지 위쪽에 있는 숫자 2개와 같은 숫자를 지워주십시오. 가능한 빨리 지워보십시오.”',
  //     },
  //     {
  //       situation:
  //         '대상자가 마지막 줄 전에 있는 줄의 끝에서 멈추고, 아직 시간이 남은 경우에는 대상자에게 다음처럼 말한다.',
  //       script: '계속 하십시오',
  //     },
  //   ],
  //   content: [],
  //   evaluation: [],
  // },
  // {
  //   cognitiveId: 11,
  //   cognitiveSubId: 0,
  //   cognitiveName: '말하기 능력',
  //   testId: 'speech-ability',
  //   description: [],
  //   instructions: [],
  //   content: [
  //     {
  //       name: '0 문제 없음',
  //       hint: '대상자의 말을 이해하는데 어려움이 전혀 없었음',
  //     },
  //     {
  //       name: '1 매우 경미',
  //       hint: '대상자의 말을 이해하는데 한차례 어려움이 있었음',
  //     },
  //     {
  //       name: '2 경미',
  //       hint: '대상자의 말을 이해하기 어려운 부분의 비중이 25% 미만임',
  //     },
  //     {
  //       name: '3 보통',
  //       hint: '대상자의 말을 이해하기 어려운 부분의 비중이 25%~50% 임',
  //     },
  //     {
  //       name: '4 어느 정도 심각',
  //       hint: '대상자의 말을 이해하기 어려운 부분의 비중이 50% 보다 높음',
  //     },
  //     {
  //       name: '5 심각',
  //       hint: '한 두 개 단어만 말함, 유창하게 말을 하지만 내용이 없음, 말을 하지 않음',
  //     },
  //   ],
  //   evaluation: [],
  // },
  // {
  //   cognitiveId: 12,
  //   cognitiveSubId: 0,
  //   cognitiveName: '단어 찾기 능력',
  //   testId: 'word-find',
  //   description: [],
  //   instructions: [],
  //   content: [
  //     {
  //       name: '0 문제 없음',
  //       hint: '자발적을 말을 하면서, 원하는 단어를 찾는데 문제가 전혀 없었음',
  //     },
  //     {
  //       name: '1 매우 경미',
  //       hint: '한 두 차례 어려움이 있었으나, 임상적으로 의미 있는 정도는 아님',
  //     },
  //     {
  //       name: '2 경미',
  //       hint: '눈에 띄게 완곡한 표현을 하거나 동의어로 대체함',
  //     },
  //     {
  //       name: '3 보통',
  //       hint: '보충해서 말하는 것도 없이 간혹 단어를 잊어버림',
  //     },
  //     {
  //       name: '4 어느 정도 심각',
  //       hint: '보충해서 말하는 것도 없이 단어를 빈번하게 잊어버림',
  //     },
  //     {
  //       name: '5 심각',
  //       hint: '내용어를 거의 전부 잊어버림, 내용이 없는 말을 함, 한 두 단어만 말함',
  //     },
  //   ],
  //   evaluation: [],
  // },
  // {
  //   cognitiveId: 13,
  //   cognitiveSubId: 0,
  //   cognitiveName: '구어 이해력',
  //   testId: 'speech-comprehension',
  //   description: [],
  //   instructions: [],
  //   content: [
  //     {
  //       name: '0 문제 없음',
  //       hint: '모든 말을 이해함',
  //     },
  //     {
  //       name: '1 매우 경미',
  //       hint: '이해하지 못한 경우가 1-2번 발생',
  //     },
  //     {
  //       name: '2 경미',
  //       hint: '이해하지 못한 경우가 3-5번 발생',
  //     },
  //     {
  //       name: '3 보통',
  //       hint: '검사자가 여러 차례 반복하거나 바꾸어 말해야 했음',
  //     },
  //     {
  //       name: '4 어느 정도 심각',
  //       hint: '대상자가 올바른 반응을 하는 경우가 간헐적으로만 있었음 (예: 예/아니오 질문)',
  //     },
  //     {
  //       name: '5 심각',
  //       hint: '대상자가 적절한 반응을 보인 경우가 거의 없었음 (단, 언어 구사력 문제로 인한 경우는 채점 시 고려하지 않는다.)',
  //     },
  //   ],
  //   evaluation: [],
  // },
];

export const cistData = [
  {
    cognitiveId: 1,
    cognitiveSubId: 0,
    cognitiveName: '지남력',
    testId: 'cist01',
    description: [],
    instructions: [],
    content: [
      {
        name: '올해는 몇 년도 입니까?',
        hint: '',
      },
      {
        name: '지금은 몇 월입니까?',
        hint: '',
      },
      {
        name: '오늘은 며칠입니까?',
        hint: '',
      },
      {
        name: '오늘은 무슨 요일입니까?',
        hint: '',
      },
      {
        name: '지금 ___님이 계신 여기는 어디인가요?',
        hint: '',
      },
    ],
    evaluation: [],
  },
  {
    cognitiveId: 2,
    cognitiveSubId: 0,
    cognitiveName: '기억력',
    testId: 'cist02',
    description: [],
    instructions: ['지금부터 외우셔야 하는 문장 하나를 불러드리겠습니다. 끝까지 잘 듣고 따라 해 보세요.'],
    content: [
      {
        name: '올해는 몇 년도 입니까?',
        hint: '',
      },
      {
        name: '지금은 몇 월입니까?',
        hint: '',
      },
      {
        name: '오늘은 며칠입니까?',
        hint: '',
      },
      {
        name: '오늘은 무슨 요일입니까?',
        hint: '',
      },
      {
        name: '지금 ___님이 계신 여기는 어디인가요?',
        hint: '',
      },
    ],
    evaluation: [],
  },
];
