import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';
import site from '../config/site';

const Home = () => {
  const { t } = useLanguage();
  useAOS();

  const curriculumSections = [
    {
      title: 'DS 개론',
      cards: [
        { title: '자료구조란?', path: '/intro/what-is-ds', desc: '자료구조의 정의와 분류, 추상 자료형(ADT)의 개념을 학습합니다.' },
        { title: '시간/공간 복잡도', path: '/intro/complexity', desc: 'Big-O 표기법과 알고리즘 성능 분석 방법을 학습합니다.' },
      ]
    },
    {
      title: '선형 자료구조',
      cards: [
        { title: '배열', path: '/linear/array', desc: '연속된 메모리 공간에 데이터를 저장하는 가장 기본적인 자료구조입니다.' },
        { title: '연결 리스트', path: '/linear/linked-list', desc: '노드와 포인터로 데이터를 연결하여 동적으로 관리하는 자료구조입니다.' },
        { title: '스택', path: '/linear/stack', desc: 'LIFO(Last In First Out) 원칙을 따르는 자료구조입니다.' },
        { title: '큐', path: '/linear/queue', desc: 'FIFO(First In First Out) 원칙을 따르는 자료구조입니다.' },
        { title: '덱', path: '/linear/deque', desc: '양쪽 끝에서 삽입과 삭제가 가능한 자료구조입니다.' },
      ]
    },
    {
      title: '비선형 자료구조',
      cards: [
        { title: '트리', path: '/nonlinear/tree', desc: '계층적 관계를 표현하는 비선형 자료구조의 기본 개념입니다.' },
        { title: '이진 트리', path: '/nonlinear/binary-tree', desc: '각 노드가 최대 두 개의 자식을 가지는 트리 구조입니다.' },
        { title: '이진 탐색 트리', path: '/nonlinear/bst', desc: '효율적인 탐색을 위해 정렬된 이진 트리 구조입니다.' },
        { title: '힙', path: '/nonlinear/heap', desc: '최댓값/최솟값을 빠르게 찾기 위한 완전 이진 트리입니다.' },
        { title: '그래프', path: '/nonlinear/graph', desc: '정점과 간선으로 다대다 관계를 표현하는 자료구조입니다.' },
      ]
    },
    {
      title: '해시 자료구조',
      cards: [
        { title: '해시 테이블', path: '/hash/hash-table', desc: '해시 함수를 이용해 키-값 쌍을 저장하는 자료구조입니다.' },
        { title: '해시 맵 활용', path: '/hash/hash-map', desc: '해시 맵의 실전 활용법과 충돌 해결 전략을 학습합니다.' },
      ]
    },
    {
      title: '알고리즘',
      cards: [
        { title: '버블 정렬', path: '/algorithm/bubble-sort', desc: '인접한 두 원소를 비교하며 정렬하는 기초 정렬 알고리즘입니다.' },
        { title: '선택 정렬', path: '/algorithm/selection-sort', desc: '최솟값을 찾아 앞쪽으로 이동시키는 정렬 알고리즘입니다.' },
        { title: '삽입 정렬', path: '/algorithm/insertion-sort', desc: '정렬된 부분에 원소를 삽입하는 정렬 알고리즘입니다.' },
        { title: '병합 정렬', path: '/algorithm/merge-sort', desc: '분할 정복 기법을 활용한 안정적인 정렬 알고리즘입니다.' },
        { title: '퀵 정렬', path: '/algorithm/quick-sort', desc: '피벗을 기준으로 분할하는 효율적인 정렬 알고리즘입니다.' },
        { title: '탐색 알고리즘', path: '/algorithm/search', desc: '선형 탐색, 이진 탐색 등 주요 탐색 기법을 학습합니다.' },
      ]
    },
    {
      title: '고급 자료구조',
      cards: [
        { title: '트라이', path: '/advanced/trie', desc: '문자열 검색에 특화된 트리 기반 자료구조입니다.' },
        { title: '세그먼트 트리', path: '/advanced/segment-tree', desc: '구간 쿼리를 효율적으로 처리하는 트리 자료구조입니다.' },
        { title: '유니온 파인드', path: '/advanced/union-find', desc: '서로소 집합을 관리하는 자료구조로, 그래프 알고리즘에 활용됩니다.' },
      ]
    },
  ];

  return (
    <>
      <SEOHead
        title={site.nameKo}
        description={site.description}
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-effect">
          <div className="hero-background">
            <div className="gradient-overlay"></div>
            <div className="particles">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    '--duration': `${15 + Math.random() * 15}s`,
                    animationDelay: `${Math.random() * 10}s`,
                    width: `${4 + Math.random() * 6}px`,
                    height: `${4 + Math.random() * 6}px`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1 className="hero-title">
              <span className="title-line">
                <span className="highlight">자료구조와 알고리즘</span>을
              </span>
              <span className="title-line">체계적으로 배우다</span>
            </h1>
            <p className="hero-description">
              {t('site.home.heroDesc')}
            </p>
            <div className="hero-buttons">
              <Link to="/intro/what-is-ds" className="btn btn-primary">
                {t('site.home.startLearning')}
              </Link>
              <Link to="/references" className="btn btn-secondary">
                {t('site.home.goToRef')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is DS - Intro Section */}
      <section className="ct-intro-section" data-aos="fade-up">
        <div className="container">
          <div className="ct-intro-content">
            <h2 className="ct-intro-title">{t('site.home.whatIsDS')}</h2>
            <p className="ct-intro-description">
              {t('site.home.dsDescription')}
            </p>
            <div className="ct-intro-goals">
              <h3 className="ct-goals-title">{t('site.home.learningGoals')}</h3>
              <ul className="ct-goals-list">
                <li>{t('site.home.goal1')}</li>
                <li>{t('site.home.goal2')}</li>
                <li>{t('site.home.goal3')}</li>
                <li>{t('site.home.goal4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Sections */}
      {curriculumSections.map((section, sIdx) => (
        <section className="curriculum-section" key={sIdx} data-aos="fade-up">
          <div className="container">
            <h2 className="curriculum-section-title">{section.title}</h2>
            <div className="curriculum-grid">
              {section.cards.map((card, cIdx) => (
                <Link
                  to={card.path}
                  className="curriculum-card"
                  key={cIdx}
                  data-aos="fade-up"
                  data-aos-delay={cIdx * 100}
                >
                  <h3 className="curriculum-card-title">{card.title}</h3>
                  <p className="curriculum-card-desc">{card.desc}</p>
                  <span className="curriculum-card-arrow">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Home;
