import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const BSTPage = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="이진 탐색 트리 (BST) | DS Study"
        description="이진 탐색 트리의 정의, 탐색/삽입/삭제 연산, 시간 복잡도, 균형 BST를 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>이진 탐색 트리 (BST)</h1>
          <p>
            이진 탐색 트리는 효율적인 탐색, 삽입, 삭제를 지원하는 이진 트리로,
            데이터를 정렬된 상태로 유지하면서 빠른 검색을 가능하게 합니다.
          </p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2>BST의 정의와 성질</h2>
            <p>
              이진 탐색 트리(Binary Search Tree, BST)는 다음 성질을 만족하는 이진 트리입니다:
            </p>
            <ul>
              <li>왼쪽 서브트리의 모든 노드 값은 현재 노드 값보다 <strong>작습니다</strong>.</li>
              <li>오른쪽 서브트리의 모든 노드 값은 현재 노드 값보다 <strong>큽니다</strong>.</li>
              <li>왼쪽과 오른쪽 서브트리도 각각 이진 탐색 트리입니다.</li>
              <li>중복된 값은 허용하지 않습니다 (일반적인 정의).</li>
            </ul>

            <div className="callout-box">
              <h3>BST의 핵심 특성</h3>
              <p>
                BST를 <strong>중위 순회(Inorder)</strong>하면 데이터가 <strong>오름차순</strong>으로
                정렬되어 출력됩니다. 이 성질은 BST의 가장 중요한 특성 중 하나입니다.
              </p>
            </div>

            <div className="code-block">
              <div className="code-header">Python - BST 예시 구조</div>
              <pre><code>{`#         8
#        / \\
#       3   10
#      / \\    \\
#     1   6   14
#        / \\  /
#       4  7 13
#
# 중위 순회: 1, 3, 4, 6, 7, 8, 10, 13, 14 (오름차순)`}</code></pre>
            </div>

            <h2>탐색 / 삽입 / 삭제 연산</h2>
            <p>
              BST에서 값을 탐색할 때는 현재 노드와 비교하여 왼쪽 또는 오른쪽으로 이동합니다.
              삽입은 적절한 리프 위치를 찾아 추가하고, 삭제는 자식 수에 따라 처리합니다.
            </p>

            <div className="code-block">
              <div className="code-header">Python - BST 전체 구현</div>
              <pre><code>{`class BSTNode:
    """BST 노드"""
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None


class BST:
    """이진 탐색 트리"""

    def __init__(self):
        self.root = None

    # ── 탐색 ──
    def search(self, key):
        """탐색 (반복)"""
        current = self.root
        while current:
            if key == current.key:
                return current
            elif key < current.key:
                current = current.left
            else:
                current = current.right
        return None

    # ── 삽입 ──
    def insert(self, key):
        """삽입"""
        self.root = self._insert(self.root, key)

    def _insert(self, node, key):
        if node is None:
            return BSTNode(key)
        if key < node.key:
            node.left = self._insert(node.left, key)
        elif key > node.key:
            node.right = self._insert(node.right, key)
        return node

    # ── 삭제 ──
    def delete(self, key):
        """삭제"""
        self.root = self._delete(self.root, key)

    def _delete(self, node, key):
        if node is None:
            return None
        if key < node.key:
            node.left = self._delete(node.left, key)
        elif key > node.key:
            node.right = self._delete(node.right, key)
        else:
            # Case 1: 자식이 없거나 1개
            if node.left is None:
                return node.right
            elif node.right is None:
                return node.left
            # Case 2: 자식이 2개 -> 중위 후속자로 대체
            successor = self._find_min(node.right)
            node.key = successor.key
            node.right = self._delete(node.right, successor.key)
        return node

    def _find_min(self, node):
        """서브트리에서 최솟값 노드 찾기"""
        current = node
        while current.left:
            current = current.left
        return current

    # ── 중위 순회 ──
    def inorder(self):
        result = []
        self._inorder(self.root, result)
        return result

    def _inorder(self, node, result):
        if node:
            self._inorder(node.left, result)
            result.append(node.key)
            self._inorder(node.right, result)


# 사용 예시
bst = BST()
for val in [8, 3, 10, 1, 6, 14, 4, 7, 13]:
    bst.insert(val)

print("중위 순회:", bst.inorder())
# [1, 3, 4, 6, 7, 8, 10, 13, 14]

print("탐색 6:", bst.search(6).key if bst.search(6) else "없음")  # 6
print("탐색 9:", bst.search(9))  # None

bst.delete(3)   # 자식 2개 노드 삭제
print("3 삭제 후:", bst.inorder())  # [1, 4, 6, 7, 8, 10, 13, 14]`}</code></pre>
            </div>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>삭제 경우</th>
                  <th>처리 방법</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>자식이 없는 경우 (리프 노드)</td><td>해당 노드를 단순히 제거합니다.</td></tr>
                <tr><td>자식이 1개인 경우</td><td>해당 노드를 삭제하고, 유일한 자식을 부모와 연결합니다.</td></tr>
                <tr><td>자식이 2개인 경우</td><td>중위 후속자(오른쪽 서브트리의 최솟값)로 대체한 후, 대체된 노드를 삭제합니다.</td></tr>
              </tbody>
            </table>

            <h2>시간 복잡도</h2>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>연산</th>
                  <th>평균</th>
                  <th>최악</th>
                  <th>최악의 경우</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>탐색</td><td>O(log n)</td><td>O(n)</td><td>편향 트리</td></tr>
                <tr><td>삽입</td><td>O(log n)</td><td>O(n)</td><td>편향 트리</td></tr>
                <tr><td>삭제</td><td>O(log n)</td><td>O(n)</td><td>편향 트리</td></tr>
                <tr><td>중위 순회</td><td>O(n)</td><td>O(n)</td><td>-</td></tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h3>왜 최악이 O(n)인가?</h3>
              <p>
                정렬된 데이터를 순서대로 삽입하면 편향 트리(Skewed Tree)가 됩니다.
                예를 들어, [1, 2, 3, 4, 5]를 순서대로 삽입하면 오른쪽으로만 연결된 트리가 만들어져
                사실상 연결 리스트와 같아집니다. 이를 해결하기 위해 <strong>균형 이진 탐색 트리</strong>가 필요합니다.
              </p>
            </div>

            <h2>균형 이진 탐색 트리</h2>
            <p>
              편향 트리 문제를 해결하기 위해, 삽입/삭제 시 자동으로 균형을 유지하는
              자기 균형 이진 탐색 트리(Self-Balancing BST)가 개발되었습니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>종류</th>
                  <th>균형 조건</th>
                  <th>활용</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>AVL 트리</td><td>모든 노드에서 좌우 서브트리 높이 차이 최대 1</td><td>탐색 빈도가 높은 경우</td></tr>
                <tr><td>Red-Black 트리</td><td>색상 규칙을 통한 느슨한 균형 유지</td><td>Java TreeMap, C++ std::map</td></tr>
                <tr><td>B-트리</td><td>한 노드에 여러 키 저장, 모든 리프 같은 레벨</td><td>DB 인덱스, 파일 시스템</td></tr>
              </tbody>
            </table>

            <div className="code-block">
              <div className="code-header">Python - AVL 트리 회전 개념</div>
              <pre><code>{`# AVL 트리의 핵심: 회전(Rotation) 연산
#
# 단순 우회전 (LL 회전):        단순 좌회전 (RR 회전):
#      z                           z
#     / \\                         / \\
#    y   T4                     T1   y
#   / \\         -->                 / \\        -->
#  x   T3     y를 루트로           T2   x     y를 루트로
# / \\        /   \\                    / \\    /   \\
#T1 T2      x     z               T3 T4  z     x

class AVLNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 0

def get_height(node):
    return node.height if node else -1

def get_balance(node):
    """균형 인수 = 왼쪽 높이 - 오른쪽 높이"""
    if node is None:
        return 0
    return get_height(node.left) - get_height(node.right)

def right_rotate(z):
    """우회전"""
    y = z.left
    T3 = y.right
    y.right = z
    z.left = T3
    z.height = 1 + max(get_height(z.left), get_height(z.right))
    y.height = 1 + max(get_height(y.left), get_height(y.right))
    return y

def left_rotate(z):
    """좌회전"""
    y = z.right
    T2 = y.left
    y.left = z
    z.right = T2
    z.height = 1 + max(get_height(z.left), get_height(z.right))
    y.height = 1 + max(get_height(y.left), get_height(y.right))
    return y

# 실제 AVL 삽입에서는 삽입 후 균형 인수를 확인하고
# LL, RR, LR, RL 회전을 적절히 수행합니다.`}</code></pre>
            </div>

            <div className="exercise-box">
              <h3>연습 문제</h3>
              <ol>
                <li>[5, 3, 7, 1, 4, 6, 8]을 순서대로 BST에 삽입할 때 트리의 모양을 그려보세요.</li>
                <li>BST에서 k번째로 작은 값을 찾는 함수를 구현하세요.</li>
                <li>주어진 이진 트리가 BST인지 검증하는 함수를 작성하세요.</li>
                <li>[1, 2, 3, 4, 5]를 순서대로 삽입하면 어떤 형태의 트리가 되는지 설명하고, 개선 방법을 제시하세요.</li>
                <li>BST에서 주어진 두 노드의 최소 공통 조상(LCA)을 찾는 함수를 구현하세요.</li>
              </ol>
            </div>

            <div className="lesson-nav">
              <Link to="/nonlinear/binary-tree" className="lesson-nav-btn prev">&larr; 이전: 이진 트리</Link>
              <Link to="/nonlinear/heap" className="lesson-nav-btn next">다음: 힙 &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default BSTPage;
