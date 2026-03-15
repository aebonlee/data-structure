import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const QuickSort = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="퀵 정렬 | 자료구조 학습"
        description="퀵 정렬의 개념, 피벗 선택, 파티션 과정, 시간 복잡도(평균 O(n log n), 최악 O(n²)), Python 구현을 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>퀵 정렬</h1>
          <p>
            피벗을 기준으로 배열을 분할하여 정렬하는 분할 정복 알고리즘입니다.
            평균적으로 가장 빠른 범용 정렬 알고리즘 중 하나입니다.
          </p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box">
              <h3>학습 목표</h3>
              <ul>
                <li>퀵 정렬의 개념과 분할 정복 전략을 이해한다.</li>
                <li>피벗 선택 전략에 따른 성능 차이를 분석한다.</li>
                <li>파티션 과정(Lomuto, Hoare)을 설명할 수 있다.</li>
                <li>Python으로 퀵 정렬을 구현할 수 있다.</li>
              </ul>
            </div>

            <h2>퀵 정렬의 개념</h2>
            <p>
              퀵 정렬(Quick Sort)은 1959년 토니 호어(Tony Hoare)가 발명한 정렬 알고리즘으로,
              분할 정복 전략을 사용합니다. 배열에서 <strong>피벗(pivot)</strong>이라는 기준 요소를 선택하고,
              피벗보다 작은 요소는 왼쪽, 큰 요소는 오른쪽으로 분할(partition)한 뒤, 각 부분을 재귀적으로 정렬합니다.
            </p>
            <p>
              병합 정렬과 달리 제자리 정렬이 가능하며, 실제 데이터에서 캐시 효율이 뛰어나
              평균적으로 가장 빠른 범용 정렬 알고리즘으로 널리 사용됩니다.
            </p>

            <div className="callout-box">
              <h3>병합 정렬과의 차이</h3>
              <ul>
                <li>병합 정렬은 "나눈 뒤 합칠 때" 정렬이 일어나지만, 퀵 정렬은 "나누는 과정(파티션)"에서 정렬이 일어납니다.</li>
                <li>이 때문에 병합 단계가 필요 없습니다.</li>
              </ul>
            </div>

            <h2>피벗 선택</h2>
            <p>
              피벗 선택은 퀵 정렬의 성능에 큰 영향을 미칩니다.
              이상적으로는 배열을 균등하게 분할하는 중간값(median)이 좋지만,
              정확한 중간값을 찾는 것도 비용이 듭니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>피벗 선택 전략</th>
                  <th>방법</th>
                  <th>장단점</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>첫 번째 요소</td>
                  <td>arr[left]</td>
                  <td>간단하지만, 정렬된 배열에서 최악 O(n²)</td>
                </tr>
                <tr>
                  <td>마지막 요소</td>
                  <td>arr[right]</td>
                  <td>간단하지만, 정렬된 배열에서 최악 O(n²)</td>
                </tr>
                <tr>
                  <td>중간 요소</td>
                  <td>arr[(left+right)//2]</td>
                  <td>정렬된 배열에서 좋은 성능</td>
                </tr>
                <tr>
                  <td>중간값의 중간값 (Median of 3)</td>
                  <td>처음, 중간, 끝 중 중간값</td>
                  <td>실무에서 가장 많이 사용, 최악 회피</td>
                </tr>
                <tr>
                  <td>랜덤 선택</td>
                  <td>random.choice</td>
                  <td>확률적으로 최악 회피</td>
                </tr>
              </tbody>
            </table>

            <h2>파티션 과정</h2>
            <p>
              파티션(Partition)은 피벗을 기준으로 배열을 두 부분으로 나누는 핵심 연산입니다.
              배열 [8, 3, 1, 7, 0, 10, 2]에서 피벗을 마지막 요소(2)로 선택한 경우를 살펴봅시다.
            </p>

            <div className="code-block">
              <div className="code-header">Lomuto 파티션 과정</div>
              <pre><code>{`배열: [8, 3, 1, 7, 0, 10, 2]  피벗 = 2
       i                         (i는 피벗보다 작은 영역의 경계)
       j→                        (j는 탐색 포인터)

j=0: 8 > 2 → 건너뜀
  [8, 3, 1, 7, 0, 10, 2]  i=-1

j=1: 3 > 2 → 건너뜀
  [8, 3, 1, 7, 0, 10, 2]  i=-1

j=2: 1 < 2 → i 증가(i=0), arr[0]↔arr[2] 교환
  [1, 3, 8, 7, 0, 10, 2]  i=0

j=3: 7 > 2 → 건너뜀

j=4: 0 < 2 → i 증가(i=1), arr[1]↔arr[4] 교환
  [1, 0, 8, 7, 3, 10, 2]  i=1

j=5: 10 > 2 → 건너뜀

피벗을 i+1 위치로 교환: arr[2]↔arr[6]
  [1, 0, 2, 7, 3, 10, 8]
         ↑ 피벗(2)의 최종 위치 (인덱스 2)

결과: [1, 0] | 2 | [7, 3, 10, 8]
       < 2    =2      > 2`}</code></pre>
            </div>

            <div className="callout-box">
              <h3>파티션의 핵심</h3>
              <ul>
                <li>파티션이 끝나면 피벗은 정렬된 최종 위치에 놓이게 됩니다.</li>
                <li>피벗 왼쪽의 모든 요소는 피벗보다 작고, 오른쪽의 모든 요소는 피벗보다 큽니다.</li>
              </ul>
            </div>

            <h2>시간 복잡도</h2>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>경우</th>
                  <th>시간 복잡도</th>
                  <th>발생 조건</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>최선 (Best)</td>
                  <td>O(n log n)</td>
                  <td>피벗이 항상 중간값일 때 (균등 분할)</td>
                </tr>
                <tr>
                  <td>평균 (Average)</td>
                  <td>O(n log n)</td>
                  <td>무작위 데이터에서의 기대값</td>
                </tr>
                <tr>
                  <td>최악 (Worst)</td>
                  <td>O(n<sup>2</sup>)</td>
                  <td>피벗이 항상 최솟값/최댓값일 때 (불균등 분할)</td>
                </tr>
              </tbody>
            </table>

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
                  <td>O(log n) 평균 (재귀 스택), O(n) 최악</td>
                </tr>
                <tr>
                  <td>제자리 정렬</td>
                  <td>Yes - 추가 배열 불필요</td>
                </tr>
                <tr>
                  <td>안정 정렬</td>
                  <td>No - 파티션 과정에서 순서 변경 가능</td>
                </tr>
                <tr>
                  <td>캐시 효율</td>
                  <td>우수 - 연속 메모리 접근</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h3>최악의 경우를 피하려면</h3>
              <ul>
                <li>이미 정렬된 배열에서 첫 번째/마지막 요소를 피벗으로 선택하면 매번 1 : n-1로 불균등 분할되어 O(n²)이 됩니다.</li>
                <li>Median of 3이나 랜덤 피벗 선택을 사용하면 실질적으로 최악의 경우를 피할 수 있습니다.</li>
              </ul>
            </div>

            <h2>구현</h2>

            <div className="code-block">
              <div className="code-header">퀵 정렬 - 간결한 Python 구현</div>
              <pre><code>{`def quick_sort(arr):
    """간결한 퀵 정렬 (새 리스트 생성 방식)"""
    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]  # 중간 요소를 피벗으로 선택
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort(left) + middle + quick_sort(right)

# 테스트
data = [3, 6, 8, 10, 1, 2, 1]
print(quick_sort(data))  # [1, 1, 2, 3, 6, 8, 10]`}</code></pre>
            </div>

            <div className="code-block">
              <div className="code-header">퀵 정렬 - 제자리(In-place) 구현</div>
              <pre><code>{`def quick_sort_inplace(arr, low=0, high=None):
    """제자리 퀵 정렬 (Lomuto 파티션)"""
    if high is None:
        high = len(arr) - 1
    if low < high:
        pivot_idx = partition(arr, low, high)
        quick_sort_inplace(arr, low, pivot_idx - 1)
        quick_sort_inplace(arr, pivot_idx + 1, high)

def partition(arr, low, high):
    """Lomuto 파티션: 마지막 요소를 피벗으로 사용"""
    pivot = arr[high]
    i = low - 1  # 피벗보다 작은 요소의 경계

    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

# 테스트
data = [10, 7, 8, 9, 1, 5]
quick_sort_inplace(data)
print(data)  # [1, 5, 7, 8, 9, 10]`}</code></pre>
            </div>

            <div className="code-block">
              <div className="code-header">최적화: Median of 3 + 랜덤 피벗</div>
              <pre><code>{`import random

def quick_sort_optimized(arr, low=0, high=None):
    """최적화된 퀵 정렬"""
    if high is None:
        high = len(arr) - 1
    if low < high:
        # 작은 배열은 삽입 정렬로 처리 (실무 최적화)
        if high - low < 10:
            insertion_sort_range(arr, low, high)
            return

        pivot_idx = partition_median3(arr, low, high)
        quick_sort_optimized(arr, low, pivot_idx - 1)
        quick_sort_optimized(arr, pivot_idx + 1, high)

def partition_median3(arr, low, high):
    """Median of 3 피벗 선택 후 파티션"""
    mid = (low + high) // 2
    # 세 값 중 중간값을 피벗으로
    if arr[low] > arr[mid]:
        arr[low], arr[mid] = arr[mid], arr[low]
    if arr[low] > arr[high]:
        arr[low], arr[high] = arr[high], arr[low]
    if arr[mid] > arr[high]:
        arr[mid], arr[high] = arr[high], arr[mid]
    # 중간값(arr[mid])을 high-1로 이동
    arr[mid], arr[high - 1] = arr[high - 1], arr[mid]
    pivot = arr[high - 1]

    i = low
    j = high - 1
    while True:
        i += 1
        while arr[i] < pivot:
            i += 1
        j -= 1
        while arr[j] > pivot:
            j -= 1
        if i >= j:
            break
        arr[i], arr[j] = arr[j], arr[i]

    arr[i], arr[high - 1] = arr[high - 1], arr[i]
    return i

def insertion_sort_range(arr, low, high):
    for i in range(low + 1, high + 1):
        key = arr[i]
        j = i - 1
        while j >= low and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

# 테스트
data = list(range(20, 0, -1))  # 역순 배열
quick_sort_optimized(data)
print(data)  # [1, 2, 3, ..., 20]`}</code></pre>
            </div>

            <div className="exercise-box">
              <h3>연습 문제</h3>
              <ol>
                <li>배열 [7, 2, 1, 6, 8, 5, 3, 4]에서 피벗을 마지막 요소(4)로 하여 파티션 과정을 손으로 추적하세요.</li>
                <li>이미 정렬된 배열 [1, 2, 3, 4, 5]에 대해 첫 번째 요소를 피벗으로 하는 퀵 정렬의 재귀 트리를 그리고 시간 복잡도가 O(n²)임을 확인하세요.</li>
                <li>퀵 정렬을 이용하여 배열에서 k번째로 작은 요소를 O(n) 평균 시간에 찾는 Quick Select 알고리즘을 구현하세요.</li>
                <li>세 가지 피벗 선택 전략(첫 번째, 랜덤, Median of 3)의 성능을 비교하는 프로그램을 작성하세요.</li>
              </ol>
            </div>

            <div className="lesson-nav">
              <Link to="/algorithm/merge-sort" className="lesson-nav-btn prev">&larr; 병합 정렬</Link>
              <Link to="/algorithm/search" className="lesson-nav-btn next">탐색 알고리즘 &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default QuickSort;
