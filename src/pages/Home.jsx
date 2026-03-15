import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';
import site from '../config/site';

const Home = () => {
  const { t } = useLanguage();
  useAOS();

  const curriculumCards = [
    { step: '01.', icon: '📚', title: 'DS 개론', desc: '자료구조의 정의, 분류, 시간/공간 복잡도', path: '/intro/what-is-ds' },
    { step: '02.', icon: '📏', title: '선형 자료구조', desc: '배열, 연결 리스트, 스택, 큐, 덱', path: '/linear' },
    { step: '03.', icon: '🌳', title: '비선형 자료구조', desc: '트리, 이진 트리, BST, 힙, 그래프', path: '/nonlinear' },
    { step: '04.', icon: '🔑', title: '해시 자료구조', desc: '해시 테이블, 해시 맵, 충돌 해결', path: '/hash' },
    { step: '05.', icon: '⚡', title: '알고리즘', desc: '정렬(버블, 선택, 삽입, 병합, 퀵), 탐색', path: '/algorithm' },
    { step: '06.', icon: '🚀', title: '고급 자료구조', desc: '트라이, 세그먼트 트리, 유니온 파인드', path: '/advanced' },
  ];

  return (
    <>
      <SEOHead
        title={site.nameKo}
        description={site.description}
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1 className="hero-title">
              <span className="hero-title-line1">자료구조와 알고리즘을</span>{' '}
              <span className="hero-title-line2">체계적으로 배우다</span>
            </h1>
            <p className="hero-description">{t('site.home.heroDesc')}</p>
            <div className="hero-actions">
              <Link to="/intro/what-is-ds" className="hero-btn primary">{t('site.home.startLearning')}</Link>
              <Link to="/references" className="hero-btn secondary">{t('site.home.goToRef')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is DS */}
      <section className="section ct-intro-section">
        <div className="container">
          <div className="ct-intro" data-aos="fade-up">
            <h2 className="section-title">{t('site.home.whatIsDS')}</h2>
            <p className="ct-description">{t('site.home.dsDescription')}</p>
          </div>
          <div className="learning-goals" data-aos="fade-up" data-aos-delay="200">
            <h3>{t('site.home.learningGoals')}</h3>
            <ul className="goals-list">
              <li>{t('site.home.goal1')}</li>
              <li>{t('site.home.goal2')}</li>
              <li>{t('site.home.goal3')}</li>
              <li>{t('site.home.goal4')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum Cards */}
      <section className="section curriculum-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">{t('site.home.curriculum')}</h2>
          <p className="section-subtitle" data-aos="fade-up">{t('site.home.curriculumDesc')}</p>
          <div className="curriculum-grid">
            {curriculumCards.map((card, i) => (
              <Link
                to={card.path}
                key={card.path}
                className="curriculum-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <span className="curriculum-step">{card.step}</span>
                <span className="curriculum-icon">{card.icon}</span>
                <h3 className="curriculum-card-title">{card.title}</h3>
                <p className="curriculum-card-desc">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
