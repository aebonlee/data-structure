import{j as e,L as d}from"./index-B3GxaZwy.js";import{S as s}from"./SEOHead-D3w2GwHl.js";import{u as r}from"./useAOS-d_NXnJgz.js";const i=()=>(r(),e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"세그먼트 트리 | 자료구조 학습",description:"세그먼트 트리의 개념, 구간 쿼리, 트리 구축, 쿼리/업데이트 연산을 체계적으로 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"세그먼트 트리"}),e.jsx("p",{children:"구간 쿼리를 효율적으로 처리하는 트리 자료구조를 학습합니다"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsxs("div",{className:"callout-box","data-aos":"fade-up",children:[e.jsx("h3",{children:"학습 목표"}),e.jsxs("ul",{children:[e.jsx("li",{children:"세그먼트 트리의 개념과 필요성을 이해한다."}),e.jsx("li",{children:"구간 쿼리 문제의 유형과 해결 방법을 파악한다."}),e.jsx("li",{children:"세그먼트 트리의 구축, 쿼리, 업데이트 연산을 구현할 수 있다."}),e.jsx("li",{children:"O(log n) 시간 복잡도의 원리를 설명할 수 있다."})]})]}),e.jsx("h2",{"data-aos":"fade-up",children:"1. 세그먼트 트리의 개념"}),e.jsx("h3",{"data-aos":"fade-up",children:"1.1 세그먼트 트리란?"}),e.jsxs("p",{"data-aos":"fade-up",children:[e.jsx("strong",{children:"세그먼트 트리(Segment Tree)"}),"는 배열의 ",e.jsx("strong",{children:"구간 정보"}),"를 효율적으로 저장하고 질의(query)하기 위한 이진 트리 자료구조입니다. 구간 합, 구간 최솟값, 구간 최댓값 등을 O(log n) 시간에 처리할 수 있어, 반복적인 구간 쿼리가 필요한 문제에서 핵심적으로 사용됩니다."]}),e.jsxs("div",{className:"code-block","data-aos":"fade-up",children:[e.jsx("div",{className:"code-header",children:"세그먼트 트리 구조 예시 (구간 합)"}),e.jsx("pre",{children:e.jsx("code",{children:`배열: [1, 3, 5, 7, 9, 11]

세그먼트 트리:
                  [36]              ← 전체 합 (0~5)
               /        \\
           [9]            [27]      ← 부분 합
          /    \\         /    \\
       [4]     [5]    [16]    [11]  ← 부분 합
      /  \\     |     /  \\      |
    [1] [3]  [5]  [7]  [9]  [11]   ← 원본 배열

각 노드는 자신이 담당하는 구간의 합을 저장
루트: arr[0]~arr[5]의 합 = 36
왼쪽 자식: arr[0]~arr[2]의 합 = 9
오른쪽 자식: arr[3]~arr[5]의 합 = 27`})})]}),e.jsx("h2",{"data-aos":"fade-up",children:"2. 구간 쿼리 문제"}),e.jsx("h3",{"data-aos":"fade-up",children:"2.1 왜 세그먼트 트리가 필요한가?"}),e.jsxs("table",{className:"lesson-table","data-aos":"fade-up",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"접근 방식"}),e.jsx("th",{children:"구간 합 쿼리"}),e.jsx("th",{children:"값 업데이트"}),e.jsx("th",{children:"적합한 상황"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"단순 반복"})}),e.jsx("td",{children:"O(n)"}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"업데이트 많고 쿼리 적을 때"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"누적합 배열"})}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(n)"}),e.jsx("td",{children:"쿼리 많고 업데이트 없을 때"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"세그먼트 트리"})}),e.jsx("td",{children:"O(log n)"}),e.jsx("td",{children:"O(log n)"}),e.jsx("td",{children:"쿼리와 업데이트 모두 빈번할 때"})]})]})]}),e.jsx("p",{"data-aos":"fade-up",children:"쿼리와 업데이트가 Q번 반복되면, 단순 반복은 O(Q * n), 누적합은 업데이트마다 O(n)이 필요합니다. 세그먼트 트리는 둘 다 O(Q * log n)으로 처리하므로, 데이터가 크고 쿼리가 빈번할수록 유리합니다."}),e.jsx("h3",{"data-aos":"fade-up",children:"2.2 구간 쿼리의 종류"}),e.jsxs("ul",{"data-aos":"fade-up",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"구간 합"}),": arr[l] + arr[l+1] + ... + arr[r]"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"구간 최솟값"}),": min(arr[l], arr[l+1], ..., arr[r])"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"구간 최댓값"}),": max(arr[l], arr[l+1], ..., arr[r])"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"구간 곱"}),": arr[l] * arr[l+1] * ... * arr[r]"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"구간 GCD"}),": gcd(arr[l], arr[l+1], ..., arr[r])"]})]}),e.jsx("h2",{"data-aos":"fade-up",children:"3. 트리 구축 (Build)"}),e.jsxs("div",{className:"code-block","data-aos":"fade-up",children:[e.jsx("div",{className:"code-header",children:"Python - 세그먼트 트리 구축"}),e.jsx("pre",{children:e.jsx("code",{children:`class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)  # 충분한 크기 할당
        self._build(arr, 1, 0, self.n - 1)

    def _build(self, arr, node, start, end):
        """재귀적으로 세그먼트 트리 구축"""
        if start == end:
            # 리프 노드: 원본 배열 값 저장
            self.tree[node] = arr[start]
        else:
            mid = (start + end) // 2
            # 왼쪽 자식 구축
            self._build(arr, 2 * node, start, mid)
            # 오른쪽 자식 구축
            self._build(arr, 2 * node + 1, mid + 1, end)
            # 부모 노드 = 두 자식의 합
            self.tree[node] = self.tree[2 * node] + self.tree[2 * node + 1]

