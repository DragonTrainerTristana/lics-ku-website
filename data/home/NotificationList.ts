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
    description: "현재 LICS 연구실에서 대학원생을 모집하고 있습니다.",
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
