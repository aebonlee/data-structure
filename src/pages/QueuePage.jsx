import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const QueuePage = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="큐 (Queue) | DS Study"
        description="큐의 개념(FIFO), 주요 연산, 원형 큐, 우선순위 큐, 활용 사례를 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>큐 (Queue)</h1>
          <p>큐는 선입선출(FIFO) 원칙을 따르는 자료구조로, 가장 먼저 삽입된 데이터가 가장 먼저 제거됩니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2>큐의 개념 (FIFO)</h2>
            <p>
              큐(Queue)는 <strong>선입선출(FIFO: First In, First Out)</strong> 원칙을 따르는 선형 자료구조입니다.
              은행 창구의 대기줄처럼, 먼저 줄을 선 사람이 먼저 서비스를 받는 구조입니다.
            </p>
            <p>
              큐는 뒤쪽(rear)에서 데이터를 삽입하고, 앞쪽(front)에서 데이터를 제거합니다.
              이러한 특성 때문에 작업 스케줄링, 너비 우선 탐색(BFS), 버퍼 관리 등에 널리 활용됩니다.
            </p>

            <h2>주요 연산</h2>

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
                  <td>enqueue(item)</td>
                  <td>O(1)</td>
                  <td>큐의 뒤쪽(rear)에 요소를 추가합니다.</td>
                </tr>
                <tr>
                  <td>dequeue()</td>
                  <td>O(1)</td>
                  <td>큐의 앞쪽(front) 요소를 제거하고 반환합니다.</td>
                </tr>
                <tr>
                  <td>front() / peek()</td>
                  <td>O(1)</td>
                  <td>큐의 앞쪽 요소를 제거하지 않고 반환합니다.</td>
                </tr>
                <tr>
                  <td>isEmpty()</td>
                  <td>O(1)</td>
                  <td>큐가 비어있는지 확인합니다.</td>
                </tr>
                <tr>
                  <td>size()</td>
                  <td>O(1)</td>
                  <td>큐에 들어있는 요소의 개수를 반환합니다.</td>
                </tr>
              </tbody>
            </table>

            <div className="code-block">
              <div className="code-header">Python - 큐 기본 구현</div>
              <pre><code>{`from collections import deque

class Queue:
    """deque 기반 큐 구현"""
    def __init__(self):
        self.items = deque()

    def enqueue(self, item):
        """큐에 요소 추가 (뒤쪽)"""
        self.items.append(item)

    def dequeue(self):
        """큐에서 요소 제거 (앞쪽)"""
        if self.is_empty():
            raise IndexError("큐가 비어있습니다")
        return self.items.popleft()

    def front(self):
        """큐의 앞쪽 요소 확인"""
        if self.is_empty():
            raise IndexError("큐가 비어있습니다")
        return self.items[0]

    def is_empty(self):
        """큐가 비어있는지 확인"""
        return len(self.items) == 0

    def size(self):
        """큐의 크기 반환"""
        return len(self.items)

# 사용 예시
q = Queue()
q.enqueue("A")
q.enqueue("B")
q.enqueue("C")

print(q.front())      # A
print(q.dequeue())    # A
print(q.dequeue())    # B
print(q.size())       # 1`}</code></pre>
            </div>

            <h2>원형 큐 (Circular Queue)</h2>
            <p>
              원형 큐는 배열의 끝과 시작이 연결된 형태로, 고정 크기 배열에서 큐를 효율적으로 구현할 수 있습니다.
              front와 rear 포인터가 배열의 끝에 도달하면 다시 처음으로 돌아가므로 메모리 낭비를 방지합니다.
            </p>

            <div className="code-block">
              <div className="code-header">Python - 원형 큐 구현</div>
              <pre><code>{`class CircularQueue:
    """고정 크기 원형 큐 구현"""
    def __init__(self, capacity):
        self.capacity = capacity
        self.queue = [None] * capacity
        self.front = 0
        self.rear = -1
        self.count = 0

    def enqueue(self, item):
        """원형 큐에 요소 추가"""
        if self.is_full():
            raise OverflowError("큐가 가득 찼습니다")
        self.rear = (self.rear + 1) % self.capacity
        self.queue[self.rear] = item
        self.count += 1

    def dequeue(self):
        """원형 큐에서 요소 제거"""
        if self.is_empty():
            raise IndexError("큐가 비어있습니다")
        item = self.queue[self.front]
        self.queue[self.front] = None
        self.front = (self.front + 1) % self.capacity
        self.count -= 1
        return item

    def is_empty(self):
        return self.count == 0

    def is_full(self):
        return self.count == self.capacity

# 사용 예시
cq = CircularQueue(5)
cq.enqueue(1)
cq.enqueue(2)
cq.enqueue(3)
print(cq.dequeue())   # 1
cq.enqueue(4)
cq.enqueue(5)
cq.enqueue(6)         # rear가 앞으로 돌아감`}</code></pre>
            </div>

            <h2>우선순위 큐 소개 (Priority Queue)</h2>
            <p>
              우선순위 큐는 각 요소에 우선순위가 부여되어, 우선순위가 높은 요소가 먼저 제거되는 자료구조입니다.
              일반적으로 힙(Heap) 자료구조로 구현하며, Python에서는 <code>heapq</code> 모듈을 사용합니다.
            </p>

            <div className="code-block">
              <div className="code-header">Python - 우선순위 큐 (heapq)</div>
              <pre><code>{`import heapq

# 최소 힙 기반 우선순위 큐
pq = []
heapq.heappush(pq, (3, "낮은 우선순위"))
heapq.heappush(pq, (1, "높은 우선순위"))
heapq.heappush(pq, (2, "중간 우선순위"))

# 우선순위가 높은(숫자가 낮은) 순서로 제거
print(heapq.heappop(pq))   # (1, '높은 우선순위')
print(heapq.heappop(pq))   # (2, '중간 우선순위')
print(heapq.heappop(pq))   # (3, '낮은 우선순위')`}</code></pre>
            </div>

            <h2>큐의 활용</h2>

            <div className="callout-box">
              <h3>큐가 활용되는 대표적인 사례</h3>
              <ul>
                <li><strong>BFS (너비 우선 탐색)</strong> : 그래프나 트리에서 레벨 순서로 노드를 탐색합니다.</li>
                <li><strong>작업 스케줄링</strong> : 운영체제의 프로세스 스케줄링, 프린터 대기열 등에 활용됩니다.</li>
                <li><strong>버퍼 관리</strong> : 데이터의 생산 속도와 소비 속도가 다른 경우 중간 버퍼로 사용됩니다.</li>
                <li><strong>캐시 구현</strong> : FIFO 캐시 교체 정책에서 사용됩니다.</li>
                <li><strong>이벤트 처리</strong> : GUI 이벤트, 네트워크 패킷 처리 등에 활용됩니다.</li>
              </ul>
            </div>

            <h3>BFS 예제</h3>

            <div className="code-block">
              <div className="code-header">Python - BFS (너비 우선 탐색)</div>
              <pre><code>{`from collections import deque

def bfs(graph, start):
    """큐를 이용한 너비 우선 탐색"""
    visited = set()
    queue = deque([start])
    visited.add(start)
    result = []

    while queue:
        node = queue.popleft()    # dequeue
        result.append(node)

        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)  # enqueue

    return result

# 그래프 (인접 리스트)
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

print(bfs(graph, 'A'))  # ['A', 'B', 'C', 'D', 'E', 'F']`}</code></pre>
            </div>

            <div className="exercise-box">
              <h3>연습 문제</h3>
              <ol>
                <li>큐 두 개를 이용하여 스택을 구현하세요.</li>
                <li>원형 큐를 연결 리스트로 구현하세요.</li>
                <li>최근 N개의 요청에 대한 평균 응답 시간을 구하는 큐 기반 시스템을 설계하세요.</li>
                <li>큐를 이용하여 이진 트리의 레벨 순서 순회를 구현하세요.</li>
              </ol>
            </div>

            <div className="lesson-nav">
              <Link to="/linear/stack" className="lesson-nav-btn prev">&larr; 이전: 스택</Link>
              <Link to="/linear/deque" className="lesson-nav-btn next">다음: 덱 &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default QueuePage;
