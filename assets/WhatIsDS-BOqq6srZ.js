import{j as s,L as e}from"./index-HfbyAuvy.js";import{S as i}from"./SEOHead-7ciOyLLe.js";import{u as r}from"./useAOS-DkT2NrQ9.js";const c=()=>(r(),s.jsxs(s.Fragment,{children:[s.jsx(i,{title:"자료구조란? | DS Study",description:"자료구조의 정의, 분류, 추상 자료형(ADT)의 개념과 자료구조 선택 기준을 학습합니다."}),s.jsx("section",{className:"page-header",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{children:"자료구조란?"}),s.jsx("p",{children:"데이터를 효율적으로 저장, 관리, 처리하기 위한 체계적인 구조를 학습합니다."})]})}),s.jsx("section",{className:"section lesson-content",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"lesson-body",children:[s.jsx("h2",{id:"definition",children:"자료구조의 정의"}),s.jsxs("p",{children:[s.jsx("strong",{children:"자료구조(Data Structure)"}),"란 데이터를 효율적으로 저장하고, 관리하며, 처리하기 위해 데이터를 조직화하는 방법을 의미합니다. 컴퓨터 과학에서 가장 핵심적인 개념 중 하나로, 프로그램의 성능과 효율성에 직접적인 영향을 미칩니다."]}),s.jsx("p",{children:"현실 세계에서 도서관의 책을 분류 체계에 따라 정리하듯이, 컴퓨터에서도 데이터를 특정 규칙과 구조에 따라 정리해야 빠르게 찾고, 수정하고, 삭제할 수 있습니다. 이러한 데이터의 조직화 방식이 바로 자료구조입니다."}),s.jsxs("div",{className:"callout-box",children:[s.jsx("h3",{children:"핵심 정의"}),s.jsx("p",{children:"자료구조는 데이터의 저장(Storage), 조직(Organization), 관리(Management)를 위한 형식이며, 효율적인 접근(Access)과 수정(Modification)을 가능하게 합니다."})]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"Python - 자료구조의 기본 예시"}),s.jsx("pre",{children:s.jsx("code",{children:`# 리스트(배열) - 순서가 있는 데이터 모음
fruits = ["사과", "바나나", "체리", "딸기"]
print(fruits[0])   # "사과" - 인덱스로 접근: O(1)
fruits.append("포도")  # 끝에 추가: O(1)

# 딕셔너리(해시 테이블) - 키-값 쌍으로 데이터 저장
student = {
    "이름": "김철수",
    "학번": 20240001,
    "전공": "컴퓨터공학"
}
print(student["이름"])  # "김철수" - 키로 접근: O(1)

# 집합(Set) - 중복을 허용하지 않는 데이터 모음
unique_numbers = {1, 2, 3, 4, 5, 5, 3}
print(unique_numbers)  # {1, 2, 3, 4, 5}`})})]}),s.jsx("h2",{id:"importance",children:"자료구조가 중요한 이유"}),s.jsx("p",{children:"같은 문제를 해결하더라도 어떤 자료구조를 선택하느냐에 따라 프로그램의 성능이 크게 달라질 수 있습니다. 적절한 자료구조의 선택은 다음과 같은 이점을 제공합니다."}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"실행 속도 향상:"})," 올바른 자료구조를 사용하면 데이터 검색, 삽입, 삭제 등의 연산 속도를 크게 개선할 수 있습니다. 예를 들어, 정렬된 배열에서 이진 탐색을 사용하면 O(log n)에 원소를 찾을 수 있습니다."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"메모리 효율성:"})," 데이터의 특성에 맞는 자료구조를 선택하면 불필요한 메모리 낭비를 줄일 수 있습니다. 예를 들어, 희소 행렬(Sparse Matrix)은 연결 리스트로 저장하면 메모리를 절약할 수 있습니다."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"코드 가독성:"}),' 적절한 자료구조는 코드의 의도를 명확하게 표현하여 유지보수를 용이하게 합니다. 스택은 "되돌리기(Undo)" 기능을, 큐는 "대기열" 개념을 자연스럽게 표현합니다.']}),s.jsxs("li",{children:[s.jsx("strong",{children:"문제 해결 능력:"})," 자료구조에 대한 깊은 이해는 복잡한 알고리즘 문제를 효과적으로 해결하는 데 필수적입니다. 코딩 테스트와 실무 모두에서 핵심 역량입니다."]})]}),s.jsxs("div",{className:"callout-box",children:[s.jsx("h3",{children:"실무 예시"}),s.jsx("p",{children:'SNS에서 친구 관계를 표현할 때 배열 대신 그래프 자료구조를 사용하면 "친구의 친구 찾기" 같은 연산을 효율적으로 수행할 수 있습니다. 배열로 처리하면 O(n²)이 걸릴 수 있지만, 그래프의 BFS를 사용하면 O(V + E)로 해결할 수 있습니다.'})]}),s.jsx("h2",{id:"classification",children:"자료구조의 분류"}),s.jsxs("p",{children:["자료구조는 데이터 간의 관계와 구조에 따라 크게 ",s.jsx("strong",{children:"선형 자료구조"}),"와",s.jsx("strong",{children:" 비선형 자료구조"}),"로 분류됩니다. 각각의 특성을 이해하고 상황에 맞게 활용하는 것이 중요합니다."]}),s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"분류"}),s.jsx("th",{children:"자료구조"}),s.jsx("th",{children:"특징"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{rowSpan:5,children:s.jsx("strong",{children:"선형 자료구조"})}),s.jsx("td",{children:"배열 (Array)"}),s.jsx("td",{children:"연속된 메모리 공간, 인덱스를 이용한 빠른 접근 O(1)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"연결 리스트 (Linked List)"}),s.jsx("td",{children:"포인터로 연결된 노드, 동적 크기 조절 가능"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"스택 (Stack)"}),s.jsx("td",{children:"LIFO 구조, 함수 호출 스택/되돌리기 기능에 활용"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"큐 (Queue)"}),s.jsx("td",{children:"FIFO 구조, 작업 스케줄링/BFS에 활용"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"덱 (Deque)"}),s.jsx("td",{children:"양쪽 끝에서 삽입/삭제 가능, 슬라이딩 윈도우에 활용"})]}),s.jsxs("tr",{children:[s.jsx("td",{rowSpan:5,children:s.jsx("strong",{children:"비선형 자료구조"})}),s.jsx("td",{children:"트리 (Tree)"}),s.jsx("td",{children:"계층적 구조, 파일 시스템/DOM 구조 표현"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"이진 트리 (Binary Tree)"}),s.jsx("td",{children:"각 노드가 최대 2개의 자식, 수식 트리/허프만 코딩에 활용"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"힙 (Heap)"}),s.jsx("td",{children:"완전 이진 트리, 우선순위 큐 구현에 활용"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"그래프 (Graph)"}),s.jsx("td",{children:"정점과 간선으로 구성, 네트워크/경로 탐색에 활용"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"해시 테이블 (Hash Table)"}),s.jsx("td",{children:"해시 함수를 이용한 키-값 저장, 평균 O(1) 접근"})]})]})]}),s.jsxs("p",{children:[s.jsx("strong",{children:"선형 자료구조"}),"는 데이터가 일렬로 나열된 구조로, 하나의 데이터 뒤에 하나의 데이터만 연결됩니다. 배열, 연결 리스트, 스택, 큐가 대표적입니다."]}),s.jsxs("p",{children:[s.jsx("strong",{children:"비선형 자료구조"}),"는 데이터 간의 관계가 1:N 또는 N:N인 구조로, 하나의 데이터가 여러 데이터와 연결될 수 있습니다. 트리, 그래프가 대표적입니다."]}),s.jsx("h2",{id:"adt",children:"추상 자료형 (ADT)"}),s.jsxs("p",{children:[s.jsx("strong",{children:"추상 자료형(Abstract Data Type, ADT)"}),"은 자료구조의 논리적인 동작 방식을 정의한 것으로, 구현 세부사항은 숨기고 ",s.jsx("strong",{children:"무엇을(What)"}),' 할 수 있는지만 명시합니다. 즉, "어떤 연산이 가능한가"를 정의하되 "어떻게 구현되는가"는 포함하지 않습니다.']}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"Python - 스택 ADT 구현 예시"}),s.jsx("pre",{children:s.jsx("code",{children:`# 스택 ADT의 핵심 연산:
# - push(item): 스택의 맨 위에 원소를 추가
# - pop(): 스택의 맨 위 원소를 제거하고 반환
# - peek(): 스택의 맨 위 원소를 반환 (제거하지 않음)
# - is_empty(): 스택이 비어있는지 확인

class Stack:
    def __init__(self):
        self._items = []  # 내부 구현은 리스트 사용

    def push(self, item):
        """스택의 맨 위에 원소를 추가"""
        self._items.append(item)

    def pop(self):
        """스택의 맨 위 원소를 제거하고 반환"""
        if self.is_empty():
            raise IndexError("빈 스택에서 pop 불가")
        return self._items.pop()

    def peek(self):
        """스택의 맨 위 원소를 반환"""
        if self.is_empty():
            raise IndexError("빈 스택에서 peek 불가")
        return self._items[-1]

    def is_empty(self):
        """스택이 비어있는지 확인"""
        return len(self._items) == 0

    def size(self):
        """스택의 크기를 반환"""
        return len(self._items)

# 사용 예시
stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)
print(stack.peek())  # 30
print(stack.pop())   # 30
print(stack.size())  # 2`})})]}),s.jsxs("p",{children:["ADT의 핵심 아이디어는 ",s.jsx("strong",{children:"캡슐화(Encapsulation)"}),"입니다. 사용자는 ADT가 제공하는 연산만 알면 되고, 내부 구현이 배열인지 연결 리스트인지 알 필요가 없습니다. 이를 통해 구현을 변경하더라도 사용하는 코드는 수정할 필요가 없습니다."]}),s.jsxs("div",{className:"callout-box",children:[s.jsx("h3",{children:"ADT vs 자료구조"}),s.jsx("p",{children:'ADT는 "무엇을 할 수 있는가"를 정의하는 추상적 개념이고, 자료구조는 "어떻게 구현하는가"를 다루는 구체적 구현입니다. 예를 들어, "리스트 ADT"는 배열로도, 연결 리스트로도 구현할 수 있습니다.'})]}),s.jsx("h2",{id:"selection-criteria",children:"자료구조 선택 기준"}),s.jsx("p",{children:"프로그램을 개발할 때 적절한 자료구조를 선택하는 것은 매우 중요합니다. 다음과 같은 기준을 고려하여 자료구조를 선택해야 합니다."}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"데이터의 크기와 범위:"})," 저장해야 할 데이터의 양이 고정적인지 동적인지에 따라 배열 또는 연결 리스트를 선택합니다."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"주요 연산의 빈도:"})," 삽입/삭제가 빈번하면 연결 리스트가, 검색이 빈번하면 해시 테이블이나 이진 탐색 트리가 적합합니다."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"메모리 제약:"})," 메모리가 제한적인 환경에서는 메모리 효율적인 자료구조(배열 등)를 우선 고려합니다."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"데이터 간의 관계:"})," 계층적 관계는 트리, 네트워크 관계는 그래프, 순서 관계는 선형 자료구조가 적합합니다."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"정렬 필요 여부:"})," 항상 정렬된 상태를 유지해야 하면 이진 탐색 트리나 힙을 고려합니다."]})]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"Python - 상황별 자료구조 선택 예시"}),s.jsx("pre",{children:s.jsx("code",{children:`# 1. 빠른 검색이 필요한 경우 → 딕셔너리(해시 테이블)
phone_book = {}
phone_book["김철수"] = "010-1234-5678"
phone_book["이영희"] = "010-9876-5432"
print(phone_book["김철수"])  # O(1)에 검색

# 2. 정렬된 데이터에서 범위 검색 → 정렬된 리스트 + 이진 탐색
import bisect
sorted_scores = [55, 62, 78, 85, 91, 95]
# 80점 이상인 학생의 위치 찾기
idx = bisect.bisect_left(sorted_scores, 80)
print(sorted_scores[idx:])  # [85, 91, 95]

# 3. 최근 작업 이력 관리 → 스택
undo_stack = []
undo_stack.append("작업1: 텍스트 입력")
undo_stack.append("작업2: 글꼴 변경")
undo_stack.append("작업3: 색상 변경")
last_action = undo_stack.pop()  # "작업3: 색상 변경" (되돌리기)

# 4. 작업 대기열 관리 → 큐
from collections import deque
task_queue = deque()
task_queue.append("프린트 작업 1")
task_queue.append("프린트 작업 2")
current_task = task_queue.popleft()  # "프린트 작업 1" (먼저 요청한 것 먼저 처리)`})})]}),s.jsxs("div",{className:"exercise-box",children:[s.jsx("h3",{children:"연습 문제"}),s.jsxs("ol",{children:[s.jsxs("li",{children:["다음 상황에 가장 적합한 자료구조를 선택하고 그 이유를 설명하세요:",s.jsxs("ul",{children:[s.jsx("li",{children:'웹 브라우저의 "뒤로 가기" 기능 구현'}),s.jsx("li",{children:"은행 창구의 대기 번호 시스템"}),s.jsx("li",{children:"회사의 조직도 표현"}),s.jsx("li",{children:"도시 간 도로망 표현"})]})]}),s.jsx("li",{children:"추상 자료형(ADT)과 자료구조의 차이를 설명하고, 큐(Queue) ADT의 핵심 연산을 나열해 보세요."}),s.jsx("li",{children:"선형 자료구조와 비선형 자료구조의 차이를 설명하고, 각각의 예시를 3가지씩 들어보세요."})]})]}),s.jsx("div",{className:"lesson-nav",children:s.jsx(e,{to:"/intro/complexity",className:"lesson-nav-btn next",children:"다음: 시간/공간 복잡도 →"})})]})})})]}));export{c as default};
