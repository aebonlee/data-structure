import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const sections = [
  {
    title: '추천 도서',
    items: [
      { name: 'Introduction to Algorithms (CLRS)', url: '#', desc: 'Cormen 외 저 — 알고리즘의 바이블, 대학 교재로 널리 사용' },
      { name: '알고리즘 문제 해결 전략', url: '#', desc: '구종만 저 — 한국어 알고리즘 학습서, 실전 문제 풀이 중심' },
      { name: '파이썬 알고리즘 인터뷰', url: '#', desc: '박상길 저 — Python 기반 코딩 테스트 대비서' },
      { name: '자료구조와 함께 배우는 알고리즘 입문', url: '#', desc: 'BohYoh Shibata 저 — 자료구조 기초부터 차근차근' },
      { name: '이것이 자료구조+알고리즘이다 with C 언어', url: '#', desc: '박상현 저 — C 언어 기반 자료구조 학습서' },
    ],
  },
  {
    title: '온라인 학습 자료',
    items: [
      { name: 'Visualgo', url: 'https://visualgo.net/', desc: '자료구조와 알고리즘을 시각적으로 학습할 수 있는 사이트' },
      { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/', desc: '자료구조/알고리즘 튜토리얼과 문제 해설 (영문)' },
      { name: 'Big-O Cheat Sheet', url: 'https://www.bigocheatsheet.com/', desc: '주요 자료구조와 알고리즘의 시간/공간 복잡도 정리표' },
      { name: 'CS50 (Harvard)', url: 'https://cs50.harvard.edu/', desc: '하버드 대학의 컴퓨터과학 입문 강의 (무료 공개)' },
      { name: 'MIT OpenCourseWare - Algorithms', url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/', desc: 'MIT 알고리즘 강의 자료 (무료 공개)' },
    ],
  },
  {
    title: '코딩 테스트 연습 사이트',
    items: [
      { name: '백준 온라인 저지', url: 'https://www.acmicpc.net/', desc: '국내 최대 알고리즘 문제 풀이 사이트, 다양한 난이도' },
      { name: '프로그래머스', url: 'https://programmers.co.kr/', desc: '국내 코딩 테스트 플랫폼, 기업 채용 연계' },
      { name: 'LeetCode', url: 'https://leetcode.com/', desc: '글로벌 코딩 인터뷰 준비 플랫폼, 자료구조별 문제 분류' },
      { name: 'HackerRank', url: 'https://www.hackerrank.com/', desc: '자료구조/알고리즘 난이도별 문제 풀이 (영문)' },
      { name: 'CodeForces', url: 'https://codeforces.com/', desc: '정기적인 프로그래밍 대회와 연습 문제 제공' },
      { name: 'solved.ac', url: 'https://solved.ac/', desc: '백준 문제에 난이도를 부여하고 추천해주는 서비스' },
    ],
  },
  {
    title: '시각화 및 도구',
    items: [
      { name: 'Python Tutor', url: 'https://pythontutor.com/', desc: '코드 실행 과정을 시각적으로 단계별 확인' },
      { name: 'Algorithm Visualizer', url: 'https://algorithm-visualizer.org/', desc: '다양한 알고리즘의 동작을 애니메이션으로 확인' },
      { name: 'Data Structure Visualizations', url: 'https://www.cs.usfca.edu/~galles/visualization/', desc: 'USF 대학 제공 자료구조 시각화 도구' },
      { name: 'VisuAlgo', url: 'https://visualgo.net/ko', desc: '한국어를 지원하는 자료구조/알고리즘 시각화' },
    ],
  },
  {
    title: 'YouTube 채널',
    items: [
      { name: '나동빈 (이코테)', url: 'https://www.youtube.com/@dongbinna', desc: '이것이 코딩 테스트다 저자의 알고리즘 강의' },
      { name: 'Abdul Bari', url: 'https://www.youtube.com/@abdul_bari', desc: '자료구조/알고리즘 시각적 설명 (영문)' },
      { name: 'NeetCode', url: 'https://www.youtube.com/@NeetCode', desc: 'LeetCode 문제 풀이 전문 채널 (영문)' },
      { name: '안경잡이개발자', url: '#', desc: '알고리즘/자료구조 기초 한국어 강의' },
    ],
  },
];

const References = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="참고자료 | 자료구조 학습"
        description="자료구조와 알고리즘 학습에 도움이 되는 도서, 온라인 자료, 연습 사이트를 모았습니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>참고자료</h1>
          <p>자료구조와 알고리즘 학습에 도움이 되는 자료를 모았습니다</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">
            {sections.map((sec, i) => (
              <div key={sec.title} data-aos="fade-up" data-aos-delay={i * 80}>
                <h2>{sec.title}</h2>
                <table className="lesson-table">
                  <thead>
                    <tr><th>이름</th><th>설명</th></tr>
                  </thead>
                  <tbody>
                    {sec.items.map((item) => (
                      <tr key={item.name}>
                        <td>
                          {item.url !== '#' ? (
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                              <strong>{item.name}</strong>
                            </a>
                          ) : (
                            <strong>{item.name}</strong>
                          )}
                        </td>
                        <td>{item.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default References;
