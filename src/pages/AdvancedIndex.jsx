import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const advancedTopics = [
  {
    title: '트라이 (Trie)',
    desc: '문자열 검색에 특화된 트리 기반 자료구조로, 자동완성과 사전 구현에 활용됩니다.',
    path: '/advanced/trie',
    icon: 'Tr',
  },
  {
    title: '세그먼트 트리 (Segment Tree)',
    desc: '구간 합, 최솟값 등 구간 쿼리를 O(log n)에 처리하는 트리 자료구조입니다.',
    path: '/advanced/segment-tree',
    icon: 'ST',
  },
  {
    title: '유니온 파인드 (Union-Find)',
    desc: '서로소 집합을 효율적으로 관리하며, 크루스칼 알고리즘 등 그래프 문제에 필수적입니다.',
    path: '/advanced/union-find',
    icon: 'UF',
  },
];

const AdvancedIndex = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="고급 자료구조 | 자료구조 학습"
        description="트라이, 세그먼트 트리, 유니온 파인드 등 고급 자료구조를 체계적으로 학습합니다."
      />

      <div className="page-header" data-aos="fade-down">
        <div className="container">
          <h1>고급 자료구조</h1>
          <p className="page-header-desc">
            기본 자료구조를 넘어서, 실전 알고리즘 문제와 시스템 설계에서 핵심적으로 활용되는
            고급 자료구조를 학습합니다. 트라이, 세그먼트 트리, 유니온 파인드는
            코딩 테스트와 대회에서 빈출되는 중요한 자료구조입니다.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">학습 목차</h2>
            <p className="section-subtitle">
              각 고급 자료구조의 개념, 구현, 활용법을 단계적으로 학습합니다.
            </p>
          </div>

          <div className="curriculum-grid">
            {advancedTopics.map((topic, idx) => (
              <Link
                to={topic.path}
                key={topic.path}
                className="curriculum-card"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="curriculum-card-icon">{topic.icon}</div>
                <h3 className="curriculum-card-title">{topic.title}</h3>
                <p className="curriculum-card-desc">{topic.desc}</p>
                <span className="curriculum-card-arrow">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvancedIndex;
