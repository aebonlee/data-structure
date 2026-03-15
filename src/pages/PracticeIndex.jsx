import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const topics = [
  {
    title: '기초 문제',
    desc: '배열, 스택, 큐, 연결 리스트 등 기본 자료구조에 대한 객관식 문제로 핵심 개념을 점검합니다.',
    path: '/practice/basic',
    icon: '📝',
    step: '01.',
  },
  {
    title: '중급 문제',
    desc: '트리, 그래프, 해시, 정렬 알고리즘 등 심화 주제에 대한 객관식 문제로 응용력을 평가합니다.',
    path: '/practice/intermediate',
    icon: '📋',
    step: '02.',
  },
];

const PracticeIndex = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="연습문제 | DS Study"
        description="자료구조 기초부터 중급까지, 단계별 연습문제로 실력을 점검하세요."
      />

      <section className="page-header">
        <div className="container">
          <h1>연습문제</h1>
          <p>자료구조 학습 내용을 문제 풀이로 점검하고 실력을 향상시키세요.</p>
        </div>
      </section>

      <section className="section curriculum-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">학습 목차</h2>
          <p className="section-subtitle" data-aos="fade-up">
            난이도별 연습문제를 통해 자료구조 이해도를 점검합니다.
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

export default PracticeIndex;
