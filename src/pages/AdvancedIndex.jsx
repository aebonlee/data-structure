import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const topics = [
  {
    title: '트라이 (Trie)',
    desc: '문자열 검색에 특화된 트리 기반 자료구조로, 자동완성과 사전 구현에 활용됩니다.',
    path: '/advanced/trie',
    icon: '🔤',
    step: '01.',
  },
  {
    title: '세그먼트 트리 (Segment Tree)',
    desc: '구간 합, 최솟값 등 구간 쿼리를 O(log n)에 처리하는 트리 자료구조입니다.',
    path: '/advanced/segment-tree',
    icon: '📊',
    step: '02.',
  },
  {
    title: '유니온 파인드 (Union-Find)',
    desc: '서로소 집합을 효율적으로 관리하며, 크루스칼 알고리즘 등 그래프 문제에 필수적입니다.',
    path: '/advanced/union-find',
    icon: '🤝',
    step: '03.',
  },
];

const AdvancedIndex = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="고급 자료구조 | DS Study"
        description="트라이, 세그먼트 트리, 유니온 파인드 등 고급 자료구조를 체계적으로 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>고급 자료구조</h1>
          <p>
            기본 자료구조를 넘어서, 실전 알고리즘 문제와 시스템 설계에서 핵심적으로 활용되는
            고급 자료구조를 학습합니다. 트라이, 세그먼트 트리, 유니온 파인드는
            코딩 테스트와 대회에서 빈출되는 중요한 자료구조입니다.
          </p>
        </div>
      </section>

      <section className="section curriculum-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">학습 목차</h2>
          <p className="section-subtitle" data-aos="fade-up">
            각 고급 자료구조의 개념, 구현, 활용법을 단계적으로 학습합니다.
          </p>
          <div className="curriculum-grid">
            {topics.map((topic, i) => (
              <Link
                to={topic.path}
                key={topic.path}
                className="curriculum-card"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <span className="curriculum-step">{topic.step}</span>
                <span className="curriculum-icon">{topic.icon}</span>
                <h3 className="curriculum-card-title">{topic.title}</h3>
                <p className="curriculum-card-desc">{topic.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvancedIndex;
