import{j as e,L as d}from"./index-Dx7btcoz.js";import{S as r}from"./SEOHead-panwKb0o.js";import{u as s}from"./useAOS-CuiPokAf.js";const t=()=>(s(),e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"트리 (Tree) | DS Study",description:"트리 자료구조의 개념, 용어, 종류, 순회 방법을 Python 코드와 함께 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"트리 (Tree)"}),e.jsx("p",{children:"트리는 계층적 관계를 표현하는 비선형 자료구조로, 파일 시스템, DOM, 데이터베이스 인덱스 등 다양한 분야에서 활용됩니다."})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"트리의 개념"}),e.jsxs("p",{children:["트리(Tree)는 노드(Node)와 간선(Edge)으로 이루어진 자료구조로, 하나의 ",e.jsx("strong",{children:"루트 노드"}),"에서 시작하여 자식 노드들이 계층적으로 연결된 비순환(acyclic) 구조입니다."]}),e.jsx("p",{children:"트리는 다음과 같은 특성을 가집니다:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"하나의 루트 노드가 존재합니다."}),e.jsx("li",{children:"루트 노드를 제외한 모든 노드는 정확히 하나의 부모 노드를 가집니다."}),e.jsx("li",{children:"임의의 두 노드 사이에는 유일한 경로가 존재합니다."}),e.jsx("li",{children:"N개의 노드를 가진 트리는 N-1개의 간선을 가집니다."})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"왜 트리를 배워야 할까요?"}),e.jsx("p",{children:"트리는 파일 시스템의 디렉토리 구조, HTML DOM, 데이터베이스 인덱스(B-Tree), 의사 결정 트리, 네트워크 라우팅 등 컴퓨터 과학 전반에서 핵심적으로 사용됩니다."})]}),e.jsx("h2",{children:"트리 용어"}),e.jsx("p",{children:"트리를 이해하기 위해 반드시 알아야 할 핵심 용어들입니다."}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"용어"}),e.jsx("th",{children:"영문"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"노드"}),e.jsx("td",{children:"Node"}),e.jsx("td",{children:"트리를 구성하는 기본 요소로, 데이터를 저장합니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"루트"}),e.jsx("td",{children:"Root"}),e.jsx("td",{children:"트리의 최상위 노드로, 부모가 없는 유일한 노드입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"리프"}),e.jsx("td",{children:"Leaf"}),e.jsx("td",{children:"자식 노드가 없는 말단 노드입니다. 단말 노드라고도 합니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"깊이"}),e.jsx("td",{children:"Depth"}),e.jsx("td",{children:"루트 노드에서 해당 노드까지의 간선 수입니다. 루트의 깊이는 0입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"높이"}),e.jsx("td",{children:"Height"}),e.jsx("td",{children:"해당 노드에서 가장 깊은 리프까지의 간선 수입니다. 트리의 높이는 루트의 높이입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"차수"}),e.jsx("td",{children:"Degree"}),e.jsx("td",{children:"노드가 가진 자식 노드의 수입니다. 트리의 차수는 최대 차수입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"부모/자식"}),e.jsx("td",{children:"Parent/Child"}),e.jsx("td",{children:"간선으로 직접 연결된 상위/하위 노드의 관계입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"형제"}),e.jsx("td",{children:"Sibling"}),e.jsx("td",{children:"같은 부모를 가진 노드들입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"서브트리"}),e.jsx("td",{children:"Subtree"}),e.jsx("td",{children:"특정 노드를 루트로 하는 트리 부분입니다."})]})]})]}),e.jsx("h2",{children:"트리의 종류"}),e.jsx("p",{children:"트리는 특성에 따라 다양한 종류로 분류됩니다."}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"종류"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"활용 예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"이진 트리"}),e.jsx("td",{children:"각 노드가 최대 2개의 자식을 가지는 트리"}),e.jsx("td",{children:"수식 트리, 허프만 트리"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"이진 탐색 트리"}),e.jsx("td",{children:"왼쪽 < 부모 < 오른쪽 규칙을 따르는 이진 트리"}),e.jsx("td",{children:"사전, 검색 엔진"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"균형 트리"}),e.jsx("td",{children:"모든 리프의 깊이 차이가 일정 범위 이내인 트리"}),e.jsx("td",{children:"AVL, Red-Black Tree"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"B-트리"}),e.jsx("td",{children:"하나의 노드에 여러 키를 저장할 수 있는 균형 트리"}),e.jsx("td",{children:"데이터베이스 인덱스"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"힙"}),e.jsx("td",{children:"부모가 자식보다 항상 크거나(최대 힙) 작은(최소 힙) 완전 이진 트리"}),e.jsx("td",{children:"우선순위 큐, 힙 정렬"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"트라이"}),e.jsx("td",{children:"문자열의 각 문자를 노드로 저장하는 트리"}),e.jsx("td",{children:"자동완성, 사전 검색"})]})]})]}),e.jsx("h2",{children:"트리 노드 구현 (Python)"}),e.jsx("p",{children:"Python으로 일반 트리 노드를 구현해 보겠습니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Python - 트리 노드 클래스"}),e.jsx("pre",{children:e.jsx("code",{children:`class TreeNode:
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
print(f"UI팀은 리프인가? {design.children[0].is_leaf()}")  # True`})})]}),e.jsx("h2",{children:"트리 순회"}),e.jsx("p",{children:"트리 순회(Traversal)는 트리의 모든 노드를 체계적으로 방문하는 방법입니다. 이진 트리를 기준으로 4가지 주요 순회 방법이 있습니다."}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"순회 방법"}),e.jsx("th",{children:"방문 순서"}),e.jsx("th",{children:"활용"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"전위 순회 (Preorder)"}),e.jsx("td",{children:"루트 → 왼쪽 → 오른쪽"}),e.jsx("td",{children:"트리 복사, 수식의 전위 표기"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"중위 순회 (Inorder)"}),e.jsx("td",{children:"왼쪽 → 루트 → 오른쪽"}),e.jsx("td",{children:"BST에서 정렬된 순서 출력"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"후위 순회 (Postorder)"}),e.jsx("td",{children:"왼쪽 → 오른쪽 → 루트"}),e.jsx("td",{children:"트리 삭제, 수식의 후위 표기"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"레벨 순회 (Level-order)"}),e.jsx("td",{children:"레벨별로 왼쪽에서 오른쪽"}),e.jsx("td",{children:"BFS, 트리 레벨별 출력"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Python - 이진 트리 순회 구현"}),e.jsx("pre",{children:e.jsx("code",{children:`from collections import deque

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
print("레벨 순회:", level_order(root))   # [1, 2, 3, 4, 5, 6, 7]`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습 문제"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["아래 트리의 전위, 중위, 후위, 레벨 순회 결과를 구하세요.",e.jsx("pre",{children:e.jsx("code",{children:`        A
       / \\
      B   C
     / \\   \\
    D   E   F`})})]}),e.jsx("li",{children:"트리의 높이를 구하는 함수를 재귀적으로 구현하세요."}),e.jsx("li",{children:"트리의 총 노드 개수를 세는 함수를 구현하세요."}),e.jsx("li",{children:"주어진 트리에서 리프 노드만 출력하는 함수를 작성하세요."})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(d,{to:"/nonlinear",className:"lesson-nav-btn prev",children:"← 이전: 비선형 자료구조"}),e.jsx(d,{to:"/nonlinear/binary-tree",className:"lesson-nav-btn next",children:"다음: 이진 트리 →"})]})]})})})]}));export{t as default};
