import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const StackPage = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="스택 (Stack) | DS Study"
        description="스택의 개념(LIFO), 주요 연산, 활용 사례, Python 구현을 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>스택 (Stack)</h1>
          <p>스택은 후입선출(LIFO) 원칙을 따르는 자료구조로, 가장 나중에 삽입된 데이터가 가장 먼저 제거됩니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2>스택의 개념 (LIFO)</h2>
            <p>
              스택(Stack)은 <strong>후입선출(LIFO: Last In, First Out)</strong> 원칙을 따르는 선형 자료구조입니다.
              접시를 쌓아놓은 것처럼, 가장 마지막에 넣은 데이터를 가장 먼저 꺼낼 수 있습니다.
            </p>
            <p>
              스택은 데이터의 삽입과 삭제가 한쪽 끝(top)에서만 이루어지며,
              이 특성 때문에 함수 호출 관리, 수식 계산, 되돌리기(Undo) 등 다양한 분야에서 활용됩니다.
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
                  <td>push(item)</td>
                  <td>O(1)</td>
                  <td>스택의 맨 위에 요소를 추가합니다.</td>
                </tr>
                <tr>
                  <td>pop()</td>
                  <td>O(1)</td>
                  <td>스택의 맨 위 요소를 제거하고 반환합니다.</td>
                </tr>
                <tr>
                  <td>peek() / top()</td>
                  <td>O(1)</td>
                  <td>스택의 맨 위 요소를 제거하지 않고 반환합니다.</td>
                </tr>
                <tr>
                  <td>isEmpty()</td>
                  <td>O(1)</td>
                  <td>스택이 비어있는지 확인합니다.</td>
                </tr>
                <tr>
                  <td>size()</td>
                  <td>O(1)</td>
                  <td>스택에 들어있는 요소의 개수를 반환합니다.</td>
                </tr>
              </tbody>
            </table>

            <h2>스택의 활용</h2>

            <div className="callout-box">
              <h3>스택이 활용되는 대표적인 사례</h3>
              <ul>
                <li><strong>괄호 검사</strong> : 여는 괄호를 push하고, 닫는 괄호를 만나면 pop하여 짝이 맞는지 확인합니다.</li>
                <li><strong>후위 표기법 (Postfix) 계산</strong> : 피연산자를 push하고, 연산자를 만나면 pop하여 계산합니다.</li>
                <li><strong>DFS (깊이 우선 탐색)</strong> : 그래프 탐색에서 방문할 노드를 스택에 저장합니다.</li>
                <li><strong>함수 호출 스택</strong> : 프로그램 실행 시 함수 호출/복귀를 관리합니다.</li>
                <li><strong>되돌리기(Undo)</strong> : 작업 이력을 스택에 저장하여 되돌리기 기능을 구현합니다.</li>
              </ul>
            </div>

            <h2>스택 구현</h2>
            <p>
              Python에서 스택은 리스트를 이용하여 간단하게 구현할 수 있습니다.
              클래스로 감싸서 명확한 인터페이스를 제공하는 것이 좋습니다.
            </p>

            <div className="code-block">
              <div className="code-header">Python - 스택 클래스 구현</div>
              <pre><code>{`class Stack:
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
print(stack.size())   # 1`}</code></pre>
            </div>

            <h3>괄호 검사 예제</h3>

            <div className="code-block">
              <div className="code-header">Python - 괄호 유효성 검사</div>
              <pre><code>{`def is_valid_parentheses(s):
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
print(is_valid_parentheses("(()"))      # False`}</code></pre>
            </div>

            <div className="exercise-box">
              <h3>연습 문제</h3>
              <ol>
                <li>후위 표기법 수식 <code>"3 4 + 2 *"</code>을 스택을 이용해 계산하는 함수를 작성하세요.</li>
                <li>스택 두 개를 이용하여 큐를 구현하세요.</li>
                <li>문자열을 스택을 이용하여 뒤집는 함수를 작성하세요.</li>
                <li>스택을 이용해 10진수를 2진수로 변환하는 함수를 구현하세요.</li>
              </ol>
            </div>

            <div className="lesson-nav">
              <Link to="/linear/linked-list" className="lesson-nav-btn prev">&larr; 이전: 연결 리스트</Link>
              <Link to="/linear/queue" className="lesson-nav-btn next">다음: 큐 &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default StackPage;
