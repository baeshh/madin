export const BRAND = {
  name: "메이딘",
  nameEn: "MEIDIN",
  slogan: "자연의 지혜에 과학을 더하다",
  description: "메이딘은 원료의 출처부터 제조, 품질관리까지 깐깐한 기준으로 일상의 건강을 설계합니다.",
  philosophy: "우리는 단기적인 유행이 아닌, 과학적으로 검증된 접근을 통해 인체에 도움이 되는 진짜 영양제를 만듭니다. 모든 제품은 연구 데이터를 기반으로 기획되며, '센시비'와 같은 참당귀 추출물 제품은 인체 염증 반응 개선을 돕는 천연 성분 중심의 컨디션 케어 솔루션으로 개발되었습니다.",
};

export const PRODUCT = {
  name: "센시비",
  nameEn: "SENSIBI",
  descShort: "참당귀 추출물 기반 컨디션 케어",
  description: "센시비는 참당귀 추출물 기반으로 기획된 일상 컨디션 케어 제품입니다. 바쁜 일상에서 균형을 돕도록 단순하고 명료한 포뮬러를 지향합니다.",
  features: ["참당귀 추출물", "일상 컨디션 밸런스", "간결한 포뮬러 지향"],
  ingredients: "참당귀추출물 500mg, 비타민B6 1.5mg, 마그네슘 100mg",
  dosage: "1일 1회, 1회 2캡슐을 충분한 물과 함께 섭취하십시오.",
  caution: "임산부, 수유부, 특정 질환이 있거나 의약품 복용 중인 경우 전문가와 상담 후 섭취하십시오.",
  legal: "본 제품은 질병의 예방 및 치료를 위한 의약품이 아닙니다. 개인의 상태에 따라 체감이 다를 수 있습니다.",
};

export const COMPANY_INFO = {
  address: "서울특별시 강남구 테헤란로 123, 메이딘빌딩 5층",
  phone: "02-1234-5678",
  email: "contact@meidin.kr",
  businessNumber: "123-45-67890",
  ceo: "김대표",
  established: "2019",
};

export const CORE_VALUES = [
  {
    id: "people",
    title: "사람 중심",
    description: "고객의 건강한 일상을 최우선으로 생각하며, 사용자 경험과 안전성을 기반으로 제품을 설계합니다.",
    icon: "Users",
  },
  {
    id: "nature",
    title: "자연 중심",
    description: "인공 성분보다 자연 원료를 우선하며, 국내외 검증된 식물 추출물만을 선별하여 사용합니다.",
    icon: "Leaf",
  },
  {
    id: "quality",
    title: "품질 중심",
    description: "GMP 인증 공정에서 생산되며, 모든 제품은 HACCP 및 ISO 기준을 준수합니다. 투명한 품질 관리를 기업의 기본 가치로 삼습니다.",
    icon: "ShieldCheck",
  },
];

export const TIMELINE = [
  { year: "2019", event: "메이딘 법인 설립" },
  { year: "2020", event: "R&D 센터 개소 및 GMP 인증 획득" },
  { year: "2021", event: "센시비 제품 개발 완료" },
  { year: "2022", event: "HACCP 인증 획득" },
  { year: "2023", event: "ISO 9001 품질경영시스템 인증" },
  { year: "2024", event: "제휴 파트너 확대 및 수출 진행" },
  { year: "2025", event: "신제품 라인업 출시 예정" },
];

export const STATS = [
  { label: "연구 인력", value: "12+", unit: "명" },
  { label: "원료 공급 국가", value: "8", unit: "개국" },
  { label: "보유 인증", value: "5+", unit: "종" },
];

export const RND_PROCESS = [
  {
    id: "sourcing",
    title: "원료 선정",
    description: "국내외 검증된 원료를 엄선하여 선택합니다. 원산지 추적 및 품질 검사를 통해 최상의 원료만을 사용합니다.",
    icon: "Search",
  },
  {
    id: "research",
    title: "연구·검증",
    description: "임상 데이터와 논문 기반의 검증을 수행하며, R&D 조직이 기능성과 안전성을 실험적으로 입증합니다.",
    icon: "FlaskConical",
  },
  {
    id: "manufacturing",
    title: "제조",
    description: "GMP 인증 시설에서 엄격한 제조 공정을 거쳐 제품을 생산합니다. 모든 과정은 표준화된 절차를 따릅니다.",
    icon: "Factory",
  },
  {
    id: "quality",
    title: "품질 관리",
    description: "HACCP 및 ISO 기준을 준수하며, 전 과정에 걸쳐 품질 검사를 실시합니다. 안전하고 신뢰할 수 있는 제품만을 출시합니다.",
    icon: "ShieldCheck",
  },
];

export const CERTIFICATIONS = [
  { name: "GMP", description: "우수의약품제조관리기준" },
  { name: "HACCP", description: "위해요소중점관리기준" },
  { name: "ISO 9001", description: "품질경영시스템 인증" },
];

export const NAV_ITEMS = [
  { id: "about", label: "회사소개" },
  { id: "rnd", label: "연구·기술" },
  { id: "product", label: "제품소개" },
  { id: "news", label: "소식" },
  { id: "contact", label: "문의" },
];
