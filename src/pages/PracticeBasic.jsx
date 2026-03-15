import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const questions = [
  {
    id: 1,
    q: '배열(Array)에서 인덱스를 이용한 원소 접근의 시간 복잡도는?',
    opts: ['A. O(1)', 'B. O(log n)', 'C. O(n)', 'D. O(n log n)'],
    ans: 'A',
    exp: '배열은 연속된 메모리 공간에 저장되므로, 인덱스를 통한 임의 접근이 O(1)입니다.',
  },
  {
    id: 2,
    q: '다음 중 배열의 단점으로 올바른 것은?',
    opts: ['A. 인덱스 접근이 느리다', 'B. 크기를 동적으로 변경하기 어렵다', 'C. 순차 탐색이 불가능하다', 'D. 메모리 사용이 비효율적이다'],
    ans: 'B',
    exp: '정적 배열은 선언 시 크기가 고정되어, 크기를 동적으로 변경하기 어렵습니다. 삽입/삭제 시 원소 이동이 필요할 수 있습니다.',
  },
  {
    id: 3,
    q: '스택(Stack)의 동작 원리는?',
    opts: ['A. FIFO (First In First Out)', 'B. LIFO (Last In First Out)', 'C. Priority 기반', 'D. Random Access'],
    ans: 'B',
    exp: '스택은 후입선출(LIFO) 원칙을 따릅니다. 마지막에 들어간 원소가 가장 먼저 나옵니다.',
  },
  {
    id: 4,
    q: '스택의 활용 사례로 적절하지 않은 것은?',
    opts: ['A. 함수 호출 관리', 'B. 괄호 유효성 검사', 'C. BFS(너비 우선 탐색)', 'D. Undo/Redo 기능'],
    ans: 'C',
    exp: 'BFS는 큐(Queue)를 사용합니다. 스택은 DFS, 함수 호출 스택, 괄호 검사, Undo 등에 활용됩니다.',
  },
  {
    id: 5,
    q: '큐(Queue)에서 원소를 추가하는 연산과 제거하는 연산의 이름은?',
    opts: ['A. push / pop', 'B. enqueue / dequeue', 'C. insert / delete', 'D. add / remove'],
    ans: 'B',
    exp: '큐에서는 원소 추가를 enqueue, 원소 제거를 dequeue라고 합니다. 스택의 push/pop과 구분됩니다.',
  },
  {
    id: 6,
    q: '큐(Queue)의 동작 원리는?',
    opts: ['A. LIFO (Last In First Out)', 'B. FIFO (First In First Out)', 'C. LILO (Last In Last Out)', 'D. FILO (First In Last Out)'],
    ans: 'B',
    exp: '큐는 선입선출(FIFO) 원칙을 따릅니다. 먼저 들어간 원소가 먼저 나옵니다.',
  },
  {
    id: 7,
    q: '연결 리스트(Linked List)에서 특정 위치에 노드를 삽입하는 시간 복잡도는? (위치를 이미 알고 있는 경우)',
    opts: ['A. O(1)', 'B. O(log n)', 'C. O(n)', 'D. O(n^2)'],
    ans: 'A',
    exp: '삽입할 위치의 노드를 이미 가리키고 있다면, 포인터만 변경하면 되므로 O(1)입니다. 단, 위치를 찾는 데는 O(n)이 걸릴 수 있습니다.',
  },
  {
    id: 8,
    q: '연결 리스트와 배열의 비교로 올바른 것은?',
    opts: ['A. 연결 리스트는 인덱스 접근이 O(1)이다', 'B. 배열은 중간 삽입/삭제가 O(1)이다', 'C. 연결 리스트는 동적 크기 조정이 용이하다', 'D. 배열은 추가 메모리(포인터)가 필요하다'],
    ans: 'C',
    exp: '연결 리스트는 노드를 동적으로 생성/삭제하므로 크기 조정이 유연합니다. 배열은 고정 크기이고, 연결 리스트는 포인터가 추가로 필요합니다.',
  },
  {
    id: 9,
    q: '배열의 맨 앞에 원소를 삽입할 때의 시간 복잡도는?',
    opts: ['A. O(1)', 'B. O(log n)', 'C. O(n)', 'D. O(n log n)'],
    ans: 'C',
    exp: '배열 맨 앞에 삽입하려면 기존의 모든 원소를 한 칸씩 뒤로 이동해야 하므로 O(n)입니다.',
  },
  {
    id: 10,
    q: '다음 중 덱(Deque)에 대한 설명으로 올바른 것은?',
    opts: ['A. 한쪽 끝에서만 삽입과 삭제가 가능하다', 'B. 양쪽 끝에서 삽입과 삭제가 가능하다', 'C. 중간 위치에서의 삽입이 O(1)이다', 'D. 스택과 동일한 자료구조이다'],
    ans: 'B',
    exp: '덱(Double-Ended Queue)은 양쪽 끝에서 삽입과 삭제가 모두 가능한 자료구조입니다. 스택과 큐의 특성을 모두 가집니다.',
  },
];

const PracticeBasic = () => {
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
        title="기초 문제 | 자료구조 학습"
        description="배열, 스택, 큐, 연결 리스트 기초 문제 10선으로 자료구조 핵심 개념을 점검합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>기초 문제</h1>
          <p>배열, 스택, 큐, 연결 리스트의 핵심 개념을 점검하는 10문제</p>
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
              <Link to="/practice" className="lesson-nav-btn prev">&larr; 연습문제</Link>
              <Link to="/practice/intermediate" className="lesson-nav-btn next">중급 문제 &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeBasic;
