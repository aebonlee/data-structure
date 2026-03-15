import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const GraphPage = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="그래프 (Graph) | DS Study"
        description="그래프의 개념, 용어, 종류, 표현 방법(인접 행렬, 인접 리스트), DFS/BFS 탐색을 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>그래프 (Graph)</h1>
          <p>
            그래프는 정점(Vertex)과 간선(Edge)으로 이루어진 비선형 자료구조로,
            소셜 네트워크, 지도, 웹 페이지 링크 등 현실 세계의 복잡한 관계를 표현합니다.
          </p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2>그래프의 개념</h2>
            <p>
              그래프(Graph)는 <strong>정점(Vertex, 노드)</strong>의 집합 V와
              <strong> 간선(Edge)</strong>의 집합 E로 구성된 자료구조로, G = (V, E)로 표현합니다.
            </p>
            <p>
              트리는 그래프의 특수한 형태입니다. 그래프는 트리와 달리 루트 노드의 개념이 없으며,
              순환(Cycle)이 존재할 수 있고, 두 정점 사이에 여러 경로가 존재할 수 있습니다.
            </p>

            <div className="callout-box">
              <h3>그래프의 활용 분야</h3>
              <p>
                소셜 네트워크(친구 관계), 도로/항공 네트워크(경로 탐색), 웹 크롤링(페이지 링크),
                추천 시스템, 회로 설계, 작업 스케줄링(위상 정렬) 등 매우 다양한 분야에서 사용됩니다.
              </p>
            </div>

            <h2>그래프 용어</h2>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>용어</th>
                  <th>영문</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>정점</td><td>Vertex (Node)</td><td>그래프를 구성하는 기본 요소로, 데이터를 나타냅니다.</td></tr>
                <tr><td>간선</td><td>Edge</td><td>두 정점을 연결하는 선으로, 관계를 나타냅니다.</td></tr>
                <tr><td>인접</td><td>Adjacent</td><td>간선으로 직접 연결된 두 정점의 관계입니다.</td></tr>
                <tr><td>차수</td><td>Degree</td><td>정점에 연결된 간선의 수입니다. 방향 그래프에서는 진입/진출 차수로 구분합니다.</td></tr>
                <tr><td>경로</td><td>Path</td><td>한 정점에서 다른 정점으로 가는 간선의 연속입니다.</td></tr>
                <tr><td>순환</td><td>Cycle</td><td>시작 정점과 끝 정점이 같은 경로입니다.</td></tr>
                <tr><td>연결</td><td>Connected</td><td>모든 정점 쌍 사이에 경로가 존재하는 그래프입니다.</td></tr>
              </tbody>
            </table>

            <h2>방향 그래프 / 무방향 그래프</h2>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>종류</th>
                  <th>간선 표현</th>
                  <th>특징</th>
                  <th>예시</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>무방향 (Undirected)</td><td>(u, v) = (v, u)</td><td>간선에 방향 없음. 양방향 이동 가능.</td><td>친구 관계, 도로</td></tr>
                <tr><td>방향 (Directed)</td><td>(u, v) != (v, u)</td><td>간선에 방향 있음. 한 방향만 이동.</td><td>팔로우, 웹 링크</td></tr>
              </tbody>
            </table>

            <h2>가중치 그래프</h2>
            <p>
              가중치 그래프(Weighted Graph)는 각 간선에 <strong>가중치(Weight)</strong>가 부여된 그래프입니다.
              가중치는 거리, 비용, 시간 등 다양한 의미를 가질 수 있습니다.
            </p>
            <ul>
              <li><strong>최단 경로 문제</strong>: 두 정점 사이의 최소 가중치 경로 (다익스트라, 벨만-포드)</li>
              <li><strong>최소 신장 트리</strong>: 모든 정점을 최소 비용으로 연결 (크루스칼, 프림)</li>
            </ul>

            <h2>그래프 표현 방법</h2>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>기준</th>
                  <th>인접 행렬</th>
                  <th>인접 리스트</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>공간 복잡도</td><td>O(V^2)</td><td>O(V + E)</td></tr>
                <tr><td>간선 존재 확인</td><td>O(1)</td><td>O(V) 최악</td></tr>
                <tr><td>인접 정점 탐색</td><td>O(V)</td><td>O(차수)</td></tr>
                <tr><td>간선 추가</td><td>O(1)</td><td>O(1)</td></tr>
                <tr><td>적합한 경우</td><td>밀집 그래프 (간선이 많음)</td><td>희소 그래프 (간선이 적음)</td></tr>
              </tbody>
            </table>

            <div className="code-block">
              <div className="code-header">Python - 인접 행렬로 그래프 표현</div>
              <pre><code>{`class GraphMatrix:
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
print(f"간선 (0,2) 존재? {g.has_edge(0, 2)}")  # False`}</code></pre>
            </div>

            <div className="code-block">
              <div className="code-header">Python - 인접 리스트로 그래프 표현</div>
              <pre><code>{`from collections import defaultdict

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
dg.display()`}</code></pre>
            </div>

            <h2>DFS (깊이 우선 탐색)</h2>
            <p>
              DFS(Depth-First Search)는 한 방향으로 가능한 깊이 탐색한 후,
              더 이상 갈 곳이 없으면 되돌아가서(백트래킹) 다른 방향을 탐색하는 방법입니다.
              <strong> 스택</strong> 또는 <strong>재귀</strong>를 사용하여 구현합니다.
            </p>

            <div className="code-block">
              <div className="code-header">Python - DFS 구현 (재귀 + 반복)</div>
              <pre><code>{`from collections import defaultdict

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
print("DFS (반복):", g.dfs_iterative(0))   # [0, 1, 3, 5, 4, 2]`}</code></pre>
            </div>

            <h2>BFS (너비 우선 탐색)</h2>
            <p>
              BFS(Breadth-First Search)는 시작 정점에서 가까운 정점부터 탐색하는 방법입니다.
              <strong> 큐</strong>를 사용하여 구현하며, 최단 경로를 찾는 데 유용합니다.
            </p>

            <div className="code-block">
              <div className="code-header">Python - BFS 구현 및 최단 경로</div>
              <pre><code>{`from collections import deque, defaultdict

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
print(f"최단 거리: {len(path) - 1}")   # 3`}</code></pre>
            </div>

            <h2>DFS vs BFS 비교</h2>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>기준</th>
                  <th>DFS (깊이 우선)</th>
                  <th>BFS (너비 우선)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>자료구조</td><td>스택 (재귀/명시적)</td><td>큐</td></tr>
                <tr><td>탐색 방식</td><td>깊이 방향 우선</td><td>너비(레벨) 방향 우선</td></tr>
                <tr><td>시간 복잡도</td><td>O(V + E)</td><td>O(V + E)</td></tr>
                <tr><td>공간 복잡도</td><td>O(V) - 최악 경로 깊이</td><td>O(V) - 최대 레벨 너비</td></tr>
                <tr><td>최단 경로</td><td>보장하지 않음</td><td>보장 (가중치 없는 그래프)</td></tr>
                <tr><td>활용</td><td>순환 탐지, 위상 정렬, 미로</td><td>최단 경로, 레벨 탐색</td></tr>
              </tbody>
            </table>

            <div className="exercise-box">
              <h3>연습 문제</h3>
              <ol>
                <li>6개의 정점과 7개의 간선을 가진 그래프를 인접 행렬과 인접 리스트로 구현하세요.</li>
                <li>주어진 그래프에서 순환(Cycle)이 존재하는지 DFS로 판별하는 함수를 작성하세요.</li>
                <li>BFS를 이용하여 두 정점 사이의 최단 거리와 경로를 모두 출력하는 함수를 구현하세요.</li>
                <li>그래프의 모든 연결 요소(Connected Components)를 찾는 함수를 구현하세요.</li>
                <li>방향 그래프에서 위상 정렬(Topological Sort)을 DFS로 구현하세요.</li>
              </ol>
            </div>

            <div className="lesson-nav">
              <Link to="/nonlinear/heap" className="lesson-nav-btn prev">&larr; 이전: 힙</Link>
              <Link to="/hash" className="lesson-nav-btn next">다음: 해시 자료구조 &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default GraphPage;
