import{j as e,L as s}from"./index-B3GxaZwy.js";import{S as r}from"./SEOHead-D3w2GwHl.js";import{u as d}from"./useAOS-d_NXnJgz.js";const c=()=>(d(),e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"트라이(Trie) | 자료구조 학습",description:"트라이의 개념, 문자열 탐색, 삽입/탐색 연산, 자동완성 구현까지 체계적으로 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"트라이 (Trie)"}),e.jsx("p",{children:"문자열 검색에 특화된 트리 기반 자료구조를 학습합니다"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsxs("div",{className:"callout-box","data-aos":"fade-up",children:[e.jsx("h3",{children:"학습 목표"}),e.jsxs("ul",{children:[e.jsx("li",{children:"트라이의 개념과 구조를 이해한다."}),e.jsx("li",{children:"문자열 탐색에서 트라이가 효율적인 이유를 설명할 수 있다."}),e.jsx("li",{children:"삽입과 탐색 연산을 구현할 수 있다."}),e.jsx("li",{children:"자동완성 기능을 트라이로 구현할 수 있다."}),e.jsx("li",{children:"트라이의 시간/공간 복잡도를 분석할 수 있다."})]})]}),e.jsx("h2",{"data-aos":"fade-up",children:"1. 트라이의 개념"}),e.jsx("h3",{"data-aos":"fade-up",children:"1.1 트라이란?"}),e.jsxs("p",{"data-aos":"fade-up",children:[e.jsx("strong",{children:"트라이(Trie)"}),'는 문자열을 저장하고 검색하기 위한 트리 형태의 자료구조입니다. "Retrieval"에서 유래한 이름으로, ',e.jsx("strong",{children:"접두사 트리(Prefix Tree)"}),"라고도 불립니다. 각 노드는 하나의 문자를 저장하며, 루트에서 특정 노드까지의 경로가 하나의 문자열(또는 접두사)을 나타냅니다."]}),e.jsxs("div",{className:"code-block","data-aos":"fade-up",children:[e.jsx("div",{className:"code-header",children:"트라이 구조 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`단어: "cat", "car", "card", "dog", "dot"

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
"dot"  → root → d → o → t*`})})]}),e.jsx("h3",{"data-aos":"fade-up",children:"1.2 트라이 vs 다른 자료구조"}),e.jsxs("table",{className:"lesson-table","data-aos":"fade-up",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"자료구조"}),e.jsx("th",{children:"문자열 검색"}),e.jsx("th",{children:"접두사 검색"}),e.jsx("th",{children:"공간 효율"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"배열/리스트"})}),e.jsx("td",{children:"O(n * m)"}),e.jsx("td",{children:"O(n * m)"}),e.jsx("td",{children:"좋음"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"해시 테이블"})}),e.jsx("td",{children:"O(m)"}),e.jsx("td",{children:"O(n * m)"}),e.jsx("td",{children:"좋음"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"이진 탐색 트리"})}),e.jsx("td",{children:"O(m * log n)"}),e.jsx("td",{children:"O(m * log n)"}),e.jsx("td",{children:"보통"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"트라이"})}),e.jsx("td",{children:"O(m)"}),e.jsx("td",{children:"O(m)"}),e.jsx("td",{children:"나쁨"})]})]})]}),e.jsx("p",{"data-aos":"fade-up",children:"(n = 저장된 문자열 수, m = 검색 문자열의 길이)"}),e.jsx("h2",{"data-aos":"fade-up",children:"2. 문자열 탐색에서의 활용"}),e.jsx("p",{"data-aos":"fade-up",children:"트라이는 다음과 같은 문자열 관련 문제에서 매우 효율적입니다."}),e.jsxs("ul",{"data-aos":"fade-up",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"사전(Dictionary) 구현"}),": 단어 존재 여부를 O(m)에 확인"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"자동완성(Autocomplete)"}),": 접두사에 매칭되는 모든 단어 검색"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"맞춤법 검사기"}),": 유사한 단어 후보 탐색"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"IP 라우팅"}),": 최장 접두사 매칭(Longest Prefix Match)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"문자열 정렬"}),": 트라이를 DFS로 순회하면 사전순 정렬"]})]}),e.jsx("h2",{"data-aos":"fade-up",children:"3. 삽입 / 탐색 연산"}),e.jsx("h3",{"data-aos":"fade-up",children:"3.1 트라이 노드 구현"}),e.jsxs("div",{className:"code-block","data-aos":"fade-up",children:[e.jsx("div",{className:"code-header",children:"Python - 트라이 클래스 구현"}),e.jsx("pre",{children:e.jsx("code",{children:`class TrieNode:
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
        return True`})})]}),e.jsx("h3",{"data-aos":"fade-up",children:"3.2 사용 예시"}),e.jsxs("div",{className:"code-block","data-aos":"fade-up",children:[e.jsx("div",{className:"code-header",children:"Python - 트라이 사용"}),e.jsx("pre",{children:e.jsx("code",{children:`trie = Trie()

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
print(trie.starts_with("cat"))     # False`})})]}),e.jsxs("div",{className:"code-block","data-aos":"fade-up",children:[e.jsx("div",{className:"code-header",children:"삽입 연산 동작 과정"}),e.jsx("pre",{children:e.jsx("code",{children:`"app" 삽입:
  root → 'a' (생성) → 'p' (생성) → 'p' (생성, is_end=True)

