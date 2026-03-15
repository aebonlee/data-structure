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
            이진 탐색 트리 (BST)
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '700px', lineHeight: 1.7 }}>
            이진 탐색 트리는 효율적인 탐색, 삽입, 삭제를 지원하는 이진 트리로,
            데이터를 정렬된 상태로 유지하면서 빠른 검색을 가능하게 합니다.
          </p>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="lesson-content" style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div className="lesson-body" style={{ maxWidth: '860px', margin: '0 auto' }}>

            {/* BST의 정의와 성질 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                BST의 정의와 성질
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
                이진 탐색 트리(Binary Search Tree, BST)는 다음 성질을 만족하는 이진 트리입니다:
              </p>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: 2.0, paddingLeft: '20px', marginBottom: '24px' }}>
                <li>왼쪽 서브트리의 모든 노드 값은 현재 노드 값보다 <strong>작습니다</strong>.</li>
                <li>오른쪽 서브트리의 모든 노드 값은 현재 노드 값보다 <strong>큽니다</strong>.</li>
                <li>왼쪽과 오른쪽 서브트리도 각각 이진 탐색 트리입니다.</li>
                <li>중복된 값은 허용하지 않습니다 (일반적인 정의).</li>
              </ul>

              <div className="callout-box" style={{
                background: 'var(--primary-blue-bg)',
                border: '1px solid var(--primary-blue)',
                borderRadius: 'var(--radius-md)',
                padding: '24px 28px',
                marginBottom: '24px',
              }}>
                <h4 style={{ color: 'var(--primary-blue)', fontWeight: 700, marginBottom: '12px', fontSize: '16px' }}>
                  BST의 핵심 특성
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
                  BST를 <strong>중위 순회(Inorder)</strong>하면 데이터가 <strong>오름차순</strong>으로
                  정렬되어 출력됩니다. 이 성질은 BST의 가장 중요한 특성 중 하나입니다.
                </p>
              </div>

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
                  <span>Python - BST 예시 구조</span>
                </div>
                <pre style={{
                  padding: '20px',
                  color: '#e2e8f0',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  overflow: 'auto',
                  margin: 0,
                }}>
{`#         8
#        / \\
#       3   10
#      / \\    \\
#     1   6   14
#        / \\  /
#       4  7 13
#
# 중위 순회: 1, 3, 4, 6, 7, 8, 10, 13, 14 (오름차순)`}
                </pre>
              </div>
            </section>

            {/* 탐색/삽입/삭제 연산 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                탐색 / 삽입 / 삭제 연산
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                BST에서 값을 탐색할 때는 현재 노드와 비교하여 왼쪽 또는 오른쪽으로 이동합니다.
                삽입은 적절한 리프 위치를 찾아 추가하고, 삭제는 자식 수에 따라 처리합니다.
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
                  <span>Python - BST 전체 구현</span>
                </div>
                <pre style={{
                  padding: '20px',
                  color: '#e2e8f0',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  overflow: 'auto',
                  margin: 0,
                }}>
{`class BSTNode:
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
print("3 삭제 후:", bst.inorder())  # [1, 4, 6, 7, 8, 10, 13, 14]`}
                </pre>
              </div>

              {/* 삭제 3가지 경우 테이블 */}
              <table className="lesson-table" style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '15px',
                marginBottom: '24px',
              }}>
                <thead>
                  <tr style={{ background: 'var(--primary-blue)', color: '#fff' }}>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600 }}>삭제 경우</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600 }}>처리 방법</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['자식이 없는 경우 (리프 노드)', '해당 노드를 단순히 제거합니다.'],
                    ['자식이 1개인 경우', '해당 노드를 삭제하고, 유일한 자식을 부모와 연결합니다.'],
                    ['자식이 2개인 경우', '중위 후속자(오른쪽 서브트리의 최솟값)로 대체한 후, 대체된 노드를 삭제합니다.'],
                  ].map(([caseType, method], i) => (
                    <tr key={i} style={{
                      background: i % 2 === 0 ? 'var(--bg-white)' : 'var(--bg-light-gray)',
                      borderBottom: '1px solid var(--border-light)',
                    }}>
                      <td style={{ padding: '12px 20px', fontWeight: 600, color: 'var(--text-primary)' }}>{caseType}</td>
                      <td style={{ padding: '12px 20px', color: 'var(--text-secondary)' }}>{method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* 시간 복잡도 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                시간 복잡도
              </h2>

              <table className="lesson-table" style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '15px',
                marginBottom: '24px',
              }}>
                <thead>
                  <tr style={{ background: 'var(--primary-blue)', color: '#fff' }}>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600 }}>연산</th>
                    <th style={{ padding: '14px 20px', textAlign: 'center', fontWeight: 600 }}>평균</th>
                    <th style={{ padding: '14px 20px', textAlign: 'center', fontWeight: 600 }}>최악</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600 }}>최악의 경우</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['탐색', 'O(log n)', 'O(n)', '편향 트리'],
                    ['삽입', 'O(log n)', 'O(n)', '편향 트리'],
                    ['삭제', 'O(log n)', 'O(n)', '편향 트리'],
                    ['중위 순회', 'O(n)', 'O(n)', '-'],
                  ].map(([op, avg, worst, when], i) => (
                    <tr key={i} style={{
                      background: i % 2 === 0 ? 'var(--bg-white)' : 'var(--bg-light-gray)',
                      borderBottom: '1px solid var(--border-light)',
                    }}>
                      <td style={{ padding: '12px 20px', fontWeight: 600, color: 'var(--text-primary)' }}>{op}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', fontFamily: 'monospace', color: 'var(--primary-blue)', fontWeight: 700 }}>{avg}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', fontFamily: 'monospace', color: '#dc2626', fontWeight: 700 }}>{worst}</td>
                      <td style={{ padding: '12px 20px', color: 'var(--text-secondary)' }}>{when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="callout-box" style={{
                background: 'var(--primary-blue-bg)',
                border: '1px solid var(--primary-blue)',
                borderRadius: 'var(--radius-md)',
                padding: '24px 28px',
                marginBottom: '24px',
              }}>
                <h4 style={{ color: 'var(--primary-blue)', fontWeight: 700, marginBottom: '12px', fontSize: '16px' }}>
                  왜 최악이 O(n)인가?
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
                  정렬된 데이터를 순서대로 삽입하면 편향 트리(Skewed Tree)가 됩니다.
                  예를 들어, [1, 2, 3, 4, 5]를 순서대로 삽입하면 오른쪽으로만 연결된 트리가 만들어져
                  사실상 연결 리스트와 같아집니다. 이를 해결하기 위해 <strong>균형 이진 탐색 트리</strong>가 필요합니다.
                </p>
              </div>
            </section>

            {/* 균형 이진 탐색 트리 */}
            <section data-aos="fade-up" style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                균형 이진 탐색 트리
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                편향 트리 문제를 해결하기 위해, 삽입/삭제 시 자동으로 균형을 유지하는
                자기 균형 이진 탐색 트리(Self-Balancing BST)가 개발되었습니다.
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
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600 }}>균형 조건</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600 }}>활용</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['AVL 트리', '모든 노드에서 좌우 서브트리 높이 차이 최대 1', '탐색 빈도가 높은 경우'],
                    ['Red-Black 트리', '색상 규칙을 통한 느슨한 균형 유지', 'Java TreeMap, C++ std::map'],
                    ['B-트리', '한 노드에 여러 키 저장, 모든 리프 같은 레벨', 'DB 인덱스, 파일 시스템'],
                  ].map(([type, condition, usage], i) => (
                    <tr key={i} style={{
                      background: i % 2 === 0 ? 'var(--bg-white)' : 'var(--bg-light-gray)',
                      borderBottom: '1px solid var(--border-light)',
                    }}>
                      <td style={{ padding: '12px 20px', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>{type}</td>
                      <td style={{ padding: '12px 20px', color: 'var(--text-secondary)' }}>{condition}</td>
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
                  <span>Python - AVL 트리 회전 개념</span>
                </div>
                <pre style={{
                  padding: '20px',
                  color: '#e2e8f0',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  overflow: 'auto',
                  margin: 0,
                }}>
{`# AVL 트리의 핵심: 회전(Rotation) 연산
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
# LL, RR, LR, RL 회전을 적절히 수행합니다.`}
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
                  <li>[5, 3, 7, 1, 4, 6, 8]을 순서대로 BST에 삽입할 때 트리의 모양을 그려보세요.</li>
                  <li>BST에서 k번째로 작은 값을 찾는 함수를 구현하세요.</li>
                  <li>주어진 이진 트리가 BST인지 검증하는 함수를 작성하세요.</li>
                  <li>[1, 2, 3, 4, 5]를 순서대로 삽입하면 어떤 형태의 트리가 되는지 설명하고, 개선 방법을 제시하세요.</li>
                  <li>BST에서 주어진 두 노드의 최소 공통 조상(LCA)을 찾는 함수를 구현하세요.</li>
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
              <Link to="/nonlinear/binary-tree" style={{
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
                이전: 이진 트리
              </Link>
              <Link to="/nonlinear/heap" style={{
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
                다음: 힙
                <span style={{ fontSize: '18px' }}>&rarr;</span>
              </Link>
            </nav>

          </div>
        </div>
      </div>
    </>
  );
};

export default BSTPage;
