import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const ArrayPage = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="배열 (Array) | DS Study"
        description="배열의 개념, 특징, 1차원/2차원 배열, 동적 배열, 시간 복잡도를 학습합니다."
      />

      {/* Page Header */}
      <div className="page-header" style={{
        background: 'var(--hero-bg)',
        color: '#fff',
        padding: 'calc(var(--nav-height) + 40px) 0 60px',
      }}>
        <div className="container">
          <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px' }}>
            선형 자료구조
          </p>
          <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '16px' }}>
            배열 (Array)
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '700px', lineHeight: 1.7 }}>
            배열은 같은 타입의 데이터를 연속적인 메모리 공간에 저장하는 가장 기본적인 자료구조입니다.
          </p>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="lesson-content" style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div className="lesson-body" style={{ maxWidth: '860px', margin: '0 auto' }}>

            {/* 배열의 개념 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                배열의 개념
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
                배열(Array)은 동일한 데이터 타입의 요소들을 <strong>연속적인 메모리 공간</strong>에 순서대로 저장하는 자료구조입니다.
                각 요소는 고유한 인덱스(index)를 가지며, 이 인덱스를 통해 직접 접근(Direct Access)이 가능합니다.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                배열은 프로그래밍에서 가장 널리 사용되는 자료구조이며, 다른 복잡한 자료구조의 기반이 되기도 합니다.
                메모리 상에서 연속적으로 배치되어 있어 캐시 친화적(cache-friendly)이라는 장점도 있습니다.
              </p>
            </section>

            {/* 배열의 특징 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                배열의 특징
              </h2>

              <div className="callout-box" style={{
                background: 'var(--primary-blue-bg)',
                border: '1px solid var(--primary-blue)',
                borderRadius: 'var(--radius-md)',
                padding: '24px 28px',
                marginBottom: '24px',
              }}>
                <h4 style={{ color: 'var(--primary-blue)', fontWeight: 700, marginBottom: '12px', fontSize: '16px' }}>
                  핵심 특징
                </h4>
                <ul style={{ color: 'var(--text-secondary)', lineHeight: 2, paddingLeft: '20px', margin: 0 }}>
                  <li><strong>인덱스 접근 O(1)</strong> : 인덱스를 알면 상수 시간에 해당 요소에 접근할 수 있습니다.</li>
                  <li><strong>고정 크기</strong> : 정적 배열은 선언 시 크기가 고정되며, 이후 변경할 수 없습니다.</li>
                  <li><strong>연속 메모리</strong> : 모든 요소가 메모리에 연속적으로 저장됩니다.</li>
                  <li><strong>동일 타입</strong> : 배열의 모든 요소는 같은 데이터 타입을 가집니다 (Python은 예외).</li>
                </ul>
              </div>
            </section>

            {/* 1차원/2차원 배열 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                1차원 배열과 2차원 배열
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                1차원 배열은 데이터를 일렬로 나열한 구조이고,
                2차원 배열은 행과 열로 구성된 표(matrix) 형태의 구조입니다.
              </p>

              <div className="code-block" style={{
                background: '#1e293b',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                marginBottom: '24px',
              }}>
                <div className="code-header" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 20px',
                  background: '#334155',
                  fontSize: '13px',
                  color: '#94a3b8',
                }}>
                  <span>Python</span>
                </div>
                <pre style={{
                  padding: '20px',
                  color: '#e2e8f0',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  overflow: 'auto',
                  margin: 0,
                }}>
{`# 1차원 배열 (Python 리스트)
arr = [10, 20, 30, 40, 50]

# 인덱스로 접근 - O(1)
print(arr[0])   # 10
print(arr[3])   # 40

# 2차원 배열 (행렬)
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# 2차원 배열 접근: matrix[행][열]
print(matrix[1][2])   # 6 (2행 3열)`}
                </pre>
              </div>
            </section>

            {/* 동적 배열 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                동적 배열
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                동적 배열은 크기가 고정되지 않고, 요소를 추가할 때 필요에 따라 자동으로 크기가 확장되는 배열입니다.
                Python의 <code style={{ background: 'var(--bg-light-gray)', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>list</code>는
                내부적으로 동적 배열로 구현되어 있습니다.
                용량이 가득 차면 기존 크기의 약 1.5~2배로 새로운 메모리를 할당하고 기존 데이터를 복사합니다.
              </p>

              <div className="code-block" style={{
                background: '#1e293b',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                marginBottom: '24px',
              }}>
                <div className="code-header" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 20px',
                  background: '#334155',
                  fontSize: '13px',
                  color: '#94a3b8',
                }}>
                  <span>Python - 동적 배열 연산</span>
                </div>
                <pre style={{
                  padding: '20px',
                  color: '#e2e8f0',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  overflow: 'auto',
                  margin: 0,
                }}>
{`# Python 리스트는 동적 배열
arr = []

# 끝에 추가 - 평균 O(1), 최악 O(n)
arr.append(10)
arr.append(20)
arr.append(30)
print(arr)  # [10, 20, 30]

# 특정 위치에 삽입 - O(n)
arr.insert(1, 15)
print(arr)  # [10, 15, 20, 30]

# 삭제 - O(n)
arr.remove(15)
print(arr)  # [10, 20, 30]

# 끝에서 삭제 - O(1)
arr.pop()
print(arr)  # [10, 20]

# 탐색 - O(n)
idx = arr.index(20)
print(idx)  # 1`}
                </pre>
              </div>
            </section>

            {/* 시간 복잡도 표 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                배열의 시간 복잡도
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                배열의 주요 연산에 대한 시간 복잡도입니다.
              </p>

              <table className="lesson-table" style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '15px',
                marginBottom: '24px',
              }}>
                <thead>
                  <tr style={{ background: 'var(--primary-blue)', color: '#fff' }}>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap' }}>연산</th>
                    <th style={{ padding: '14px 20px', textAlign: 'center', fontWeight: 600, whiteSpace: 'nowrap' }}>시간 복잡도</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600 }}>설명</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['접근 (Access)', 'O(1)', '인덱스를 통해 즉시 접근 가능'],
                    ['탐색 (Search)', 'O(n)', '원하는 값을 찾기 위해 순차 탐색 필요'],
                    ['삽입 (Insert)', 'O(n)', '삽입 위치 이후 요소를 모두 이동해야 함'],
                    ['삭제 (Delete)', 'O(n)', '삭제 위치 이후 요소를 모두 이동해야 함'],
                    ['끝에 추가 (Append)', 'O(1)*', '평균 O(1), 배열 확장 시 O(n)'],
                  ].map(([op, time, desc], i) => (
                    <tr key={i} style={{
                      background: i % 2 === 0 ? 'var(--bg-white)' : 'var(--bg-light-gray)',
                      borderBottom: '1px solid var(--border-light)',
                    }}>
                      <td style={{ padding: '12px 20px', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>{op}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', fontFamily: 'monospace', color: 'var(--primary-blue)', fontWeight: 700 }}>{time}</td>
                      <td style={{ padding: '12px 20px', color: 'var(--text-secondary)' }}>{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* 연습 문제 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <div className="exercise-box" style={{
                background: 'var(--bg-light-gray)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 32px',
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                  연습 문제
                </h3>
                <ol style={{ color: 'var(--text-secondary)', lineHeight: 2.0, paddingLeft: '20px', margin: 0 }}>
                  <li>정수 배열에서 최댓값과 최솟값을 찾는 함수를 작성하세요.</li>
                  <li>배열의 모든 요소를 역순으로 뒤집는 함수를 구현하세요.</li>
                  <li>두 개의 정렬된 배열을 하나의 정렬된 배열로 합치는 함수를 작성하세요.</li>
                  <li>배열에서 중복을 제거하는 함수를 작성하세요.</li>
                </ol>
              </div>
            </section>

            {/* Lesson Navigation */}
            <nav className="lesson-nav" data-aos="fade-up" style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: '24px 0',
              borderTop: '1px solid var(--border-light)',
            }}>
              <Link to="/linear/linked-list" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'var(--primary-blue)',
                color: '#fff',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
                transition: 'var(--transition-base)',
              }}>
                다음: 연결 리스트
                <span style={{ fontSize: '18px' }}>&rarr;</span>
              </Link>
            </nav>

          </div>
        </div>
      </div>
    </>
  );
};

export default ArrayPage;