"apple" 삽입:
  root → 'a' (존재) → 'p' (존재) → 'p' (존재) → 'l' (생성) → 'e' (생성, is_end=True)

→ "app"과 "apple"은 접두사를 공유하므로 경로가 겹침`})})]}),e.jsx("h2",{"data-aos":"fade-up",children:"4. 자동완성 구현"}),e.jsxs("div",{className:"code-block","data-aos":"fade-up",children:[e.jsx("div",{className:"code-header",children:"Python - 자동완성 기능 구현"}),e.jsx("pre",{children:e.jsx("code",{children:`class Trie:
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
# []`})})]}),e.jsxs("div",{className:"callout-box","data-aos":"fade-up",children:[e.jsx("h3",{children:"자동완성의 실제 활용"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"검색 엔진"}),": Google, Naver 등의 검색어 자동완성"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"IDE/에디터"}),": 코드 자동완성 (IntelliSense)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"스마트폰 키보드"}),": 단어 추천 기능"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"명령줄"}),": Tab 키를 이용한 명령어 자동완성"]})]})]}),e.jsx("h2",{"data-aos":"fade-up",children:"5. 시간 복잡도"}),e.jsxs("table",{className:"lesson-table","data-aos":"fade-up",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"연산"}),e.jsx("th",{children:"시간 복잡도"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"삽입 (insert)"})}),e.jsx("td",{children:"O(m)"}),e.jsx("td",{children:"문자열 길이 m만큼 노드 탐색/생성"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"검색 (search)"})}),e.jsx("td",{children:"O(m)"}),e.jsx("td",{children:"문자열 길이 m만큼 노드 탐색"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"접두사 검색 (starts_with)"})}),e.jsx("td",{children:"O(m)"}),e.jsx("td",{children:"접두사 길이 m만큼 노드 탐색"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"자동완성 (autocomplete)"})}),e.jsx("td",{children:"O(m + k)"}),e.jsx("td",{children:"접두사 탐색 O(m) + 결과 수집 O(k)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"삭제 (delete)"})}),e.jsx("td",{children:"O(m)"}),e.jsx("td",{children:"문자열 길이 m만큼 노드 탐색 후 제거"})]})]})]}),e.jsxs("div",{className:"callout-box","data-aos":"fade-up",children:[e.jsx("h3",{children:"공간 복잡도"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"최악의 경우"}),": O(n * m * c) (n: 단어 수, m: 평균 길이, c: 문자 집합 크기)"]}),e.jsx("li",{children:"영어 소문자만 사용하면 c = 26, 유니코드면 훨씬 커질 수 있음"}),e.jsx("li",{children:"공통 접두사가 많을수록 공간 절약 효과가 큼"}),e.jsx("li",{children:"메모리 사용이 크다는 것이 트라이의 주요 단점"})]})]}),e.jsxs("div",{className:"callout-box","data-aos":"fade-up",children:[e.jsx("h3",{children:"핵심 정리"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"트라이"}),"는 문자열 검색과 접두사 매칭에 최적화된 트리 자료구조이다."]}),e.jsx("li",{children:"삽입과 검색 모두 문자열 길이 O(m)에 수행된다."}),e.jsxs("li",{children:[e.jsx("strong",{children:"자동완성"}),"은 DFS로 접두사 이후의 모든 단어를 수집하여 구현한다."]}),e.jsx("li",{children:"공간 효율은 낮지만, 문자열 탐색 속도가 매우 빠르다."}),e.jsxs("li",{children:["해시 테이블과 달리 ",e.jsx("strong",{children:"접두사 기반 검색"}),"이 효율적이다."]})]})]}),e.jsxs("div",{className:"exercise-box","data-aos":"fade-up",children:[e.jsx("h3",{children:"연습 문제"}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제 1."}),' 트라이에 "hello", "help", "hero" 를 삽입한 후 트리 구조를 그려보세요.']}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제 2."})," 트라이에서 단어를 삭제하는 delete 메서드를 구현하세요. (다른 단어의 접두사인 경우 is_end만 False로 변경)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제 3."})," 트라이를 활용하여 주어진 문자열 배열에서 가장 긴 공통 접두사를 찾는 함수를 작성하세요."]})]}),e.jsxs("div",{className:"lesson-nav","data-aos":"fade-up",children:[e.jsx(s,{to:"/advanced",className:"lesson-nav-btn prev",children:"← 고급 자료구조"}),e.jsx(s,{to:"/advanced/segment-tree",className:"lesson-nav-btn next",children:"세그먼트 트리 →"})]})]})})})]}));export{c as default};
