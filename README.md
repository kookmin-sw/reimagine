# KMUCS Reimagine 2035 캠페인 웹사이트

KMUCS Reimagine 2035 캠페인을 위한 React + TailwindCSS 기반 웹사이트입니다.

## 프로젝트 구조

- **랜딩페이지 (/)**: 캠페인 소개, 미래 비전, 참여자 이야기 등
- **연혁 페이지 (/history)**: KMUCS의 성장 타임라인
- **워크샵 목록 (/workshop)**: 진행된 워크샵 리스트
- **워크샵 상세 (/workshop/:id)**: 개별 워크샵 내용 및 인터뷰

## 기술 스택

- React 19
- TypeScript
- TailwindCSS 4
- React Router DOM
- Vite

## 개발 환경 설정

### 의존성 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

### 린트
```bash
npm run lint
```

## 프로젝트 특징

- 모바일 퍼스트 디자인
- 반응형 레이아웃
- 간결하고 몰입형 UX
- 텍스트 중심 디자인
- 미래 지향적 컨셉
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
