import{j as e,L as r}from"./index-rRlbc5CT.js";import{S as s}from"./SEOHead-DzkFjAXq.js";import{u as n}from"./useAOS-Uc9VSS6Q.js";const i=()=>(n(),e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"해시 맵 활용 | 자료구조 학습",description:"해시 맵의 실전 활용법: 빈도 카운팅, 두 수의 합, 그룹 애너그램, Python defaultdict와 Counter 사용법을 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"해시 맵 활용"}),e.jsx("p",{children:"해시 맵은 코딩 테스트와 실무에서 가장 빈번하게 사용되는 자료구조 중 하나입니다. 다양한 실전 패턴을 익혀 문제 해결 능력을 키워봅시다."})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"해시 맵 실전 활용"}),e.jsx("p",{children:"해시 맵(Hash Map)은 키-값 쌍을 O(1) 시간에 저장하고 조회할 수 있어, 다양한 알고리즘 문제에서 핵심 도구로 활용됩니다. 대표적인 활용 패턴은 다음과 같습니다."}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"패턴"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"활용 예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"빈도 카운팅"}),e.jsx("td",{children:"각 요소의 등장 횟수를 기록"}),e.jsx("td",{children:"최빈값, 중복 검사"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"인덱스 매핑"}),e.jsx("td",{children:"값을 키로, 인덱스를 값으로 저장"}),e.jsx("td",{children:"두 수의 합 문제"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"그룹핑"}),e.jsx("td",{children:"공통 특성으로 데이터를 그룹화"}),e.jsx("td",{children:"애너그램 그룹핑"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"캐싱/메모이제이션"}),e.jsx("td",{children:"이전 계산 결과를 저장하여 재활용"}),e.jsx("td",{children:"피보나치, 동적 프로그래밍"})]})]})]}),e.jsx("h2",{children:"빈도 카운팅"}),e.jsx("p",{children:"리스트에서 각 요소가 몇 번 등장하는지 세는 것은 해시 맵의 가장 기본적인 활용입니다. 배열을 한 번 순회하면서 O(n) 시간에 모든 요소의 빈도를 구할 수 있습니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"빈도 카운팅 기본 패턴"}),e.jsx("pre",{children:e.jsx("code",{children:`# 방법 1: 기본 dict 사용
def count_frequency(arr):
    freq = {}
    for item in arr:
        if item in freq:
            freq[item] += 1
        else:
            freq[item] = 1
    return freq

# 방법 2: dict.get() 활용
def count_frequency_v2(arr):
    freq = {}
    for item in arr:
        freq[item] = freq.get(item, 0) + 1
    return freq

# 예시
fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"]
print(count_frequency(fruits))
# {'apple': 3, 'banana': 2, 'cherry': 1}

# 최빈값 찾기
freq = count_frequency(fruits)
most_common = max(freq, key=freq.get)
print(f"최빈값: {most_common}")  # apple`})})]}),e.jsx("h2",{children:"두 수의 합 문제"}),e.jsx("p",{children:'"배열에서 합이 target이 되는 두 수의 인덱스를 찾아라"는 코딩 테스트의 대표적인 문제입니다. 해시 맵을 사용하면 O(n) 시간에 해결할 수 있습니다.'}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Two Sum 풀이"}),e.jsx("pre",{children:e.jsx("code",{children:`def two_sum(nums, target):
    """
    해시 맵을 이용한 Two Sum
    시간 복잡도: O(n), 공간 복잡도: O(n)
    """
    seen = {}  # 값 → 인덱스 매핑
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# 예시
nums = [2, 7, 11, 15]
target = 9
print(two_sum(nums, target))  # [0, 1] (2 + 7 = 9)

nums2 = [3, 2, 4]
target2 = 6
print(two_sum(nums2, target2))  # [1, 2] (2 + 4 = 6)`})})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"브루트포스 vs 해시 맵"}),e.jsxs("p",{children:["이중 반복문으로 풀면 O(n",e.jsx("sup",{children:"2"}),')이지만, 해시 맵을 사용하면 한 번의 순회로 O(n)에 해결할 수 있습니다. 이처럼 "검색을 O(1)로 만드는 것"이 해시 맵 활용의 핵심입니다.']})]}),e.jsx("h2",{children:"그룹 애너그램"}),e.jsx("p",{children:'애너그램은 같은 문자를 재배열하여 만든 단어입니다. 예를 들어 "eat", "tea", "ate"는 서로 애너그램입니다. 해시 맵을 사용하면 문자열들을 애너그램 그룹별로 분류할 수 있습니다.'}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"그룹 애너그램 풀이"}),e.jsx("pre",{children:e.jsx("code",{children:`from collections import defaultdict

def group_anagrams(strs):
    """
    정렬된 문자열을 키로 사용하여 애너그램을 그룹화
    시간 복잡도: O(n * k log k), k는 문자열의 최대 길이
    """
    groups = defaultdict(list)
    for s in strs:
        key = ''.join(sorted(s))  # 정렬하면 애너그램은 같은 키
        groups[key].append(s)
    return list(groups.values())

# 예시
words = ["eat", "tea", "tan", "ate", "nat", "bat"]
result = group_anagrams(words)
print(result)
# [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

# 빈도수 튜플을 키로 사용하는 방법 (정렬 없이)
def group_anagrams_v2(strs):
    groups = defaultdict(list)
    for s in strs:
        count = [0] * 26
        for c in s:
            count[ord(c) - ord('a')] += 1
        groups[tuple(count)].append(s)
    return list(groups.values())`})})]}),e.jsx("h2",{children:"Python defaultdict / Counter"}),e.jsxs("p",{children:["Python의 ",e.jsx("code",{children:"collections"})," 모듈은 해시 맵 활용을 더욱 편리하게 만드는 도구를 제공합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"defaultdict 활용"}),e.jsx("pre",{children:e.jsx("code",{children:`from collections import defaultdict

# defaultdict: 존재하지 않는 키에 접근하면 기본값 자동 생성
word_count = defaultdict(int)    # 기본값: 0
graph = defaultdict(list)        # 기본값: []
nested = defaultdict(dict)       # 기본값: {}

# 빈도 카운팅이 간결해짐
text = "hello world hello python"
for word in text.split():
    word_count[word] += 1  # KeyError 걱정 없음

print(dict(word_count))
# {'hello': 2, 'world': 1, 'python': 1}

# 그래프의 인접 리스트 구성
edges = [(1, 2), (1, 3), (2, 4), (3, 4)]
for u, v in edges:
    graph[u].append(v)
    graph[v].append(u)

print(dict(graph))
# {1: [2, 3], 2: [1, 4], 3: [1, 4], 4: [2, 3]}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Counter 활용"}),e.jsx("pre",{children:e.jsx("code",{children:`from collections import Counter

# Counter: 요소의 빈도를 자동으로 계산
fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"]
counter = Counter(fruits)
print(counter)  # Counter({'apple': 3, 'banana': 2, 'cherry': 1})

# 상위 N개 빈도 요소
print(counter.most_common(2))  # [('apple', 3), ('banana', 2)]

# Counter 연산
c1 = Counter("aabbc")
c2 = Counter("abbcc")
print(c1 + c2)  # Counter({'b': 3, 'a': 3, 'c': 3})
print(c1 - c2)  # Counter({'a': 1})
print(c1 & c2)  # Counter({'a': 1, 'b': 1, 'c': 1}) 교집합
print(c1 | c2)  # Counter({'a': 2, 'b': 2, 'c': 2}) 합집합

# 문자열에서 문자 빈도
text = "programming"
char_count = Counter(text)
print(char_count.most_common(3))
# [('r', 2), ('g', 2), ('m', 2)]`})})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"실전 팁"}),e.jsxs("p",{children:["코딩 테스트에서 빈도 카운팅이 필요하면 ",e.jsx("code",{children:"Counter"}),"를, 키가 없을 때 기본값이 필요하면 ",e.jsx("code",{children:"defaultdict"}),"를 적극 활용하세요. 코드가 간결해지고 버그 발생 가능성도 줄어듭니다."]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습 문제"}),e.jsxs("ol",{children:[e.jsx("li",{children:"문자열이 주어질 때, 첫 번째로 반복되지 않는 문자를 찾는 함수를 해시 맵으로 구현하세요."}),e.jsx("li",{children:"두 리스트의 교집합을 해시 맵을 이용하여 구하는 함수를 작성하세요."}),e.jsx("li",{children:"주어진 배열에서 합이 0이 되는 부분 배열이 존재하는지 해시 맵으로 판별하세요."}),e.jsxs("li",{children:[e.jsx("code",{children:"Counter"}),"를 이용하여 두 문자열이 애너그램인지 판별하는 함수를 작성하세요."]})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(r,{to:"/hash/hash-table",className:"lesson-nav-btn prev",children:"← 이전: 해시 테이블"}),e.jsx(r,{to:"/algorithm",className:"lesson-nav-btn next",children:"다음: 알고리즘 →"})]})]})})})]}));export{i as default};
