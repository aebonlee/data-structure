import{j as e,L as r}from"./index-rRlbc5CT.js";import{S as s}from"./SEOHead-DzkFjAXq.js";import{u as i}from"./useAOS-Uc9VSS6Q.js";const t=()=>(i(),e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"병합 정렬 | 자료구조 학습",description:"분할 정복 개념, 병합 정렬의 동작, 시간 복잡도 O(n log n), 공간 복잡도 O(n), Python 구현을 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"병합 정렬"}),e.jsx("p",{children:"분할 정복(Divide and Conquer) 전략을 사용하여 항상 O(n log n)을 보장하는 효율적이고 안정적인 정렬 알고리즘입니다."})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"학습 목표"}),e.jsxs("ul",{children:[e.jsx("li",{children:"분할 정복(Divide and Conquer) 개념을 이해한다."}),e.jsx("li",{children:"병합 정렬의 동작 과정과 병합 연산을 설명할 수 있다."}),e.jsx("li",{children:"시간 복잡도 O(n log n)과 공간 복잡도 O(n)을 분석한다."}),e.jsx("li",{children:"Python으로 병합 정렬을 구현할 수 있다."})]})]}),e.jsx("h2",{children:"분할 정복 개념"}),e.jsx("p",{children:"분할 정복(Divide and Conquer)은 큰 문제를 작은 부분 문제로 나누어 해결한 뒤, 그 결과를 합쳐 전체 문제의 답을 구하는 알고리즘 설계 기법입니다."}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"단계"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"병합 정렬에서의 역할"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"분할 (Divide)"}),e.jsx("td",{children:"문제를 같은 유형의 작은 부분 문제로 분할"}),e.jsx("td",{children:"배열을 절반으로 나눔"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"정복 (Conquer)"}),e.jsx("td",{children:"부분 문제를 재귀적으로 해결"}),e.jsx("td",{children:"각 절반을 재귀적으로 정렬"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"결합 (Combine)"}),e.jsx("td",{children:"부분 문제의 해를 합쳐 원래 문제 해결"}),e.jsx("td",{children:"정렬된 두 배열을 병합"})]})]})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"분할 정복의 핵심"}),e.jsxs("ul",{children:[e.jsx("li",{children:"문제를 반으로 나누면 깊이가 log n이 됩니다."}),e.jsx("li",{children:"각 깊이에서 n개의 요소를 처리하므로 전체 시간 복잡도가 O(n log n)이 됩니다."}),e.jsx("li",{children:"이것이 O(n²) 정렬 알고리즘보다 훨씬 빠른 이유입니다."})]})]}),e.jsx("h2",{children:"병합 정렬의 동작"}),e.jsx("p",{children:"배열 [38, 27, 43, 3, 9, 82, 10]을 병합 정렬로 정렬하는 과정입니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"병합 정렬 동작 과정"}),e.jsx("pre",{children:e.jsx("code",{children:`원본: [38, 27, 43, 3, 9, 82, 10]

[분할 단계] - 배열을 재귀적으로 절반씩 나눔
                [38, 27, 43, 3, 9, 82, 10]
               /                           \\
        [38, 27, 43]                  [3, 9, 82, 10]
        /         \\                  /            \\
    [38]      [27, 43]          [3, 9]        [82, 10]
              /     \\          /    \\         /     \\
           [27]    [43]      [3]   [9]     [82]   [10]

[병합 단계] - 정렬하면서 합침
           [27]    [43]      [3]   [9]     [82]   [10]
              \\     /          \\    /         \\     /
           [27, 43]          [3, 9]        [10, 82]
        \\         /                  \\            /
        [27, 38, 43]              [3, 9, 10, 82]
               \\                           /
            [3, 9, 10, 27, 38, 43, 82]

결과: [3, 9, 10, 27, 38, 43, 82]`})})]}),e.jsx("h3",{children:"두 정렬된 배열의 병합"}),e.jsx("p",{children:'병합 정렬의 핵심은 "두 정렬된 배열을 하나의 정렬된 배열로 합치는" 병합(Merge) 연산입니다.'}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"병합 과정 상세"}),e.jsx("pre",{children:e.jsx("code",{children:`왼쪽: [27, 38, 43]    오른쪽: [3, 9, 82]
       ↑ i=0                  ↑ j=0          결과: []

비교: 27 vs 3 → 3이 작음
왼쪽: [27, 38, 43]    오른쪽: [3, 9, 82]
       ↑ i=0                     ↑ j=1     결과: [3]

비교: 27 vs 9 → 9가 작음
왼쪽: [27, 38, 43]    오른쪽: [3, 9, 82]
       ↑ i=0                        ↑ j=2  결과: [3, 9]

비교: 27 vs 82 → 27이 작음
왼쪽: [27, 38, 43]    오른쪽: [3, 9, 82]
          ↑ i=1                     ↑ j=2  결과: [3, 9, 27]

비교: 38 vs 82 → 38이 작음
왼쪽: [27, 38, 43]    오른쪽: [3, 9, 82]
              ↑ i=2                 ↑ j=2  결과: [3, 9, 27, 38]

비교: 43 vs 82 → 43이 작음
왼쪽 소진 → 오른쪽 나머지 추가
결과: [3, 9, 27, 38, 43, 82]`})})]}),e.jsx("h2",{children:"시간 복잡도 O(n log n)"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"경우"}),e.jsx("th",{children:"시간 복잡도"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"최선 (Best)"}),e.jsx("td",{children:"O(n log n)"}),e.jsx("td",{children:"항상 동일 (입력에 무관)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"평균 (Average)"}),e.jsx("td",{children:"O(n log n)"}),e.jsx("td",{children:"항상 동일"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"최악 (Worst)"}),e.jsx("td",{children:"O(n log n)"}),e.jsx("td",{children:"항상 동일 - 퀵 정렬과의 큰 차이"})]})]})]}),e.jsx("p",{children:"분할 깊이가 log n이고, 각 깊이에서 n개의 요소를 병합하므로 전체 시간 복잡도는 O(n log n)입니다. 입력 데이터의 상태에 관계없이 항상 같은 성능을 보장합니다."}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"O(n²) vs O(n log n) 차이"}),e.jsxs("ul",{children:[e.jsx("li",{children:"데이터 100만 개를 정렬할 때, O(n²) = 1,000,000,000,000(1조) 연산 vs O(n log n) = 약 20,000,000(2천만) 연산."}),e.jsx("li",{children:"약 50,000배의 차이가 납니다!"})]})]}),e.jsx("h2",{children:"공간 복잡도 O(n)"}),e.jsxs("p",{children:["병합 정렬은 병합 과정에서 임시 배열을 사용하므로 ",e.jsx("strong",{children:"O(n)의 추가 메모리"}),"가 필요합니다. 이것이 병합 정렬의 가장 큰 단점입니다."]}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"특성"}),e.jsx("th",{children:"값"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"공간 복잡도"}),e.jsx("td",{children:"O(n) - 임시 배열 필요"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"제자리 정렬"}),e.jsx("td",{children:"No - 추가 메모리 사용"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"안정 정렬"}),e.jsx("td",{children:"Yes - 같은 값의 순서 유지"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"재귀 깊이"}),e.jsx("td",{children:"O(log n) - 호출 스택"})]})]})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"병합 정렬 vs 퀵 정렬"}),e.jsxs("ul",{children:[e.jsx("li",{children:"병합 정렬은 항상 O(n log n)을 보장하지만 O(n) 추가 메모리가 필요합니다."}),e.jsx("li",{children:"퀵 정렬은 제자리 정렬이지만 최악의 경우 O(n²)입니다."}),e.jsx("li",{children:"안정성과 성능 보장이 중요하면 병합 정렬, 평균 성능과 메모리가 중요하면 퀵 정렬을 선택합니다."})]})]}),e.jsx("h2",{children:"구현"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"병합 정렬 구현 (Top-Down)"}),e.jsx("pre",{children:e.jsx("code",{children:`def merge_sort(arr):
    """병합 정렬: 분할 정복으로 배열을 정렬"""
    if len(arr) <= 1:
        return arr

    # 분할 (Divide)
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    # 결합 (Combine)
    return merge(left, right)

def merge(left, right):
    """두 정렬된 배열을 하나로 병합"""
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:  # <= 로 안정 정렬 보장
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    # 남은 요소 추가
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# 테스트
data = [38, 27, 43, 3, 9, 82, 10]
print(merge_sort(data))
# [3, 9, 10, 27, 38, 43, 82]`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"제자리 병합 정렬 (인덱스 기반)"}),e.jsx("pre",{children:e.jsx("code",{children:`def merge_sort_inplace(arr, left=0, right=None):
    """인덱스 기반 병합 정렬 (새 배열 생성 최소화)"""
    if right is None:
        right = len(arr) - 1
    if left >= right:
        return

    mid = (left + right) // 2
    merge_sort_inplace(arr, left, mid)
    merge_sort_inplace(arr, mid + 1, right)
    merge_inplace(arr, left, mid, right)

def merge_inplace(arr, left, mid, right):
    """임시 배열을 사용한 병합"""
    temp = []
    i, j = left, mid + 1

    while i <= mid and j <= right:
        if arr[i] <= arr[j]:
            temp.append(arr[i])
            i += 1
        else:
            temp.append(arr[j])
            j += 1

    while i <= mid:
        temp.append(arr[i])
        i += 1
    while j <= right:
        temp.append(arr[j])
        j += 1

    for k, val in enumerate(temp):
        arr[left + k] = val

# 테스트
data = [38, 27, 43, 3, 9, 82, 10]
merge_sort_inplace(data)
print(data)  # [3, 9, 10, 27, 38, 43, 82]

# 과정 출력 버전
def merge_sort_verbose(arr, depth=0):
    indent = "  " * depth
    print(f"{indent}merge_sort({arr})")
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort_verbose(arr[:mid], depth + 1)
    right = merge_sort_verbose(arr[mid:], depth + 1)
    result = merge(left, right)
    print(f"{indent}→ 병합: {left} + {right} = {result}")
    return result

merge_sort_verbose([38, 27, 43, 3])`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습 문제"}),e.jsxs("ol",{children:[e.jsx("li",{children:"배열 [5, 1, 4, 2, 8]을 병합 정렬로 정렬하는 전체 분할/병합 과정을 트리 형태로 그려보세요."}),e.jsx("li",{children:"병합 정렬에서 배열의 크기가 n일 때, merge 함수가 총 몇 번 호출되는지 구하세요."}),e.jsx("li",{children:"두 정렬된 연결 리스트를 병합하는 함수를 작성하세요."}),e.jsx("li",{children:"병합 정렬을 Bottom-Up 방식(반복문 기반)으로 구현해 보세요."})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(r,{to:"/algorithm/insertion-sort",className:"lesson-nav-btn prev",children:"← 삽입 정렬"}),e.jsx(r,{to:"/algorithm/quick-sort",className:"lesson-nav-btn next",children:"퀵 정렬 →"})]})]})})})]}));export{t as default};
