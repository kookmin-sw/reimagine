# KMUCS Reimagine 2035

국민대학교 소프트웨어융합대학의 `KMUCS Reimagine 2035` 프로젝트를 소개하는 React 기반 웹사이트입니다.  
프로젝트 소개, 연혁, 설문, 워크숍 아카이브를 하나의 사이트 안에서 확인할 수 있도록 구성되어 있습니다.

기본 배포 기준 경로는 `/reimagine2035/`이며, 브라우저 주소에서는 일반 URL 기반 라우팅을 사용합니다.

## 핵심 페이지

- `/` : 프로젝트 메인 랜딩 페이지
- `/history` : KMUCS 연혁 페이지
- `/survey` : Reimagine 2035 설문 및 결과 페이지
- `/workshop` : 워크숍 목록 페이지
- `/workshop/reimagine-2035` : Reimagine 2035 워크숍 상세
- `/workshop/lightning` : 번개 워크숍 상세

## 주요 특징

- 모바일 우선 반응형 레이아웃
- 프로젝트 소개부터 참여 유도까지 이어지는 단일 흐름의 랜딩 페이지
- KMUCS 연혁 타임라인 페이지
- Google Form 임베드 기반 설문 참여 페이지
- Canva 결과 자료 임베드
- 현재 거주 지역 / 미래 희망 지역 시각화
- 워크숍별 독립 상세 페이지와 영상 아카이브
- 스크롤 진입 시 자연스럽게 등장하는 섹션 애니메이션
- 페이지별 SEO 메타데이터 자동 갱신
- `share.png` 기반 Open Graph / Twitter 공유 미리보기
- `robots.txt`, 구조화 데이터, canonical URL 적용

## 기술 스택

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React Router DOM 7
- `react-globe.gl`
- `three`
- ESLint

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

기본적으로 Vite 개발 서버가 실행됩니다.

### 3. 프로덕션 빌드

```bash
npm run build
```

### 4. 빌드 결과 미리보기

```bash
npm run preview
```

### 5. 린트 실행

```bash
npm run lint
```

## 프로젝트 구조

```text
src/
  components/
    globe/
    CTASection.tsx
    CampaignIntroSection.tsx
    CurrentRegionSection.tsx
    Footer.tsx
    FutureRegionSection.tsx
    FutureVisionSection.tsx
    Header.tsx
    HeroSection.tsx
    TimeFlowSection.tsx
    VoicesSection.tsx
  pages/
    History.tsx
    Home.tsx
    Survey.tsx
    WorkshopDetail.tsx
    WorkshopDetail2.tsx
    WorkshopList.tsx
  assets/
  App.tsx
  index.css
  main.tsx
public/
  404.html
  data/
  logo.svg
  robots.txt
  share.png
```

## 페이지 구성 요약

### 홈

- 히어로 섹션
- 캠페인 소개
- 미래 비전 소개
- 연혁 연결 섹션
- 참여자 목소리
- 콜 투 액션

### 연혁

- KMUCS의 학과/학부 변화 흐름을 타임라인으로 정리
- 각 연혁 항목은 아코디언 형태로 상세 설명 제공

### 설문

- 설문 문항 소개
- Google Form 임베드
- Canva 결과 자료 임베드
- 지역 데이터 시각화 섹션 포함

### 워크숍

- 워크숍 목록 페이지 제공
- 각 워크숍마다 별도 상세 페이지 구성
- 영상, 요약, 참여 내용 등을 아카이브 형태로 정리

## 데이터 및 외부 리소스

- 설문 응답 참여는 Google Form 임베드로 연결됩니다.
- 설문 결과 일부는 Canva 임베드로 표시됩니다.
- 지역 시각화는 컴포넌트 내부의 집계 데이터와 `react-globe.gl`을 사용합니다.
- 브라우저 탭 아이콘은 `public/logo.svg`를 사용합니다.
- 공유 미리보기 이미지는 `public/share.png`를 사용합니다.

## SEO 및 공유 설정

- 각 라우트는 페이지별 `title`, `description`, Open Graph, Twitter 메타태그를 동적으로 갱신합니다.
- 기본 구조화 데이터(JSON-LD)와 canonical URL이 적용되어 있습니다.
- 정적 호스팅 환경에서 새로고침이나 직접 URL 접근이 가능하도록 `public/404.html` fallback을 사용합니다.
- 검색엔진 크롤링 허용을 위해 `public/robots.txt`가 포함되어 있습니다.

## 참고 사항

- 라우팅은 `BrowserRouter` 기반이며, Vite `base` 설정은 `/reimagine2035/`입니다.
- 일부 페이지는 외부 임베드 콘텐츠 로딩 상태에 따라 표시 속도가 달라질 수 있습니다.
- 지역 시각화 및 워크숍 상세 콘텐츠는 코드 내부 상수 형태로 관리되고 있습니다.
