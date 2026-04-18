import{j as e,L as r}from"./index-rRlbc5CT.js";import{S as s}from"./SEOHead-DzkFjAXq.js";import{u as t}from"./useAOS-Uc9VSS6Q.js";const l=()=>(t(),e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"이진 트리 (Binary Tree) | DS Study",description:"이진 트리의 정의, 종류(완전, 포화, 편향), 성질, 배열/연결 리스트 구현, 순회를 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"이진 트리 (Binary Tree)"}),e.jsx("p",{children:"이진 트리는 각 노드가 최대 두 개의 자식 노드를 가지는 트리 구조입니다. 컴퓨터 과학에서 가장 널리 사용되는 트리 형태이며, 다양한 자료구조의 기반이 됩니다."})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"이진 트리의 정의"}),e.jsxs("p",{children:["이진 트리(Binary Tree)는 모든 노드가 ",e.jsx("strong",{children:"최대 2개의 자식 노드"}),"(왼쪽 자식, 오른쪽 자식)를 가질 수 있는 트리입니다. 일반 트리와 달리 자식의 위치(왼쪽/오른쪽)가 구분됩니다."]}),e.jsxs("p",{children:["재귀적 정의: 이진 트리는 ",e.jsx("strong",{children:"공집합이거나"}),", 루트와 왼쪽 서브트리, 오른쪽 서브트리로 구성된 노드들의 유한 집합입니다. 이때 왼쪽과 오른쪽 서브트리도 이진 트리입니다."]}),e.jsx("h2",{children:"이진 트리의 종류"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"종류"}),e.jsx("th",{children:"정의"}),e.jsx("th",{children:"특징"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"완전 이진 트리 (Complete)"}),e.jsx("td",{children:"마지막 레벨을 제외한 모든 레벨이 완전히 채워지고, 마지막 레벨은 왼쪽부터 채워진 트리"}),e.jsx("td",{children:"배열로 효율적 표현 가능, 힙에 사용"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"포화 이진 트리 (Perfect)"}),e.jsx("td",{children:"모든 레벨이 완전히 채워진 트리"}),e.jsx("td",{children:"높이 h일 때 노드 수: 2^(h+1) - 1"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"편향 이진 트리 (Skewed)"}),e.jsx("td",{children:"모든 노드가 한쪽 방향으로만 자식을 가지는 트리"}),e.jsx("td",{children:"사실상 연결 리스트와 동일, 최악의 성능"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"정 이진 트리 (Strict)"}),e.jsx("td",{children:"모든 노드가 0개 또는 2개의 자식을 가지는 트리"}),e.jsx("td",{children:"리프 노드 수 = 내부 노드 수 + 1"})]})]})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"완전 이진 트리 vs 포화 이진 트리"}),e.jsx("p",{children:"포화 이진 트리는 완전 이진 트리의 특수한 경우입니다. 포화 이진 트리는 모든 레벨이 꽉 차 있지만, 완전 이진 트리는 마지막 레벨만 왼쪽부터 순서대로 채워지면 됩니다."})]}),e.jsx("h2",{children:"이진 트리의 성질"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"성질"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"레벨 i의 최대 노드 수"}),e.jsx("td",{children:"2^i (루트 레벨 = 0)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"높이 h인 이진 트리의 최대 노드 수"}),e.jsx("td",{children:"2^(h+1) - 1"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"높이 h인 이진 트리의 최소 노드 수"}),e.jsx("td",{children:"h + 1 (편향 트리)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"n개 노드의 이진 트리 최소 높이"}),e.jsx("td",{children:"floor(log2(n))"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"n개 노드의 이진 트리 최대 높이"}),e.jsx("td",{children:"n - 1 (편향 트리)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"리프 노드 수(n0)와 차수 2 노드 수(n2)"}),e.jsx("td",{children:"n0 = n2 + 1"})]})]})]}),e.jsx("h2",{children:"배열로 구현"}),e.jsx("p",{children:"완전 이진 트리는 배열을 사용하여 효율적으로 표현할 수 있습니다. 인덱스를 통해 부모-자식 관계를 쉽게 계산할 수 있습니다."}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"관계"}),e.jsx("th",{children:"인덱스 (0-based)"}),e.jsx("th",{children:"인덱스 (1-based)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"부모"}),e.jsx("td",{children:"(i - 1) // 2"}),e.jsx("td",{children:"i // 2"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"왼쪽 자식"}),e.jsx("td",{children:"2 * i + 1"}),e.jsx("td",{children:"2 * i"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"오른쪽 자식"}),e.jsx("td",{children:"2 * i + 2"}),e.jsx("td",{children:"2 * i + 1"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Python - 배열 기반 이진 트리"}),e.jsx("pre",{children:e.jsx("code",{children:`class ArrayBinaryTree:
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
print("중위 순회:", bt.inorder())  # [4, 2, 5, 1, 3]`})})]}),e.jsx("h2",{children:"연결 리스트로 구현"}),e.jsx("p",{children:"연결 리스트(포인터) 방식은 메모리를 동적으로 할당하며, 편향 트리에서도 공간 낭비가 없습니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Python - 연결 리스트 기반 이진 트리"}),e.jsx("pre",{children:e.jsx("code",{children:`class Node:
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
print(f"리프 노드 수: {tree.count_leaves(tree.root)}") # 3`})})]}),e.jsx("h2",{children:"순회 구현 (반복적 방법)"}),e.jsx("p",{children:"재귀적 순회 외에도, 스택과 큐를 활용한 반복적(iterative) 순회 방법이 있습니다. 반복적 방법은 깊은 트리에서 스택 오버플로를 방지할 수 있습니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Python - 반복적 순회 구현"}),e.jsx("pre",{children:e.jsx("code",{children:`from collections import deque

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
print("레벨별:", level_order_by_level(root))    # [[1], [2, 3], [4, 5, 6]]`})})]}),e.jsx("h2",{children:"배열 vs 연결 리스트 구현 비교"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기준"}),e.jsx("th",{children:"배열 구현"}),e.jsx("th",{children:"연결 리스트 구현"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"메모리"}),e.jsx("td",{children:"고정 크기, 편향 트리 시 낭비"}),e.jsx("td",{children:"동적 할당, 낭비 없음"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"부모/자식 접근"}),e.jsx("td",{children:"O(1) - 인덱스 계산"}),e.jsx("td",{children:"O(1) - 포인터 참조"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"삽입/삭제"}),e.jsx("td",{children:"복잡함 (배열 재구성 필요)"}),e.jsx("td",{children:"간단함 (포인터 변경)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"적합한 경우"}),e.jsx("td",{children:"완전 이진 트리, 힙"}),e.jsx("td",{children:"일반 이진 트리, BST"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"캐시 효율"}),e.jsx("td",{children:"높음 (연속 메모리)"}),e.jsx("td",{children:"낮음 (분산 메모리)"})]})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습 문제"}),e.jsxs("ol",{children:[e.jsx("li",{children:"높이가 3인 포화 이진 트리의 노드 수와 리프 노드 수를 구하세요."}),e.jsx("li",{children:"완전 이진 트리에 노드가 10개 있을 때, 리프 노드의 개수를 구하세요."}),e.jsx("li",{children:"이진 트리를 좌우 반전(Mirror)하는 함수를 구현하세요."}),e.jsx("li",{children:"두 이진 트리가 동일한 구조와 값을 가지는지 확인하는 함수를 작성하세요."}),e.jsx("li",{children:"이진 트리에서 특정 값을 가진 노드의 깊이를 반환하는 함수를 구현하세요."})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(r,{to:"/nonlinear/tree",className:"lesson-nav-btn prev",children:"← 이전: 트리"}),e.jsx(r,{to:"/nonlinear/bst",className:"lesson-nav-btn next",children:"다음: 이진 탐색 트리 →"})]})]})})})]}));export{l as default};
