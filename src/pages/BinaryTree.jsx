import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const BinaryTree = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="이진 트리 (Binary Tree) | DS Study"
        description="이진 트리의 정의, 종류(완전, 포화, 편향), 성질, 배열/연결 리스트 구현, 순회를 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>이진 트리 (Binary Tree)</h1>
          <p>
            이진 트리는 각 노드가 최대 두 개의 자식 노드를 가지는 트리 구조입니다.
            컴퓨터 과학에서 가장 널리 사용되는 트리 형태이며, 다양한 자료구조의 기반이 됩니다.
          </p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2>이진 트리의 정의</h2>
            <p>
              이진 트리(Binary Tree)는 모든 노드가 <strong>최대 2개의 자식 노드</strong>(왼쪽 자식, 오른쪽 자식)를
              가질 수 있는 트리입니다. 일반 트리와 달리 자식의 위치(왼쪽/오른쪽)가 구분됩니다.
            </p>
            <p>
              재귀적 정의: 이진 트리는 <strong>공집합이거나</strong>, 루트와 왼쪽 서브트리, 오른쪽 서브트리로 구성된
              노드들의 유한 집합입니다. 이때 왼쪽과 오른쪽 서브트리도 이진 트리입니다.
            </p>

            <h2>이진 트리의 종류</h2>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>종류</th>
                  <th>정의</th>
                  <th>특징</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>완전 이진 트리 (Complete)</td><td>마지막 레벨을 제외한 모든 레벨이 완전히 채워지고, 마지막 레벨은 왼쪽부터 채워진 트리</td><td>배열로 효율적 표현 가능, 힙에 사용</td></tr>
                <tr><td>포화 이진 트리 (Perfect)</td><td>모든 레벨이 완전히 채워진 트리</td><td>높이 h일 때 노드 수: 2^(h+1) - 1</td></tr>
                <tr><td>편향 이진 트리 (Skewed)</td><td>모든 노드가 한쪽 방향으로만 자식을 가지는 트리</td><td>사실상 연결 리스트와 동일, 최악의 성능</td></tr>
                <tr><td>정 이진 트리 (Strict)</td><td>모든 노드가 0개 또는 2개의 자식을 가지는 트리</td><td>리프 노드 수 = 내부 노드 수 + 1</td></tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h3>완전 이진 트리 vs 포화 이진 트리</h3>
              <p>
                포화 이진 트리는 완전 이진 트리의 특수한 경우입니다. 포화 이진 트리는 모든 레벨이
                꽉 차 있지만, 완전 이진 트리는 마지막 레벨만 왼쪽부터 순서대로 채워지면 됩니다.
              </p>
            </div>

            <h2>이진 트리의 성질</h2>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>성질</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>레벨 i의 최대 노드 수</td><td>2^i (루트 레벨 = 0)</td></tr>
                <tr><td>높이 h인 이진 트리의 최대 노드 수</td><td>2^(h+1) - 1</td></tr>
                <tr><td>높이 h인 이진 트리의 최소 노드 수</td><td>h + 1 (편향 트리)</td></tr>
                <tr><td>n개 노드의 이진 트리 최소 높이</td><td>floor(log2(n))</td></tr>
                <tr><td>n개 노드의 이진 트리 최대 높이</td><td>n - 1 (편향 트리)</td></tr>
                <tr><td>리프 노드 수(n0)와 차수 2 노드 수(n2)</td><td>n0 = n2 + 1</td></tr>
              </tbody>
            </table>

            <h2>배열로 구현</h2>
            <p>
              완전 이진 트리는 배열을 사용하여 효율적으로 표현할 수 있습니다.
              인덱스를 통해 부모-자식 관계를 쉽게 계산할 수 있습니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>관계</th>
                  <th>인덱스 (0-based)</th>
                  <th>인덱스 (1-based)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>부모</td><td>(i - 1) // 2</td><td>i // 2</td></tr>
                <tr><td>왼쪽 자식</td><td>2 * i + 1</td><td>2 * i</td></tr>
                <tr><td>오른쪽 자식</td><td>2 * i + 2</td><td>2 * i + 1</td></tr>
              </tbody>
            </table>

            <div className="code-block">
              <div className="code-header">Python - 배열 기반 이진 트리</div>
              <pre><code>{`class ArrayBinaryTree:
    """배열 기반 이진 트리 (0-based 인덱스)"""

    def __init__(self, capacity=100):
        self.tree = [None] * capacity
        self.size = 0

    def set_root(self, data):
        """루트 설정"""
        self.tree[0] = data
        self.size = max(self.size, 1)

    def set_left(self, parent_idx, data):
        """왼쪽 자식 설정"""
        left_idx = 2 * parent_idx + 1
        if self.tree[parent_idx] is None:
            print(f"부모 노드(인덱스 {parent_idx})가 비어있습니다.")
            return
        self.tree[left_idx] = data
        self.size = max(self.size, left_idx + 1)

    def set_right(self, parent_idx, data):
        """오른쪽 자식 설정"""
        right_idx = 2 * parent_idx + 2
        if self.tree[parent_idx] is None:
            print(f"부모 노드(인덱스 {parent_idx})가 비어있습니다.")
            return
        self.tree[right_idx] = data
        self.size = max(self.size, right_idx + 1)

    def inorder(self, idx=0):
        """중위 순회"""
        if idx >= len(self.tree) or self.tree[idx] is None:
            return []
        left = self.inorder(2 * idx + 1)
        right = self.inorder(2 * idx + 2)
        return left + [self.tree[idx]] + right


# 사용 예시:  1 -> [2, 3] -> [4, 5, -, -]
bt = ArrayBinaryTree()
bt.set_root(1)
bt.set_left(0, 2)
bt.set_right(0, 3)
bt.set_left(1, 4)
bt.set_right(1, 5)

print([bt.tree[i] for i in range(bt.size)])  # [1, 2, 3, 4, 5]
print("중위 순회:", bt.inorder())  # [4, 2, 5, 1, 3]`}</code></pre>
            </div>

            <h2>연결 리스트로 구현</h2>
            <p>
              연결 리스트(포인터) 방식은 메모리를 동적으로 할당하며,
              편향 트리에서도 공간 낭비가 없습니다.
            </p>

            <div className="code-block">
              <div className="code-header">Python - 연결 리스트 기반 이진 트리</div>
              <pre><code>{`class Node:
    """이진 트리 노드"""
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


class LinkedBinaryTree:
    """연결 리스트 기반 이진 트리"""

    def __init__(self):
        self.root = None

    def height(self, node=None):
        """트리의 높이 계산"""
        if node is None:
            return -1
        return 1 + max(self.height(node.left), self.height(node.right))

    def count_nodes(self, node=None):
        """노드 개수 세기"""
        if node is None:
            return 0
        return 1 + self.count_nodes(node.left) + self.count_nodes(node.right)

    def count_leaves(self, node=None):
        """리프 노드 개수 세기"""
        if node is None:
            return 0
        if node.left is None and node.right is None:
            return 1
        return self.count_leaves(node.left) + self.count_leaves(node.right)


# 트리 구성
tree = LinkedBinaryTree()
tree.root = Node(1)
tree.root.left = Node(2)
tree.root.right = Node(3)
tree.root.left.left = Node(4)
tree.root.left.right = Node(5)
tree.root.right.right = Node(6)

print(f"트리 높이: {tree.height(tree.root)}")        # 2
print(f"노드 개수: {tree.count_nodes(tree.root)}")    # 6
print(f"리프 노드 수: {tree.count_leaves(tree.root)}") # 3`}</code></pre>
            </div>

            <h2>순회 구현 (반복적 방법)</h2>
            <p>
              재귀적 순회 외에도, 스택과 큐를 활용한 반복적(iterative) 순회 방법이 있습니다.
              반복적 방법은 깊은 트리에서 스택 오버플로를 방지할 수 있습니다.
            </p>

            <div className="code-block">
              <div className="code-header">Python - 반복적 순회 구현</div>
              <pre><code>{`from collections import deque

class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


def iterative_preorder(root):
    """반복적 전위 순회 (스택 사용)"""
    if root is None:
        return []
    result = []
    stack = [root]
    while stack:
        node = stack.pop()
        result.append(node.data)
        # 스택은 LIFO이므로 오른쪽을 먼저 push
        if node.right:
            stack.append(node.right)
        if node.left:
            stack.append(node.left)
    return result


def iterative_inorder(root):
    """반복적 중위 순회 (스택 사용)"""
    result = []
    stack = []
    current = root
    while current or stack:
        while current:
            stack.append(current)
            current = current.left
        current = stack.pop()
        result.append(current.data)
        current = current.right
    return result


def level_order_by_level(root):
    """레벨별로 분리된 레벨 순회"""
    if root is None:
        return []
    result = []
    queue = deque([root])
    while queue:
        level_size = len(queue)
        level = []
        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.data)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        result.append(level)
    return result


# 트리 구성
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.right = Node(6)

print("반복 전위:", iterative_preorder(root))   # [1, 2, 4, 5, 3, 6]
print("반복 중위:", iterative_inorder(root))    # [4, 2, 5, 1, 3, 6]
print("레벨별:", level_order_by_level(root))    # [[1], [2, 3], [4, 5, 6]]`}</code></pre>
            </div>

            <h2>배열 vs 연결 리스트 구현 비교</h2>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>기준</th>
                  <th>배열 구현</th>
                  <th>연결 리스트 구현</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>메모리</td><td>고정 크기, 편향 트리 시 낭비</td><td>동적 할당, 낭비 없음</td></tr>
                <tr><td>부모/자식 접근</td><td>O(1) - 인덱스 계산</td><td>O(1) - 포인터 참조</td></tr>
                <tr><td>삽입/삭제</td><td>복잡함 (배열 재구성 필요)</td><td>간단함 (포인터 변경)</td></tr>
                <tr><td>적합한 경우</td><td>완전 이진 트리, 힙</td><td>일반 이진 트리, BST</td></tr>
                <tr><td>캐시 효율</td><td>높음 (연속 메모리)</td><td>낮음 (분산 메모리)</td></tr>
              </tbody>
            </table>

            <div className="exercise-box">
              <h3>연습 문제</h3>
              <ol>
                <li>높이가 3인 포화 이진 트리의 노드 수와 리프 노드 수를 구하세요.</li>
                <li>완전 이진 트리에 노드가 10개 있을 때, 리프 노드의 개수를 구하세요.</li>
                <li>이진 트리를 좌우 반전(Mirror)하는 함수를 구현하세요.</li>
                <li>두 이진 트리가 동일한 구조와 값을 가지는지 확인하는 함수를 작성하세요.</li>
                <li>이진 트리에서 특정 값을 가진 노드의 깊이를 반환하는 함수를 구현하세요.</li>
              </ol>
            </div>

            <div className="lesson-nav">
              <Link to="/nonlinear/tree" className="lesson-nav-btn prev">&larr; 이전: 트리</Link>
              <Link to="/nonlinear/bst" className="lesson-nav-btn next">다음: 이진 탐색 트리 &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default BinaryTree;
