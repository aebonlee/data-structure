import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const UnionFind = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="유니온 파인드 | 자료구조 학습"
        description="서로소 집합, Find/Union 연산, 경로 압축, 랭크 기반 합치기, 크루스칼 알고리즘 활용까지 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>유니온 파인드</h1>
          <p>서로소 집합을 효율적으로 관리하는 자료구조를 학습합니다</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box" data-aos="fade-up">
              <h3>학습 목표</h3>
              <ul>
                <li>서로소 집합(Disjoint Set)의 개념을 이해한다.</li>
                <li>Find와 Union 연산의 원리를 설명할 수 있다.</li>
                <li>경로 압축과 랭크 기반 합치기 최적화를 구현할 수 있다.</li>
                <li>유니온 파인드의 시간 복잡도를 분석할 수 있다.</li>
                <li>크루스칼 알고리즘에서의 활용을 이해한다.</li>
              </ul>
            </div>

            {/* 서로소 집합의 개념 */}
            <h2 data-aos="fade-up">1. 서로소 집합의 개념</h2>

            <h3 data-aos="fade-up">1.1 서로소 집합이란?</h3>
            <p data-aos="fade-up">
              <strong>서로소 집합(Disjoint Set)</strong>은 공통 원소가 없는 두 개 이상의 집합을 말합니다.
              <strong>유니온 파인드(Union-Find)</strong>는 이러한 서로소 집합들을 효율적으로
              관리하는 자료구조로, 두 가지 핵심 연산을 제공합니다.
            </p>
            <ul data-aos="fade-up">
              <li><strong>Find</strong>: 특정 원소가 어떤 집합에 속하는지 찾기 (대표 원소 반환)</li>
              <li><strong>Union</strong>: 두 집합을 하나로 합치기</li>
            </ul>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">서로소 집합 예시</div>
              <pre><code>{`초기 상태: 각 원소가 독립된 집합
{0} {1} {2} {3} {4} {5}

Union(0, 1):  {0, 1} {2} {3} {4} {5}
Union(2, 3):  {0, 1} {2, 3} {4} {5}
Union(0, 2):  {0, 1, 2, 3} {4} {5}
Union(4, 5):  {0, 1, 2, 3} {4, 5}

Find(3) → 0 (대표 원소)
Find(5) → 4 (대표 원소)
Find(1) == Find(3) → True (같은 집합)
Find(1) == Find(5) → False (다른 집합)`}</code></pre>
            </div>

            <h3 data-aos="fade-up">1.2 활용 분야</h3>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>분야</th>
                  <th>활용 예시</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>그래프 알고리즘</strong></td><td>크루스칼 최소 신장 트리, 사이클 탐지</td></tr>
                <tr><td><strong>네트워크</strong></td><td>네트워크 연결 상태 확인, 연결 요소 수 계산</td></tr>
                <tr><td><strong>이미지 처리</strong></td><td>연결된 영역(Connected Component) 탐지</td></tr>
                <tr><td><strong>소셜 네트워크</strong></td><td>친구 관계 그룹 관리</td></tr>
              </tbody>
            </table>

            {/* Find/Union 연산 */}
            <h2 data-aos="fade-up">2. Find / Union 연산</h2>

            <h3 data-aos="fade-up">2.1 기본 구현</h3>
            <div className="code-block" data-aos="fade-up">
              <div className="code-header">Python - 기본 유니온 파인드</div>
              <pre><code>{`class UnionFind:
    def __init__(self, n):
        # 초기화: 각 원소의 부모를 자기 자신으로 설정
        self.parent = list(range(n))

    def find(self, x):
        """x가 속한 집합의 대표 원소(루트)를 찾기"""
        while self.parent[x] != x:
            x = self.parent[x]
        return x

    def union(self, x, y):
        """x가 속한 집합과 y가 속한 집합을 합치기"""
        root_x = self.find(x)
        root_y = self.find(y)
        if root_x != root_y:
            self.parent[root_y] = root_x

# 사용 예시
uf = UnionFind(6)
uf.union(0, 1)
uf.union(2, 3)
uf.union(0, 2)

print(uf.find(3))              # 0
print(uf.find(1) == uf.find(3))  # True (같은 집합)`}</code></pre>
            </div>

            <div className="callout-box" data-aos="fade-up">
              <h3>기본 구현의 문제점</h3>
              <ul>
                <li>트리가 한쪽으로 치우치면(편향 트리) find 연산이 O(n)까지 느려질 수 있습니다.</li>
                <li>예: union(0,1), union(1,2), union(2,3), ... 순으로 수행하면 일직선 형태</li>
                <li>이 문제를 해결하기 위해 <strong>경로 압축</strong>과 <strong>랭크 기반 합치기</strong>를 사용합니다.</li>
              </ul>
            </div>

            {/* 경로 압축 */}
            <h2 data-aos="fade-up">3. 경로 압축 (Path Compression)</h2>

            <p data-aos="fade-up">
              <strong>경로 압축</strong>은 find 연산 시 경로 위의 모든 노드를 직접 루트에 연결하는 최적화 기법입니다.
              한 번 find를 수행하면, 이후 같은 원소에 대한 find가 거의 O(1)에 수행됩니다.
            </p>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">Python - 경로 압축 적용</div>
              <pre><code>{`def find(self, x):
    """경로 압축이 적용된 find"""
    if self.parent[x] != x:
        self.parent[x] = self.find(self.parent[x])  # 재귀적 경로 압축
    return self.parent[x]`}</code></pre>
            </div>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">경로 압축 동작 과정</div>
              <pre><code>{`경로 압축 전:
    0
    |
    1
    |
    2
    |
    3

find(3) 실행 후 (경로 압축):
      0
    / | \\
   1  2  3

→ 모든 노드가 직접 루트를 가리킴
→ 이후 find(1), find(2), find(3) 모두 O(1)`}</code></pre>
            </div>

            {/* 랭크 기반 합치기 */}
            <h2 data-aos="fade-up">4. 랭크 기반 합치기 (Union by Rank)</h2>

            <p data-aos="fade-up">
              <strong>랭크 기반 합치기</strong>는 두 트리를 합칠 때 항상 <strong>작은 트리를 큰 트리 아래에 붙이는</strong>
              최적화 기법입니다. 트리의 높이(랭크)가 작은 쪽을 큰 쪽 아래에 합치면,
              전체 트리의 높이 증가를 최소화할 수 있습니다.
            </p>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">Python - 경로 압축 + 랭크 기반 합치기 (최적 구현)</div>
              <pre><code>{`class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n    # 각 트리의 높이(랭크)

    def find(self, x):
        """경로 압축 적용"""
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        """랭크 기반 합치기 적용"""
        root_x = self.find(x)
        root_y = self.find(y)

        if root_x == root_y:
            return False        # 이미 같은 집합

        # 랭크가 낮은 트리를 높은 트리 아래에 연결
        if self.rank[root_x] < self.rank[root_y]:
            self.parent[root_x] = root_y
        elif self.rank[root_x] > self.rank[root_y]:
            self.parent[root_y] = root_x
        else:
            self.parent[root_y] = root_x
            self.rank[root_x] += 1

        return True             # 합치기 성공

    def connected(self, x, y):
        """x와 y가 같은 집합에 속하는지 확인"""
        return self.find(x) == self.find(y)

# 사용 예시
uf = UnionFind(7)
uf.union(0, 1)
uf.union(2, 3)
uf.union(4, 5)
uf.union(0, 2)
uf.union(4, 6)

print(uf.connected(1, 3))   # True
print(uf.connected(1, 5))   # False
uf.union(0, 4)
print(uf.connected(1, 5))   # True (이제 같은 집합)`}</code></pre>
            </div>

            {/* 시간 복잡도 */}
            <h2 data-aos="fade-up">5. 시간 복잡도</h2>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>구현 방식</th>
                  <th>Find</th>
                  <th>Union</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>기본 구현</strong></td>
                  <td>O(n)</td>
                  <td>O(n)</td>
                  <td>편향 트리 발생 가능</td>
                </tr>
                <tr>
                  <td><strong>경로 압축만</strong></td>
                  <td>O(log n) 상각</td>
                  <td>O(log n) 상각</td>
                  <td>실용적으로 충분히 빠름</td>
                </tr>
                <tr>
                  <td><strong>랭크만</strong></td>
                  <td>O(log n)</td>
                  <td>O(log n)</td>
                  <td>트리 높이 제한</td>
                </tr>
                <tr>
                  <td><strong>경로 압축 + 랭크</strong></td>
                  <td>O(a(n))</td>
                  <td>O(a(n))</td>
                  <td>거의 O(1), 가장 효율적</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>역 아커만 함수 a(n)</h3>
              <ul>
                <li>경로 압축 + 랭크 기반 합치기를 함께 사용하면, 상각 시간 복잡도는 <strong>O(a(n))</strong>입니다.</li>
                <li>a(n)은 <strong>역 아커만 함수(Inverse Ackermann Function)</strong>로, 실질적으로 상수입니다.</li>
                <li>n이 우주의 원자 수(약 10^80)이어도 a(n) &lt; 5 입니다.</li>
                <li>따라서 실용적으로 모든 연산이 <strong>거의 O(1)</strong>이라고 볼 수 있습니다.</li>
              </ul>
            </div>

            {/* 크루스칼 알고리즘 활용 */}
            <h2 data-aos="fade-up">6. 크루스칼 알고리즘에서의 활용</h2>

            <p data-aos="fade-up">
              <strong>크루스칼 알고리즘(Kruskal's Algorithm)</strong>은 그래프의 <strong>최소 신장 트리(MST)</strong>를
              구하는 알고리즘으로, 유니온 파인드를 핵심적으로 활용합니다.
              간선을 가중치 순으로 정렬한 후, 사이클을 형성하지 않는 간선만 선택합니다.
            </p>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">Python - 크루스칼 알고리즘 (유니온 파인드 활용)</div>
              <pre><code>{`def kruskal(n, edges):
    """
    크루스칼 알고리즘으로 최소 신장 트리 구하기
    n: 정점 수
    edges: [(가중치, 정점1, 정점2), ...]
    """
    # 간선을 가중치 기준으로 정렬
    edges.sort()

    uf = UnionFind(n)
    mst = []
    total_weight = 0

    for weight, u, v in edges:
        # 같은 집합이면 사이클 발생 → 건너뛰기
        if uf.connected(u, v):
            continue

        # 다른 집합이면 간선 선택
        uf.union(u, v)
        mst.append((u, v, weight))
        total_weight += weight

        # MST 완성: n-1개의 간선
        if len(mst) == n - 1:
            break

    return mst, total_weight

# 사용 예시
#   0 --- 1
#   |\\   /|
#   | \\ / |
#   |  X  |
#   | / \\ |
#   2 --- 3
edges = [
    (1, 0, 1),   # 0-1, 가중치 1
    (4, 0, 2),   # 0-2, 가중치 4
    (3, 1, 2),   # 1-2, 가중치 3
    (2, 1, 3),   # 1-3, 가중치 2
    (5, 2, 3),   # 2-3, 가중치 5
]

mst, total = kruskal(4, edges)
print(f"MST 간선: {mst}")
print(f"총 가중치: {total}")
# MST 간선: [(0, 1, 1), (1, 3, 2), (1, 2, 3)]
# 총 가중치: 6`}</code></pre>
            </div>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">크루스칼 알고리즘 동작 과정</div>
              <pre><code>{`간선 정렬 후: (1,0,1) (2,1,3) (3,1,2) (4,0,2) (5,2,3)

Step 1: (1, 0, 1) → find(0)≠find(1) → union(0,1) ✓
Step 2: (2, 1, 3) → find(1)≠find(3) → union(1,3) ✓
Step 3: (3, 1, 2) → find(1)≠find(2) → union(1,2) ✓
Step 4: 간선 3개 선택 완료 (n-1 = 3) → 종료

MST 완성! 총 가중치 = 1 + 2 + 3 = 6`}</code></pre>
            </div>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>크루스칼 단계</th>
                  <th>시간 복잡도</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>간선 정렬</strong></td>
                  <td>O(E log E)</td>
                  <td>E: 간선 수</td>
                </tr>
                <tr>
                  <td><strong>Union-Find 연산</strong></td>
                  <td>O(E * a(V))</td>
                  <td>V: 정점 수, 거의 O(E)</td>
                </tr>
                <tr>
                  <td><strong>총 시간 복잡도</strong></td>
                  <td>O(E log E)</td>
                  <td>정렬이 병목</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>유니온 파인드</strong>는 서로소 집합을 관리하는 자료구조이다.</li>
                <li><strong>Find</strong>는 원소의 대표 원소를, <strong>Union</strong>은 두 집합의 합병을 수행한다.</li>
                <li><strong>경로 압축</strong>으로 find 경로를 평탄화하여 성능을 개선한다.</li>
                <li><strong>랭크 기반 합치기</strong>로 트리의 높이 증가를 최소화한다.</li>
                <li>두 최적화를 함께 적용하면 모든 연산이 거의 <strong>O(1)</strong>이다.</li>
                <li><strong>크루스칼 알고리즘</strong>에서 사이클 탐지에 핵심적으로 활용된다.</li>
              </ul>
            </div>

            <div className="exercise-box" data-aos="fade-up">
              <h3>연습 문제</h3>
              <p><strong>문제 1.</strong> 원소 {0, 1, 2, 3, 4}에서 union(0,1), union(2,3), union(1,3), union(3,4)를 순서대로 수행한 후 각 원소의 parent 배열 상태를 그리세요.</p>
              <p><strong>문제 2.</strong> 유니온 파인드에 집합의 크기를 추적하는 기능을 추가하세요. (각 대표 원소에 집합 크기를 저장)</p>
              <p><strong>문제 3.</strong> 주어진 그래프에서 크루스칼 알고리즘을 이용하여 최소 신장 트리를 구하고, 총 가중치를 계산하세요.</p>
            </div>

            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/advanced/segment-tree" className="lesson-nav-btn prev">&larr; 세그먼트 트리</Link>
              <Link to="/practice" className="lesson-nav-btn next">연습문제 &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default UnionFind;
