import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const SelectionSort = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="선택 정렬 | 자료구조 학습"
        description="선택 정렬의 개념, 동작 과정, 시간 복잡도 O(n²), 불안정 정렬의 특징, Python 구현을 학습합니다."
      />

      <div className="page-header" data-aos="fade-down">
        <div className="container">
          <h1>선택 정렬</h1>
          <p className="page-header-desc">
            매 단계에서 가장 작은 요소를 선택하여 앞쪽에 배치하는 정렬 알고리즘입니다.
            교환 횟수가 최소화되지만 비교 횟수는 항상 O(n²)입니다.
          </p>
        </div>
      </div>

      <div className="lesson-content">
        <div className="container">
          <div className="lesson-body">

            {/* 선택 정렬의 개념 */}
            <section className="lesson-section" data-aos="fade-up">
              <h2>선택 정렬의 개념</h2>
              <p>
                선택 정렬(Selection Sort)은 배열에서 <strong>가장 작은 요소를 찾아(선택하여)</strong> 현재 위치의 요소와
                교환하는 방식으로 동작합니다. 정렬되지 않은 부분에서 최솟값을 반복적으로 선택하므로
                "선택 정렬"이라 불립니다.
              </p>
              <p>
                버블 정렬과 달리 매 회전에서 교환이 최대 1번만 발생하여 교환(swap) 비용이 중요한 경우에
                버블 정렬보다 유리합니다.
              </p>
            </section>

            {/* 동작 과정 */}
            <section className="lesson-section" data-aos="fade-up">
              <h2>동작 과정</h2>
              <p>
                배열 [29, 10, 14, 37, 13]을 오름차순으로 정렬하는 과정입니다.
              </p>

              <div className="code-block" data-aos="fade-up">
                <div className="code-header">선택 정렬 동작 과정</div>
                <pre><code>{`초기 배열: [29, 10, 14, 37, 13]

[1회전] 인덱스 0~4에서 최솟값 10 선택 → 인덱스 0과 교환
  [29, 10, 14, 37, 13] → [10, 29, 14, 37, 13]  ✓ 10 확정

[2회전] 인덱스 1~4에서 최솟값 13 선택 → 인덱스 1과 교환
  [10, 29, 14, 37, 13] → [10, 13, 14, 37, 29]  ✓ 13 확정

[3회전] 인덱스 2~4에서 최솟값 14 선택 → 이미 올바른 위치
  [10, 13, 14, 37, 29] → [10, 13, 14, 37, 29]  ✓ 14 확정

[4회전] 인덱스 3~4에서 최솟값 29 선택 → 인덱스 3과 교환
  [10, 13, 14, 37, 29] → [10, 13, 14, 29, 37]  ✓ 29, 37 확정

결과: [10, 13, 14, 29, 37]`}</code></pre>
              </div>

              <div className="callout-box" data-aos="fade-up">
                <strong>핵심 관찰:</strong> 매 회전마다 정렬되지 않은 영역에서 최솟값을 찾아
                현재 위치에 놓습니다. 앞에서부터 하나씩 확정되어 나갑니다.
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
                    <td>O(n<sup>2</sup>)</td>
                    <td>이미 정렬되어도 모든 비교 수행</td>
                  </tr>
                  <tr>
                    <td>평균 (Average)</td>
                    <td>O(n<sup>2</sup>)</td>
                    <td>무작위 배열</td>
                  </tr>
                  <tr>
                    <td>최악 (Worst)</td>
                    <td>O(n<sup>2</sup>)</td>
                    <td>역순 배열</td>
                  </tr>
                </tbody>
              </table>

              <p>
                비교 횟수는 항상 n(n-1)/2로 일정합니다. 다만, 교환 횟수는 최대 n-1번으로
                버블 정렬의 최악의 교환 횟수(n(n-1)/2)보다 훨씬 적습니다.
              </p>

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
                    <td>No - 같은 값의 상대적 순서가 바뀔 수 있음</td>
                  </tr>
                  <tr>
                    <td>비교 횟수</td>
                    <td>항상 n(n-1)/2</td>
                  </tr>
                  <tr>
                    <td>교환 횟수</td>
                    <td>최대 n-1</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* 특징 (불안정 정렬) */}
            <section className="lesson-section" data-aos="fade-up">
              <h2>특징: 불안정 정렬</h2>
              <p>
                선택 정렬은 <strong>불안정 정렬(Unstable Sort)</strong>입니다.
                같은 값을 가진 요소의 원래 상대적 순서가 정렬 후에 변경될 수 있습니다.
              </p>

              <div className="code-block" data-aos="fade-up">
                <div className="code-header">불안정 정렬 예시</div>
                <pre><code>{`# 불안정 정렬의 예시
# 배열: [(3, 'A'), (2, 'B'), (3, 'C'), (1, 'D')]
# 첫 번째 값으로 정렬할 때:

# 1회전: 최솟값 (1,'D')를 인덱스 0과 교환
# [(3,'A'), (2,'B'), (3,'C'), (1,'D')]
# → [(1,'D'), (2,'B'), (3,'C'), (3,'A')]
#                              ↑ (3,'A')와 (3,'C')의 순서가 바뀜!

# 안정 정렬이었다면 (3,'A')가 (3,'C')보다 앞에 있어야 함
# 하지만 선택 정렬은 교환 과정에서 순서가 바뀔 수 있음`}</code></pre>
              </div>

              <div className="callout-box" data-aos="fade-up">
                <strong>안정 정렬 vs 불안정 정렬:</strong> 안정 정렬은 같은 키를 가진 요소의 원래 순서를 보장합니다.
                데이터베이스에서 여러 기준으로 정렬할 때 안정 정렬이 중요합니다.
                안정 정렬: 버블, 삽입, 병합 / 불안정 정렬: 선택, 퀵, 힙
              </div>
            </section>

            {/* 구현 */}
            <section className="lesson-section" data-aos="fade-up">
              <h2>구현</h2>

              <div className="code-block" data-aos="fade-up">
                <div className="code-header">선택 정렬 구현</div>
                <pre><code>{`def selection_sort(arr):
    """선택 정렬: 매 회전에서 최솟값을 선택하여 앞에 배치"""
    n = len(arr)
    for i in range(n - 1):
        # 정렬되지 않은 부분에서 최솟값의 인덱스 찾기
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        # 최솟값을 현재 위치로 교환
        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

# 테스트
data = [64, 25, 12, 22, 11]
print(selection_sort(data[:]))  # [11, 12, 22, 25, 64]

# 최댓값을 선택하는 내림차순 버전
def selection_sort_desc(arr):
    n = len(arr)
    for i in range(n - 1):
        max_idx = i
        for j in range(i + 1, n):
            if arr[j] > arr[max_idx]:
                max_idx = j
        if max_idx != i:
            arr[i], arr[max_idx] = arr[max_idx], arr[i]
    return arr

print(selection_sort_desc([64, 25, 12, 22, 11]))
# [64, 25, 22, 12, 11]

# 과정 출력 버전
def selection_sort_verbose(arr):
    n = len(arr)
    arr = arr[:]
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        if min_idx != i:
            print(f"[{i+1}회전] 최솟값 {arr[min_idx]}(인덱스 {min_idx}) ↔ "
                  f"{arr[i]}(인덱스 {i})")
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
        else:
            print(f"[{i+1}회전] {arr[i]}이 이미 올바른 위치")
        print(f"  → {arr}")
    return arr

selection_sort_verbose([29, 10, 14, 37, 13])`}</code></pre>
              </div>
            </section>

            {/* 연습 문제 */}
            <div className="exercise-box" data-aos="fade-up">
              <h3>연습 문제</h3>
              <ol>
                <li>배열 [8, 5, 2, 9, 5, 6, 3]을 선택 정렬로 정렬하는 각 회전의 과정을 손으로 추적하세요.</li>
                <li>선택 정렬이 불안정 정렬임을 보여주는 구체적인 예시를 만들어 보세요.</li>
                <li>선택 정렬을 변형하여 매 회전마다 최솟값과 최댓값을 동시에 찾아 양쪽 끝에 배치하는 "이중 선택 정렬"을 구현하세요.</li>
              </ol>
            </div>

          </div>
        </div>
      </div>

      <nav className="lesson-nav" data-aos="fade-up">
        <Link to="/algorithm/bubble-sort" className="lesson-nav-prev">
          <span className="lesson-nav-label">이전</span>
          <span className="lesson-nav-title">버블 정렬</span>
        </Link>
        <Link to="/algorithm/insertion-sort" className="lesson-nav-next">
          <span className="lesson-nav-label">다음</span>
          <span className="lesson-nav-title">삽입 정렬</span>
        </Link>
      </nav>
    </>
  );
};

export default SelectionSort;
