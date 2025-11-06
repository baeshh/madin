# 메이딘 브랜드 사이트 디자인 가이드라인

## 디자인 접근 방식
**참고 스타일**: 네이처스팜 (Nature's Farm) - 자연주의, 신뢰성, 과학적 전문성을 시각적으로 표현하는 클린하고 정제된 웰니스 브랜드 디자인

## 컬러 시스템
- **Primary Brand**: `#2F8F6B` (차분한 그린 - 자연/신뢰 상징)
- **Brand Secondary**: `#DCF2EA` (연한 민트 - 배경/배지용)
- **Accent**: `#B88C4A` (골드 - CTA 포인트)
- **Surface**: `#F7F9F9` (밝은 회색 - 섹션 배경)
- **Line**: `#E6ECEA` (연한 선 - 구분선/테두리)

## 타이포그래피
- **폰트**: Pretendard 또는 Noto Sans KR (Google Fonts CDN)
- **계층구조**:
  - H1 (히어로): 3xl~4xl (48-56px), font-bold, text-brand
  - H2 (섹션 타이틀): 3xl~4xl, font-bold, text-center
  - H3 (카드 제목): xl~2xl, font-semibold
  - Body: base (16px), leading-relaxed (1.625)
  - Small: sm (14px), text-muted-foreground

## 레이아웃 시스템
- **Spacing**: 모바일 py-14 (56px), 데스크톱 py-20 (80px)
- **Container**: max-w-6xl mx-auto px-4
- **Grid**: 모바일 1열, 태블릿 2열, 데스크톱 3-4열
- **핵심 단위**: p-4, p-6, p-10, gap-6, gap-8 (일관된 간격)

## 섹션별 디자인 사양

### 헤더 (Header)
- 고정 상단 (sticky top-0)
- 스크롤 시 `bg-white/90 backdrop-blur shadow-sm` 효과
- 좌측: 로고 (logo.svg)
- 중앙: 앵커 메뉴 - 회사소개, 연구·기술, 제품소개, 소식, 문의
- 우측: "제휴·납품 문의" CTA 버튼 (accent 컬러)

### 히어로 (Hero)
- **레이아웃**: 2열 (좌: 텍스트, 우: 이미지 콜라주)
- **좌측 콘텐츠**:
  - 배지 3개: "클린 · 자연주의 · 연구기반" (pill 형태, bg-brand-2, text-brand)
  - H1: "자연의 지혜에 과학을 더하다"
  - 서브텍스트: 2-3줄 회사 소개
  - CTA 2개: "메이딘 소개서 (PDF)" (primary), "센시비 자세히 보기" (ghost)
- **우측**: 제품/연구/원료 이미지를 창의적으로 배치 (rounded-2xl, shadow-lg)

### 회사소개 (#about)
- **배경**: bg-surface
- **3열 핵심가치 카드**:
  - 아이콘: Leaf (자연 중심), FlaskConical (과학 기반), ShieldCheck (품질 신뢰)
  - Card 스타일: rounded-2xl, border-line, shadow-sm, hover:translate-y-[-2px]
- **대표 인사말**: 중앙 정렬, max-w-3xl, 2-3 문단
- **연혁 타임라인**: 수직 라인으로 연결된 연도별 마일스톤 (2019~2025)
- **핵심 수치**: 3열 그리드 - 연구인력 수, 원료 국가 수, 인증 수 (큰 숫자 + 설명)

### 연구·기술 (#rnd)
- **4단계 프로세스**: 원료선정 → 연구·검증 → 제조 → 품질관리
  - 카드 스타일: 화살표/라인으로 연결, 각 단계 아이콘 + 설명
- **인증 배지**: GMP/HACCP/ISO 로고 이미지 (cert-1.png 등)
- **실험실 이미지**: 와이드 이미지 + 캡션 (rounded-xl)

### 제품소개 (#product)
- **센시비 메인 카드**: 와이드 레이아웃
  - 좌측: 제품 이미지 (product-sensibi.png)
  - 우측: 
    - 배지 3개: "참당귀 추출물", "컨디션 밸런스", "간결 포뮬러"
    - 제품 설명 (효능 과장 금지 톤)
    - 원료/함량, 섭취 방법 정보
    - **법정 문구 박스**: 연한 배경, 작은 폰트, 테두리 처리
- **추가 제품 카드**: 2-4개 더미 (이미지 + 제목 + 간단 설명)

### 파트너 (#partners)
- 로고 그리드 (4-6개)
- 기본: grayscale(100%), hover: grayscale(0%) + scale(1.05)
- 반응형: 모바일 2열, 데스크톱 4-6열

### 소식 (#news)
- 카드 리스트 (3열)
- 각 카드: 날짜, 카테고리 배지 (공지/보도자료), 제목, 요약, "자세히 보기" 링크

### 문의 (#contact)
- **폼 필드**:
  - 문의 유형 (select): 제휴·납품 / 제품문의 / 기타
  - 이름, 이메일, 연락처 (input)
  - 문의 내용 (textarea, rows 6)
  - 개인정보 수집 동의 (checkbox)
- **검증**: 필수값, 이메일 형식, 체크박스 동의
- **제출 버튼**: primary, 전체 너비
- **성공 메시지**: 간단한 알림 (실제 API는 추후 연결)

### 푸터 (Footer)
- **3단 구조**:
  - 상단: 로고 + 슬로건
  - 중단: 사업자 정보 (주소, 대표번호, 사업자등록번호)
  - 하단: 저작권 | 이용약관 | 개인정보처리방침

## 컴포넌트 스타일

### 버튼 (shadcn Button)
- **Primary**: bg-brand, text-white, hover:bg-brand/90
- **Ghost**: border-brand, text-brand, hover:bg-brand-2
- 히어로/이미지 위 버튼: `backdrop-blur-sm bg-white/90`

### 카드 (shadcn Card)
- `rounded-xl` 또는 `rounded-2xl`
- `border-line`, `shadow-sm`
- `hover:shadow-md transition-shadow`
- 일부 카드: `hover:translate-y-[-2px] transition-transform`

### 배지 (Badge)
- Pill 형태: `rounded-full px-4 py-1.5`
- `bg-brand-2 text-brand` 또는 `bg-accent/10 text-accent`

## 이미지 사용
- **히어로 우측**: 제품/연구실/원료 이미지 콜라주 (3-4개, 창의적 배치)
- **연구 섹션**: 실험실 이미지 1개 (와이드)
- **제품 섹션**: 센시비 제품 이미지 + 추가 제품 이미지들
- **파트너 로고**: 6-8개 협력사 로고
- **인증 배지**: GMP, HACCP, ISO 로고 이미지
- 모든 이미지: `loading="lazy"`, 적절한 alt 텍스트

## 접근성
- 키보드 포커스: `outline: 2px solid brand, outline-offset: 2px`
- 모든 이미지 alt 제공
- 앵커 링크 명확한 텍스트
- ARIA 레이블 (폼, 버튼)

## 애니메이션
- 최소화 원칙
- 스크롤 시 헤더 축소/섀도우
- 카드 hover 효과 (translate-y, shadow)
- 앵커 스크롤: `scroll-behavior: smooth`
- 파트너 로고: grayscale 전환

## 성능
- 이미지 lazy loading
- 폰트 preload (Google Fonts)
- 최소 CSS/JS 번들
- shadcn/ui 필요 컴포넌트만 설치 (Button, Card, Input, Form)