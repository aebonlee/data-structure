# DS Study - 개발일지

## 프로젝트 개요
- **프로젝트명**: DS Study (자료구조 학습 사이트)
- **도메인**: data-structure.dreamitbiz.com
- **기술 스택**: React 19.2 + Vite 7.3.1 + react-router-dom 7.13
- **디자인 템플릿**: D:\db-study (DB Study 사이트 구조 참고)

---

## 2025-03-16 (v1.0.0) - 초기 개발

### 1. 프로젝트 초기화
- Vite + React 프로젝트 생성
- `package.json` 설정 (React 19.2, Vite 7.3.1, react-router-dom 7.13)
- `vite.config.js` 설정 (포트 5176, GitHub Pages용 copy-404 플러그인)
- `index.html` 설정 (Noto Sans KR 폰트, 한국어 SEO 메타)
- `favicon.svg` 생성 (파란색 둥근 사각형 + "DS" 텍스트)
- `CNAME` 파일 생성 (data-structure.dreamitbiz.com)
- `.gitignore` 설정

### 2. 핵심 앱 파일
- `src/main.jsx` - StrictMode + createRoot
- `src/App.jsx` - ThemeProvider > LanguageProvider > BrowserRouter > PublicLayout
- `src/contexts/ThemeContext.jsx` - 테마 컨텍스트 (auto/light/dark + 5가지 컬러 테마: blue/red/green/purple/orange)
- `src/contexts/LanguageContext.jsx` - 언어 컨텍스트 (한국어/영어 토글)
- `src/config/site.js` - 메뉴 구조 및 사이트 설정 (DS 주제별 라우팅)
- `src/utils/translations.js` - 한/영 번역 파일
- `src/hooks/useAOS.js` - Animate on Scroll (IntersectionObserver)
- `src/hooks/useCodeCopy.js` - 코드 블록 복사 버튼 (MutationObserver)
- `src/hooks/useTableScroller.js` - 테이블 가로 스크롤 화살표
- `src/components/SEOHead.jsx` - 동적 SEO 메타 태그

### 3. 레이아웃 컴포넌트
- `src/layouts/PublicLayout.jsx` - 35개 라우트 + lazy loading + Suspense
- `src/components/layout/Navbar.jsx` - 글래스모피즘 내비게이션 (스크롤 감지, 드롭다운, 컬러 피커, 테마 토글, 언어 전환, 모바일 토글)
- `src/components/layout/Footer.jsx` - 3단 그리드 푸터 (브랜드, 바로가기, 연락처)

### 4. CSS 스타일시트 (8개 파일)
- `src/styles/base.css` - CSS 변수, 타이포그래피, 컨테이너, 버튼, 폼
- `src/styles/navbar.css` - 글래스모피즘 내비바, 드롭다운, 컬러 피커 툴팁
- `src/styles/hero.css` - 히어로 섹션 (파티클, 캐러셀, 스크롤 인디케이터)
- `src/styles/footer.css` - 다크 그라디언트 푸터, 3단 그리드
- `src/styles/animations.css` - AOS 트랜지션 (fade-up/down/left/right, zoom-in)
- `src/styles/site.css` - 페이지 헤더, 레슨 콘텐츠, 코드 블록, 테이블, 콜아웃, 커리큘럼 그리드, 연습 등
- `src/styles/dark-mode.css` - 다크 모드 오버라이드 (내비바, 푸터, 기본 요소)
- `src/styles/responsive.css` - 반응형 (1100px/768px/480px 중단점), 로딩 스피너, 404 페이지
- `src/index.css` - 모든 스타일시트 import

### 5. 페이지 (34개)
#### DS 개론
- `Home.jsx` - 메인 페이지 (히어로, 소개, 학습목표, 커리큘럼)
- `WhatIsDS.jsx` - 자료구조란?
- `Complexity.jsx` - 시간/공간 복잡도

#### 선형 자료구조
- `LinearIndex.jsx` - 선형 자료구조 인덱스
- `ArrayPage.jsx` - 배열
- `LinkedList.jsx` - 연결 리스트
- `StackPage.jsx` - 스택
- `QueuePage.jsx` - 큐
- `DequePage.jsx` - 덱

#### 비선형 자료구조
- `NonlinearIndex.jsx` - 비선형 자료구조 인덱스
- `TreePage.jsx` - 트리
- `BinaryTree.jsx` - 이진 트리
- `BSTPage.jsx` - 이진 탐색 트리
- `HeapPage.jsx` - 힙
- `GraphPage.jsx` - 그래프

#### 해시 자료구조
- `HashIndex.jsx` - 해시 자료구조 인덱스
- `HashTable.jsx` - 해시 테이블
- `HashMap.jsx` - 해시 맵 활용

#### 알고리즘
- `AlgorithmIndex.jsx` - 알고리즘 인덱스
- `BubbleSort.jsx` - 버블 정렬
- `SelectionSort.jsx` - 선택 정렬
- `InsertionSort.jsx` - 삽입 정렬
- `MergeSort.jsx` - 병합 정렬
- `QuickSort.jsx` - 퀵 정렬
- `SearchAlgorithm.jsx` - 탐색 알고리즘

#### 고급 자료구조
- `AdvancedIndex.jsx` - 고급 자료구조 인덱스
- `TriePage.jsx` - 트라이
- `SegmentTree.jsx` - 세그먼트 트리
- `UnionFind.jsx` - 유니온 파인드

#### 연습문제
- `PracticeIndex.jsx` - 연습문제 인덱스
- `PracticeBasic.jsx` - 기초 문제
- `PracticeInter.jsx` - 중급 문제

#### 기타
- `References.jsx` - 참고자료
- `NotFound.jsx` - 404 에러 페이지

### 6. 빌드 결과
- 87개 모듈 변환 성공
- 빌드 시간: 2.79초
- CSS 번들: 73.73 KB (gzip: 13.29 KB)
- JS 메인 번들: 254.31 KB (gzip: 81.41 KB)
- 총 39개 청크 (코드 스플리팅)

### 7. 주요 기능
- **테마**: auto/light/dark 3단 모드 + 5가지 컬러 테마 (blue/red/green/purple/orange)
- **다국어**: 한국어/영어 토글
- **코드 복사**: 모든 코드 블록에 복사 버튼
- **테이블 스크롤**: 가로 스크롤 화살표 버튼
- **AOS 애니메이션**: 스크롤 시 요소 페이드인
- **라우트**: 35개 라우트 (lazy loading)
- **반응형**: 1100px/768px/480px 중단점 지원
- **SEO**: 각 페이지 동적 title/description 설정
- **GitHub Pages**: 404.html 복사 + CNAME 설정

---

## 배포 정보
- **GitHub Repository**: https://github.com/aebonlee/data-Structure
- **배포 URL**: https://data-structure.dreamitbiz.com
- **배포 방식**: GitHub Pages (gh-pages 브랜치)
