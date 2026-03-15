import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const topics = [
  {
    title: '버블 정렬',
    desc: '인접한 두 요소를 반복적으로 비교하고 교환하는 가장 직관적인 정렬 알고리즘입니다.',
    path: '/algorithm/bubble-sort',
    icon: '🫧',
    step: '01.',
  },
  {
    title: '선택 정렬',
    desc: '매 단계에서 최솟값을 찾아 앞쪽에 배치하는 정렬 알고리즘입니다.',
    path: '/algorithm/selection-sort',
    icon: '☝️',
    step: '02.',
  },
  {
    title: '삽입 정렬',
    desc: '정렬된 부분에 새 요소를 적절한 위치에 삽입하는 안정 정렬 알고리즘입니다.',
    path: '/algorithm/insertion-sort',
    icon: '📥',
    step: '03.',
  },
  {
    title: '병합 정렬',
    desc: '분할 정복 전략으로 항상 O(n log n)을 보장하는 안정 정렬 알고리즘입니다.',
    path: '/algorithm/merge-sort',
    icon: '🔀',
    step: '04.',
  },
  {
    title: '퀵 정렬',
    desc: '피벗을 기준으로 분할하여 평균 O(n log n)의 뛰어난 성능을 보이는 정렬입니다.',
    path: '/algorithm/quick-sort',
    icon: '⚡',
    step: '05.',
  },
  {
    title: '탐색 알고리즘',
    desc: '선형 탐색과 이진 탐색 등 데이터를 효율적으로 찾는 알고리즘을 학습합니다.',
    path: '/algorithm/search',
    icon: '🔍',
    step: '06.',
  },
];

const AlgorithmIndex = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="정렬과 탐색 알고리즘 | DS Study"
        description="버블 정렬, 선택 정렬, 삽입 정렬, 병합 정렬, 퀵 정렬, 탐색 알고리즘을 체계적으로 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>정렬과 탐색 알고리즘</h1>
          <p>
            정렬(Sorting)과 탐색(Searching)은 컴퓨터 과학의 가장 기본적이면서도 핵심적인 알고리즘입니다.
            다양한 정렬 알고리즘의 원리와 성능을 비교하고, 효율적인 탐색 기법을 학습합니다.
            각 알고리즘의 시간 복잡도와 특성을 이해하면 상황에 맞는 최적의 선택을 할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="section curriculum-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">학습 목차</h2>
          <p className="section-subtitle" data-aos="fade-up">
            각 정렬 및 탐색 알고리즘의 원리, 구현, 시간 복잡도를 단계별로 학습합니다.
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

export default AlgorithmIndex;
