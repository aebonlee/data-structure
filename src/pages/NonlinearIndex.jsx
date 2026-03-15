import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const topics = [
  {
    title: '트리 (Tree)',
    desc: '계층적 구조를 표현하는 비선형 자료구조의 기본 개념과 순회 방법을 학습합니다.',
    path: '/nonlinear/tree',
    icon: '🌳',
    step: '01.',
  },
  {
    title: '이진 트리 (Binary Tree)',
    desc: '각 노드가 최대 두 개의 자식을 갖는 이진 트리의 종류와 구현 방법을 학습합니다.',
    path: '/nonlinear/binary-tree',
    icon: '🌲',
    step: '02.',
  },
  {
    title: '이진 탐색 트리 (BST)',
    desc: '효율적인 탐색, 삽입, 삭제를 지원하는 이진 탐색 트리의 원리와 연산을 학습합니다.',
    path: '/nonlinear/bst',
    icon: '🔍',
    step: '03.',
  },
  {
    title: '힙 (Heap)',
    desc: '완전 이진 트리 기반의 힙 자료구조와 우선순위 큐, 힙 정렬을 학습합니다.',
    path: '/nonlinear/heap',
    icon: '⛰️',
    step: '04.',
  },
  {
    title: '그래프 (Graph)',
    desc: '정점과 간선으로 이루어진 그래프의 개념, 표현 방법, DFS/BFS 탐색을 학습합니다.',
    path: '/nonlinear/graph',
    icon: '🕸️',
    step: '05.',
  },
];

const NonlinearIndex = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="비선형 자료구조 | DS Study"
        description="트리, 이진 트리, BST, 힙, 그래프 등 비선형 자료구조를 체계적으로 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>비선형 자료구조</h1>
          <p>
            비선형 자료구조는 데이터가 계층적이거나 네트워크 형태로 연결된 구조를 말합니다.
            트리와 그래프를 중심으로 다양한 비선형 자료구조의 개념과 구현 방법을 학습합니다.
          </p>
        </div>
      </section>

      <section className="section curriculum-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">학습 목차</h2>
          <p className="section-subtitle" data-aos="fade-up">
            각 비선형 자료구조의 개념, 구현, 시간 복잡도를 단계별로 학습합니다.
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

export default NonlinearIndex;
