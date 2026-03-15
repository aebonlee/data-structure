import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const MergeSort = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="병합 정렬 | 자료구조 학습"
        description="분할 정복 개념, 병합 정렬의 동작, 시간 복잡도 O(n log n), 공간 복잡도 O(n), Python 구현을 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>병합 정렬</h1>
          <p>
            분할 정복(Divide and Conquer) 전략을 사용하여 항상 O(n log n)을 보장하는
            효율적이고 안정적인 정렬 알고리즘입니다.
          </p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box">
              <h3>학습 목표</h3>
              <ul>
                <li>분할 정복(Divide and Conquer) 개념을 이해한다.</li>
                <li>병합 정렬의 동작 과정과 병합 연산을 설명할 수 있다.</li>
                <li>시간 복잡도 O(n log n)과 공간 복잡도 O(n)을 분석한다.</li>
                <li>Python으로 병합 정렬을 구현할 수 있다.</li>
              </ul>
            </div>

            <h2>분할 정복 개념</h2>
            <p>
              분할 정복(Divide and Conquer)은 큰 문제를 작은 부분 문제로 나누어 해결한 뒤,
              그 결과를 합쳐 전체 문제의 답을 구하는 알고리즘 설계 기법입니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>단계</th>
                  <th>설명</th>
                  <th>병합 정렬에서의 역할</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>분할 (Divide)</td>
                  <td>문제를 같은 유형의 작은 부분 문제로 분할</td>
                  <td>배열을 절반으로 나눔</td>
                </tr>
                <tr>
                  <td>정복 (Conquer)</td>
                  <td>부분 문제를 재귀적으로 해결</td>
                  <td>각 절반을 재귀적으로 정렬</td>
                </tr>
                <tr>
                  <td>결합 (Combine)</td>
                  <td>부분 문제의 해를 합쳐 원래 문제 해결</td>
                  <td>정렬된 두 배열을 병합</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h3>분할 정복의 핵심</h3>
              <ul>
                <li>문제를 반으로 나누면 깊이가 log n이 됩니다.</li>
                <li>각 깊이에서 n개의 요소를 처리하므로 전체 시간 복잡도가 O(n log n)이 됩니다.</li>
                <li>이것이 O(n²) 정렬 알고리즘보다 훨씬 빠른 이유입니다.</li>
              </ul>
            </div>

            <h2>병합 정렬의 동작</h2>
            <p>
              배열 [38, 27, 43, 3, 9, 82, 10]을 병합 정렬로 정렬하는 과정입니다.
            </p>

            <div className="code-block">
              <div className="code-header">병합 정렬 동작 과정</div>
              <pre><code>{`원본: [38, 27, 43, 3, 9, 82, 10]

[분할 단계] - 배열을 재귀적으로 절반씩 나눔
                [38, 27, 43, 3, 9, 82, 10]
               /                           \\
        [38, 27, 43]                  [3, 9, 82, 10]
        /         \\                  /            \\
    [38]      [27, 43]          [3, 9]        [82, 10]
              /     \\          /    \\         /     \\
           [27]    [43]      [3]   [9]     [82]   [10]

[병합 단계] - 정렬하면서 합침
           [27]    [43]      [3]   [9]     [82]   [10]
              \\     /          \\    /         \\     /
           [27, 43]          [3, 9]        [10, 82]
        \\         /                  \\            /
        [27, 38, 43]              [3, 9, 10, 82]
               \\                           /
            [3, 9, 10, 27, 38, 43, 82]

결과: [3, 9, 10, 27, 38, 43, 82]`}</code></pre>
            </div>

            <h3>두 정렬된 배열의 병합</h3>
            <p>
              병합 정렬의 핵심은 "두 정렬된 배열을 하나의 정렬된 배열로 합치는" 병합(Merge) 연산입니다.
            </p>

            <div className="code-block">
              <div className="code-header">병합 과정 상세</div>
              <pre><code>{`왼쪽: [27, 38, 43]    오른쪽: [3, 9, 82]
       ↑ i=0                  ↑ j=0          결과: []

비교: 27 vs 3 → 3이 작음
왼쪽: [27, 38, 43]    오른쪽: [3, 9, 82]
       ↑ i=0                     ↑ j=1     결과: [3]

비교: 27 vs 9 → 9가 작음
왼쪽: [27, 38, 43]    오른쪽: [3, 9, 82]
       ↑ i=0                        ↑ j=2  결과: [3, 9]

비교: 27 vs 82 → 27이 작음
왼쪽: [27, 38, 43]    오른쪽: [3, 9, 82]
          ↑ i=1                     ↑ j=2  결과: [3, 9, 27]

비교: 38 vs 82 → 38이 작음
왼쪽: [27, 38, 43]    오른쪽: [3, 9, 82]
              ↑ i=2                 ↑ j=2  결과: [3, 9, 27, 38]

비교: 43 vs 82 → 43이 작음
왼쪽 소진 → 오른쪽 나머지 추가
결과: [3, 9, 27, 38, 43, 82]`}</code></pre>
            </div>

            <h2>시간 복잡도 O(n log n)</h2>

            <table className="lesson-table">
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
                  <td>O(n log n)</td>
                  <td>항상 동일 (입력에 무관)</td>
                </tr>
                <tr>
                  <td>평균 (Average)</td>
                  <td>O(n log n)</td>
                  <td>항상 동일</td>
                </tr>
                <tr>
                  <td>최악 (Worst)</td>
                  <td>O(n log n)</td>
                  <td>항상 동일 - 퀵 정렬과의 큰 차이</td>
                </tr>
              </tbody>
            </table>

            <p>
              분할 깊이가 log n이고, 각 깊이에서 n개의 요소를 병합하므로 전체 시간 복잡도는
              O(n log n)입니다. 입력 데이터의 상태에 관계없이 항상 같은 성능을 보장합니다.
            </p>

            <div className="callout-box">
              <h3>O(n²) vs O(n log n) 차이</h3>
              <ul>
                <li>데이터 100만 개를 정렬할 때, O(n²) = 1,000,000,000,000(1조) 연산 vs O(n log n) = 약 20,000,000(2천만) 연산.</li>
                <li>약 50,000배의 차이가 납니다!</li>
              </ul>
            </div>

            <h2>공간 복잡도 O(n)</h2>
            <p>
              병합 정렬은 병합 과정에서 임시 배열을 사용하므로 <strong>O(n)의 추가 메모리</strong>가 필요합니다.
              이것이 병합 정렬의 가장 큰 단점입니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>특성</th>
                  <th>값</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>공간 복잡도</td>
                  <td>O(n) - 임시 배열 필요</td>
                </tr>
                <tr>
                  <td>제자리 정렬</td>
                  <td>No - 추가 메모리 사용</td>
                </tr>
                <tr>
                  <td>안정 정렬</td>
                  <td>Yes - 같은 값의 순서 유지</td>
                </tr>
                <tr>
                  <td>재귀 깊이</td>
                  <td>O(log n) - 호출 스택</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h3>병합 정렬 vs 퀵 정렬</h3>
              <ul>
                <li>병합 정렬은 항상 O(n log n)을 보장하지만 O(n) 추가 메모리가 필요합니다.</li>
                <li>퀵 정렬은 제자리 정렬이지만 최악의 경우 O(n²)입니다.</li>
                <li>안정성과 성능 보장이 중요하면 병합 정렬, 평균 성능과 메모리가 중요하면 퀵 정렬을 선택합니다.</li>
              </ul>
            </div>

            <h2>구현</h2>

            <div className="code-block">
              <div className="code-header">병합 정렬 구현 (Top-Down)</div>
              <pre><code>{`def merge_sort(arr):
    """병합 정렬: 분할 정복으로 배열을 정렬"""
    if len(arr) <= 1:
        return arr

    # 분할 (Divide)
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    # 결합 (Combine)
    return merge(left, right)

def merge(left, right):
    """두 정렬된 배열을 하나로 병합"""
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:  # <= 로 안정 정렬 보장
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    # 남은 요소 추가
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# 테스트
data = [38, 27, 43, 3, 9, 82, 10]
print(merge_sort(data))
# [3, 9, 10, 27, 38, 43, 82]`}</code></pre>
            </div>

            <div className="code-block">
              <div className="code-header">제자리 병합 정렬 (인덱스 기반)</div>
              <pre><code>{`def merge_sort_inplace(arr, left=0, right=None):
    """인덱스 기반 병합 정렬 (새 배열 생성 최소화)"""
    if right is None:
        right = len(arr) - 1
    if left >= right:
        return

    mid = (left + right) // 2
    merge_sort_inplace(arr, left, mid)
    merge_sort_inplace(arr, mid + 1, right)
    merge_inplace(arr, left, mid, right)

def merge_inplace(arr, left, mid, right):
    """임시 배열을 사용한 병합"""
    temp = []
    i, j = left, mid + 1

    while i <= mid and j <= right:
        if arr[i] <= arr[j]:
            temp.append(arr[i])
            i += 1
        else:
            temp.append(arr[j])
            j += 1

    while i <= mid:
        temp.append(arr[i])
        i += 1
    while j <= right:
        temp.append(arr[j])
        j += 1

    for k, val in enumerate(temp):
        arr[left + k] = val

# 테스트
data = [38, 27, 43, 3, 9, 82, 10]
merge_sort_inplace(data)
print(data)  # [3, 9, 10, 27, 38, 43, 82]

# 과정 출력 버전
def merge_sort_verbose(arr, depth=0):
    indent = "  " * depth
    print(f"{indent}merge_sort({arr})")
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort_verbose(arr[:mid], depth + 1)
    right = merge_sort_verbose(arr[mid:], depth + 1)
    result = merge(left, right)
    print(f"{indent}→ 병합: {left} + {right} = {result}")
    return result

merge_sort_verbose([38, 27, 43, 3])`}</code></pre>
            </div>

            <div className="exercise-box">
              <h3>연습 문제</h3>
              <ol>
                <li>배열 [5, 1, 4, 2, 8]을 병합 정렬로 정렬하는 전체 분할/병합 과정을 트리 형태로 그려보세요.</li>
                <li>병합 정렬에서 배열의 크기가 n일 때, merge 함수가 총 몇 번 호출되는지 구하세요.</li>
                <li>두 정렬된 연결 리스트를 병합하는 함수를 작성하세요.</li>
                <li>병합 정렬을 Bottom-Up 방식(반복문 기반)으로 구현해 보세요.</li>
              </ol>
            </div>

            <div className="lesson-nav">
              <Link to="/algorithm/insertion-sort" className="lesson-nav-btn prev">&larr; 삽입 정렬</Link>
              <Link to="/algorithm/quick-sort" className="lesson-nav-btn next">퀵 정렬 &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default MergeSort;
