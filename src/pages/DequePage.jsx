import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const DequePage = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="덱 (Deque) | DS Study"
        description="덱의 개념, 양방향 삽입/삭제, Python collections.deque, 슬라이딩 윈도우 활용을 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>덱 (Deque)</h1>
          <p>덱(Double-Ended Queue)은 양쪽 끝에서 삽입과 삭제가 모두 가능한 자료구조입니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2>덱의 개념</h2>
            <p>
              덱(Deque, Double-Ended Queue)은 <strong>양쪽 끝(front, rear)</strong>에서 삽입과 삭제가 모두 가능한 선형 자료구조입니다.
              스택과 큐의 기능을 모두 포함하는 일반화된 형태라고 볼 수 있습니다.
            </p>
            <p>
              "데크"라고도 불리며, 앞쪽에서 삽입/삭제, 뒤쪽에서 삽입/삭제 등 네 가지 기본 연산을 제공합니다.
              Python에서는 <code>collections.deque</code>로
              효율적인 덱을 사용할 수 있습니다.
            </p>

            <h2>양방향 삽입/삭제</h2>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>연산</th>
                  <th>시간 복잡도</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>appendleft(item)</td>
                  <td>O(1)</td>
                  <td>덱의 앞쪽에 요소를 추가합니다.</td>
                </tr>
                <tr>
                  <td>append(item)</td>
                  <td>O(1)</td>
                  <td>덱의 뒤쪽에 요소를 추가합니다.</td>
                </tr>
                <tr>
                  <td>popleft()</td>
                  <td>O(1)</td>
                  <td>덱의 앞쪽 요소를 제거하고 반환합니다.</td>
                </tr>
                <tr>
                  <td>pop()</td>
                  <td>O(1)</td>
                  <td>덱의 뒤쪽 요소를 제거하고 반환합니다.</td>
                </tr>
                <tr>
                  <td>deque[0]</td>
                  <td>O(1)</td>
                  <td>덱의 앞쪽 요소를 확인합니다.</td>
                </tr>
                <tr>
                  <td>deque[-1]</td>
                  <td>O(1)</td>
                  <td>덱의 뒤쪽 요소를 확인합니다.</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h3>리스트 vs 덱 성능 비교</h3>
              <p>
                Python의 리스트에서 <code>insert(0, x)</code>와
                <code>pop(0)</code>는 O(n)이지만,
                <code>collections.deque</code>의
                <code>appendleft()</code>와
                <code>popleft()</code>는 O(1)입니다.
                앞쪽 삽입/삭제가 빈번한 경우 반드시 deque를 사용해야 합니다.
              </p>
            </div>

            <h2>Python collections.deque</h2>
            <p>
              Python 표준 라이브러리의 <code>collections.deque</code>는
              이중 연결 리스트 기반으로 구현되어 양쪽 끝에서의 연산이 모두 O(1)입니다.
              <code>maxlen</code> 매개변수로
              크기를 제한할 수도 있습니다.
            </p>

            <div className="code-block">
              <div className="code-header">Python - collections.deque 사용법</div>
              <pre><code>{`from collections import deque

# 기본 덱 생성
dq = deque()

# 뒤쪽에 추가
dq.append(1)
dq.append(2)
dq.append(3)
print(dq)           # deque([1, 2, 3])

# 앞쪽에 추가
dq.appendleft(0)
print(dq)           # deque([0, 1, 2, 3])

# 뒤쪽에서 제거
dq.pop()
print(dq)           # deque([0, 1, 2])

# 앞쪽에서 제거
dq.popleft()
print(dq)           # deque([1, 2])

# 회전 (rotate)
dq = deque([1, 2, 3, 4, 5])
dq.rotate(2)        # 오른쪽으로 2칸 회전
print(dq)           # deque([4, 5, 1, 2, 3])

dq.rotate(-1)       # 왼쪽으로 1칸 회전
print(dq)           # deque([5, 1, 2, 3, 4])

# 크기 제한 덱 (maxlen)
bounded = deque(maxlen=3)
bounded.append(1)
bounded.append(2)
bounded.append(3)
bounded.append(4)   # 1이 자동으로 제거됨
print(bounded)      # deque([2, 3, 4], maxlen=3)

# 리스트로부터 덱 생성
dq = deque([10, 20, 30])
dq.extend([40, 50])        # 뒤쪽에 여러 요소 추가
dq.extendleft([0, -10])    # 앞쪽에 여러 요소 추가 (역순으로 추가됨)
print(dq)   # deque([-10, 0, 10, 20, 30, 40, 50])`}</code></pre>
            </div>

            <h2>슬라이딩 윈도우 활용</h2>
            <p>
              덱은 슬라이딩 윈도우(Sliding Window) 문제에서 매우 유용하게 활용됩니다.
              윈도우가 이동할 때 앞쪽에서 오래된 데이터를 제거하고 뒤쪽에 새 데이터를 추가하는 과정이 O(1)로 가능하기 때문입니다.
            </p>

            <div className="code-block">
              <div className="code-header">Python - 슬라이딩 윈도우 최댓값</div>
              <pre><code>{`from collections import deque

def max_sliding_window(nums, k):
    """
    크기 k인 슬라이딩 윈도우의 최댓값을 구하는 함수
    덱에는 인덱스를 저장하며, 항상 내림차순을 유지합니다.
    시간 복잡도: O(n)
    """
    result = []
    dq = deque()  # 인덱스를 저장하는 덱

    for i in range(len(nums)):
        # 윈도우 범위를 벗어난 인덱스 제거
        while dq and dq[0] < i - k + 1:
            dq.popleft()

        # 현재 값보다 작은 값의 인덱스 제거 (뒤에서부터)
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()

        dq.append(i)

        # 윈도우가 완성된 후부터 결과 추가
        if i >= k - 1:
            result.append(nums[dq[0]])

    return result

# 사용 예시
nums = [1, 3, -1, -3, 5, 3, 6, 7]
k = 3
print(max_sliding_window(nums, k))
# 출력: [3, 3, 5, 5, 6, 7]

# 설명:
# 윈도우 위치          최댓값
# [1  3  -1] -3  5  3  6  7    -> 3
#  1 [3  -1  -3] 5  3  6  7    -> 3
#  1  3 [-1  -3  5] 3  6  7    -> 5
#  1  3  -1 [-3  5  3] 6  7    -> 5
#  1  3  -1  -3 [5  3  6] 7    -> 6
#  1  3  -1  -3  5 [3  6  7]   -> 7`}</code></pre>
            </div>

            <div className="callout-box">
              <h3>덱의 활용 분야 요약</h3>
              <ul>
                <li><strong>슬라이딩 윈도우</strong> : 구간 최댓값/최솟값, 이동 평균 계산</li>
                <li><strong>팰린드롬 검사</strong> : 양쪽 끝에서 문자를 비교하여 회문 여부 판단</li>
                <li><strong>작업 훔치기(Work Stealing)</strong> : 멀티스레드 환경에서 부하 분산</li>
                <li><strong>브라우저 히스토리</strong> : 앞으로/뒤로 이동을 양방향으로 관리</li>
                <li><strong>최근 N개 데이터 관리</strong> : maxlen을 활용한 고정 크기 버퍼</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>연습 문제</h3>
              <ol>
                <li>덱을 사용하여 문자열이 팰린드롬(회문)인지 판별하는 함수를 작성하세요.</li>
                <li>크기 k인 슬라이딩 윈도우의 최솟값을 구하는 함수를 구현하세요.</li>
                <li>덱을 이용하여 스택과 큐를 모두 구현하는 클래스를 작성하세요.</li>
                <li><code>maxlen=N</code>인 덱을 이용하여 최근 N개의 로그를 저장하는 시스템을 설계하세요.</li>
              </ol>
            </div>

            <div className="lesson-nav">
              <Link to="/linear/queue" className="lesson-nav-btn prev">&larr; 이전: 큐</Link>
              <Link to="/nonlinear" className="lesson-nav-btn next">다음: 비선형 자료구조 &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default DequePage;
