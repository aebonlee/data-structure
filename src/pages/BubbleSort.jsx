import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const BubbleSort = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="버블 정렬 | 자료구조 학습"
        description="버블 정렬의 개념, 동작 과정, 시간 복잡도 O(n²), 최적화 기법, Python 구현을 학습합니다."
      />

      <div className="page-header" data-aos="fade-down">
        <div className="container">
          <h1>버블 정렬</h1>
          <p className="page-header-desc">
            인접한 두 요소를 비교하여 정렬하는 가장 직관적인 알고리즘입니다.
            이해하기 쉽지만 성능은 O(n²)으로, 정렬 알고리즘 학습의 출발점입니다.
          </p>
        </div>
      </div>

      <div className="lesson-content">
        <div className="container">
          <div className="lesson-body">

            {/* 버블 정렬의 개념 */}
            <section className="lesson-section" data-aos="fade-up">
              <h2>버블 정렬의 개념</h2>
              <p>
                버블 정렬(Bubble Sort)은 배열의 인접한 두 요소를 반복적으로 비교하고,
                잘못된 순서이면 교환하는 정렬 알고리즘입니다. 큰 값이 배열의 끝으로 "거품(bubble)"처럼
                떠오르는 모습에서 이름이 유래했습니다.
              </p>
              <p>
                가장 단순한 정렬 알고리즘 중 하나로, 구현이 매우 쉽지만 효율성은 떨어집니다.
                주로 교육 목적으로 사용되며, 실무에서는 거의 사용되지 않습니다.
              </p>
            </section>

            {/* 동작 과정 */}
            <section className="lesson-section" data-aos="fade-up">
              <h2>동작 과정</h2>
              <p>
                배열 [5, 3, 8, 4, 2]를 오름차순으로 정렬하는 과정을 살펴봅시다.
              </p>

              <div className="code-block" data-aos="fade-up">
                <div className="code-header">버블 정렬 동작 과정</div>
                <pre><code>{`초기 배열: [5, 3, 8, 4, 2]

[1회전] - 가장 큰 값 8이 맨 뒤로 이동
  (5, 3) → 교환 → [3, 5, 8, 4, 2]
  (5, 8) → 유지 → [3, 5, 8, 4, 2]
  (8, 4) → 교환 → [3, 5, 4, 8, 2]
  (8, 2) → 교환 → [3, 5, 4, 2, 8]  ✓ 8 확정

[2회전] - 두 번째로 큰 값 5가 뒤에서 두 번째로
  (3, 5) → 유지 → [3, 5, 4, 2, 8]
  (5, 4) → 교환 → [3, 4, 5, 2, 8]
  (5, 2) → 교환 → [3, 4, 2, 5, 8]  ✓ 5 확정

[3회전]
  (3, 4) → 유지 → [3, 4, 2, 5, 8]
  (4, 2) → 교환 → [3, 2, 4, 5, 8]  ✓ 4 확정

[4회전]
  (3, 2) → 교환 → [2, 3, 4, 5, 8]  ✓ 3 확정

결과: [2, 3, 4, 5, 8]`}</code></pre>
              </div>

              <div className="callout-box" data-aos="fade-up">
                <strong>핵심 관찰:</strong> 매 회전(pass)마다 아직 정렬되지 않은 부분에서 가장 큰 값이
                올바른 위치에 확정됩니다. n개의 요소를 정렬하려면 최대 n-1번의 회전이 필요합니다.
              </div>
            </section>

            {/* 시간 복잡도 */}
            <section className="lesson-section" data-aos="fade-up">
              <h2>시간 복잡도 O(n<sup>2</sup>)</h2>

              <table className="lesson-table" data-aos="fade-up">
                <thead>
                  <tr>
                    <th>경우</th>
                    <th>시간 복잡도</th>
                    <th>설명</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>최선 (Best)</td>
                    <td>O(n)</td>
                    <td>이미 정렬된 경우 (최적화 적용 시)</td>
                  </tr>
                  <tr>
                    <td>평균 (Average)</td>
                    <td>O(n<sup>2</sup>)</td>
                    <td>무작위 배열</td>
                  </tr>
                  <tr>
                    <td>최악 (Worst)</td>
                    <td>O(n<sup>2</sup>)</td>
                    <td>역순으로 정렬된 경우</td>
                  </tr>
                </tbody>
              </table>

              <table className="lesson-table" data-aos="fade-up">
                <thead>
                  <tr>
                    <th>특성</th>
                    <th>값</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>공간 복잡도</td>
                    <td>O(1) - 제자리 정렬 (In-place)</td>
                  </tr>
                  <tr>
                    <td>안정 정렬</td>
                    <td>Yes - 같은 값의 상대적 순서 유지</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* 최적화 */}
            <section className="lesson-section" data-aos="fade-up">
              <h2>최적화 (이미 정렬된 경우)</h2>
              <p>
                기본 버블 정렬은 배열이 이미 정렬되어 있어도 모든 비교를 수행합니다.
                한 회전에서 교환이 한 번도 발생하지 않으면 이미 정렬이 완료된 것이므로
                조기 종료할 수 있습니다.
              </p>

              <div className="code-block" data-aos="fade-up">
                <div className="code-header">최적화된 버블 정렬</div>
                <pre><code>{`def bubble_sort_optimized(arr):
    """최적화된 버블 정렬: 교환이 없으면 조기 종료"""
    n = len(arr)
    for i in range(n - 1):
        swapped = False  # 교환 발생 여부 추적
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break  # 교환이 없으면 이미 정렬 완료
    return arr

# 이미 정렬된 배열: 1회전만에 종료 → O(n)
sorted_arr = [1, 2, 3, 4, 5]
print(bubble_sort_optimized(sorted_arr))  # [1, 2, 3, 4, 5]`}</code></pre>
              </div>
            </section>

            {/* 구현 */}
            <section className="lesson-section" data-aos="fade-up">
              <h2>구현</h2>

              <div className="code-block" data-aos="fade-up">
                <div className="code-header">기본 버블 정렬 구현</div>
                <pre><code>{`def bubble_sort(arr):
    """기본 버블 정렬"""
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# 내림차순 정렬
def bubble_sort_desc(arr):
    """내림차순 버블 정렬"""
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if arr[j] < arr[j + 1]:  # 부등호 방향만 반대
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# 테스트
data = [64, 34, 25, 12, 22, 11, 90]
print("오름차순:", bubble_sort(data[:]))
# [11, 12, 22, 25, 34, 64, 90]
print("내림차순:", bubble_sort_desc(data[:]))
# [90, 64, 34, 25, 22, 12, 11]

# 과정 출력 버전
def bubble_sort_verbose(arr):
    """각 단계를 출력하는 버블 정렬"""
    n = len(arr)
    arr = arr[:]
    for i in range(n - 1):
        print(f"[{i+1}회전]")
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                print(f"  교환: {arr}")
        print(f"  → 결과: {arr}")
    return arr

bubble_sort_verbose([5, 3, 8, 4, 2])`}</code></pre>
              </div>
            </section>

            {/* 연습 문제 */}
            <div className="exercise-box" data-aos="fade-up">
              <h3>연습 문제</h3>
              <ol>
                <li>배열 [6, 1, 9, 3, 7]을 버블 정렬로 정렬하는 각 회전의 과정을 손으로 추적하세요.</li>
                <li>최적화된 버블 정렬에서 [1, 2, 3, 5, 4] 배열을 정렬할 때 몇 번의 회전이 필요한지 구하세요.</li>
                <li>버블 정렬을 이용하여 문자열 리스트를 사전순으로 정렬하는 함수를 작성하세요.</li>
              </ol>
            </div>

          </div>
        </div>
      </div>

      <nav className="lesson-nav" data-aos="fade-up">
        <Link to="/hash/hash-map" className="lesson-nav-prev">
          <span className="lesson-nav-label">이전</span>
          <span className="lesson-nav-title">해시 맵 활용</span>
        </Link>
        <Link to="/algorithm/selection-sort" className="lesson-nav-next">
          <span className="lesson-nav-label">다음</span>
          <span className="lesson-nav-title">선택 정렬</span>
        </Link>
      </nav>
    </>
  );
};

export default BubbleSort;
