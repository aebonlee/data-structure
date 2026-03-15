import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const LinkedList = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="연결 리스트 (Linked List) | DS Study"
        description="연결 리스트의 개념, 노드 구조, 단일/이중/원형 연결 리스트, 배열과의 비교를 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>연결 리스트 (Linked List)</h1>
          <p>연결 리스트는 각 요소(노드)가 데이터와 다음 노드를 가리키는 포인터로 구성된 자료구조입니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2>연결 리스트의 개념</h2>
            <p>
              연결 리스트(Linked List)는 데이터를 저장하는 노드(Node)들이 <strong>포인터(참조)</strong>를 통해
              서로 연결된 선형 자료구조입니다. 배열과 달리 메모리 상에서 연속적으로 저장될 필요가 없으며,
              각 노드는 어디에나 위치할 수 있습니다.
            </p>
            <p>
              연결 리스트의 첫 번째 노드를 <strong>헤드(Head)</strong>라고 하며,
              마지막 노드의 다음 포인터는 <code>None</code>(null)을 가리킵니다.
            </p>

            <h2>노드 구조</h2>
            <p>
              연결 리스트의 기본 단위인 노드는 두 가지 필드로 구성됩니다:
              데이터를 저장하는 <strong>data</strong> 필드와 다음 노드를 가리키는 <strong>next</strong> 포인터입니다.
            </p>

            <div className="code-block">
              <div className="code-header">Python - Node 클래스</div>
              <pre><code>{`class Node:
    """연결 리스트의 노드"""
    def __init__(self, data):
        self.data = data    # 데이터 저장
        self.next = None    # 다음 노드를 가리키는 포인터`}</code></pre>
            </div>

            <h2>단일 연결 리스트 (Singly Linked List)</h2>
            <p>
              각 노드가 다음 노드만을 가리키는 가장 기본적인 연결 리스트입니다.
              한 방향으로만 탐색이 가능하며, 이전 노드로 돌아갈 수 없습니다.
            </p>

            <div className="code-block">
              <div className="code-header">Python - 단일 연결 리스트 구현</div>
              <pre><code>{`class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        """끝에 노드 추가"""
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def prepend(self, data):
        """앞에 노드 추가"""
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def delete(self, data):
        """특정 값의 노드 삭제"""
        if not self.head:
            return
        if self.head.data == data:
            self.head = self.head.next
            return
        current = self.head
        while current.next:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next

    def display(self):
        """리스트 출력"""
        elements = []
        current = self.head
        while current:
            elements.append(str(current.data))
            current = current.next
        print(" -> ".join(elements) + " -> None")

# 사용 예시
ll = SinglyLinkedList()
ll.append(10)
ll.append(20)
ll.append(30)
ll.prepend(5)
ll.display()    # 5 -> 10 -> 20 -> 30 -> None

ll.delete(20)
ll.display()    # 5 -> 10 -> 30 -> None`}</code></pre>
            </div>

            <h2>이중 연결 리스트 (Doubly Linked List)</h2>
            <p>
              각 노드가 이전 노드(prev)와 다음 노드(next) 모두를 가리키는 연결 리스트입니다.
              양방향 탐색이 가능하지만, 추가 메모리가 필요합니다.
            </p>

            <div className="code-block">
              <div className="code-header">Python - 이중 연결 리스트 노드</div>
              <pre><code>{`class DoublyNode:
    """이중 연결 리스트의 노드"""
    def __init__(self, data):
        self.data = data
        self.prev = None    # 이전 노드
        self.next = None    # 다음 노드

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, data):
        """끝에 노드 추가"""
        new_node = DoublyNode(data)
        if not self.head:
            self.head = new_node
            self.tail = new_node
            return
        new_node.prev = self.tail
        self.tail.next = new_node
        self.tail = new_node

    def display_forward(self):
        """정방향 출력"""
        elements = []
        current = self.head
        while current:
            elements.append(str(current.data))
            current = current.next
        print(" <-> ".join(elements))

    def display_backward(self):
        """역방향 출력"""
        elements = []
        current = self.tail
        while current:
            elements.append(str(current.data))
            current = current.prev
        print(" <-> ".join(elements))`}</code></pre>
            </div>

            <h2>원형 연결 리스트 (Circular Linked List)</h2>
            <p>
              마지막 노드의 next 포인터가 첫 번째 노드(head)를 가리켜 원형 구조를 이루는 연결 리스트입니다.
              라운드 로빈 스케줄링, 순환 큐 구현 등에 활용됩니다.
            </p>

            <div className="callout-box">
              <h3>원형 연결 리스트의 특징</h3>
              <ul>
                <li>끝이 없으므로 어떤 노드에서든 모든 노드에 접근 가능합니다.</li>
                <li>마지막 노드의 next가 head를 가리키므로 종료 조건에 주의해야 합니다.</li>
                <li>단일 원형, 이중 원형 연결 리스트 모두 구현 가능합니다.</li>
              </ul>
            </div>

            <h2>배열 vs 연결 리스트 비교</h2>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>항목</th>
                  <th>배열</th>
                  <th>연결 리스트</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>접근</td>
                  <td>O(1)</td>
                  <td>O(n)</td>
                </tr>
                <tr>
                  <td>탐색</td>
                  <td>O(n)</td>
                  <td>O(n)</td>
                </tr>
                <tr>
                  <td>삽입 (앞)</td>
                  <td>O(n)</td>
                  <td>O(1)</td>
                </tr>
                <tr>
                  <td>삽입 (끝)</td>
                  <td>O(1)*</td>
                  <td>O(1)**</td>
                </tr>
                <tr>
                  <td>삭제</td>
                  <td>O(n)</td>
                  <td>O(1)***</td>
                </tr>
                <tr>
                  <td>메모리 할당</td>
                  <td>연속적</td>
                  <td>비연속적</td>
                </tr>
                <tr>
                  <td>크기 변경</td>
                  <td>비용 큼</td>
                  <td>용이함</td>
                </tr>
                <tr>
                  <td>추가 메모리</td>
                  <td>없음</td>
                  <td>포인터 필요</td>
                </tr>
                <tr>
                  <td>캐시 성능</td>
                  <td>우수</td>
                  <td>불리</td>
                </tr>
              </tbody>
            </table>
            <p>
              * 동적 배열 기준 분할 상환 O(1) |
              ** tail 포인터가 있는 경우 |
              *** 삭제할 노드의 참조를 이미 알고 있는 경우
            </p>

            <div className="exercise-box">
              <h3>연습 문제</h3>
              <ol>
                <li>단일 연결 리스트에서 특정 값을 검색하는 함수를 작성하세요.</li>
                <li>연결 리스트를 역순으로 뒤집는 함수를 구현하세요.</li>
                <li>두 개의 정렬된 연결 리스트를 병합하는 함수를 작성하세요.</li>
                <li>연결 리스트에서 순환(cycle)이 있는지 판별하는 알고리즘을 구현하세요.</li>
              </ol>
            </div>

            <div className="lesson-nav">
              <Link to="/linear/array" className="lesson-nav-btn prev">&larr; 이전: 배열</Link>
              <Link to="/linear/stack" className="lesson-nav-btn next">다음: 스택 &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LinkedList;
