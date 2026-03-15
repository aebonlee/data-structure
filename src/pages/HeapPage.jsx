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

      {/* Page Header */}
      <div className="page-header" style={{
        background: 'var(--hero-bg)',
        color: '#fff',
        padding: 'calc(var(--nav-height) + 40px) 0 60px',
      }}>
        <div className="container">
          <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px' }}>
            비선형 자료구조
          </p>
          <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '16px' }}>
            힙 (Heap)
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '700px', lineHeight: 1.7 }}>
            힙은 완전 이진 트리 기반의 자료구조로, 우선순위 큐의 구현과 힙 정렬 알고리즘의 핵심입니다.
            최댓값 또는 최솟값을 O(1)에 조회할 수 있습니다.
          </p>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="lesson-content" style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div className="lesson-body" style={{ maxWidth: '860px', margin: '0 auto' }}>

            {/* 힙의 개념 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                힙의 개념
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
                힙(Heap)은 다음 두 가지 조건을 만족하는 자료구조입니다:
              </p>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: 2.0, paddingLeft: '20px', marginBottom: '24px' }}>
                <li><strong>완전 이진 트리</strong>: 마지막 레벨을 제외한 모든 레벨이 채워져 있고, 마지막 레벨은 왼쪽부터 채워집니다.</li>
                <li><strong>힙 속성(Heap Property)</strong>: 부모 노드와 자식 노드 사이에 일정한 대소 관계가 성립합니다.</li>
              </ul>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                힙은 완전 이진 트리이므로 배열로 효율적으로 구현할 수 있습니다.
                인덱스 i의 노드에 대해 부모는 (i-1)//2, 왼쪽 자식은 2i+1, 오른쪽 자식은 2i+2입니다.
              </p>
            </section>

            {/* 최대 힙 / 최소 힙 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                최대 힙 / 최소 힙
              </h2>

              <table className="lesson-table" style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '15px',
                marginBottom: '24px',
              }}>
                <thead>
                  <tr style={{ background: 'var(--primary-blue)', color: '#fff' }}>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap' }}>종류</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600 }}>힙 속성</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600 }}>루트 노드</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600 }}>활용</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['최대 힙 (Max Heap)', '부모 >= 자식', '전체 최댓값', '내림차순 정렬, 최댓값 추출'],
                    ['최소 힙 (Min Heap)', '부모 <= 자식', '전체 최솟값', '오름차순 정렬, 다익스트라'],
                  ].map(([type, prop, root, usage], i) => (
                    <tr key={i} style={{
                      background: i % 2 === 0 ? 'var(--bg-white)' : 'var(--bg-light-gray)',
                      borderBottom: '1px solid var(--border-light)',
                    }}>
                      <td style={{ padding: '12px 20px', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>{type}</td>
                      <td style={{ padding: '12px 20px', fontFamily: 'monospace', color: 'var(--primary-blue)', fontWeight: 700 }}>{prop}</td>
                      <td style={{ padding: '12px 20px', color: 'var(--text-secondary)' }}>{root}</td>
                      <td style={{ padding: '12px 20px', color: 'var(--text-secondary)' }}>{usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="callout-box" style={{
                background: 'var(--primary-blue-bg)',
                border: '1px solid var(--primary-blue)',
                borderRadius: 'var(--radius-md)',
                padding: '24px 28px',
                marginBottom: '24px',
              }}>
                <h4 style={{ color: 'var(--primary-blue)', fontWeight: 700, marginBottom: '12px', fontSize: '16px' }}>
                  힙은 정렬된 구조가 아닙니다!
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
                  힙은 부모-자식 간의 대소 관계만 보장합니다. 형제 노드 사이에는 순서가 없습니다.
                  예를 들어, 최대 힙에서 루트의 왼쪽 자식이 오른쪽 자식보다 클 수도, 작을 수도 있습니다.
                </p>
              </div>
            </section>

            {/* 힙의 삽입과 삭제 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                힙의 삽입과 삭제
              </h2>

              <table className="lesson-table" style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '15px',
                marginBottom: '24px',
              }}>
                <thead>
                  <tr style={{ background: 'var(--primary-blue)', color: '#fff' }}>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600 }}>연산</th>
                    <th style={{ padding: '14px 20px', textAlign: 'center', fontWeight: 600 }}>시간 복잡도</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600 }}>설명</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['삽입 (insert)', 'O(log n)', '마지막에 추가 후 Heapify Up'],
                    ['최대/최소값 조회 (peek)', 'O(1)', '루트 노드 반환'],
                    ['최대/최소값 추출 (extract)', 'O(log n)', '루트 제거 후 Heapify Down'],
                    ['힙 생성 (Heapify)', 'O(n)', '배열로부터 힙 구성 (Bottom-up)'],
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
                  <span>Python - 최대 힙 구현</span>
                </div>
                <pre style={{
                  padding: '20px',
                  color: '#e2e8f0',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  overflow: 'auto',
                  margin: 0,
                }}>
{`class MaxHeap:
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
print(f"힙: {heap.heap}")                   # [7, 5, 3, 4, 1]`}
                </pre>
              </div>
            </section>

            {/* 힙 정렬 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                힙 정렬
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                힙 정렬(Heap Sort)은 힙을 이용한 O(n log n) 정렬 알고리즘입니다.
                추가 메모리 없이 제자리(in-place) 정렬이 가능합니다.
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
                  <span>Python - 힙 정렬 구현</span>
                </div>
                <pre style={{
                  padding: '20px',
                  color: '#e2e8f0',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  overflow: 'auto',
                  margin: 0,
                }}>
{`def heapify(arr, n, i):
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
print("정렬 후:", data)  # [5, 6, 7, 11, 12, 13]`}
                </pre>
              </div>
            </section>

            {/* Python heapq 모듈 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                Python heapq 모듈
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                Python 표준 라이브러리의 <code style={{ background: 'var(--bg-light-gray)', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>heapq</code> 모듈은 <strong>최소 힙</strong>을 제공합니다.
                리스트를 힙처럼 사용할 수 있게 해주는 함수들을 제공합니다.
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
                  <span>Python - heapq 모듈 사용법</span>
                </div>
                <pre style={{
                  padding: '20px',
                  color: '#e2e8f0',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  overflow: 'auto',
                  margin: 0,
                }}>
{`import heapq

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
print(f"하위 3개: {heapq.nsmallest(3, scores)}")   # [73, 78, 85]`}
                </pre>
              </div>
            </section>

            {/* 우선순위 큐와의 관계 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                우선순위 큐와의 관계
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                우선순위 큐(Priority Queue)는 각 원소가 우선순위를 가지며, 가장 높은(또는 낮은)
                우선순위의 원소가 먼저 나오는 추상 자료형(ADT)입니다.
                힙은 우선순위 큐를 구현하는 가장 효율적인 방법입니다.
              </p>

              <table className="lesson-table" style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '15px',
                marginBottom: '24px',
              }}>
                <thead>
                  <tr style={{ background: 'var(--primary-blue)', color: '#fff' }}>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600 }}>구현 방법</th>
                    <th style={{ padding: '14px 20px', textAlign: 'center', fontWeight: 600 }}>삽입</th>
                    <th style={{ padding: '14px 20px', textAlign: 'center', fontWeight: 600 }}>최솟값 추출</th>
                    <th style={{ padding: '14px 20px', textAlign: 'center', fontWeight: 600 }}>최솟값 조회</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['정렬된 배열', 'O(n)', 'O(1)', 'O(1)'],
                    ['정렬되지 않은 배열', 'O(1)', 'O(n)', 'O(n)'],
                    ['힙', 'O(log n)', 'O(log n)', 'O(1)'],
                  ].map(([method, ins, ext, peek], i) => (
                    <tr key={i} style={{
                      background: i % 2 === 0 ? 'var(--bg-white)' : 'var(--bg-light-gray)',
                      borderBottom: '1px solid var(--border-light)',
                    }}>
                      <td style={{ padding: '12px 20px', fontWeight: 600, color: 'var(--text-primary)' }}>{method}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', fontFamily: 'monospace', color: i === 2 ? 'var(--primary-blue)' : 'var(--text-secondary)', fontWeight: i === 2 ? 700 : 400 }}>{ins}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', fontFamily: 'monospace', color: i === 2 ? 'var(--primary-blue)' : 'var(--text-secondary)', fontWeight: i === 2 ? 700 : 400 }}>{ext}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', fontFamily: 'monospace', color: i === 2 ? 'var(--primary-blue)' : 'var(--text-secondary)', fontWeight: i === 2 ? 700 : 400 }}>{peek}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

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
                  <span>Python - 우선순위 큐 활용 예시</span>
                </div>
                <pre style={{
                  padding: '20px',
                  color: '#e2e8f0',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  overflow: 'auto',
                  margin: 0,
                }}>
{`import heapq

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
print(f"병합: {merge_k_sorted(lists)}")  # [1, 2, 3, 4, 5, 6, 7, 8, 9]`}
                </pre>
              </div>
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
                  <li>[15, 10, 20, 8, 12, 25]를 순서대로 최대 힙에 삽입할 때, 각 단계의 힙 상태를 보이세요.</li>
                  <li>최소 힙 클래스를 직접 구현하세요 (heapq 미사용).</li>
                  <li>정렬되지 않은 배열에서 k번째로 큰 원소를 힙으로 O(n log k)에 찾는 함수를 작성하세요.</li>
                  <li>주어진 배열이 최대 힙 속성을 만족하는지 검증하는 함수를 구현하세요.</li>
                  <li>실시간 중앙값(Median)을 구하는 프로그램을 두 개의 힙을 사용하여 구현하세요.</li>
                </ol>
              </div>
            </section>

            {/* Lesson Navigation */}
            <nav className="lesson-nav" data-aos="fade-up" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '24px 0',
              borderTop: '1px solid var(--border-light)',
            }}>
              <Link to="/nonlinear/bst" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'var(--bg-light-gray)',
                color: 'var(--text-primary)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
                transition: 'var(--transition-base)',
              }}>
                <span style={{ fontSize: '18px' }}>&larr;</span>
                이전: 이진 탐색 트리
              </Link>
              <Link to="/nonlinear/graph" style={{
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
                다음: 그래프
                <span style={{ fontSize: '18px' }}>&rarr;</span>
              </Link>
            </nav>

          </div>
        </div>
      </div>
    </>
  );
};

export default HeapPage;