# 사용 예시
arr = [1, 3, 5, 7, 9, 11]
seg = SegmentTree(arr)
# tree[1] = 36 (전체 합)`})})]}),e.jsxs("div",{className:"callout-box","data-aos":"fade-up",children:[e.jsx("h3",{children:"트리 크기가 4n인 이유"}),e.jsxs("ul",{children:[e.jsx("li",{children:"세그먼트 트리는 완전 이진 트리에 가까운 형태입니다."}),e.jsx("li",{children:"n개 원소의 세그먼트 트리 노드 수는 최대 4n개입니다."}),e.jsx("li",{children:"정확히는 2 * (2^ceil(log2(n))) 이지만, 안전하게 4n을 사용합니다."}),e.jsx("li",{children:"인덱스 1부터 시작하면 자식 노드는 2*i, 2*i+1로 접근 가능합니다."})]})]}),e.jsx("h2",{"data-aos":"fade-up",children:"4. 쿼리 / 업데이트 연산"}),e.jsx("h3",{"data-aos":"fade-up",children:"4.1 구간 합 쿼리 (Query)"}),e.jsxs("div",{className:"code-block","data-aos":"fade-up",children:[e.jsx("div",{className:"code-header",children:"Python - 구간 합 쿼리"}),e.jsx("pre",{children:e.jsx("code",{children:`def query(self, l, r):
    """구간 [l, r]의 합을 반환"""
    return self._query(1, 0, self.n - 1, l, r)

def _query(self, node, start, end, l, r):
    """재귀적 구간 합 쿼리"""
    # Case 1: 현재 구간이 쿼리 범위 밖
    if r < start or end < l:
        return 0

    # Case 2: 현재 구간이 쿼리 범위에 완전히 포함
    if l <= start and end <= r:
        return self.tree[node]

    # Case 3: 부분적으로 겹침 → 좌우 분할
    mid = (start + end) // 2
    left_sum = self._query(2 * node, start, mid, l, r)
    right_sum = self._query(2 * node + 1, mid + 1, end, l, r)
    return left_sum + right_sum`})})]}),e.jsxs("div",{className:"code-block","data-aos":"fade-up",children:[e.jsx("div",{className:"code-header",children:"쿼리 동작 과정 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`배열: [1, 3, 5, 7, 9, 11]
query(1, 4) → arr[1] + arr[2] + arr[3] + arr[4] = 3+5+7+9 = 24

트리 탐색:
  node=1 [0,5] → 부분 겹침, 분할
    node=2 [0,2] → 부분 겹침, 분할
      node=4 [0,1] → 부분 겹침, 분할
        node=8 [0,0] → 범위 밖, return 0
        node=9 [1,1] → 완전 포함, return 3
      node=5 [2,2] → 완전 포함, return 5
    node=3 [3,5] → 부분 겹침, 분할
      node=6 [3,4] → 완전 포함, return 16
      node=7 [5,5] → 범위 밖, return 0

결과: 0 + 3 + 5 + 16 + 0 = 24`})})]}),e.jsx("h3",{"data-aos":"fade-up",children:"4.2 값 업데이트 (Update)"}),e.jsxs("div",{className:"code-block","data-aos":"fade-up",children:[e.jsx("div",{className:"code-header",children:"Python - 포인트 업데이트"}),e.jsx("pre",{children:e.jsx("code",{children:`def update(self, idx, val):
    """arr[idx]의 값을 val로 변경"""
    self._update(1, 0, self.n - 1, idx, val)

