import{j as r,L as e}from"./index-Dx7btcoz.js";import{S as s}from"./SEOHead-panwKb0o.js";import{u as n}from"./useAOS-CuiPokAf.js";const c=()=>(n(),r.jsxs(r.Fragment,{children:[r.jsx(s,{title:"삽입 정렬 | 자료구조 학습",description:"삽입 정렬의 개념, 동작 과정, 시간 복잡도(최선 O(n), 최악 O(n²)), 안정 정렬 특성, Python 구현을 학습합니다."}),r.jsx("section",{className:"page-header",children:r.jsxs("div",{className:"container",children:[r.jsx("h1",{children:"삽입 정렬"}),r.jsx("p",{children:"정렬된 부분에 새 요소를 적절한 위치에 삽입하는 알고리즘입니다. 거의 정렬된 데이터에서 매우 효율적이며 안정 정렬입니다."})]})}),r.jsx("section",{className:"section lesson-content",children:r.jsx("div",{className:"container",children:r.jsxs("div",{className:"lesson-body",children:[r.jsxs("div",{className:"callout-box",children:[r.jsx("h3",{children:"학습 목표"}),r.jsxs("ul",{children:[r.jsx("li",{children:"삽입 정렬의 개념과 동작 원리를 이해한다."}),r.jsx("li",{children:"최선 O(n), 최악 O(n²)의 시간 복잡도를 분석한다."}),r.jsx("li",{children:"안정 정렬의 특성과 중요성을 설명할 수 있다."}),r.jsx("li",{children:"Python으로 삽입 정렬을 구현할 수 있다."})]})]}),r.jsx("h2",{children:"삽입 정렬의 개념"}),r.jsxs("p",{children:["삽입 정렬(Insertion Sort)은 카드 게임에서 손에 든 카드를 정렬하는 방식과 같습니다. 배열의 두 번째 요소부터 시작하여, 이미 정렬된 앞부분에서 ",r.jsx("strong",{children:"적절한 위치를 찾아 삽입"}),"합니다."]}),r.jsxs("p",{children:["작은 데이터셋이나 거의 정렬된 데이터에서 뛰어난 성능을 보이며, 실제로 Python의 ",r.jsx("code",{children:"sorted()"}),"와 Java의 Arrays.sort()는 작은 배열에 대해 삽입 정렬을 사용합니다."]}),r.jsx("h2",{children:"동작 과정"}),r.jsx("p",{children:"배열 [5, 2, 4, 6, 1, 3]을 오름차순으로 정렬하는 과정입니다."}),r.jsxs("div",{className:"code-block",children:[r.jsx("div",{className:"code-header",children:"삽입 정렬 동작 과정"}),r.jsx("pre",{children:r.jsx("code",{children:`초기 배열: [5, 2, 4, 6, 1, 3]
           ↑ 정렬됨

[1단계] key = 2, 정렬된 부분: [5]
  5 > 2 → 5를 오른쪽으로 이동
  빈 자리에 2 삽입
  → [2, 5, 4, 6, 1, 3]

[2단계] key = 4, 정렬된 부분: [2, 5]
  5 > 4 → 5를 오른쪽으로 이동
  2 < 4 → 멈춤, 빈 자리에 4 삽입
  → [2, 4, 5, 6, 1, 3]

[3단계] key = 6, 정렬된 부분: [2, 4, 5]
  5 < 6 → 이동 없음, 6은 이미 올바른 위치
  → [2, 4, 5, 6, 1, 3]

[4단계] key = 1, 정렬된 부분: [2, 4, 5, 6]
  6 > 1 → 이동, 5 > 1 → 이동, 4 > 1 → 이동, 2 > 1 → 이동
  맨 앞에 1 삽입
  → [1, 2, 4, 5, 6, 3]

[5단계] key = 3, 정렬된 부분: [1, 2, 4, 5, 6]
  6 > 3 → 이동, 5 > 3 → 이동, 4 > 3 → 이동
  2 < 3 → 멈춤, 빈 자리에 3 삽입
  → [1, 2, 3, 4, 5, 6]

결과: [1, 2, 3, 4, 5, 6]`})})]}),r.jsxs("div",{className:"callout-box",children:[r.jsx("h3",{children:"핵심 관찰"}),r.jsxs("ul",{children:[r.jsx("li",{children:'현재 요소(key)를 정렬된 부분에서 올바른 위치에 "삽입"합니다.'}),r.jsx("li",{children:"이미 정렬된 데이터에서는 비교만 하고 이동이 거의 없으므로 O(n)에 가깝게 동작합니다."})]})]}),r.jsx("h2",{children:"시간 복잡도"}),r.jsxs("table",{className:"lesson-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"경우"}),r.jsx("th",{children:"시간 복잡도"}),r.jsx("th",{children:"설명"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"최선 (Best)"}),r.jsx("td",{children:"O(n)"}),r.jsx("td",{children:"이미 정렬된 배열 - 비교만 n-1번"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"평균 (Average)"}),r.jsxs("td",{children:["O(n",r.jsx("sup",{children:"2"}),")"]}),r.jsx("td",{children:"무작위 배열"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"최악 (Worst)"}),r.jsxs("td",{children:["O(n",r.jsx("sup",{children:"2"}),")"]}),r.jsx("td",{children:"역순으로 정렬된 배열"})]})]})]}),r.jsxs("table",{className:"lesson-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"특성"}),r.jsx("th",{children:"값"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"공간 복잡도"}),r.jsx("td",{children:"O(1) - 제자리 정렬 (In-place)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"안정 정렬"}),r.jsx("td",{children:"Yes - 같은 값의 상대적 순서 유지"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"적응적 (Adaptive)"}),r.jsx("td",{children:"Yes - 거의 정렬된 데이터에서 빠름"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"온라인 (Online)"}),r.jsx("td",{children:"Yes - 데이터가 순차적으로 들어와도 정렬 가능"})]})]})]}),r.jsx("h2",{children:"안정 정렬"}),r.jsxs("p",{children:["삽입 정렬은 ",r.jsx("strong",{children:"안정 정렬(Stable Sort)"}),"입니다. 같은 값을 가진 요소들의 원래 상대적 순서가 정렬 후에도 그대로 유지됩니다."]}),r.jsxs("div",{className:"code-block",children:[r.jsx("div",{className:"code-header",children:"안정 정렬 동작 확인"}),r.jsx("pre",{children:r.jsx("code",{children:`# 안정 정렬 확인: 같은 값의 순서가 유지되는지 확인
data = [(3, 'A'), (1, 'B'), (3, 'C'), (2, 'D'), (1, 'E')]

# 첫 번째 값으로 삽입 정렬
def insertion_sort_stable(arr, key_func):
    arr = arr[:]
    for i in range(1, len(arr)):
        current = arr[i]
        j = i - 1
        while j >= 0 and key_func(arr[j]) > key_func(current):
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = current
    return arr

result = insertion_sort_stable(data, lambda x: x[0])
print(result)
# [(1, 'B'), (1, 'E'), (2, 'D'), (3, 'A'), (3, 'C')]
# 같은 키 1: B가 E보다 앞 (원래 순서 유지) ✓
# 같은 키 3: A가 C보다 앞 (원래 순서 유지) ✓`})})]}),r.jsxs("div",{className:"callout-box",children:[r.jsx("h3",{children:"왜 안정 정렬이 중요한가?"}),r.jsx("ul",{children:r.jsx("li",{children:"예를 들어 학생 목록을 먼저 이름순으로 정렬한 후 성적순으로 다시 정렬할 때, 안정 정렬이면 같은 성적의 학생들은 이름순이 유지됩니다."})})]}),r.jsx("h2",{children:"구현"}),r.jsxs("div",{className:"code-block",children:[r.jsx("div",{className:"code-header",children:"삽입 정렬 구현"}),r.jsx("pre",{children:r.jsx("code",{children:`def insertion_sort(arr):
    """삽입 정렬: 정렬된 부분에 적절한 위치에 삽입"""
    for i in range(1, len(arr)):
        key = arr[i]  # 삽입할 요소
        j = i - 1
        # key보다 큰 요소들을 오른쪽으로 이동
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key  # 올바른 위치에 삽입
    return arr

# 테스트
data = [12, 11, 13, 5, 6]
print(insertion_sort(data[:]))  # [5, 6, 11, 12, 13]

# 이진 삽입 정렬: 삽입 위치를 이진 탐색으로 찾기
import bisect

def binary_insertion_sort(arr):
    """이진 삽입 정렬: 비교 횟수를 O(n log n)으로 줄임"""
    for i in range(1, len(arr)):
        key = arr[i]
        # 이진 탐색으로 삽입 위치 찾기
        pos = bisect.bisect_left(arr, key, 0, i)
        # 요소 이동 (이동 횟수는 여전히 O(n))
        arr[pos+1:i+1] = arr[pos:i]
        arr[pos] = key
    return arr

print(binary_insertion_sort([12, 11, 13, 5, 6]))
# [5, 6, 11, 12, 13]

# 과정 출력 버전
def insertion_sort_verbose(arr):
    arr = arr[:]
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        moves = 0
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
            moves += 1
        arr[j + 1] = key
        print(f"[{i}단계] key={key}, {moves}번 이동 → {arr}")
    return arr

insertion_sort_verbose([5, 2, 4, 6, 1, 3])`})})]}),r.jsxs("div",{className:"exercise-box",children:[r.jsx("h3",{children:"연습 문제"}),r.jsxs("ol",{children:[r.jsx("li",{children:"배열 [7, 3, 5, 1, 9, 2]를 삽입 정렬로 정렬하는 각 단계의 과정을 손으로 추적하세요."}),r.jsx("li",{children:"이미 정렬된 배열 [1, 2, 3, 4, 5]에 대해 삽입 정렬이 수행하는 비교 횟수를 구하세요."}),r.jsx("li",{children:"삽입 정렬이 버블 정렬보다 효율적인 경우는 언제인지, 그 이유를 설명하세요."}),r.jsx("li",{children:"삽입 정렬을 이용하여 연결 리스트를 정렬하는 방법을 설계해 보세요."})]})]}),r.jsxs("div",{className:"lesson-nav",children:[r.jsx(e,{to:"/algorithm/selection-sort",className:"lesson-nav-btn prev",children:"← 선택 정렬"}),r.jsx(e,{to:"/algorithm/merge-sort",className:"lesson-nav-btn next",children:"병합 정렬 →"})]})]})})})]}));export{c as default};
