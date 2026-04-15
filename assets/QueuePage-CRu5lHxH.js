import{j as e,L as s}from"./index-Dx7btcoz.js";import{S as r}from"./SEOHead-panwKb0o.js";import{u as i}from"./useAOS-CuiPokAf.js";const c=()=>(i(),e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"큐 (Queue) | DS Study",description:"큐의 개념(FIFO), 주요 연산, 원형 큐, 우선순위 큐, 활용 사례를 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"큐 (Queue)"}),e.jsx("p",{children:"큐는 선입선출(FIFO) 원칙을 따르는 자료구조로, 가장 먼저 삽입된 데이터가 가장 먼저 제거됩니다."})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"큐의 개념 (FIFO)"}),e.jsxs("p",{children:["큐(Queue)는 ",e.jsx("strong",{children:"선입선출(FIFO: First In, First Out)"})," 원칙을 따르는 선형 자료구조입니다. 은행 창구의 대기줄처럼, 먼저 줄을 선 사람이 먼저 서비스를 받는 구조입니다."]}),e.jsx("p",{children:"큐는 뒤쪽(rear)에서 데이터를 삽입하고, 앞쪽(front)에서 데이터를 제거합니다. 이러한 특성 때문에 작업 스케줄링, 너비 우선 탐색(BFS), 버퍼 관리 등에 널리 활용됩니다."}),e.jsx("h2",{children:"주요 연산"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"연산"}),e.jsx("th",{children:"시간 복잡도"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"enqueue(item)"}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"큐의 뒤쪽(rear)에 요소를 추가합니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"dequeue()"}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"큐의 앞쪽(front) 요소를 제거하고 반환합니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"front() / peek()"}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"큐의 앞쪽 요소를 제거하지 않고 반환합니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"isEmpty()"}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"큐가 비어있는지 확인합니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"size()"}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"큐에 들어있는 요소의 개수를 반환합니다."})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Python - 큐 기본 구현"}),e.jsx("pre",{children:e.jsx("code",{children:`from collections import deque

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
print(q.size())       # 1`})})]}),e.jsx("h2",{children:"원형 큐 (Circular Queue)"}),e.jsx("p",{children:"원형 큐는 배열의 끝과 시작이 연결된 형태로, 고정 크기 배열에서 큐를 효율적으로 구현할 수 있습니다. front와 rear 포인터가 배열의 끝에 도달하면 다시 처음으로 돌아가므로 메모리 낭비를 방지합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Python - 원형 큐 구현"}),e.jsx("pre",{children:e.jsx("code",{children:`class CircularQueue:
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
cq.enqueue(6)         # rear가 앞으로 돌아감`})})]}),e.jsx("h2",{children:"우선순위 큐 소개 (Priority Queue)"}),e.jsxs("p",{children:["우선순위 큐는 각 요소에 우선순위가 부여되어, 우선순위가 높은 요소가 먼저 제거되는 자료구조입니다. 일반적으로 힙(Heap) 자료구조로 구현하며, Python에서는 ",e.jsx("code",{children:"heapq"})," 모듈을 사용합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Python - 우선순위 큐 (heapq)"}),e.jsx("pre",{children:e.jsx("code",{children:`import heapq

# 최소 힙 기반 우선순위 큐
pq = []
heapq.heappush(pq, (3, "낮은 우선순위"))
heapq.heappush(pq, (1, "높은 우선순위"))
heapq.heappush(pq, (2, "중간 우선순위"))

# 우선순위가 높은(숫자가 낮은) 순서로 제거
print(heapq.heappop(pq))   # (1, '높은 우선순위')
print(heapq.heappop(pq))   # (2, '중간 우선순위')
print(heapq.heappop(pq))   # (3, '낮은 우선순위')`})})]}),e.jsx("h2",{children:"큐의 활용"}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"큐가 활용되는 대표적인 사례"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"BFS (너비 우선 탐색)"})," : 그래프나 트리에서 레벨 순서로 노드를 탐색합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"작업 스케줄링"})," : 운영체제의 프로세스 스케줄링, 프린터 대기열 등에 활용됩니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"버퍼 관리"})," : 데이터의 생산 속도와 소비 속도가 다른 경우 중간 버퍼로 사용됩니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"캐시 구현"})," : FIFO 캐시 교체 정책에서 사용됩니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"이벤트 처리"})," : GUI 이벤트, 네트워크 패킷 처리 등에 활용됩니다."]})]})]}),e.jsx("h3",{children:"BFS 예제"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Python - BFS (너비 우선 탐색)"}),e.jsx("pre",{children:e.jsx("code",{children:`from collections import deque

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

print(bfs(graph, 'A'))  # ['A', 'B', 'C', 'D', 'E', 'F']`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습 문제"}),e.jsxs("ol",{children:[e.jsx("li",{children:"큐 두 개를 이용하여 스택을 구현하세요."}),e.jsx("li",{children:"원형 큐를 연결 리스트로 구현하세요."}),e.jsx("li",{children:"최근 N개의 요청에 대한 평균 응답 시간을 구하는 큐 기반 시스템을 설계하세요."}),e.jsx("li",{children:"큐를 이용하여 이진 트리의 레벨 순서 순회를 구현하세요."})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/linear/stack",className:"lesson-nav-btn prev",children:"← 이전: 스택"}),e.jsx(s,{to:"/linear/deque",className:"lesson-nav-btn next",children:"다음: 덱 →"})]})]})})})]}));export{c as default};