def _update(self, node, start, end, idx, val):
    """재귀적 포인트 업데이트"""
    if start == end:
        # 리프 노드에 도달: 값 변경
        self.tree[node] = val
    else:
        mid = (start + end) // 2
        if idx <= mid:
            # 왼쪽 자식으로 이동
            self._update(2 * node, start, mid, idx, val)
        else:
            # 오른쪽 자식으로 이동
            self._update(2 * node + 1, mid + 1, end, idx, val)
        # 부모 노드 갱신
        self.tree[node] = self.tree[2 * node] + self.tree[2 * node + 1]`})})]}),e.jsx("h3",{"data-aos":"fade-up",children:"4.3 전체 코드"}),e.jsxs("div",{className:"code-block","data-aos":"fade-up",children:[e.jsx("div",{className:"code-header",children:"Python - 세그먼트 트리 전체 구현"}),e.jsx("pre",{children:e.jsx("code",{children:`class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self._build(arr, 1, 0, self.n - 1)

    def _build(self, arr, node, start, end):
        if start == end:
            self.tree[node] = arr[start]
        else:
            mid = (start + end) // 2
            self._build(arr, 2 * node, start, mid)
            self._build(arr, 2 * node + 1, mid + 1, end)
            self.tree[node] = self.tree[2 * node] + self.tree[2 * node + 1]

    def query(self, l, r):
        return self._query(1, 0, self.n - 1, l, r)

    def _query(self, node, start, end, l, r):
        if r < start or end < l:
            return 0
        if l <= start and end <= r:
            return self.tree[node]
        mid = (start + end) // 2
        return (self._query(2 * node, start, mid, l, r) +
                self._query(2 * node + 1, mid + 1, end, l, r))

    def update(self, idx, val):
        self._update(1, 0, self.n - 1, idx, val)

    def _update(self, node, start, end, idx, val):
        if start == end:
            self.tree[node] = val
        else:
            mid = (start + end) // 2
            if idx <= mid:
                self._update(2 * node, start, mid, idx, val)
            else:
                self._update(2 * node + 1, mid + 1, end, idx, val)
            self.tree[node] = self.tree[2 * node] + self.tree[2 * node + 1]

# 사용 예시
arr = [1, 3, 5, 7, 9, 11]
seg = SegmentTree(arr)

print(seg.query(1, 4))   # 24  (3+5+7+9)
seg.update(2, 10)         # arr[2] = 5 → 10
print(seg.query(1, 4))   # 29  (3+10+7+9)`})})]}),e.jsx("h2",{"data-aos":"fade-up",children:"5. 시간 복잡도 O(log n)"}),e.jsxs("table",{className:"lesson-table","data-aos":"fade-up",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"연산"}),e.jsx("th",{children:"시간 복잡도"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"트리 구축 (build)"})}),e.jsx("td",{children:"O(n)"}),e.jsx("td",{children:"모든 노드를 한 번씩 생성"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"구간 쿼리 (query)"})}),e.jsx("td",{children:"O(log n)"}),e.jsx("td",{children:"트리 높이만큼 탐색"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"포인트 업데이트 (update)"})}),e.jsx("td",{children:"O(log n)"}),e.jsx("td",{children:"리프에서 루트까지 갱신"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"공간 복잡도"})}),e.jsx("td",{children:"O(n)"}),e.jsx("td",{children:"4n 크기의 배열 사용"})]})]})]}),e.jsx("p",{"data-aos":"fade-up",children:"세그먼트 트리는 이진 트리이므로 높이가 O(log n)입니다. 쿼리와 업데이트 모두 트리의 높이에 비례하는 경로만 탐색하므로 O(log n) 시간에 수행됩니다. Q개의 쿼리를 처리할 때 총 시간은 O(Q * log n)입니다."}),e.jsxs("div",{className:"callout-box","data-aos":"fade-up",children:[e.jsx("h3",{children:"핵심 정리"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"세그먼트 트리"}),"는 구간 쿼리와 업데이트를 모두 O(log n)에 처리한다."]}),e.jsx("li",{children:"트리 구축에 O(n), 이후 각 연산은 O(log n) 시간이 소요된다."}),e.jsx("li",{children:"구간 합, 구간 최솟값/최댓값 등 다양한 구간 연산에 적용 가능하다."}),e.jsx("li",{children:"누적합 배열은 업데이트가 없을 때, 세그먼트 트리는 업데이트가 있을 때 적합하다."}),e.jsx("li",{children:"코딩 테스트에서 구간 쿼리 + 업데이트 문제의 핵심 자료구조이다."})]})]}),e.jsxs("div",{className:"exercise-box","data-aos":"fade-up",children:[e.jsx("h3",{children:"연습 문제"}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제 1."})," 배열 [2, 4, 6, 8, 10]에 대해 세그먼트 트리를 구축하고, query(1, 3)의 결과를 구하세요."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제 2."})," 세그먼트 트리를 구간 최솟값(Range Minimum Query)을 처리하도록 수정하세요."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제 3."})," n개의 원소와 Q개의 쿼리가 있을 때, 단순 반복 vs 누적합 vs 세그먼트 트리의 총 시간 복잡도를 비교하세요."]})]}),e.jsxs("div",{className:"lesson-nav","data-aos":"fade-up",children:[e.jsx(d,{to:"/advanced/trie",className:"lesson-nav-btn prev",children:"← 트라이(Trie)"}),e.jsx(d,{to:"/advanced/union-find",className:"lesson-nav-btn next",children:"유니온 파인드 →"})]})]})})})]}));export{i as default};
