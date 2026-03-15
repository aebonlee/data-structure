import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const TreePage = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="트리 (Tree) | DS Study"
        description="트리 자료구조의 개념, 용어, 종류, 순회 방법을 Python 코드와 함께 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>트리 (Tree)</h1>
          <p>
            트리는 계층적 관계를 표현하는 비선형 자료구조로, 파일 시스템, DOM, 데이터베이스 인덱스 등
            다양한 분야에서 활용됩니다.
          </p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2>트리의 개념</h2>
            <p>
              트리(Tree)는 노드(Node)와 간선(Edge)으로 이루어진 자료구조로,
              하나의 <strong>루트 노드</strong>에서 시작하여 자식 노드들이 계층적으로 연결된
              비순환(acyclic) 구조입니다.
            </p>
            <p>
              트리는 다음과 같은 특성을 가집니다:
            </p>
            <ul>
              <li>하나의 루트 노드가 존재합니다.</li>
              <li>루트 노드를 제외한 모든 노드는 정확히 하나의 부모 노드를 가집니다.</li>
              <li>임의의 두 노드 사이에는 유일한 경로가 존재합니다.</li>
              <li>N개의 노드를 가진 트리는 N-1개의 간선을 가집니다.</li>
            </ul>

            <div className="callout-box">
              <h3>왜 트리를 배워야 할까요?</h3>
              <p>
                트리는 파일 시스템의 디렉토리 구조, HTML DOM, 데이터베이스 인덱스(B-Tree),
                의사 결정 트리, 네트워크 라우팅 등 컴퓨터 과학 전반에서 핵심적으로 사용됩니다.
              </p>
            </div>

            <h2>트리 용어</h2>
            <p>
              트리를 이해하기 위해 반드시 알아야 할 핵심 용어들입니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>용어</th>
                  <th>영문</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>노드</td><td>Node</td><td>트리를 구성하는 기본 요소로, 데이터를 저장합니다.</td></tr>
                <tr><td>루트</td><td>Root</td><td>트리의 최상위 노드로, 부모가 없는 유일한 노드입니다.</td></tr>
                <tr><td>리프</td><td>Leaf</td><td>자식 노드가 없는 말단 노드입니다. 단말 노드라고도 합니다.</td></tr>
                <tr><td>깊이</td><td>Depth</td><td>루트 노드에서 해당 노드까지의 간선 수입니다. 루트의 깊이는 0입니다.</td></tr>
                <tr><td>높이</td><td>Height</td><td>해당 노드에서 가장 깊은 리프까지의 간선 수입니다. 트리의 높이는 루트의 높이입니다.</td></tr>
                <tr><td>차수</td><td>Degree</td><td>노드가 가진 자식 노드의 수입니다. 트리의 차수는 최대 차수입니다.</td></tr>
                <tr><td>부모/자식</td><td>Parent/Child</td><td>간선으로 직접 연결된 상위/하위 노드의 관계입니다.</td></tr>
                <tr><td>형제</td><td>Sibling</td><td>같은 부모를 가진 노드들입니다.</td></tr>
                <tr><td>서브트리</td><td>Subtree</td><td>특정 노드를 루트로 하는 트리 부분입니다.</td></tr>
              </tbody>
            </table>

            <h2>트리의 종류</h2>
            <p>
              트리는 특성에 따라 다양한 종류로 분류됩니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>종류</th>
                  <th>설명</th>
                  <th>활용 예시</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>이진 트리</td><td>각 노드가 최대 2개의 자식을 가지는 트리</td><td>수식 트리, 허프만 트리</td></tr>
                <tr><td>이진 탐색 트리</td><td>왼쪽 &lt; 부모 &lt; 오른쪽 규칙을 따르는 이진 트리</td><td>사전, 검색 엔진</td></tr>
                <tr><td>균형 트리</td><td>모든 리프의 깊이 차이가 일정 범위 이내인 트리</td><td>AVL, Red-Black Tree</td></tr>
                <tr><td>B-트리</td><td>하나의 노드에 여러 키를 저장할 수 있는 균형 트리</td><td>데이터베이스 인덱스</td></tr>
                <tr><td>힙</td><td>부모가 자식보다 항상 크거나(최대 힙) 작은(최소 힙) 완전 이진 트리</td><td>우선순위 큐, 힙 정렬</td></tr>
                <tr><td>트라이</td><td>문자열의 각 문자를 노드로 저장하는 트리</td><td>자동완성, 사전 검색</td></tr>
              </tbody>
            </table>

            <h2>트리 노드 구현 (Python)</h2>
            <p>
              Python으로 일반 트리 노드를 구현해 보겠습니다.
            </p>

            <div className="code-block">
              <div className="code-header">Python - 트리 노드 클래스</div>
              <pre><code>{`class TreeNode:
    """일반 트리 노드"""
    def __init__(self, data):
        self.data = data
        self.children = []  # 자식 노드 리스트

    def add_child(self, child_node):
        """자식 노드 추가"""
        self.children.append(child_node)

    def remove_child(self, child_node):
        """자식 노드 제거"""
        self.children = [c for c in self.children if c != child_node]

    def is_leaf(self):
        """리프 노드 여부 확인"""
        return len(self.children) == 0

    def __repr__(self):
        return f"TreeNode({self.data})"


# 트리 생성 예시
root = TreeNode("CEO")

# 1단계 자식
dev = TreeNode("개발팀")
design = TreeNode("디자인팀")
marketing = TreeNode("마케팅팀")

root.add_child(dev)
root.add_child(design)
root.add_child(marketing)

# 2단계 자식
dev.add_child(TreeNode("프론트엔드"))
dev.add_child(TreeNode("백엔드"))
dev.add_child(TreeNode("데이터"))

design.add_child(TreeNode("UI"))
design.add_child(TreeNode("UX"))

print(f"루트: {root.data}")
print(f"루트의 자식: {[c.data for c in root.children]}")
print(f"개발팀 자식: {[c.data for c in dev.children]}")
print(f"디자인팀은 리프인가? {design.is_leaf()}")     # False
print(f"UI팀은 리프인가? {design.children[0].is_leaf()}")  # True`}</code></pre>
            </div>

            <h2>트리 순회</h2>
            <p>
              트리 순회(Traversal)는 트리의 모든 노드를 체계적으로 방문하는 방법입니다.
              이진 트리를 기준으로 4가지 주요 순회 방법이 있습니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>순회 방법</th>
                  <th>방문 순서</th>
                  <th>활용</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>전위 순회 (Preorder)</td><td>루트 → 왼쪽 → 오른쪽</td><td>트리 복사, 수식의 전위 표기</td></tr>
                <tr><td>중위 순회 (Inorder)</td><td>왼쪽 → 루트 → 오른쪽</td><td>BST에서 정렬된 순서 출력</td></tr>
                <tr><td>후위 순회 (Postorder)</td><td>왼쪽 → 오른쪽 → 루트</td><td>트리 삭제, 수식의 후위 표기</td></tr>
                <tr><td>레벨 순회 (Level-order)</td><td>레벨별로 왼쪽에서 오른쪽</td><td>BFS, 트리 레벨별 출력</td></tr>
              </tbody>
            </table>

            <div className="code-block">
              <div className="code-header">Python - 이진 트리 순회 구현</div>
              <pre><code>{`from collections import deque

class BinaryNode:
    """이진 트리 노드"""
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


def preorder(node):
    """전위 순회: 루트 -> 왼쪽 -> 오른쪽"""
    if node is None:
        return []
    return [node.data] + preorder(node.left) + preorder(node.right)


def inorder(node):
    """중위 순회: 왼쪽 -> 루트 -> 오른쪽"""
    if node is None:
        return []
    return inorder(node.left) + [node.data] + inorder(node.right)


def postorder(node):
    """후위 순회: 왼쪽 -> 오른쪽 -> 루트"""
    if node is None:
        return []
    return postorder(node.left) + postorder(node.right) + [node.data]


def level_order(root):
    """레벨 순회 (BFS): 레벨별로 왼쪽에서 오른쪽"""
    if root is None:
        return []
    result = []
    queue = deque([root])
    while queue:
        node = queue.popleft()
        result.append(node.data)
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
    return result


# 트리 구성 예시
#        1
#       / \\
#      2   3
#     / \\ / \\
#    4  5 6  7

root = BinaryNode(1)
root.left = BinaryNode(2)
root.right = BinaryNode(3)
root.left.left = BinaryNode(4)
root.left.right = BinaryNode(5)
root.right.left = BinaryNode(6)
root.right.right = BinaryNode(7)

print("전위 순회:", preorder(root))      # [1, 2, 4, 5, 3, 6, 7]
print("중위 순회:", inorder(root))       # [4, 2, 5, 1, 6, 3, 7]
print("후위 순회:", postorder(root))     # [4, 5, 2, 6, 7, 3, 1]
print("레벨 순회:", level_order(root))   # [1, 2, 3, 4, 5, 6, 7]`}</code></pre>
            </div>

            <div className="exercise-box">
              <h3>연습 문제</h3>
              <ol>
                <li>아래 트리의 전위, 중위, 후위, 레벨 순회 결과를 구하세요.
                  <pre><code>{`        A
       / \\
      B   C
     / \\   \\
    D   E   F`}</code></pre>
                </li>
                <li>트리의 높이를 구하는 함수를 재귀적으로 구현하세요.</li>
                <li>트리의 총 노드 개수를 세는 함수를 구현하세요.</li>
                <li>주어진 트리에서 리프 노드만 출력하는 함수를 작성하세요.</li>
              </ol>
            </div>

            <div className="lesson-nav">
              <Link to="/nonlinear" className="lesson-nav-btn prev">&larr; 이전: 비선형 자료구조</Link>
              <Link to="/nonlinear/binary-tree" className="lesson-nav-btn next">다음: 이진 트리 &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default TreePage;
