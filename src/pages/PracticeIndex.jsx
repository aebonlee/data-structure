import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const practices = [
  {
    path: '/practice/basic',
    level: '기초',
    title: '기초 문제',
    desc: '배열, 스택, 큐, 연결 리스트 등 기본 자료구조에 대한 객관식 문제로 핵심 개념을 점검합니다.',
    details: ['객관식 10문항', '배열, 스택, 큐, 연결 리스트', '기본 개념 및 연산 이해도 확인'],
    total: '10문제',
    icon: '&#x1F4D7;',
    color: '#3b82f6',
  },
  {
    path: '/practice/intermediate',
    level: '중급',
    title: '중급 문제',
    desc: '트리, 그래프, 해시, 정렬 알고리즘 등 심화 주제에 대한 객관식 문제로 응용력을 평가합니다.',
    details: ['객관식 10문항', '트리, 그래프, 해시, 정렬', '심화 개념 및 알고리즘 이해도 확인'],
    total: '10문제',
    icon: '&#x1F4D8;',
    color: '#8b5cf6',
  },
];

const PracticeIndex = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="연습문제 | 자료구조 학습"
        description="자료구조 기초부터 중급까지, 단계별 연습문제로 실력을 점검하세요."
      />

      <section className="page-header">
        <div className="container">
          <h1>연습문제</h1>
          <p>자료구조 학습 내용을 문제 풀이로 점검하고 실력을 향상시키세요</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="exam-level-grid">
            {practices.map((item) => (
              <Link
                to={item.path}
                key={item.path}
                className="exam-level-card"
                data-aos="fade-up"
                style={{ '--exam-color': item.color }}
              >
                <div className="exam-level-header">
                  <span className="exam-level-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <span className="exam-level-badge" style={{ background: item.color }}>{item.level}</span>
                </div>
                <h2 className="exam-level-title">{item.title}</h2>
                <p className="exam-level-desc">{item.desc}</p>
                <ul className="exam-level-details">
                  {item.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
                <div className="exam-level-total">{item.total}</div>
                <span className="exam-level-start">문제 풀기 &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeIndex;
