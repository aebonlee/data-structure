import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const questions = [
  {
    id: 1,
    q: '이진 탐색 트리(BST)에서 탐색 연산의 평균 시간 복잡도는?',
    opts: ['A. O(1)', 'B. O(log n)', 'C. O(n)', 'D. O(n log n)'],
    ans: 'B',
    exp: '균형 잡힌 BST에서 탐색은 매 단계마다 절반을 제거하므로 평균 O(log n)입니다. 단, 편향 트리에서는 O(n)이 될 수 있습니다.',
  },
  {
    id: 2,
    q: '완전 이진 트리에서 노드가 n개일 때 트리의 높이는?',
    opts: ['A. O(1)', 'B. O(log n)', 'C. O(n)', 'D. O(sqrt(n))'],
    ans: 'B',
    exp: '완전 이진 트리는 각 레벨이 거의 꽉 차 있으므로, 높이는 O(log n)입니다. 노드 수 n과 높이 h의 관계: n ≈ 2^h',
  },
  {
    id: 3,
    q: '힙(Heap)에서 최솟값 또는 최댓값을 추출하는 연산의 시간 복잡도는?',
    opts: ['A. O(1)', 'B. O(log n)', 'C. O(n)', 'D. O(n log n)'],
    ans: 'B',
    exp: '최솟값/최댓값은 루트에 있으므로 확인은 O(1)이지만, 추출 후 힙 속성을 복구하는 데 O(log n)이 필요합니다.',
  },
  {
    id: 4,
    q: '그래프 탐색 알고리즘인 DFS(깊이 우선 탐색)에 주로 사용되는 자료구조는?',
    opts: ['A. 큐(Queue)', 'B. 스택(Stack)', 'C. 해시 테이블', 'D. 힙(Heap)'],
    ans: 'B',
    exp: 'DFS는 스택을 사용하여 구현합니다. 재귀 호출도 내부적으로 콜 스택을 사용합니다. BFS는 큐를 사용합니다.',
  },
  {
    id: 5,
    q: '그래프에서 BFS(너비 우선 탐색)의 시간 복잡도는? (V: 정점 수, E: 간선 수)',
    opts: ['A. O(V)', 'B. O(E)', 'C. O(V + E)', 'D. O(V * E)'],
    ans: 'C',
    exp: 'BFS는 모든 정점을 한 번씩 방문하고(O(V)), 각 정점의 간선을 한 번씩 확인하므로(O(E)), 총 O(V + E)입니다.',
  },
  {
    id: 6,
    q: '해시 테이블에서 충돌(Collision)이 발생했을 때의 해결 방법이 아닌 것은?',
    opts: ['A. 체이닝(Chaining)', 'B. 개방 주소법(Open Addressing)', 'C. 이중 해싱(Double Hashing)', 'D. 이진 탐색(Binary Search)'],
    ans: 'D',
    exp: '해시 충돌 해결 방법으로는 체이닝, 개방 주소법(선형 탐사, 이차 탐사, 이중 해싱) 등이 있습니다. 이진 탐색은 충돌 해결과 무관합니다.',
  },
  {
    id: 7,
    q: '해시 테이블의 평균 탐색/삽입/삭제 시간 복잡도는?',
    opts: ['A. O(1)', 'B. O(log n)', 'C. O(n)', 'D. O(n log n)'],
    ans: 'A',
    exp: '해시 함수가 잘 설계되어 충돌이 적을 때, 해시 테이블의 평균 시간 복잡도는 O(1)입니다. 최악의 경우(모든 키가 충돌)에는 O(n)입니다.',
  },
  {
    id: 8,
    q: '퀵 정렬(Quick Sort)의 최악 시간 복잡도와 평균 시간 복잡도를 올바르게 짝지은 것은?',
    opts: ['A. 최악 O(n log n), 평균 O(n log n)', 'B. 최악 O(n^2), 평균 O(n log n)', 'C. 최악 O(n^2), 평균 O(n^2)', 'D. 최악 O(n log n), 평균 O(n^2)'],
    ans: 'B',
    exp: '퀵 정렬은 평균적으로 O(n log n)이지만, 피벗 선택이 불량할 때(이미 정렬된 배열 등) 최악 O(n^2)이 됩니다.',
  },
  {
    id: 9,
    q: '병합 정렬(Merge Sort)의 특징으로 올바르지 않은 것은?',
    opts: ['A. 안정 정렬(Stable Sort)이다', 'B. 시간 복잡도가 항상 O(n log n)이다', 'C. 제자리 정렬(In-place Sort)이다', 'D. 분할 정복(Divide and Conquer) 기법을 사용한다'],
    ans: 'C',
    exp: '병합 정렬은 병합 과정에서 추가 배열이 필요하므로 제자리 정렬이 아닙니다. 공간 복잡도는 O(n)입니다.',
  },
  {
    id: 10,
    q: '다음 정렬 알고리즘 중 최선/평균/최악 시간 복잡도가 모두 O(n log n)인 것은?',
    opts: ['A. 버블 정렬', 'B. 퀵 정렬', 'C. 병합 정렬', 'D. 삽입 정렬'],
    ans: 'C',
    exp: '병합 정렬은 입력에 관계없이 항상 배열을 반으로 분할하고 병합하므로, 모든 경우 O(n log n)입니다. 퀵 정렬은 최악 O(n^2)입니다.',
  },
];

