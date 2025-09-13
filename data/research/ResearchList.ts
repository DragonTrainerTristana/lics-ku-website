import { Research } from "@data/_types/lics_data_types";

export const RESEARCH_LIST: Research[] = [
  {
    id: 1,
    title: "지능형 차량 통신 네트워크",
    subtitle: "IEEE,Vehicular Technology Magazine, 2024",
    description: `LTE 차량 네트워크에서의 지능형 차량 서비스(ITS) 를 지원하는 네트워크
		
		기지국 등의 인프라를 통하지 않고, 차량 간의 직접 통신이 가능한 환경에서의 분산 협력 측위 시스템 구축
		상대 차량의 방위각, 상대거리 정보 (평균, 분산) 만 주고 받고 정확한 측위 
		실제 도심 지역 (서울시) 지리정보를 기반하여 ITS 디지털 트윈 구형  `,
    resources: [
      {
        url: "/research/1-its/1.gif",
        description: "ITS 측위 시뮬레이터",
      },
      {
        url: "/research/1-its/2.png",
        description: "서울시 지역 ITS 디지털 트윈",
      },
      {
        url: "/research/1-its/3.png",
        description: "서울시 지역 ITS 디지털 트윈",
      },
    ],
  },
  {
    id: 2,
    title: "분산 협력 통신서비스",
    subtitle: "IEEE,Communication Magazine, 2024",
    description: `분산협력 기술을 다양한 통신 네트워크 시나리오의 적용
		
		사용자, 기지국 간의 연결 관계를 그래프로 모델링
		이웃 사용자, 기지국간의 정보 교환만을 통해 어느 기지국에 어떤 사용자를 할당할지 결정하는 문제 해결

  	분산협력 기술을 통신, 경제학 등 대규모 입자 시스템에 적용

		남녀 그룹간 선호도 매칭, 분산 클러스터링, LTE 시스템 응용 등에 적용
  	기계학습 응용을 통신 시나리오에 적용하여 네트워크 분산 최적화
  `,
    resources: [
      {
        url: "/research/2-distributed/1.png",
        description:
          "그래프 이론을 활용한 다양한 통신 네트워크의 시나리오의 적용",
      },
      {
        url: "/research/2-distributed/2.png",
        description:
          "그래프 이론을 활용한 다양한 통신 네트워크의 시나리오의 적용",
      },
      {
        url: "/research/2-distributed/3.gif",
        description: "복잡계 분석 기반 네트워크 최적화",
        isThumbnail: true,
      },
      {
        url: "/research/2-distributed/4.gif",
        description: "복잡계 분석 기반 네트워크 최적화",
      },
    ],
  },
  {
    id: 3,
    title:
      "물고기 (Zebrafish) 행동 분석을 통한 난청 억제 및 예방을 위한 치료법 및 신약 개발",
    description: `실시간 이미지 프로세싱을 통해 물고기 행동을 분석하고, 물고기 생체 신호를 분석하는 프레임 워크 개발
		기계학습을 기반하여 기존약물의 분자 구조 분석을 통한 신약/신소재 개발 `,
    resources: [
      {
        url: "/research/3-zebrafish/1.png",
        description: "물고기 행동 분석",
      },
      {
        url: "/research/3-zebrafish/2.gif",
        description: "물고기 행동 분석",
      },
      {
        url: "/research/3-zebrafish/3.gif",
        description:
          "Zebrafish 진단 자료를 위한 생체신호 실시간 분석 프레임워크",
      },
      {
        url: "/research/3-zebrafish/4.png",
        description: "기계학습 기반 신약/신소재 개발",
      },
    ],
  },
  {
    id: 4,
    title: "광학 사물인터넷 디바이스 기반 통신 시스템 개발",
    subtitle: "IEEE,Communication Magazine, 2020, 2022",
    description: `체내 인터넷을 구성하기 위해 초저전력 광 무선 통신기반 저전력, 초소형 무선통신 트랜시버 설계
		양방향 광 프로토콜, 전송 전력, 빔 방향성 등의 각종 통신 기술을 접학한 의료 응용 기술`,
    resources: [
      {
        url: "/research/4-iot/1.gif",
        description: "피부 투과 인체 신호 전송 광학 사물인터넷",
      },
      {
        url: "/research/4-iot/2.gif",
        description: "광학 사물인터넷을 이용한 무선 심전도 측정",
      },
    ],
  },
  {
    id: 5,
    title: "자율운항선박 (MASS)",
    subtitle:
      "MASS (Maritime autonomous surface ships) 를 통한 선박 자율 항해 시스템",
    description: `자율주행 선박을 구성하기 위한 기존의 장애물 탐지 및 충돌 회피 기술은 선박 컨트롤 모델에 의존함 
		선박간 통신을 통한 정보 교환을 수행하여 선박간 충돌을 방지하고, 모든 선박이 최선의 경로로 운항

		MASS (Maritime autonomous surface ships) 를 통한 인간의 개입 없는 항해 시스템 개발
		- 자율주행 선박을 구성하기 위해 장애물 탐지 및 충돌 회피(COLEGs)기술이 필수적으로 요구됨
		- 선박간 통신을 통한 정보 교환을 수행하여 선박간 충돌을 방지하고, 모든 선박이 최선의 경로로 운항
`,
    resources: [
      {
        url: "/research/5-mass/1.png",
        description: "MASS 의 장애물 탐지 및 충돌 회피",
      },
      {
        url: "/research/5-mass/2.png",
        description: "글로벌 및 로컬 경로 계획",
      },
      {
        url: "/research/5-mass/3.png",
        description: "충돌 방지를 위한 선박 컨트롤 모델",
      },
      {
        url: "/research/5-mass/4.png",
        description: "인접 선박간 정보 교환을 통한 경로 계획 훈련 과정",
      },
      {
        url: "/research/5-mass/5.gif",
        description: "디지털 트윈 기반 교차 충돌 방지 및 항해 시나리오 검증",
      },
      {
        url: "/research/5-mass/6.gif",
        description: "디지털 트윈 기반 교차 충돌 방지 및 항해 시나리오 검증",
      },
    ],
  },
  {
    id: 6,
    title: "블록체인",
    subtitle: "블록체인 기반 ISL 시간 동기화 기술 ",
    description: `실시간 실제 위성 위치 정보(Starlink)를 활용하여 실제 우주 환경에 배포 했을 때 적합한지 검증
		블록체인 네트워크, 개별 위성의 시간 데이터 및 시간 동기화 알고리즘 성능을 실시간으로 확인`,
    resources: [
      {
        url: "/research/6-blockchain/1.png",
        description: "실시간 좌표 및 궤도",
      },
      {
        url: "/research/6-blockchain/2.gif",
        description: "위성 디지털 트윈",
        isThumbnail: true,
      },
      {
        url: "/research/6-blockchain/3.png",
        description: "위성망 블록체인의 실시간 현황 ",
      },
      {
        url: "/research/6-blockchain/4.png",
        description: "위성망 블록체인의 실시간 현황 ",
      },
    ],
  },
  {
    id: 7,
    title: "하이브리드 나노 복합체 네트워크 연구",
    subtitle: "Nature communications, 2019",
    description: `나노 복합체 시뮬레이션
		탄소나노튜브(CNT) 를 이용한 나노 복합 투명전극을 네트워크로 모델링하고 전기적 특성을 강화 시키기 위한 첨가물의 전산모사`,
    resources: [
      {
        url: "/research/7-nano/1.png",
        description: "Flexible (wearable) device를 위한 나노 복합체 연구",
      },
      {
        url: "/research/7-nano/2.gif",
        description: "게임엔진(Unity) 기반 3D 나노복합체 시뮬레이션",
      },
      {
        url: "/research/7-nano/3.png",
        description: "2D - Conductivity 계산 시뮬레이션",
      },
      {
        url: "/research/7-nano/4.png",
        description: "Multiphase nanocomposite 전도도 계산",
        isThumbnail: true,
      },
    ],
  },
  {
    id: 8,
    title: "네트워크 기반 사회 현상 모델링",
    description: `복잡계 현상, 사회적 현상을 네트워크로 모델링하여 현상 재현 및 분석
		
		OTT(Netflix, Wavve) 이용에 모바일 트래픽 관리 및 콘텐츠 시청 서비스 개선을 위한 사용자간 콘텐츠 공유 방법 
		친구의 역설(friendship paradox)이라는 소셜 네트워크 현상으로 부터 사용자 들의 콘텐츠 소비의 유행을 퍼트리는 효과

		복잡계 현상, 사회적 현상을 재현하고 분석하는 행위자 모형 기반 플랫폼들
		`,
    resources: [
      {
        url: "/research/8-social/1.gif",
        description: "사용자 이동성",
      },
      {
        url: "/research/8-social/2.gif",
        description: "도심지역 사용자 이동성 및 데이터 트래픽",
      },
      {
        url: "/research/8-social/3.gif",
        description: "OTT 공유 네트워크",
      },
      {
        url: "/research/8-social/4.gif",
        description: "저출산 현상 발생 재현",
      },
      {
        url: "/research/8-social/5.gif",
        description: "OTT 독점화 현상 규명",
      },
    ],
  },
  {
    id: 9,
    title: "무선 슈퍼컴퓨터 (HPC)",
    subtitle: "IEEE,Wireless Communications Magazine, 2024",
    description: `초고속 무선 링크 (THz, 광통신)를 이용한 슈퍼컴퓨터 인터커넥트`,
    resources: [
      {
        url: "/research/9-hpc/1.png",
        description: "무선 슈퍼컴퓨터 구조",
      },
      {
        url: "/research/9-hpc/2.png",
        description: "무선 슈퍼컴퓨터 확장 전략",
      },
      {
        url: "/research/9-hpc/3.png",
        description: "초고속 무선 링크 송수신단 설계",
      },
      {
        url: "/research/9-hpc/4.gif",
        description: "무선 슈퍼컴퓨터 서버실 구성 시뮬레이션",
      },
      {
        url: "/research/9-hpc/5.gif",
        description: "무선 슈퍼컴퓨터 연결 네트워크",
      },
    ],
  },
  {
    id: 10,
    title: "홀로그램 통신",
    description: `컴퓨터 생성 3차원 홀로그램 전송 및 고해상 홀로그램 수신 기술
		360도 전방향 3차원 영상 정보가 포함된 홀로그램을 생성하여 3차원 영상 송수신
		`,
    resources: [
      {
        url: "/research/10-hologram/1.png",
        description: "홀로그래픽 자율주행차량 시스템",
      },
      {
        url: "/research/10-hologram/2.png",
        description: "LiDAR 영상 홀로그램 전송",
      },
      {
        url: "/research/10-hologram/3.gif",
        description: "컴퓨터 생성 3D 홀로그램",
      },
    ],
  },
  {
    id: 11,
    title: "뇌파 (EEG)",
    description: `뇌파 기반 통신 및 제어 시스템 구축 및 사물인터넷 제어
		
		인간의 인지와 관련된 뇌파를 이용하여 자율동작장치의 결정을 보조
		실시간 뇌파 데이터 스트림을 기반 사용자의 의도 및 인지 정보를 검출하여 사물인터넷 제어
		`,
    resources: [
      {
        url: "/research/11-eeg/1.png",
        description: "뇌파를 통한 사물 인터넷 제어",
      },
      {
        url: "/research/11-eeg/2.gif",
        description: "뇌파 측정",
      },
      {
        url: "/research/11-eeg/3.gif",
        description: "뇌파 드론 제어 디지털 트윈",
      },
    ],
  },
  {
    id: 12,
    title: "무선 광통신",
    description: `실시간 무선 광통신 하드웨어 구현 및 위성통신 응용
		
		위성간 통신 및 슈퍼컴퓨터에 적합한 광링크의 송수신단 개발 
		`,
    resources: [
      {
        url: "/research/12-wireless/1.png",
        description: "광링크를 이용한 동영상 데이터 송수신",
      },
      {
        url: "/research/12-wireless/2.gif",
      },
      {
        url: "/research/12-wireless/3.gif",
      },
    ],
  },
  {
    id: 13,
    title: "양자 알고리즘",
    description: `네트워크 관리 응용을 위한 양자 알고리즘: 할당 최적화 알고리즘
		
		네트워크 응용: 사용자 주파수 할당, 에너지 절약 사용자 연결 
		`,
    resources: [
      {
        url: "/research/13-quantum/1.png",
        description:
          "NP 난해 할당 문제의 최적 알고리즘의 양자 논리 게이트를 이용한 회로 표현",
      },
      {
        url: "/research/13-quantum/2.gif",
        description: "네트워크 응용 할당 알고리즘의 구현 및 성능 결과",
      },
    ],
  },
];
