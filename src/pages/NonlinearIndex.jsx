import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const nonlinearTopics = [
  {
    title: '트리 (Tree)',
    desc: '계층적 구조를 표현하는 비선형 자료구조의 기본 개념과 순회 방법을 학습합니다.',
    path: '/nonlinear/tree',
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="8" r="4" />
        <circle cx="12" cy="24" r="4" />
        <circle cx="36" cy="24" r="4" />
        <circle cx="6" cy="40" r="4" />
        <circle cx="18" cy="40" r="4" />
        <circle cx="30" cy="40" r="4" />
        <circle cx="42" cy="40" r="4" />
        <line x1="24" y1="12" x2="12" y2="20" />
        <line x1="24" y1="12" x2="36" y2="20" />
        <line x1="12" y1="28" x2="6" y2="36" />
        <line x1="12" y1="28" x2="18" y2="36" />
        <line x1="36" y1="28" x2="30" y2="36" />
        <line x1="36" y1="28" x2="42" y2="36" />
      </svg>
    ),
  },
  {
    title: '이진 트리 (Binary Tree)',
    desc: '각 노드가 최대 두 개의 자식을 갖는 이진 트리의 종류와 구현 방법을 학습합니다.',
    path: '/nonlinear/binary-tree',
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="8" r="4" />
        <circle cx="14" cy="24" r="4" />
        <circle cx="34" cy="24" r="4" />
        <circle cx="8" cy="40" r="4" />
        <circle cx="20" cy="40" r="4" />
        <circle cx="28" cy="40" r="4" />
        <circle cx="40" cy="40" r="4" />
        <line x1="24" y1="12" x2="14" y2="20" />
        <line x1="24" y1="12" x2="34" y2="20" />
        <line x1="14" y1="28" x2="8" y2="36" />
        <line x1="14" y1="28" x2="20" y2="36" />
        <line x1="34" y1="28" x2="28" y2="36" />
        <line x1="34" y1="28" x2="40" y2="36" />
      </svg>
    ),
  },
  {
    title: '이진 탐색 트리 (BST)',
    desc: '효율적인 탐색, 삽입, 삭제를 지원하는 이진 탐색 트리의 원리와 연산을 학습합니다.',
    path: '/nonlinear/bst',
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="8" r="4" />
        <circle cx="14" cy="24" r="4" />
        <circle cx="34" cy="24" r="4" />
        <circle cx="8" cy="40" r="4" />
        <circle cx="20" cy="40" r="4" />
        <line x1="24" y1="12" x2="14" y2="20" />
        <line x1="24" y1="12" x2="34" y2="20" />
        <line x1="14" y1="28" x2="8" y2="36" />
        <line x1="14" y1="28" x2="20" y2="36" />
      </svg>
    ),
  },
  {
    title: '힙 (Heap)',
    desc: '완전 이진 트리 기반의 힙 자료구조와 우선순위 큐, 힙 정렬을 학습합니다.',
    path: '/nonlinear/heap',
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="8" r="4" />
        <circle cx="14" cy="22" r="4" />
        <circle cx="34" cy="22" r="4" />
        <circle cx="8" cy="36" r="4" />
        <circle cx="20" cy="36" r="4" />
        <circle cx="28" cy="36" r="4" />
        <line x1="24" y1="12" x2="14" y2="18" />
        <line x1="24" y1="12" x2="34" y2="18" />
        <line x1="14" y1="26" x2="8" y2="32" />
        <line x1="14" y1="26" x2="20" y2="32" />
        <line x1="34" y1="26" x2="28" y2="32" />
        <path d="M4 44 L44 44" strokeDasharray="4 2" />
      </svg>
    ),
  },
  {
    title: '그래프 (Graph)',
    desc: '정점과 간선으로 이루어진 그래프의 개념, 표현 방법, DFS/BFS 탐색을 학습합니다.',
    path: '/nonlinear/graph',
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="4" />
        <circle cx="38" cy="10" r="4" />
        <circle cx="24" cy="24" r="4" />
        <circle cx="10" cy="38" r="4" />
        <circle cx="38" cy="38" r="4" />
        <line x1="14" y1="10" x2="34" y2="10" />
        <line x1="12" y1="14" x2="22" y2="22" />
        <line x1="36" y1="14" x2="26" y2="22" />
        <line x1="12" y1="34" x2="22" y2="26" />
        <line x1="36" y1="34" x2="26" y2="26" />
        <line x1="14" y1="38" x2="34" y2="38" />
      </svg>
    ),
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

      <div className="page-header" style={{
        background: 'var(--hero-bg)',
        color: '#fff',
        padding: 'calc(var(--nav-height) + 40px) 0 60px',
      }}>
        <div className="container">
          <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '16px' }}>
            비선형 자료구조
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '700px', lineHeight: 1.7 }}>
            비선형 자료구조는 데이터가 계층적이거나 네트워크 형태로 연결된 구조를 말합니다.
            트리와 그래프를 중심으로 다양한 비선형 자료구조의 개념과 구현 방법을 학습합니다.
          </p>
        </div>
      </div>

      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">학습 목차</h2>
            <p className="section-subtitle">
              각 비선형 자료구조의 개념, 구현, 시간 복잡도를 단계별로 학습합니다.
            </p>
          </div>

          <div className="curriculum-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {nonlinearTopics.map((topic, idx) => (
              <Link
                to={topic.path}
                key={topic.path}
                className="curriculum-card"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                style={{
                  display: 'block',
                  padding: '32px 28px',
                  background: 'var(--bg-white)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  textDecoration: 'none',
                  transition: 'var(--transition-base)',
                  boxShadow: 'var(--shadow-sm)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.style.borderColor = 'var(--primary-blue)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--primary-blue-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  color: 'var(--primary-blue)',
                }}>
                  {topic.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                }}>
                  {topic.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {topic.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NonlinearIndex;
