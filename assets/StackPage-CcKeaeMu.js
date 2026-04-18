import{j as s,L as e}from"./index-CjZsaqb4.js";import{S as i}from"./SEOHead-C082SPKh.js";import{u as r}from"./useAOS-BwJtbNSl.js";const c=()=>(r(),s.jsxs(s.Fragment,{children:[s.jsx(i,{title:"스택 (Stack) | DS Study",description:"스택의 개념(LIFO), 주요 연산, 활용 사례, Python 구현을 학습합니다."}),s.jsx("section",{className:"page-header",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{children:"스택 (Stack)"}),s.jsx("p",{children:"스택은 후입선출(LIFO) 원칙을 따르는 자료구조로, 가장 나중에 삽입된 데이터가 가장 먼저 제거됩니다."})]})}),s.jsx("section",{className:"section lesson-content",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"lesson-body",children:[s.jsx("h2",{children:"스택의 개념 (LIFO)"}),s.jsxs("p",{children:["스택(Stack)은 ",s.jsx("strong",{children:"후입선출(LIFO: Last In, First Out)"})," 원칙을 따르는 선형 자료구조입니다. 접시를 쌓아놓은 것처럼, 가장 마지막에 넣은 데이터를 가장 먼저 꺼낼 수 있습니다."]}),s.jsx("p",{children:"스택은 데이터의 삽입과 삭제가 한쪽 끝(top)에서만 이루어지며, 이 특성 때문에 함수 호출 관리, 수식 계산, 되돌리기(Undo) 등 다양한 분야에서 활용됩니다."}),s.jsx("h2",{children:"주요 연산"}),s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"연산"}),s.jsx("th",{children:"시간 복잡도"}),s.jsx("th",{children:"설명"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"push(item)"}),s.jsx("td",{children:"O(1)"}),s.jsx("td",{children:"스택의 맨 위에 요소를 추가합니다."})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"pop()"}),s.jsx("td",{children:"O(1)"}),s.jsx("td",{children:"스택의 맨 위 요소를 제거하고 반환합니다."})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"peek() / top()"}),s.jsx("td",{children:"O(1)"}),s.jsx("td",{children:"스택의 맨 위 요소를 제거하지 않고 반환합니다."})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"isEmpty()"}),s.jsx("td",{children:"O(1)"}),s.jsx("td",{children:"스택이 비어있는지 확인합니다."})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"size()"}),s.jsx("td",{children:"O(1)"}),s.jsx("td",{children:"스택에 들어있는 요소의 개수를 반환합니다."})]})]})]}),s.jsx("h2",{children:"스택의 활용"}),s.jsxs("div",{className:"callout-box",children:[s.jsx("h3",{children:"스택이 활용되는 대표적인 사례"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"괄호 검사"})," : 여는 괄호를 push하고, 닫는 괄호를 만나면 pop하여 짝이 맞는지 확인합니다."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"후위 표기법 (Postfix) 계산"})," : 피연산자를 push하고, 연산자를 만나면 pop하여 계산합니다."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"DFS (깊이 우선 탐색)"})," : 그래프 탐색에서 방문할 노드를 스택에 저장합니다."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"함수 호출 스택"})," : 프로그램 실행 시 함수 호출/복귀를 관리합니다."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"되돌리기(Undo)"})," : 작업 이력을 스택에 저장하여 되돌리기 기능을 구현합니다."]})]})]}),s.jsx("h2",{children:"스택 구현"}),s.jsx("p",{children:"Python에서 스택은 리스트를 이용하여 간단하게 구현할 수 있습니다. 클래스로 감싸서 명확한 인터페이스를 제공하는 것이 좋습니다."}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"Python - 스택 클래스 구현"}),s.jsx("pre",{children:s.jsx("code",{children:`class Stack:
    """리스트 기반 스택 구현"""
    def __init__(self):
        self.items = []

    def push(self, item):
        """스택에 요소 추가"""
        self.items.append(item)

    def pop(self):
        """스택에서 요소 제거 및 반환"""
        if self.is_empty():
            raise IndexError("스택이 비어있습니다")
        return self.items.pop()

    def peek(self):
        """스택의 맨 위 요소 확인"""
        if self.is_empty():
            raise IndexError("스택이 비어있습니다")
        return self.items[-1]

    def is_empty(self):
        """스택이 비어있는지 확인"""
        return len(self.items) == 0

    def size(self):
        """스택의 크기 반환"""
        return len(self.items)

# 사용 예시
stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)

print(stack.peek())   # 30
print(stack.pop())    # 30
print(stack.pop())    # 20
print(stack.size())   # 1`})})]}),s.jsx("h3",{children:"괄호 검사 예제"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"Python - 괄호 유효성 검사"}),s.jsx("pre",{children:s.jsx("code",{children:`def is_valid_parentheses(s):
    """괄호 문자열의 유효성을 검사하는 함수"""
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}

    for char in s:
        if char in '([{':
            stack.append(char)
        elif char in ')]}':
            if not stack or stack[-1] != pairs[char]:
                return False
            stack.pop()

    return len(stack) == 0

# 테스트
print(is_valid_parentheses("({[]})"))   # True
print(is_valid_parentheses("([)]"))     # False
print(is_valid_parentheses("((()))"))   # True
print(is_valid_parentheses("(()"))      # False`})})]}),s.jsxs("div",{className:"exercise-box",children:[s.jsx("h3",{children:"연습 문제"}),s.jsxs("ol",{children:[s.jsxs("li",{children:["후위 표기법 수식 ",s.jsx("code",{children:'"3 4 + 2 *"'}),"을 스택을 이용해 계산하는 함수를 작성하세요."]}),s.jsx("li",{children:"스택 두 개를 이용하여 큐를 구현하세요."}),s.jsx("li",{children:"문자열을 스택을 이용하여 뒤집는 함수를 작성하세요."}),s.jsx("li",{children:"스택을 이용해 10진수를 2진수로 변환하는 함수를 구현하세요."})]})]}),s.jsxs("div",{className:"lesson-nav",children:[s.jsx(e,{to:"/linear/linked-list",className:"lesson-nav-btn prev",children:"← 이전: 연결 리스트"}),s.jsx(e,{to:"/linear/queue",className:"lesson-nav-btn next",children:"다음: 큐 →"})]})]})})})]}));export{c as default};