const PracticeInter = () => {
  useAOS();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qId, val) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => { setAnswers({}); setSubmitted(false); };

  const getScore = () => questions.filter(q => answers[q.id] === q.ans).length;

  return (
    <>
      <SEOHead
        title="중급 문제 | 자료구조 학습"
        description="트리, 그래프, 해시, 정렬 관련 중급 문제 10선으로 심화 개념을 점검합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>중급 문제</h1>
          <p>트리, 그래프, 해시, 정렬 알고리즘의 심화 개념을 점검하는 10문제</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            {submitted && (
              <div className="callout-box" data-aos="fade-up">
                <h3>채점 결과</h3>
                <p>
                  <strong>{getScore()}</strong> / {questions.length} 문제 정답
                  ({Math.round((getScore() / questions.length) * 100)}점)
                </p>
              </div>
            )}

            {questions.map((q, idx) => {
              const selected = answers[q.id];
              const isCorrect = selected === q.ans;

              return (
                <div key={q.id} className="exercise-box" data-aos="fade-up" data-aos-delay={idx * 50}>
                  <h3>문제 {q.id}.</h3>
                  <p><strong>{q.q}</strong></p>
                  <div className="quiz-options-area">
                    {q.opts.map((opt) => {
                      const val = opt.charAt(0);
                      const isSelected = selected === val;
                      let cls = 'quiz-option';

                      if (submitted) {
                        cls += ' quiz-option--disabled';
                        if (val === q.ans) {
                          cls += ' quiz-option--correct';
                        } else if (isSelected && !isCorrect) {
                          cls += ' quiz-option--wrong';
                        }
                      } else if (isSelected) {
                        cls += ' quiz-option--selected';
                      }

                      return (
                        <label
                          key={val}
                          className={cls}
                          onClick={() => handleSelect(q.id, val)}
                        >
                          <input
                            type="radio"
                            name={`q${q.id}`}
                            checked={isSelected}
                            onChange={() => handleSelect(q.id, val)}
                            className="quiz-radio"
                            disabled={submitted}
                          />
                          {opt}
                        </label>
                      );
                    })}
                  </div>
                  {submitted && (
                    <div className={`quiz-explanation ${isCorrect ? 'quiz-explanation--correct' : 'quiz-explanation--wrong'}`}>
                      <strong>{isCorrect ? '정답!' : `오답 (정답: ${q.ans})`}</strong>
                      <br />
                      {q.exp}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="quiz-submit-area" data-aos="fade-up">
              {!submitted ? (
                <button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={Object.keys(answers).length < questions.length}
                >
                  제출하기 ({Object.keys(answers).length}/{questions.length})
                </button>
              ) : (
                <button className="btn btn-secondary" onClick={handleReset}>
                  다시 풀기
                </button>
              )}
            </div>

            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/practice/basic" className="lesson-nav-btn prev">&larr; 기초 문제</Link>
              <Link to="/references" className="lesson-nav-btn next">참고자료 &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeInter;
