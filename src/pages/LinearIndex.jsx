import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const linearTopics = [
  {
    title: '배열 (Array)',
    desc: '인덱스를 통한 빠른 접근이 가능한 가장 기본적인 자료구조입니다.',
    path: '/linear/array',
    icon: '[ ]',
  },
  {
    title: '연결 리스트 (Linked List)',
    desc: '노드와 포인터로 연결된 동적 자료구조로, 삽입과 삭제가 효율적입니다.',
    path: '/linear/linked-list',
    icon: '->',
  },
  {
    title: '스택 (Stack)',
    desc: '후입선출(LIFO) 원칙을 따르는 자료구조로, 함수 호출과 되돌리기에 활용됩니다.',
    path: '/linear/stack',
    icon: '||',
  },
  {
    title: '큐 (Queue)',
    desc: '선입선출(FIFO) 원칙을 따르는 자료구조로, 작업 스케줄링에 활용됩니다.',
    path: '/linear/queue',
    icon: '<>',
  },
  {
    title: '덱 (Deque)',
    desc: '양쪽 끝에서 삽입과 삭제가 가능한 양방향 큐입니다.',
    path: '/linear/deque',
    icon: '><',
  },
];

const LinearIndex = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="선형 자료구조 | DS Study"
        description="배열, 연결 리스트, 스택, 큐, 덱 등 선형 자료구조를 체계적으로 학습합니다."
      />

      <div className="page-header" style={{
        background: 'var(--hero-bg)',
        color: '#fff',
        padding: 'calc(var(--nav-height) + 40px) 0 60px',
      }}>
        <div className="container">
          <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '16px' }}>
            선형 자료구조
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '700px', lineHeight: 1.7 }}>
            선형 자료구조는 데이터가 순서대로 나열된 구조입니다.
            각 요소가 하나의 앞 요소와 하나의 뒤 요소와 연결되어 있으며,
            배열, 연결 리스트, 스택, 큐, 덱이 대표적인 선형 자료구조입니다.
          </p>
        </div>
      </div>

      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">학습 목차</h2>
            <p className="section-subtitle">
              각 선형 자료구조의 개념, 구현, 시간 복잡도를 단계별로 학습합니다.
            </p>
          </div>

          <div className="curriculum-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {linearTopics.map((topic, idx) => (
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
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--primary-blue)',
                  fontFamily: 'monospace',
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

export default LinearIndex;
