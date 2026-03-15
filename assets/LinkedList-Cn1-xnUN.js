import{j as e,L as n}from"./index-CVo8V7ks.js";import{S as s}from"./SEOHead-BGBQJGB_.js";import{u as d}from"./useAOS-3SdaABqu.js";const i=()=>(d(),e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"연결 리스트 (Linked List) | DS Study",description:"연결 리스트의 개념, 노드 구조, 단일/이중/원형 연결 리스트, 배열과의 비교를 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"연결 리스트 (Linked List)"}),e.jsx("p",{children:"연결 리스트는 각 요소(노드)가 데이터와 다음 노드를 가리키는 포인터로 구성된 자료구조입니다."})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"연결 리스트의 개념"}),e.jsxs("p",{children:["연결 리스트(Linked List)는 데이터를 저장하는 노드(Node)들이 ",e.jsx("strong",{children:"포인터(참조)"}),"를 통해 서로 연결된 선형 자료구조입니다. 배열과 달리 메모리 상에서 연속적으로 저장될 필요가 없으며, 각 노드는 어디에나 위치할 수 있습니다."]}),e.jsxs("p",{children:["연결 리스트의 첫 번째 노드를 ",e.jsx("strong",{children:"헤드(Head)"}),"라고 하며, 마지막 노드의 다음 포인터는 ",e.jsx("code",{children:"None"}),"(null)을 가리킵니다."]}),e.jsx("h2",{children:"노드 구조"}),e.jsxs("p",{children:["연결 리스트의 기본 단위인 노드는 두 가지 필드로 구성됩니다: 데이터를 저장하는 ",e.jsx("strong",{children:"data"})," 필드와 다음 노드를 가리키는 ",e.jsx("strong",{children:"next"})," 포인터입니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Python - Node 클래스"}),e.jsx("pre",{children:e.jsx("code",{children:`class Node:
    """연결 리스트의 노드"""
    def __init__(self, data):
        self.data = data    # 데이터 저장
        self.next = None    # 다음 노드를 가리키는 포인터`})})]}),e.jsx("h2",{children:"단일 연결 리스트 (Singly Linked List)"}),e.jsx("p",{children:"각 노드가 다음 노드만을 가리키는 가장 기본적인 연결 리스트입니다. 한 방향으로만 탐색이 가능하며, 이전 노드로 돌아갈 수 없습니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Python - 단일 연결 리스트 구현"}),e.jsx("pre",{children:e.jsx("code",{children:`class SinglyLinkedList:
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
ll.display()    # 5 -> 10 -> 30 -> None`})})]}),e.jsx("h2",{children:"이중 연결 리스트 (Doubly Linked List)"}),e.jsx("p",{children:"각 노드가 이전 노드(prev)와 다음 노드(next) 모두를 가리키는 연결 리스트입니다. 양방향 탐색이 가능하지만, 추가 메모리가 필요합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Python - 이중 연결 리스트 노드"}),e.jsx("pre",{children:e.jsx("code",{children:`class DoublyNode:
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
        print(" <-> ".join(elements))`})})]}),e.jsx("h2",{children:"원형 연결 리스트 (Circular Linked List)"}),e.jsx("p",{children:"마지막 노드의 next 포인터가 첫 번째 노드(head)를 가리켜 원형 구조를 이루는 연결 리스트입니다. 라운드 로빈 스케줄링, 순환 큐 구현 등에 활용됩니다."}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"원형 연결 리스트의 특징"}),e.jsxs("ul",{children:[e.jsx("li",{children:"끝이 없으므로 어떤 노드에서든 모든 노드에 접근 가능합니다."}),e.jsx("li",{children:"마지막 노드의 next가 head를 가리키므로 종료 조건에 주의해야 합니다."}),e.jsx("li",{children:"단일 원형, 이중 원형 연결 리스트 모두 구현 가능합니다."})]})]}),e.jsx("h2",{children:"배열 vs 연결 리스트 비교"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"항목"}),e.jsx("th",{children:"배열"}),e.jsx("th",{children:"연결 리스트"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"접근"}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(n)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"탐색"}),e.jsx("td",{children:"O(n)"}),e.jsx("td",{children:"O(n)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"삽입 (앞)"}),e.jsx("td",{children:"O(n)"}),e.jsx("td",{children:"O(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"삽입 (끝)"}),e.jsx("td",{children:"O(1)*"}),e.jsx("td",{children:"O(1)**"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"삭제"}),e.jsx("td",{children:"O(n)"}),e.jsx("td",{children:"O(1)***"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"메모리 할당"}),e.jsx("td",{children:"연속적"}),e.jsx("td",{children:"비연속적"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"크기 변경"}),e.jsx("td",{children:"비용 큼"}),e.jsx("td",{children:"용이함"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"추가 메모리"}),e.jsx("td",{children:"없음"}),e.jsx("td",{children:"포인터 필요"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"캐시 성능"}),e.jsx("td",{children:"우수"}),e.jsx("td",{children:"불리"})]})]})]}),e.jsx("p",{children:"* 동적 배열 기준 분할 상환 O(1) | ** tail 포인터가 있는 경우 | *** 삭제할 노드의 참조를 이미 알고 있는 경우"}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습 문제"}),e.jsxs("ol",{children:[e.jsx("li",{children:"단일 연결 리스트에서 특정 값을 검색하는 함수를 작성하세요."}),e.jsx("li",{children:"연결 리스트를 역순으로 뒤집는 함수를 구현하세요."}),e.jsx("li",{children:"두 개의 정렬된 연결 리스트를 병합하는 함수를 작성하세요."}),e.jsx("li",{children:"연결 리스트에서 순환(cycle)이 있는지 판별하는 알고리즘을 구현하세요."})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(n,{to:"/linear/array",className:"lesson-nav-btn prev",children:"← 이전: 배열"}),e.jsx(n,{to:"/linear/stack",className:"lesson-nav-btn next",children:"다음: 스택 →"})]})]})})})]}));export{i as default};
