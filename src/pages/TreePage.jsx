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

      {/* Page Header */}
      <div className="page-header" style={{
        background: 'var(--hero-bg)',
        color: '#fff',
        padding: 'calc(var(--nav-height) + 40px) 0 60px',
      }}>
        <div className="container">
          <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px' }}>
            비선형 자료구조
          </p>
          <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '16px' }}>
            트리 (Tree)
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '700px', lineHeight: 1.7 }}>
            트리는 계층적 관계를 표현하는 비선형 자료구조로, 파일 시스템, DOM, 데이터베이스 인덱스 등
            다양한 분야에서 활용됩니다.
          </p>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="lesson-content" style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div className="lesson-body" style={{ maxWidth: '860px', margin: '0 auto' }}>

            {/* 트리의 개념 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                트리의 개념
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
                트리(Tree)는 노드(Node)와 간선(Edge)으로 이루어진 자료구조로,
                하나의 <strong>루트 노드</strong>에서 시작하여 자식 노드들이 계층적으로 연결된
                비순환(acyclic) 구조입니다.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
                트리는 다음과 같은 특성을 가집니다:
              </p>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: 2.0, paddingLeft: '20px', marginBottom: '24px' }}>
                <li>하나의 루트 노드가 존재합니다.</li>
                <li>루트 노드를 제외한 모든 노드는 정확히 하나의 부모 노드를 가집니다.</li>
                <li>임의의 두 노드 사이에는 유일한 경로가 존재합니다.</li>
                <li>N개의 노드를 가진 트리는 N-1개의 간선을 가집니다.</li>
              </ul>

              <div className="callout-box" style={{
                background: 'var(--primary-blue-bg)',
                border: '1px solid var(--primary-blue)',
                borderRadius: 'var(--radius-md)',
                padding: '24px 28px',
                marginBottom: '24px',
              }}>
                <h4 style={{ color: 'var(--primary-blue)', fontWeight: 700, marginBottom: '12px', fontSize: '16px' }}>
                  왜 트리를 배워야 할까요?
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
                  트리는 파일 시스템의 디렉토리 구조, HTML DOM, 데이터베이스 인덱스(B-Tree),
                  의사 결정 트리, 네트워크 라우팅 등 컴퓨터 과학 전반에서 핵심적으로 사용됩니다.
                </p>
              </div>
            </section>

            {/* 트리 용어 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                트리 용어
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                트리를 이해하기 위해 반드시 알아야 할 핵심 용어들입니다.
              </p>

              <table className="lesson-table" style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '15px',
                marginBottom: '24px',
              }}>
                <thead>
                  <tr style={{ background: 'var(--primary-blue)', color: '#fff' }}>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap' }}>용어</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap' }}>영문</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600 }}>설명</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['노드', 'Node', '트리를 구성하는 기본 요소로, 데이터를 저장합니다.'],
                    ['루트', 'Root', '트리의 최상위 노드로, 부모가 없는 유일한 노드입니다.'],
                    ['리프', 'Leaf', '자식 노드가 없는 말단 노드입니다. 단말 노드라고도 합니다.'],
                    ['깊이', 'Depth', '루트 노드에서 해당 노드까지의 간선 수입니다. 루트의 깊이는 0입니다.'],
                    ['높이', 'Height', '해당 노드에서 가장 깊은 리프까지의 간선 수입니다. 트리의 높이는 루트의 높이입니다.'],
                    ['차수', 'Degree', '노드가 가진 자식 노드의 수입니다. 트리의 차수는 최대 차수입니다.'],
                    ['부모/자식', 'Parent/Child', '간선으로 직접 연결된 상위/하위 노드의 관계입니다.'],
                    ['형제', 'Sibling', '같은 부모를 가진 노드들입니다.'],
                    ['서브트리', 'Subtree', '특정 노드를 루트로 하는 트리 부분입니다.'],
                  ].map(([term, eng, desc], i) => (
                    <tr key={i} style={{
                      background: i % 2 === 0 ? 'var(--bg-white)' : 'var(--bg-light-gray)',
                      borderBottom: '1px solid var(--border-light)',
                    }}>
                      <td style={{ padding: '12px 20px', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>{term}</td>
                      <td style={{ padding: '12px 20px', fontFamily: 'monospace', color: 'var(--primary-blue)', whiteSpace: 'nowrap' }}>{eng}</td>
                      <td style={{ padding: '12px 20px', color: 'var(--text-secondary)' }}>{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* 트리의 종류 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                트리의 종류
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                트리는 특성에 따라 다양한 종류로 분류됩니다.
              </p>

              <table className="lesson-table" style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '15px',
                marginBottom: '24px',
              }}>
                <thead>
                  <tr style={{ background: 'var(--primary-blue)', color: '#fff' }}>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap' }}>종류</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600 }}>설명</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600 }}>활용 예시</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['이진 트리', '각 노드가 최대 2개의 자식을 가지는 트리', '수식 트리, 허프만 트리'],
                    ['이진 탐색 트리', '왼쪽 < 부모 < 오른쪽 규칙을 따르는 이진 트리', '사전, 검색 엔진'],
                    ['균형 트리', '모든 리프의 깊이 차이가 일정 범위 이내인 트리', 'AVL, Red-Black Tree'],
                    ['B-트리', '하나의 노드에 여러 키를 저장할 수 있는 균형 트리', '데이터베이스 인덱스'],
                    ['힙', '부모가 자식보다 항상 크거나(최대 힙) 작은(최소 힙) 완전 이진 트리', '우선순위 큐, 힙 정렬'],
                    ['트라이', '문자열의 각 문자를 노드로 저장하는 트리', '자동완성, 사전 검색'],
                  ].map(([type, desc, usage], i) => (
                    <tr key={i} style={{
                      background: i % 2 === 0 ? 'var(--bg-white)' : 'var(--bg-light-gray)',
                      borderBottom: '1px solid var(--border-light)',
                    }}>
                      <td style={{ padding: '12px 20px', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>{type}</td>
                      <td style={{ padding: '12px 20px', color: 'var(--text-secondary)' }}>{desc}</td>
                      <td style={{ padding: '12px 20px', color: 'var(--text-secondary)' }}>{usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* 트리 노드 구현 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                트리 노드 구현 (Python)
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                Python으로 일반 트리 노드를 구현해 보겠습니다.
              </p>

              <div className="code-block" style={{
                background: '#1e293b',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                marginBottom: '24px',
              }}>
                <div className="code-header" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 20px',
                  background: '#334155',
                  fontSize: '13px',
                  color: '#94a3b8',
                }}>
                  <span>Python - 트리 노드 클래스</span>
                </div>
                <pre style={{
                  padding: '20px',
                  color: '#e2e8f0',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  overflow: 'auto',
                  margin: 0,
                }}>
{`class TreeNode:
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
print(f"UI팀은 리프인가? {design.children[0].is_leaf()}")  # True`}
                </pre>
              </div>
            </section>

            {/* 트리 순회 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                트리 순회
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                트리 순회(Traversal)는 트리의 모든 노드를 체계적으로 방문하는 방법입니다.
                이진 트리를 기준으로 4가지 주요 순회 방법이 있습니다.
              </p>

              <table className="lesson-table" style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '15px',
                marginBottom: '24px',
              }}>
                <thead>
                  <tr style={{ background: 'var(--primary-blue)', color: '#fff' }}>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap' }}>순회 방법</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600 }}>방문 순서</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600 }}>활용</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['전위 순회 (Preorder)', '루트 → 왼쪽 → 오른쪽', '트리 복사, 수식의 전위 표기'],
                    ['중위 순회 (Inorder)', '왼쪽 → 루트 → 오른쪽', 'BST에서 정렬된 순서 출력'],
                    ['후위 순회 (Postorder)', '왼쪽 → 오른쪽 → 루트', '트리 삭제, 수식의 후위 표기'],
                    ['레벨 순회 (Level-order)', '레벨별로 왼쪽에서 오른쪽', 'BFS, 트리 레벨별 출력'],
                  ].map(([method, order, usage], i) => (
                    <tr key={i} style={{
                      background: i % 2 === 0 ? 'var(--bg-white)' : 'var(--bg-light-gray)',
                      borderBottom: '1px solid var(--border-light)',
                    }}>
                      <td style={{ padding: '12px 20px', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>{method}</td>
                      <td style={{ padding: '12px 20px', color: 'var(--text-secondary)' }}>{order}</td>
                      <td style={{ padding: '12px 20px', color: 'var(--text-secondary)' }}>{usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="code-block" style={{
                background: '#1e293b',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                marginBottom: '24px',
              }}>
                <div className="code-header" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 20px',
                  background: '#334155',
                  fontSize: '13px',
                  color: '#94a3b8',
                }}>
                  <span>Python - 이진 트리 순회 구현</span>
                </div>
                <pre style={{
                  padding: '20px',
                  color: '#e2e8f0',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  overflow: 'auto',
                  margin: 0,
                }}>
{`from collections import deque

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
print("레벨 순회:", level_order(root))   # [1, 2, 3, 4, 5, 6, 7]`}
                </pre>
              </div>
            </section>

            {/* 연습 문제 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <div className="exercise-box" style={{
                background: 'var(--bg-light-gray)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 32px',
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                  연습 문제
                </h3>
                <ol style={{ color: 'var(--text-secondary)', lineHeight: 2.0, paddingLeft: '20px', margin: 0 }}>
                  <li>아래 트리의 전위, 중위, 후위, 레벨 순회 결과를 구하세요.
                    <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '12px', borderRadius: '8px', fontSize: '13px', margin: '8px 0', lineHeight: 1.5 }}>
{`        A
       / \\
      B   C
     / \\   \\
    D   E   F`}
                    </pre>
                  </li>
                  <li>트리의 높이를 구하는 함수를 재귀적으로 구현하세요.</li>
                  <li>트리의 총 노드 개수를 세는 함수를 구현하세요.</li>
                  <li>주어진 트리에서 리프 노드만 출력하는 함수를 작성하세요.</li>
                </ol>
              </div>
            </section>

            {/* Lesson Navigation */}
            <nav className="lesson-nav" data-aos="fade-up" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '24px 0',
              borderTop: '1px solid var(--border-light)',
            }}>
              <Link to="/linear/deque" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'var(--bg-light-gray)',
                color: 'var(--text-primary)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
                transition: 'var(--transition-base)',
              }}>
                <span style={{ fontSize: '18px' }}>&larr;</span>
                이전: 덱
              </Link>
              <Link to="/nonlinear/binary-tree" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'var(--primary-blue)',
                color: '#fff',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
                transition: 'var(--transition-base)',
              }}>
                다음: 이진 트리
                <span style={{ fontSize: '18px' }}>&rarr;</span>
              </Link>
            </nav>

          </div>
        </div>
      </div>
    </>
  );
};

export default TreePage;
