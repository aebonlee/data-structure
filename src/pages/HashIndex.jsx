import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const topics = [
  {
    title: '해시 테이블',
    desc: '해시 함수를 이용해 키-값 쌍을 저장하는 자료구조의 원리와 충돌 해결 방법을 학습합니다.',
    path: '/hash/hash-table',
    icon: '#️⃣',
    step: '01.',
  },
  {
    title: '해시 맵 활용',
    desc: '해시 맵을 실전 문제에 적용하는 다양한 패턴과 Python의 딕셔너리 활용법을 익힙니다.',
    path: '/hash/hash-map',
    icon: '🗺️',
    step: '02.',
  },
];

const HashIndex = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="해시 자료구조 | DS Study"
        description="해시 테이블과 해시 맵의 원리, 해시 함수, 충돌 해결, 실전 활용까지 체계적으로 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>해시 자료구조</h1>
          <p>
            해시(Hash)는 데이터를 고정 크기의 값으로 매핑하는 기법으로, 평균 O(1) 시간에 데이터를 삽입, 삭제, 검색할 수 있는 매우 효율적인 자료구조입니다.
            해시 테이블의 내부 동작 원리부터 실전 문제 해결 패턴까지 단계적으로 학습합니다.
          </p>
        </div>
      </section>

      <section className="section curriculum-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">학습 목차</h2>
          <p className="section-subtitle" data-aos="fade-up">
            해시 자료구조의 개념, 구현, 활용법을 단계별로 학습합니다.
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

export default HashIndex;
