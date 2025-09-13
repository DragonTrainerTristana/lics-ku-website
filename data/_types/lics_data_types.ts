export type ContentDisplayVariant =
  | "FULL_WIDTH"
  | "HALF_WIDTH"
  | "QUARTER_WIDTH";

export type Resource = {
  /**
   * public 폴더 내 이미지 경로
   */
  url: string;
  /**
   * 이미지 설명 (optional)
   */
  description?: string;
  /**
   * 이미지가 썸네일인지 여부
   */
  isThumbnail?: boolean;
};

export type Content = {
  /**
   * 콘텐츠 고유 아이디
   * @important url의 경로가 되니 꼭 고유한 값으로 설정해주세요
   * 예) id: 1 => url: "/research/1"
   */
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  resources?: Resource[];
};

export type Research = Content & {
  /**
   * 카드에서 이미지가 어떻게 보여지는지 결정하는 값
   *
   * 예시
   * FULL_WIDTH: 카드 전체 너비 사용
   * HALF_WIDTH: 카드 절반 너비 사용
   * QUARTER_WIDTH: 카드 1/4 너비 사용
   * @default HALF_WIDTH
   */
  displayVariant?: ContentDisplayVariant;
};
export type Notification = Content & {
  /**
   * 공지사항은 생성일자가 필수입니다
   */
  createdAt: string;
  /**
   * 공지사항 PIN
   */
  isPinned?: boolean;
};
