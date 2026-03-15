import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const TriePage = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="트라이(Trie) | 자료구조 학습"
        description="트라이의 개념, 문자열 탐색, 삽입/탐색 연산, 자동완성 구현까지 체계적으로 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>트라이 (Trie)</h1>
          <p>문자열 검색에 특화된 트리 기반 자료구조를 학습합니다</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box" data-aos="fade-up">
              <h3>학습 목표</h3>
              <ul>
                <li>트라이의 개념과 구조를 이해한다.</li>
                <li>문자열 탐색에서 트라이가 효율적인 이유를 설명할 수 있다.</li>
                <li>삽입과 탐색 연산을 구현할 수 있다.</li>
                <li>자동완성 기능을 트라이로 구현할 수 있다.</li>
                <li>트라이의 시간/공간 복잡도를 분석할 수 있다.</li>
              </ul>
            </div>

            {/* 트라이의 개념 */}
            <h2 data-aos="fade-up">1. 트라이의 개념</h2>

            <h3 data-aos="fade-up">1.1 트라이란?</h3>
            <p data-aos="fade-up">
              <strong>트라이(Trie)</strong>는 문자열을 저장하고 검색하기 위한 트리 형태의 자료구조입니다.
              "Retrieval"에서 유래한 이름으로, <strong>접두사 트리(Prefix Tree)</strong>라고도 불립니다.
              각 노드는 하나의 문자를 저장하며, 루트에서 특정 노드까지의 경로가 하나의 문자열(또는 접두사)을 나타냅니다.
            </p>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">트라이 구조 예시</div>
              <pre><code>{`단어: "cat", "car", "card", "dog", "dot"

          (root)
         /      \\
        c        d
       / \\        \\
      a   ...     o
     / \\          / \\
    t*  r*       g*  t*
        |
        d*

* = 단어의 끝(is_end = True)

"cat"  → root → c → a → t*
"car"  → root → c → a → r*
"card" → root → c → a → r → d*
"dog"  → root → d → o → g*
"dot"  → root → d → o → t*`}</code></pre>
            </div>

            <h3 data-aos="fade-up">1.2 트라이 vs 다른 자료구조</h3>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>자료구조</th>
                  <th>문자열 검색</th>
                  <th>접두사 검색</th>
                  <th>공간 효율</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>배열/리스트</strong></td>
                  <td>O(n * m)</td>
                  <td>O(n * m)</td>
                  <td>좋음</td>
                </tr>
                <tr>
                  <td><strong>해시 테이블</strong></td>
                  <td>O(m)</td>
                  <td>O(n * m)</td>
                  <td>좋음</td>
                </tr>
                <tr>
                  <td><strong>이진 탐색 트리</strong></td>
                  <td>O(m * log n)</td>
                  <td>O(m * log n)</td>
                  <td>보통</td>
                </tr>
                <tr>
                  <td><strong>트라이</strong></td>
                  <td>O(m)</td>
                  <td>O(m)</td>
                  <td>나쁨</td>
                </tr>
              </tbody>
            </table>
            <p data-aos="fade-up">
              (n = 저장된 문자열 수, m = 검색 문자열의 길이)
            </p>

            {/* 문자열 탐색에서의 활용 */}
            <h2 data-aos="fade-up">2. 문자열 탐색에서의 활용</h2>

            <p data-aos="fade-up">
              트라이는 다음과 같은 문자열 관련 문제에서 매우 효율적입니다.
            </p>
            <ul data-aos="fade-up">
              <li><strong>사전(Dictionary) 구현</strong>: 단어 존재 여부를 O(m)에 확인</li>
              <li><strong>자동완성(Autocomplete)</strong>: 접두사에 매칭되는 모든 단어 검색</li>
              <li><strong>맞춤법 검사기</strong>: 유사한 단어 후보 탐색</li>
              <li><strong>IP 라우팅</strong>: 최장 접두사 매칭(Longest Prefix Match)</li>
              <li><strong>문자열 정렬</strong>: 트라이를 DFS로 순회하면 사전순 정렬</li>
            </ul>

            {/* 삽입/탐색 연산 */}
            <h2 data-aos="fade-up">3. 삽입 / 탐색 연산</h2>

            <h3 data-aos="fade-up">3.1 트라이 노드 구현</h3>
            <div className="code-block" data-aos="fade-up">
              <div className="code-header">Python - 트라이 클래스 구현</div>
              <pre><code>{`class TrieNode:
    def __init__(self):
        self.children = {}      # 자식 노드 (문자 → TrieNode)
        self.is_end = False     # 단어의 끝 여부

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        """단어를 트라이에 삽입"""
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True      # 단어의 끝 표시

    def search(self, word):
        """단어가 트라이에 존재하는지 확인"""
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end      # 단어의 끝인지 확인

    def starts_with(self, prefix):
        """접두사로 시작하는 단어가 있는지 확인"""
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True`}</code></pre>
            </div>

            <h3 data-aos="fade-up">3.2 사용 예시</h3>
            <div className="code-block" data-aos="fade-up">
              <div className="code-header">Python - 트라이 사용</div>
              <pre><code>{`trie = Trie()

# 단어 삽입
words = ["apple", "app", "application", "banana", "band"]
for word in words:
    trie.insert(word)

# 단어 검색
print(trie.search("app"))          # True
print(trie.search("apple"))        # True
print(trie.search("ap"))           # False (단어의 끝이 아님)
print(trie.search("orange"))       # False

# 접두사 검색
print(trie.starts_with("app"))     # True
print(trie.starts_with("ban"))     # True
print(trie.starts_with("cat"))     # False`}</code></pre>
            </div>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">삽입 연산 동작 과정</div>
              <pre><code>{`"app" 삽입:
  root → 'a' (생성) → 'p' (생성) → 'p' (생성, is_end=True)

"apple" 삽입:
  root → 'a' (존재) → 'p' (존재) → 'p' (존재) → 'l' (생성) → 'e' (생성, is_end=True)

→ "app"과 "apple"은 접두사를 공유하므로 경로가 겹침`}</code></pre>
            </div>

            {/* 자동완성 구현 */}
            <h2 data-aos="fade-up">4. 자동완성 구현</h2>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">Python - 자동완성 기능 구현</div>
              <pre><code>{`class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True

    def _find_node(self, prefix):
        """접두사의 마지막 노드를 찾아 반환"""
        node = self.root
        for char in prefix:
            if char not in node.children:
                return None
            node = node.children[char]
        return node

    def autocomplete(self, prefix):
        """접두사로 시작하는 모든 단어 반환"""
        node = self._find_node(prefix)
        if node is None:
            return []

        results = []
        self._dfs(node, prefix, results)
        return results

    def _dfs(self, node, current_word, results):
        """DFS로 모든 완성 단어를 수집"""
        if node.is_end:
            results.append(current_word)
        for char, child_node in sorted(node.children.items()):
            self._dfs(child_node, current_word + char, results)

# 사용 예시
trie = Trie()
words = ["python", "pytorch", "pycharm", "panda", "pandas", "parse"]
for w in words:
    trie.insert(w)

print(trie.autocomplete("py"))
# ['pycharm', 'python', 'pytorch']

print(trie.autocomplete("pan"))
# ['panda', 'pandas']

print(trie.autocomplete("xyz"))
# []`}</code></pre>
            </div>

            <div className="callout-box" data-aos="fade-up">
              <h3>자동완성의 실제 활용</h3>
              <ul>
                <li><strong>검색 엔진</strong>: Google, Naver 등의 검색어 자동완성</li>
                <li><strong>IDE/에디터</strong>: 코드 자동완성 (IntelliSense)</li>
                <li><strong>스마트폰 키보드</strong>: 단어 추천 기능</li>
                <li><strong>명령줄</strong>: Tab 키를 이용한 명령어 자동완성</li>
              </ul>
            </div>

            {/* 시간 복잡도 */}
            <h2 data-aos="fade-up">5. 시간 복잡도</h2>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>연산</th>
                  <th>시간 복잡도</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>삽입 (insert)</strong></td>
                  <td>O(m)</td>
                  <td>문자열 길이 m만큼 노드 탐색/생성</td>
                </tr>
                <tr>
                  <td><strong>검색 (search)</strong></td>
                  <td>O(m)</td>
                  <td>문자열 길이 m만큼 노드 탐색</td>
                </tr>
                <tr>
                  <td><strong>접두사 검색 (starts_with)</strong></td>
                  <td>O(m)</td>
                  <td>접두사 길이 m만큼 노드 탐색</td>
                </tr>
                <tr>
                  <td><strong>자동완성 (autocomplete)</strong></td>
                  <td>O(m + k)</td>
                  <td>접두사 탐색 O(m) + 결과 수집 O(k)</td>
                </tr>
                <tr>
                  <td><strong>삭제 (delete)</strong></td>
                  <td>O(m)</td>
                  <td>문자열 길이 m만큼 노드 탐색 후 제거</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>공간 복잡도</h3>
              <ul>
                <li><strong>최악의 경우</strong>: O(n * m * c) (n: 단어 수, m: 평균 길이, c: 문자 집합 크기)</li>
                <li>영어 소문자만 사용하면 c = 26, 유니코드면 훨씬 커질 수 있음</li>
                <li>공통 접두사가 많을수록 공간 절약 효과가 큼</li>
                <li>메모리 사용이 크다는 것이 트라이의 주요 단점</li>
              </ul>
            </div>

            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>트라이</strong>는 문자열 검색과 접두사 매칭에 최적화된 트리 자료구조이다.</li>
                <li>삽입과 검색 모두 문자열 길이 O(m)에 수행된다.</li>
                <li><strong>자동완성</strong>은 DFS로 접두사 이후의 모든 단어를 수집하여 구현한다.</li>
                <li>공간 효율은 낮지만, 문자열 탐색 속도가 매우 빠르다.</li>
                <li>해시 테이블과 달리 <strong>접두사 기반 검색</strong>이 효율적이다.</li>
              </ul>
            </div>

            <div className="exercise-box" data-aos="fade-up">
              <h3>연습 문제</h3>
              <p><strong>문제 1.</strong> 트라이에 "hello", "help", "hero" 를 삽입한 후 트리 구조를 그려보세요.</p>
              <p><strong>문제 2.</strong> 트라이에서 단어를 삭제하는 delete 메서드를 구현하세요. (다른 단어의 접두사인 경우 is_end만 False로 변경)</p>
              <p><strong>문제 3.</strong> 트라이를 활용하여 주어진 문자열 배열에서 가장 긴 공통 접두사를 찾는 함수를 작성하세요.</p>
            </div>

            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/advanced" className="lesson-nav-btn prev">&larr; 고급 자료구조</Link>
              <Link to="/advanced/segment-tree" className="lesson-nav-btn next">세그먼트 트리 &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default TriePage;
