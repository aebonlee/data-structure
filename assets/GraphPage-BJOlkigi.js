import{j as e,L as d}from"./index-CVo8V7ks.js";import{S as s}from"./SEOHead-BGBQJGB_.js";import{u as r}from"./useAOS-3SdaABqu.js";const l=()=>(r(),e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"그래프 (Graph) | DS Study",description:"그래프의 개념, 용어, 종류, 표현 방법(인접 행렬, 인접 리스트), DFS/BFS 탐색을 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"그래프 (Graph)"}),e.jsx("p",{children:"그래프는 정점(Vertex)과 간선(Edge)으로 이루어진 비선형 자료구조로, 소셜 네트워크, 지도, 웹 페이지 링크 등 현실 세계의 복잡한 관계를 표현합니다."})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"그래프의 개념"}),e.jsxs("p",{children:["그래프(Graph)는 ",e.jsx("strong",{children:"정점(Vertex, 노드)"}),"의 집합 V와",e.jsx("strong",{children:" 간선(Edge)"}),"의 집합 E로 구성된 자료구조로, G = (V, E)로 표현합니다."]}),e.jsx("p",{children:"트리는 그래프의 특수한 형태입니다. 그래프는 트리와 달리 루트 노드의 개념이 없으며, 순환(Cycle)이 존재할 수 있고, 두 정점 사이에 여러 경로가 존재할 수 있습니다."}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"그래프의 활용 분야"}),e.jsx("p",{children:"소셜 네트워크(친구 관계), 도로/항공 네트워크(경로 탐색), 웹 크롤링(페이지 링크), 추천 시스템, 회로 설계, 작업 스케줄링(위상 정렬) 등 매우 다양한 분야에서 사용됩니다."})]}),e.jsx("h2",{children:"그래프 용어"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"용어"}),e.jsx("th",{children:"영문"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"정점"}),e.jsx("td",{children:"Vertex (Node)"}),e.jsx("td",{children:"그래프를 구성하는 기본 요소로, 데이터를 나타냅니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"간선"}),e.jsx("td",{children:"Edge"}),e.jsx("td",{children:"두 정점을 연결하는 선으로, 관계를 나타냅니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"인접"}),e.jsx("td",{children:"Adjacent"}),e.jsx("td",{children:"간선으로 직접 연결된 두 정점의 관계입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"차수"}),e.jsx("td",{children:"Degree"}),e.jsx("td",{children:"정점에 연결된 간선의 수입니다. 방향 그래프에서는 진입/진출 차수로 구분합니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"경로"}),e.jsx("td",{children:"Path"}),e.jsx("td",{children:"한 정점에서 다른 정점으로 가는 간선의 연속입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"순환"}),e.jsx("td",{children:"Cycle"}),e.jsx("td",{children:"시작 정점과 끝 정점이 같은 경로입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"연결"}),e.jsx("td",{children:"Connected"}),e.jsx("td",{children:"모든 정점 쌍 사이에 경로가 존재하는 그래프입니다."})]})]})]}),e.jsx("h2",{children:"방향 그래프 / 무방향 그래프"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"종류"}),e.jsx("th",{children:"간선 표현"}),e.jsx("th",{children:"특징"}),e.jsx("th",{children:"예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"무방향 (Undirected)"}),e.jsx("td",{children:"(u, v) = (v, u)"}),e.jsx("td",{children:"간선에 방향 없음. 양방향 이동 가능."}),e.jsx("td",{children:"친구 관계, 도로"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"방향 (Directed)"}),e.jsx("td",{children:"(u, v) != (v, u)"}),e.jsx("td",{children:"간선에 방향 있음. 한 방향만 이동."}),e.jsx("td",{children:"팔로우, 웹 링크"})]})]})]}),e.jsx("h2",{children:"가중치 그래프"}),e.jsxs("p",{children:["가중치 그래프(Weighted Graph)는 각 간선에 ",e.jsx("strong",{children:"가중치(Weight)"}),"가 부여된 그래프입니다. 가중치는 거리, 비용, 시간 등 다양한 의미를 가질 수 있습니다."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"최단 경로 문제"}),": 두 정점 사이의 최소 가중치 경로 (다익스트라, 벨만-포드)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"최소 신장 트리"}),": 모든 정점을 최소 비용으로 연결 (크루스칼, 프림)"]})]}),e.jsx("h2",{children:"그래프 표현 방법"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기준"}),e.jsx("th",{children:"인접 행렬"}),e.jsx("th",{children:"인접 리스트"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"공간 복잡도"}),e.jsx("td",{children:"O(V^2)"}),e.jsx("td",{children:"O(V + E)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"간선 존재 확인"}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(V) 최악"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"인접 정점 탐색"}),e.jsx("td",{children:"O(V)"}),e.jsx("td",{children:"O(차수)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"간선 추가"}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"적합한 경우"}),e.jsx("td",{children:"밀집 그래프 (간선이 많음)"}),e.jsx("td",{children:"희소 그래프 (간선이 적음)"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Python - 인접 행렬로 그래프 표현"}),e.jsx("pre",{children:e.jsx("code",{children:`class GraphMatrix:
    """인접 행렬 기반 그래프"""

    def __init__(self, num_vertices):
        self.V = num_vertices
        self.matrix = [[0] * num_vertices for _ in range(num_vertices)]

    def add_edge(self, u, v, weight=1):
        """간선 추가 (무방향)"""
        self.matrix[u][v] = weight
        self.matrix[v][u] = weight  # 방향 그래프면 이 줄 제거

    def has_edge(self, u, v):
        """간선 존재 여부: O(1)"""
        return self.matrix[u][v] != 0

    def get_neighbors(self, v):
        """인접 정점 목록"""
        return [i for i in range(self.V) if self.matrix[v][i] != 0]

    def display(self):
        print("   ", " ".join(str(i) for i in range(self.V)))
        for i in range(self.V):
            print(f" {i}:", " ".join(str(x) for x in self.matrix[i]))


# 사용 예시: 0--1, 1--2, 2--3, 3--0
g = GraphMatrix(4)
g.add_edge(0, 1)
g.add_edge(1, 2)
g.add_edge(2, 3)
g.add_edge(3, 0)

g.display()
print(f"0의 인접 정점: {g.get_neighbors(0)}")  # [1, 3]
print(f"간선 (0,2) 존재? {g.has_edge(0, 2)}")  # False`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Python - 인접 리스트로 그래프 표현"}),e.jsx("pre",{children:e.jsx("code",{children:`from collections import defaultdict

class GraphList:
    """인접 리스트 기반 그래프"""

    def __init__(self, directed=False):
        self.adj = defaultdict(list)
        self.directed = directed

    def add_edge(self, u, v, weight=1):
        """간선 추가"""
        self.adj[u].append((v, weight))
        if not self.directed:
            self.adj[v].append((u, weight))

    def get_neighbors(self, v):
        return [(node, w) for node, w in self.adj[v]]

    def display(self):
        for vertex in sorted(self.adj.keys()):
            neighbors = [(n, w) for n, w in self.adj[vertex]]
            print(f"  {vertex} -> {neighbors}")


# 무방향 그래프
g = GraphList()
g.add_edge(0, 1)
g.add_edge(0, 3)
g.add_edge(1, 2)
g.add_edge(2, 3)
g.display()

# 가중치 방향 그래프
dg = GraphList(directed=True)
dg.add_edge("서울", "부산", 325)
dg.add_edge("서울", "대전", 140)
dg.add_edge("대전", "부산", 200)
dg.add_edge("대전", "광주", 150)
dg.display()`})})]}),e.jsx("h2",{children:"DFS (깊이 우선 탐색)"}),e.jsxs("p",{children:["DFS(Depth-First Search)는 한 방향으로 가능한 깊이 탐색한 후, 더 이상 갈 곳이 없으면 되돌아가서(백트래킹) 다른 방향을 탐색하는 방법입니다.",e.jsx("strong",{children:" 스택"})," 또는 ",e.jsx("strong",{children:"재귀"}),"를 사용하여 구현합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Python - DFS 구현 (재귀 + 반복)"}),e.jsx("pre",{children:e.jsx("code",{children:`from collections import defaultdict

class Graph:
    def __init__(self):
        self.adj = defaultdict(list)

    def add_edge(self, u, v):
        self.adj[u].append(v)
        self.adj[v].append(u)  # 무방향 그래프

    def dfs_recursive(self, start):
        """DFS - 재귀 구현"""
        visited = set()
        result = []

        def _dfs(v):
            visited.add(v)
            result.append(v)
            for neighbor in sorted(self.adj[v]):
                if neighbor not in visited:
                    _dfs(neighbor)

        _dfs(start)
        return result

    def dfs_iterative(self, start):
        """DFS - 반복 구현 (스택 사용)"""
        visited = set()
        result = []
        stack = [start]

        while stack:
            v = stack.pop()
            if v not in visited:
                visited.add(v)
                result.append(v)
                # 역순으로 추가해야 작은 번호부터 방문
                for neighbor in sorted(self.adj[v], reverse=True):
                    if neighbor not in visited:
                        stack.append(neighbor)

        return result


# 그래프: 0-1, 0-2, 1-3, 2-4, 3-5, 4-5
g = Graph()
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 3)
g.add_edge(2, 4)
g.add_edge(3, 5)
g.add_edge(4, 5)

print("DFS (재귀):", g.dfs_recursive(0))   # [0, 1, 3, 5, 4, 2]
print("DFS (반복):", g.dfs_iterative(0))   # [0, 1, 3, 5, 4, 2]`})})]}),e.jsx("h2",{children:"BFS (너비 우선 탐색)"}),e.jsxs("p",{children:["BFS(Breadth-First Search)는 시작 정점에서 가까운 정점부터 탐색하는 방법입니다.",e.jsx("strong",{children:" 큐"}),"를 사용하여 구현하며, 최단 경로를 찾는 데 유용합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Python - BFS 구현 및 최단 경로"}),e.jsx("pre",{children:e.jsx("code",{children:`from collections import deque, defaultdict

class Graph:
    def __init__(self):
        self.adj = defaultdict(list)

    def add_edge(self, u, v):
        self.adj[u].append(v)
        self.adj[v].append(u)

    def bfs(self, start):
        """BFS 탐색"""
        visited = set([start])
        result = []
        queue = deque([start])

        while queue:
            v = queue.popleft()
            result.append(v)
            for neighbor in sorted(self.adj[v]):
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)

        return result

    def shortest_path(self, start, end):
        """BFS를 이용한 최단 경로 (가중치 없는 그래프)"""
        if start == end:
            return [start]

        visited = set([start])
        queue = deque([(start, [start])])

        while queue:
            vertex, path = queue.popleft()
            for neighbor in self.adj[vertex]:
                if neighbor not in visited:
                    new_path = path + [neighbor]
                    if neighbor == end:
                        return new_path
                    visited.add(neighbor)
                    queue.append((neighbor, new_path))

        return None  # 경로 없음


# BFS 탐색 예시
g = Graph()
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 3)
g.add_edge(2, 4)
g.add_edge(3, 5)
g.add_edge(4, 5)

print("BFS:", g.bfs(0))  # [0, 1, 2, 3, 4, 5]

# 최단 경로
path = g.shortest_path(0, 5)
print(f"0->5 최단 경로: {path}")       # [0, 1, 3, 5]
print(f"최단 거리: {len(path) - 1}")   # 3`})})]}),e.jsx("h2",{children:"DFS vs BFS 비교"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기준"}),e.jsx("th",{children:"DFS (깊이 우선)"}),e.jsx("th",{children:"BFS (너비 우선)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"자료구조"}),e.jsx("td",{children:"스택 (재귀/명시적)"}),e.jsx("td",{children:"큐"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"탐색 방식"}),e.jsx("td",{children:"깊이 방향 우선"}),e.jsx("td",{children:"너비(레벨) 방향 우선"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"시간 복잡도"}),e.jsx("td",{children:"O(V + E)"}),e.jsx("td",{children:"O(V + E)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"공간 복잡도"}),e.jsx("td",{children:"O(V) - 최악 경로 깊이"}),e.jsx("td",{children:"O(V) - 최대 레벨 너비"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"최단 경로"}),e.jsx("td",{children:"보장하지 않음"}),e.jsx("td",{children:"보장 (가중치 없는 그래프)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"활용"}),e.jsx("td",{children:"순환 탐지, 위상 정렬, 미로"}),e.jsx("td",{children:"최단 경로, 레벨 탐색"})]})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습 문제"}),e.jsxs("ol",{children:[e.jsx("li",{children:"6개의 정점과 7개의 간선을 가진 그래프를 인접 행렬과 인접 리스트로 구현하세요."}),e.jsx("li",{children:"주어진 그래프에서 순환(Cycle)이 존재하는지 DFS로 판별하는 함수를 작성하세요."}),e.jsx("li",{children:"BFS를 이용하여 두 정점 사이의 최단 거리와 경로를 모두 출력하는 함수를 구현하세요."}),e.jsx("li",{children:"그래프의 모든 연결 요소(Connected Components)를 찾는 함수를 구현하세요."}),e.jsx("li",{children:"방향 그래프에서 위상 정렬(Topological Sort)을 DFS로 구현하세요."})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(d,{to:"/nonlinear/heap",className:"lesson-nav-btn prev",children:"← 이전: 힙"}),e.jsx(d,{to:"/hash",className:"lesson-nav-btn next",children:"다음: 해시 자료구조 →"})]})]})})})]}));export{l as default};
