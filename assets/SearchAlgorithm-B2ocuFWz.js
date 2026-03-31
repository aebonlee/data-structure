import{j as s,L as e}from"./index-DBh5yY6-.js";import{S as r}from"./SEOHead-DI7byWXM.js";import{u as i}from"./useAOS-Bwt0_t3R.js";const n=()=>(i(),s.jsxs(s.Fragment,{children:[s.jsx(r,{title:"탐색 알고리즘 | 자료구조 학습",description:"선형 탐색, 이진 탐색의 원리와 시간 복잡도, Python bisect 모듈까지 체계적으로 학습합니다."}),s.jsx("section",{className:"page-header",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{children:"탐색 알고리즘"}),s.jsx("p",{children:"데이터에서 원하는 값을 찾는 다양한 탐색 기법을 학습합니다"})]})}),s.jsx("section",{className:"section lesson-content",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"lesson-body",children:[s.jsxs("div",{className:"callout-box",children:[s.jsx("h3",{children:"학습 목표"}),s.jsxs("ul",{children:[s.jsx("li",{children:"선형 탐색과 이진 탐색의 원리를 이해한다."}),s.jsx("li",{children:"이진 탐색의 전제 조건과 동작 과정을 설명할 수 있다."}),s.jsx("li",{children:"각 탐색 알고리즘의 시간 복잡도를 비교 분석한다."}),s.jsx("li",{children:"Python의 bisect 모듈을 활용한 이진 탐색을 구현할 수 있다."})]})]}),s.jsx("h2",{children:"1. 선형 탐색 (Linear Search)"}),s.jsx("h3",{children:"1.1 선형 탐색이란?"}),s.jsxs("p",{children:[s.jsx("strong",{children:"선형 탐색(Linear Search)"}),"은 배열의 처음부터 끝까지 하나씩 순서대로 비교하면서 원하는 값을 찾는 가장 단순한 탐색 알고리즘입니다. 정렬되지 않은 데이터에서도 사용할 수 있으며, 구현이 매우 간단합니다."]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"Python - 선형 탐색 구현"}),s.jsx("pre",{children:s.jsx("code",{children:`def linear_search(arr, target):
    """선형 탐색: 배열에서 target의 인덱스를 반환"""
    for i in range(len(arr)):
        if arr[i] == target:
            return i      # 찾으면 인덱스 반환
    return -1              # 못 찾으면 -1 반환

# 사용 예시
data = [4, 2, 7, 1, 9, 3, 5]
result = linear_search(data, 7)
print(f"인덱스: {result}")    # 인덱스: 2`})})]}),s.jsx("h3",{children:"1.2 선형 탐색의 특징"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"장점"}),": 구현이 간단하고, 정렬되지 않은 배열에서도 사용 가능"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"단점"}),": 데이터가 많을수록 탐색 시간이 선형적으로 증가"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"최선의 경우"}),": O(1) - 첫 번째 원소가 찾는 값일 때"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"최악의 경우"}),": O(n) - 마지막 원소이거나 존재하지 않을 때"]})]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"선형 탐색 동작 과정"}),s.jsx("pre",{children:s.jsx("code",{children:`배열: [4, 2, 7, 1, 9, 3, 5]   target = 9

Step 1: arr[0]=4  ≠ 9  → 다음
Step 2: arr[1]=2  ≠ 9  → 다음
Step 3: arr[2]=7  ≠ 9  → 다음
Step 4: arr[3]=1  ≠ 9  → 다음
Step 5: arr[4]=9  = 9  → 찾음! 인덱스 4 반환

→ 총 5번 비교`})})]}),s.jsx("h2",{children:"2. 이진 탐색 (Binary Search)"}),s.jsx("h3",{children:"2.1 이진 탐색이란?"}),s.jsxs("p",{children:[s.jsx("strong",{children:"이진 탐색(Binary Search)"}),"은 ",s.jsx("strong",{children:"정렬된 배열"}),"에서 탐색 범위를 절반씩 줄여가며 원하는 값을 찾는 효율적인 탐색 알고리즘입니다. 매 단계마다 중간 값과 비교하여 탐색 범위를 반으로 줄이므로, 시간 복잡도가 O(log n)으로 매우 빠릅니다."]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"Python - 이진 탐색 구현 (반복문)"}),s.jsx("pre",{children:s.jsx("code",{children:`def binary_search(arr, target):
    """이진 탐색: 정렬된 배열에서 target의 인덱스를 반환"""
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid                # 찾음
        elif arr[mid] < target:
            left = mid + 1            # 오른쪽 절반 탐색
        else:
            right = mid - 1           # 왼쪽 절반 탐색

    return -1                          # 못 찾음

# 사용 예시
data = [1, 3, 5, 7, 9, 11, 13, 15]
result = binary_search(data, 9)
print(f"인덱스: {result}")    # 인덱스: 4`})})]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"이진 탐색 동작 과정"}),s.jsx("pre",{children:s.jsx("code",{children:`정렬된 배열: [1, 3, 5, 7, 9, 11, 13, 15]   target = 9

Step 1: left=0, right=7, mid=3
        arr[3]=7 < 9  → left = 4 (오른쪽 절반)

Step 2: left=4, right=7, mid=5
        arr[5]=11 > 9 → right = 4 (왼쪽 절반)

Step 3: left=4, right=4, mid=4
        arr[4]=9 = 9  → 찾음! 인덱스 4 반환

→ 총 3번 비교 (선형 탐색이면 5번)`})})]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"Python - 이진 탐색 구현 (재귀)"}),s.jsx("pre",{children:s.jsx("code",{children:`def binary_search_recursive(arr, target, left, right):
    """재귀적 이진 탐색"""
    if left > right:
        return -1

    mid = (left + right) // 2

    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)

# 사용 예시
data = [1, 3, 5, 7, 9, 11, 13, 15]
result = binary_search_recursive(data, 9, 0, len(data) - 1)
print(f"인덱스: {result}")    # 인덱스: 4`})})]}),s.jsx("h2",{children:"3. 이진 탐색의 조건"}),s.jsxs("div",{className:"callout-box",children:[s.jsx("h3",{children:"이진 탐색 사용 조건"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"필수 조건"}),": 배열이 반드시 ",s.jsx("strong",{children:"정렬"}),"되어 있어야 합니다."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"임의 접근"}),": 인덱스를 통한 임의 접근(Random Access)이 가능해야 합니다."]}),s.jsx("li",{children:"연결 리스트에서는 중간 지점 접근이 O(n)이므로 이진 탐색이 비효율적입니다."}),s.jsx("li",{children:"정렬 비용(O(n log n))을 고려하여, 탐색이 빈번할 때 유리합니다."})]})]}),s.jsx("p",{children:"이진 탐색을 사용하려면 먼저 배열을 정렬해야 합니다. 한 번 정렬한 후 여러 번 탐색하는 경우에는 매우 효율적이지만, 매번 정렬 후 한 번만 탐색한다면 선형 탐색보다 오히려 느릴 수 있습니다."}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"이진 탐색 vs 선형 탐색 선택 기준"}),s.jsx("pre",{children:s.jsx("code",{children:`# 시나리오 1: 정렬된 데이터에서 여러 번 탐색
# → 이진 탐색이 유리 (O(log n) × k번)

# 시나리오 2: 정렬되지 않은 데이터에서 1번 탐색
# → 선형 탐색이 유리 (O(n) vs O(n log n) + O(log n))

# 시나리오 3: 데이터가 매우 적은 경우 (n < 20)
# → 선형 탐색이 오히려 빠를 수 있음 (오버헤드 없음)`})})]}),s.jsx("h2",{children:"4. 시간 복잡도 비교"}),s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"알고리즘"}),s.jsx("th",{children:"최선"}),s.jsx("th",{children:"평균"}),s.jsx("th",{children:"최악"}),s.jsx("th",{children:"공간 복잡도"}),s.jsx("th",{children:"정렬 필요"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"선형 탐색"})}),s.jsx("td",{children:"O(1)"}),s.jsx("td",{children:"O(n)"}),s.jsx("td",{children:"O(n)"}),s.jsx("td",{children:"O(1)"}),s.jsx("td",{children:"아니오"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"이진 탐색 (반복)"})}),s.jsx("td",{children:"O(1)"}),s.jsx("td",{children:"O(log n)"}),s.jsx("td",{children:"O(log n)"}),s.jsx("td",{children:"O(1)"}),s.jsx("td",{children:"예"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"이진 탐색 (재귀)"})}),s.jsx("td",{children:"O(1)"}),s.jsx("td",{children:"O(log n)"}),s.jsx("td",{children:"O(log n)"}),s.jsx("td",{children:"O(log n)"}),s.jsx("td",{children:"예"})]})]})]}),s.jsxs("div",{className:"callout-box",children:[s.jsx("h3",{children:"비교 예시: 100만 개 데이터에서 탐색"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"선형 탐색"}),": 최악 1,000,000번 비교"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"이진 탐색"}),": 최악 약 20번 비교 (log2(1,000,000) ≈ 20)"]}),s.jsxs("li",{children:["이진 탐색이 약 ",s.jsx("strong",{children:"50,000배"})," 더 빠릅니다."]})]})]}),s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"데이터 수 (n)"}),s.jsx("th",{children:"선형 탐색 (최악)"}),s.jsx("th",{children:"이진 탐색 (최악)"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"10"}),s.jsx("td",{children:"10번"}),s.jsx("td",{children:"4번"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"100"}),s.jsx("td",{children:"100번"}),s.jsx("td",{children:"7번"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"1,000"}),s.jsx("td",{children:"1,000번"}),s.jsx("td",{children:"10번"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"10,000"}),s.jsx("td",{children:"10,000번"}),s.jsx("td",{children:"14번"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"1,000,000"}),s.jsx("td",{children:"1,000,000번"}),s.jsx("td",{children:"20번"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"10억"}),s.jsx("td",{children:"10억 번"}),s.jsx("td",{children:"30번"})]})]})]}),s.jsx("h2",{children:"5. Python bisect 모듈"}),s.jsx("h3",{children:"5.1 bisect 모듈 소개"}),s.jsxs("p",{children:["Python의 ",s.jsx("strong",{children:"bisect"})," 모듈은 정렬된 리스트에서 이진 탐색을 수행하는 내장 모듈입니다. 직접 이진 탐색을 구현하지 않고도 효율적인 탐색과 삽입 위치 결정이 가능합니다."]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"Python - bisect 모듈 주요 함수"}),s.jsx("pre",{children:s.jsx("code",{children:`import bisect

# 정렬된 리스트
sorted_list = [1, 3, 5, 7, 9, 11, 13, 15]

# bisect_left: target이 들어갈 가장 왼쪽 위치 반환
pos = bisect.bisect_left(sorted_list, 7)
print(f"bisect_left(7): {pos}")     # 3

# bisect_right: target이 들어갈 가장 오른쪽 위치 반환
pos = bisect.bisect_right(sorted_list, 7)
print(f"bisect_right(7): {pos}")    # 4

# insort: 정렬을 유지하면서 삽입
bisect.insort(sorted_list, 6)
print(sorted_list)    # [1, 3, 5, 6, 7, 9, 11, 13, 15]`})})]}),s.jsx("h3",{children:"5.2 bisect를 활용한 값 검색"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"Python - bisect로 값 존재 여부 확인"}),s.jsx("pre",{children:s.jsx("code",{children:`import bisect

def bisect_search(sorted_list, target):
    """bisect를 사용한 이진 탐색"""
    idx = bisect.bisect_left(sorted_list, target)
    if idx < len(sorted_list) and sorted_list[idx] == target:
        return idx
    return -1

# 사용 예시
data = [1, 3, 5, 7, 9, 11, 13, 15]
print(bisect_search(data, 9))     # 4
print(bisect_search(data, 6))     # -1 (존재하지 않음)`})})]}),s.jsx("h3",{children:"5.3 bisect 활용 예제"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"Python - 학점 변환기 (bisect 활용)"}),s.jsx("pre",{children:s.jsx("code",{children:`import bisect

def get_grade(score):
    """점수를 학점으로 변환"""
    breakpoints = [60, 70, 80, 90]    # 경계값
    grades = ['F', 'D', 'C', 'B', 'A']
    idx = bisect.bisect(breakpoints, score)
    return grades[idx]

# 사용 예시
scores = [55, 65, 75, 85, 95]
for s in scores:
    print(f"{s}점 → {get_grade(s)}")
# 55점 → F
# 65점 → D
# 75점 → C
# 85점 → B
# 95점 → A`})})]}),s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"함수"}),s.jsx("th",{children:"설명"}),s.jsx("th",{children:"시간 복잡도"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"bisect_left(a, x)"})}),s.jsx("td",{children:"x가 삽입될 가장 왼쪽 위치 반환"}),s.jsx("td",{children:"O(log n)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"bisect_right(a, x)"})}),s.jsx("td",{children:"x가 삽입될 가장 오른쪽 위치 반환"}),s.jsx("td",{children:"O(log n)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"insort_left(a, x)"})}),s.jsx("td",{children:"정렬 유지하며 왼쪽에 삽입"}),s.jsx("td",{children:"O(n)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"insort_right(a, x)"})}),s.jsx("td",{children:"정렬 유지하며 오른쪽에 삽입"}),s.jsx("td",{children:"O(n)"})]})]})]}),s.jsxs("div",{className:"callout-box",children:[s.jsx("h3",{children:"핵심 정리"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"선형 탐색"}),"은 정렬 불필요하나 O(n)으로 느리다."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"이진 탐색"}),"은 정렬 필수이나 O(log n)으로 매우 빠르다."]}),s.jsxs("li",{children:["이진 탐색은 ",s.jsx("strong",{children:"정렬된 배열"}),"과 ",s.jsx("strong",{children:"임의 접근"}),"이 전제 조건이다."]}),s.jsxs("li",{children:["Python의 ",s.jsx("strong",{children:"bisect"})," 모듈로 간편하게 이진 탐색을 구현할 수 있다."]}),s.jsx("li",{children:"데이터 크기와 탐색 빈도에 따라 적절한 탐색 알고리즘을 선택해야 한다."})]})]}),s.jsxs("div",{className:"exercise-box",children:[s.jsx("h3",{children:"연습 문제"}),s.jsxs("p",{children:[s.jsx("strong",{children:"문제 1."})," 정렬되지 않은 리스트 [8, 3, 5, 1, 9, 2, 7]에서 값 9를 선형 탐색으로 찾을 때 비교 횟수는?"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"문제 2."})," 정렬된 리스트 [2, 4, 6, 8, 10, 12, 14, 16]에서 이진 탐색으로 값 12를 찾는 과정을 단계별로 서술하세요."]}),s.jsxs("p",{children:[s.jsx("strong",{children:"문제 3."})," bisect 모듈을 활용하여, 정렬된 리스트에 새로운 값을 삽입하되 정렬 순서를 유지하는 함수를 작성하세요."]})]}),s.jsxs("div",{className:"lesson-nav",children:[s.jsx(e,{to:"/algorithm/quick-sort",className:"lesson-nav-btn prev",children:"← 퀵 정렬"}),s.jsx(e,{to:"/advanced",className:"lesson-nav-btn next",children:"고급 자료구조 →"})]})]})})})]}));export{n as default};
