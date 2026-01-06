import { Notification } from "@data/_types/lics_data_types";

/**
 * @important createdAt 순서대로 작성하세요. 정렬은 id순으로 됩니다.
 * id가 url이 됩니다. 예를 들어 id가 1이면 /notices/1 이 됩니다. 되도록 변경하지 않도록 주의해주세요.
 */
export const NOTIFICATION_LIST: Notification[] = [
  {
    id: 1,
    title: "학생정보 업데이트!",
    description: "학생 정보가 업데이트되었습니다.",
    createdAt: "2021-11-01",
  },
  {
    id: 2,
    title: "학생정보 업데이트!",
    description: "학생 정보가 업데이트되었습니다.",
    createdAt: "2023-10-15",
  },
  {
    id: 3,
    title: "대학원생 모집 공고",
    description:
      "저희 연구실은 차세대 통신, 네트워크, 그리고 디지털 트윈을 융합한 연구를 수행하고 있습니다.\n" +
      "물리적 통신 네트워크 환경을 가상 공간에 정밀하게 구현하고, 이를 통해 지능형 네트워크 최적화 및 예측 기술을 개발하는 것을 목표로 하고 있습니다.\n\n" +
      "대학원 진학과 관련하여 궁금한 것이 있으면 교수님께 연락주세요.\n" +
      "지도교수 : 이상현 교수님 (공학관 407호 sanghyunlee@korea.ac.kr)\n" +
      "방장 : 오승현 (신공학관 534호 seunghyunoh@korea.ac.kr)",
    createdAt: "2025-08-08",
    resources: [
      {
        url: "/research/2-distributed/3.gif",
        description: "예시 이미지입니다.",
      },
    ],
  },
  // 새로운 공지사항을 추가하세요.
];
