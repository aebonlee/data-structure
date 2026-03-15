import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const HeapPage = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="힙 (Heap) | DS Study"
        description="힙의 개념, 최대/최소 힙, 삽입/삭제 연산, 힙 정렬, Python heapq 모듈을 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>힙 (Heap)</h1>
          <p>
            힙은 완전 이진 트리 기반의 자료구조로, 우선순위 큐의 구현과 힙 정렬 알고리즘의 핵심입니다.
            최댓값 또는 최솟값을 O(1)에 조회할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2>힙의 개념</h2>
            <p>
              힙(Heap)은 다음 두 가지 조건을 만족하는 자료구조입니다:
            </p>
            <ul>
              <li><strong>완전 이진 트리</strong>: 마지막 레벨을 제외한 모든 레벨이 채워져 있고, 마지막 레벨은 왼쪽부터 채워집니다.</li>
              <li><strong>힙 속성(Heap Property)</strong>: 부모 노드와 자식 노드 사이에 일정한 대소 관계가 성립합니다.</li>
            </ul>
            <p>
              힙은 완전 이진 트리이므로 배열로 효율적으로 구현할 수 있습니다.
              인덱스 i의 노드에 대해 부모는 (i-1)//2, 왼쪽 자식은 2i+1, 오른쪽 자식은 2i+2입니다.
            </p>

            <h2>최대 힙 / 최소 힙</h2>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>종류</th>
                  <th>힙 속성</th>
                  <th>루트 노드</th>
                  <th>활용</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>최대 힙 (Max Heap)</td><td>부모 &gt;= 자식</td><td>전체 최댓값</td><td>내림차순 정렬, 최댓값 추출</td></tr>
                <tr><td>최소 힙 (Min Heap)</td><td>부모 &lt;= 자식</td><td>전체 최솟값</td><td>오름차순 정렬, 다익스트라</td></tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h3>힙은 정렬된 구조가 아닙니다!</h3>
              <p>
                힙은 부모-자식 간의 대소 관계만 보장합니다. 형제 노드 사이에는 순서가 없습니다.
                예를 들어, 최대 힙에서 루트의 왼쪽 자식이 오른쪽 자식보다 클 수도, 작을 수도 있습니다.
              </p>
            </div>

            <h2>힙의 삽입과 삭제</h2>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>연산</th>
                  <th>시간 복잡도</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>삽입 (insert)</td><td>O(log n)</td><td>마지막에 추가 후 Heapify Up</td></tr>
                <tr><td>최대/최소값 조회 (peek)</td><td>O(1)</td><td>루트 노드 반환</td></tr>
                <tr><td>최대/최소값 추출 (extract)</td><td>O(log n)</td><td>루트 제거 후 Heapify Down</td></tr>
                <tr><td>힙 생성 (Heapify)</td><td>O(n)</td><td>배열로부터 힙 구성 (Bottom-up)</td></tr>
              </tbody>
            </table>

            <div className="code-block">
              <div className="code-header">Python - 최대 힙 구현</div>
              <pre><code>{`class MaxHeap:
    """최대 힙"""

    def __init__(self):
        self.heap = []

    def parent(self, i):
        return (i - 1) // 2

    def left_child(self, i):
        return 2 * i + 1

    def right_child(self, i):
        return 2 * i + 2

    def swap(self, i, j):
        self.heap[i], self.heap[j] = self.heap[j], self.heap[i]

    def insert(self, key):
        """삽입: O(log n)"""
        self.heap.append(key)
        self._heapify_up(len(self.heap) - 1)

    def _heapify_up(self, i):
        """위로 올리며 힙 속성 복원"""
        while i > 0 and self.heap[self.parent(i)] < self.heap[i]:
            self.swap(i, self.parent(i))
            i = self.parent(i)

    def peek(self):
        """최댓값 조회: O(1)"""
        if not self.heap:
            raise IndexError("힙이 비어있습니다")
        return self.heap[0]

    def extract_max(self):
        """최댓값 추출: O(log n)"""
        if not self.heap:
            raise IndexError("힙이 비어있습니다")
        if len(self.heap) == 1:
            return self.heap.pop()

        max_val = self.heap[0]
        self.heap[0] = self.heap.pop()  # 마지막 원소를 루트로
        self._heapify_down(0)
        return max_val

    def _heapify_down(self, i):
        """아래로 내리며 힙 속성 복원"""
        size = len(self.heap)
        while True:
            largest = i
            left = self.left_child(i)
            right = self.right_child(i)

            if left < size and self.heap[left] > self.heap[largest]:
                largest = left
            if right < size and self.heap[right] > self.heap[largest]:
                largest = right

            if largest == i:
                break
            self.swap(i, largest)
            i = largest


# 사용 예시
heap = MaxHeap()
for val in [4, 10, 3, 5, 1, 8, 7]:
    heap.insert(val)

print(f"힙: {heap.heap}")                   # [10, 5, 8, 4, 1, 3, 7]
print(f"최댓값: {heap.peek()}")              # 10
print(f"추출: {heap.extract_max()}")         # 10
print(f"추출: {heap.extract_max()}")         # 8
print(f"힙: {heap.heap}")                   # [7, 5, 3, 4, 1]`}</code></pre>
            </div>

            <h2>힙 정렬</h2>
            <p>
              힙 정렬(Heap Sort)은 힙을 이용한 O(n log n) 정렬 알고리즘입니다.
              추가 메모리 없이 제자리(in-place) 정렬이 가능합니다.
            </p>

            <div className="code-block">
              <div className="code-header">Python - 힙 정렬 구현</div>
              <pre><code>{`def heapify(arr, n, i):
    """인덱스 i를 루트로 하는 서브트리를 최대 힙으로 만들기"""
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)


def heap_sort(arr):
    """힙 정렬: O(n log n), 제자리 정렬"""
    n = len(arr)

    # 1단계: 배열을 최대 힙으로 구성 - O(n)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # 2단계: 하나씩 추출하여 정렬 - O(n log n)
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]  # 최댓값을 맨 뒤로
        heapify(arr, i, 0)               # 축소된 힙 재정렬

    return arr


# 사용 예시
data = [12, 11, 13, 5, 6, 7]
print("정렬 전:", data)
heap_sort(data)
print("정렬 후:", data)  # [5, 6, 7, 11, 12, 13]`}</code></pre>
            </div>

            <h2>Python heapq 모듈</h2>
            <p>
              Python 표준 라이브러리의 <code>heapq</code> 모듈은 <strong>최소 힙</strong>을 제공합니다.
              리스트를 힙처럼 사용할 수 있게 해주는 함수들을 제공합니다.
            </p>

            <div className="code-block">
              <div className="code-header">Python - heapq 모듈 사용법</div>
              <pre><code>{`import heapq

# 기본 사용법 (최소 힙)
heap = []
heapq.heappush(heap, 5)
heapq.heappush(heap, 3)
heapq.heappush(heap, 7)
heapq.heappush(heap, 1)

print(f"힙: {heap}")              # [1, 3, 7, 5]
print(f"최솟값: {heap[0]}")       # 1
print(f"추출: {heapq.heappop(heap)}")  # 1
print(f"추출: {heapq.heappop(heap)}")  # 3

# 리스트를 힙으로 변환
data = [9, 5, 2, 7, 3]
heapq.heapify(data)          # O(n)으로 힙 구성
print(f"heapify: {data}")    # [2, 3, 9, 7, 5]

# 최대 힙처럼 사용하기 (부호 반전)
max_heap = []
for val in [4, 10, 3, 5]:
    heapq.heappush(max_heap, -val)

print(f"최댓값: {-max_heap[0]}")              # 10
print(f"추출: {-heapq.heappop(max_heap)}")    # 10

# nlargest / nsmallest
scores = [85, 92, 78, 95, 88, 73, 91]
print(f"상위 3개: {heapq.nlargest(3, scores)}")    # [95, 92, 91]
print(f"하위 3개: {heapq.nsmallest(3, scores)}")   # [73, 78, 85]`}</code></pre>
            </div>

            <h2>우선순위 큐와의 관계</h2>
            <p>
              우선순위 큐(Priority Queue)는 각 원소가 우선순위를 가지며, 가장 높은(또는 낮은)
              우선순위의 원소가 먼저 나오는 추상 자료형(ADT)입니다.
              힙은 우선순위 큐를 구현하는 가장 효율적인 방법입니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>구현 방법</th>
                  <th>삽입</th>
                  <th>최솟값 추출</th>
                  <th>최솟값 조회</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>정렬된 배열</td><td>O(n)</td><td>O(1)</td><td>O(1)</td></tr>
                <tr><td>정렬되지 않은 배열</td><td>O(1)</td><td>O(n)</td><td>O(n)</td></tr>
                <tr><td>힙</td><td>O(log n)</td><td>O(log n)</td><td>O(1)</td></tr>
              </tbody>
            </table>

            <div className="code-block">
              <div className="code-header">Python - 우선순위 큐 활용 예시</div>
              <pre><code>{`import heapq

# 작업 스케줄러: 우선순위가 높은(숫자가 작은) 작업 먼저 처리
tasks = []
heapq.heappush(tasks, (3, "이메일 확인"))
heapq.heappush(tasks, (1, "긴급 버그 수정"))
heapq.heappush(tasks, (2, "코드 리뷰"))
heapq.heappush(tasks, (5, "문서 작성"))

print("작업 처리 순서:")
while tasks:
    priority, task = heapq.heappop(tasks)
    print(f"  우선순위 {priority}: {task}")

# 출력:
#   우선순위 1: 긴급 버그 수정
#   우선순위 2: 코드 리뷰
#   우선순위 3: 이메일 확인
#   우선순위 5: 문서 작성


# 실전: k개의 정렬된 리스트 병합
def merge_k_sorted(lists):
    result = []
    heap = []
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst[0], i, 0))

    while heap:
        val, list_idx, elem_idx = heapq.heappop(heap)
        result.append(val)
        if elem_idx + 1 < len(lists[list_idx]):
            next_val = lists[list_idx][elem_idx + 1]
            heapq.heappush(heap, (next_val, list_idx, elem_idx + 1))
    return result

lists = [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
print(f"병합: {merge_k_sorted(lists)}")  # [1, 2, 3, 4, 5, 6, 7, 8, 9]`}</code></pre>
            </div>

            <div className="exercise-box">
              <h3>연습 문제</h3>
              <ol>
                <li>[15, 10, 20, 8, 12, 25]를 순서대로 최대 힙에 삽입할 때, 각 단계의 힙 상태를 보이세요.</li>
                <li>최소 힙 클래스를 직접 구현하세요 (heapq 미사용).</li>
                <li>정렬되지 않은 배열에서 k번째로 큰 원소를 힙으로 O(n log k)에 찾는 함수를 작성하세요.</li>
                <li>주어진 배열이 최대 힙 속성을 만족하는지 검증하는 함수를 구현하세요.</li>
                <li>실시간 중앙값(Median)을 구하는 프로그램을 두 개의 힙을 사용하여 구현하세요.</li>
              </ol>
            </div>

            <div className="lesson-nav">
              <Link to="/nonlinear/bst" className="lesson-nav-btn prev">&larr; 이전: 이진 탐색 트리</Link>
              <Link to="/nonlinear/graph" className="lesson-nav-btn next">다음: 그래프 &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HeapPage;
