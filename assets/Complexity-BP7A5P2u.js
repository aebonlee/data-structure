import{j as r,L as e}from"./index-Dx7btcoz.js";import{S as n}from"./SEOHead-panwKb0o.js";import{u as i}from"./useAOS-CuiPokAf.js";const l=()=>(i(),r.jsxs(r.Fragment,{children:[r.jsx(n,{title:"시간 복잡도와 공간 복잡도 | DS Study",description:"Big-O 표기법, 시간 복잡도와 공간 복잡도의 개념, 주요 복잡도 비교 및 분석 방법을 학습합니다."}),r.jsx("section",{className:"page-header",children:r.jsxs("div",{className:"container",children:[r.jsx("h1",{children:"시간 복잡도와 공간 복잡도"}),r.jsx("p",{children:"알고리즘의 성능을 객관적으로 분석하고 비교하기 위한 핵심 도구인 Big-O 표기법을 학습합니다."})]})}),r.jsx("section",{className:"section lesson-content",children:r.jsx("div",{className:"container",children:r.jsxs("div",{className:"lesson-body",children:[r.jsx("h2",{id:"big-o",children:"Big-O 표기법"}),r.jsxs("p",{children:[r.jsx("strong",{children:"Big-O 표기법"}),"은 알고리즘의 성능을 입력 크기(n)에 대한 함수로 표현하는 수학적 표기법입니다. 알고리즘이 실행되는 데 필요한 시간이나 공간이 입력 크기가 증가함에 따라 ",r.jsx("strong",{children:"어떻게 증가하는지"}),"를 나타냅니다."]}),r.jsxs("p",{children:["Big-O는 ",r.jsx("strong",{children:"최악의 경우(Worst Case)"}),"의 성능을 표현하며, 상수 계수와 낮은 차수의 항은 무시합니다. 이를 통해 알고리즘의 확장성을 직관적으로 비교할 수 있습니다."]}),r.jsxs("div",{className:"callout-box",children:[r.jsx("h3",{children:"Big-O의 핵심 규칙"}),r.jsxs("ul",{children:[r.jsx("li",{children:"상수는 무시한다: O(2n) = O(n), O(500) = O(1)"}),r.jsx("li",{children:"최고차항만 남긴다: O(n² + 3n + 10) = O(n²)"}),r.jsx("li",{children:"입력 크기가 충분히 클 때의 증가율에 집중한다"})]})]}),r.jsxs("div",{className:"code-block",children:[r.jsx("div",{className:"code-header",children:"Python - Big-O 표기법 기본 예시"}),r.jsx("pre",{children:r.jsx("code",{children:`# O(1) - 상수 시간: 입력 크기와 무관
def get_first(arr):
    return arr[0]  # 항상 한 번의 연산

# O(n) - 선형 시간: 입력 크기에 비례
def find_max(arr):
    max_val = arr[0]
    for num in arr:       # n번 반복
        if num > max_val:
            max_val = num
    return max_val

# O(n²) - 이차 시간: 입력 크기의 제곱에 비례
def has_duplicate(arr):
    for i in range(len(arr)):        # n번
        for j in range(i+1, len(arr)):  # 최대 n-1번
            if arr[i] == arr[j]:
                return True
    return False`})})]}),r.jsx("h2",{id:"time-complexity",children:"시간 복잡도 분석"}),r.jsxs("p",{children:[r.jsx("strong",{children:"시간 복잡도(Time Complexity)"}),"는 알고리즘이 실행되는 데 필요한 연산 횟수를 입력 크기의 함수로 표현한 것입니다. 실제 실행 시간은 하드웨어에 따라 달라지므로, 연산 횟수로 성능을 표현합니다."]}),r.jsx("p",{children:"시간 복잡도를 분석할 때는 다음 세 가지 경우를 고려합니다:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"최선의 경우 (Best Case) - Ω(오메가):"})," 가장 빠르게 실행되는 경우"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"평균적인 경우 (Average Case) - Θ(세타):"})," 일반적으로 기대되는 성능"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"최악의 경우 (Worst Case) - O(빅오):"})," 가장 느리게 실행되는 경우"]})]}),r.jsxs("p",{children:["일반적으로 알고리즘 분석에서는 ",r.jsx("strong",{children:"최악의 경우(Big-O)"}),"를 기준으로 성능을 평가합니다. 이를 통해 알고리즘의 성능 보장 하한선을 알 수 있기 때문입니다."]}),r.jsxs("div",{className:"code-block",children:[r.jsx("div",{className:"code-header",children:"Python - 시간 복잡도 분석 예시"}),r.jsx("pre",{children:r.jsx("code",{children:`# 예시: 선형 탐색(Linear Search)
def linear_search(arr, target):
    for i in range(len(arr)):  # 최악의 경우 n번 반복
        if arr[i] == target:
            return i
    return -1

# 최선의 경우: O(1) - 첫 번째 원소가 target
# 평균적 경우: O(n/2) = O(n) - 중간쯤에서 발견
# 최악의 경우: O(n) - 마지막 원소이거나 없는 경우

# 예시: 이진 탐색(Binary Search) - 정렬된 배열에서만 사용 가능
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:         # 매 반복마다 탐색 범위가 절반으로 줄어듦
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1       # 오른쪽 절반만 탐색
        else:
            right = mid - 1      # 왼쪽 절반만 탐색
    return -1

# 최선의 경우: O(1) - 중간 원소가 target
# 최악의 경우: O(log n) - 매번 절반씩 줄어드므로 log₂(n)번 반복`})})]}),r.jsx("h2",{id:"comparison",children:"주요 복잡도 비교"}),r.jsx("p",{children:"아래 표는 주요 시간 복잡도를 증가율 순서대로 정리한 것입니다. n이 커질수록 복잡도 차이가 극적으로 벌어지는 것을 확인할 수 있습니다."}),r.jsxs("table",{className:"lesson-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"복잡도"}),r.jsx("th",{children:"명칭"}),r.jsx("th",{children:"n=10"}),r.jsx("th",{children:"n=100"}),r.jsx("th",{children:"n=1,000"}),r.jsx("th",{children:"n=10,000"}),r.jsx("th",{children:"대표 알고리즘"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"O(1)"})}),r.jsx("td",{children:"상수 시간"}),r.jsx("td",{children:"1"}),r.jsx("td",{children:"1"}),r.jsx("td",{children:"1"}),r.jsx("td",{children:"1"}),r.jsx("td",{children:"배열 인덱스 접근, 해시 테이블 조회"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"O(log n)"})}),r.jsx("td",{children:"로그 시간"}),r.jsx("td",{children:"3"}),r.jsx("td",{children:"7"}),r.jsx("td",{children:"10"}),r.jsx("td",{children:"13"}),r.jsx("td",{children:"이진 탐색, 균형 BST 탐색"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"O(n)"})}),r.jsx("td",{children:"선형 시간"}),r.jsx("td",{children:"10"}),r.jsx("td",{children:"100"}),r.jsx("td",{children:"1,000"}),r.jsx("td",{children:"10,000"}),r.jsx("td",{children:"선형 탐색, 배열 순회"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"O(n log n)"})}),r.jsx("td",{children:"선형 로그 시간"}),r.jsx("td",{children:"33"}),r.jsx("td",{children:"664"}),r.jsx("td",{children:"9,966"}),r.jsx("td",{children:"132,877"}),r.jsx("td",{children:"병합 정렬, 퀵 정렬(평균), 힙 정렬"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"O(n²)"})}),r.jsx("td",{children:"이차 시간"}),r.jsx("td",{children:"100"}),r.jsx("td",{children:"10,000"}),r.jsx("td",{children:"1,000,000"}),r.jsx("td",{children:"100,000,000"}),r.jsx("td",{children:"버블 정렬, 선택 정렬, 삽입 정렬"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"O(2ⁿ)"})}),r.jsx("td",{children:"지수 시간"}),r.jsx("td",{children:"1,024"}),r.jsx("td",{children:"1.27 × 10³⁰"}),r.jsx("td",{children:"-"}),r.jsx("td",{children:"-"}),r.jsx("td",{children:"부분집합 생성, 피보나치(재귀)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"O(n!)"})}),r.jsx("td",{children:"팩토리얼 시간"}),r.jsx("td",{children:"3,628,800"}),r.jsx("td",{children:"-"}),r.jsx("td",{children:"-"}),r.jsx("td",{children:"-"}),r.jsx("td",{children:"순열 생성, 외판원 문제(브루트포스)"})]})]})]}),r.jsxs("div",{className:"callout-box",children:[r.jsx("h3",{children:"성능 비교 기준"}),r.jsx("p",{children:"일반적으로 O(n log n)까지는 대부분의 입력 크기에서 실용적으로 사용할 수 있지만, O(n²) 이상은 입력이 커지면 실행 시간이 급격히 증가하여 주의가 필요합니다. 코딩 테스트에서 n이 10만 이상이면 O(n log n) 이하의 알고리즘을 사용해야 합니다."})]}),r.jsxs("div",{className:"code-block",children:[r.jsx("div",{className:"code-header",children:"Python - 복잡도별 실행 시간 비교 실험"}),r.jsx("pre",{children:r.jsx("code",{children:`import time

def measure_time(func, *args):
    """함수 실행 시간 측정"""
    start = time.time()
    result = func(*args)
    end = time.time()
    return end - start, result

# O(n) - 선형 탐색
def linear_sum(n):
    total = 0
    for i in range(n):
        total += i
    return total

# O(n²) - 이중 루프
def quadratic_sum(n):
    total = 0
    for i in range(n):
        for j in range(n):
            total += 1
    return total

# O(n log n) - 정렬
import random
def sort_random(n):
    arr = [random.randint(1, 1000000) for _ in range(n)]
    arr.sort()  # Python의 Timsort: O(n log n)
    return arr

# 실행 시간 비교 (n = 10000)
n = 10000
t1, _ = measure_time(linear_sum, n)
t2, _ = measure_time(quadratic_sum, n)
t3, _ = measure_time(sort_random, n)

print(f"O(n)       : {t1:.6f}초")
print(f"O(n²)      : {t2:.6f}초")
print(f"O(n log n) : {t3:.6f}초")`})})]}),r.jsx("h2",{id:"space-complexity",children:"공간 복잡도"}),r.jsxs("p",{children:[r.jsx("strong",{children:"공간 복잡도(Space Complexity)"}),"는 알고리즘이 실행되는 동안 사용하는 메모리의 양을 입력 크기의 함수로 표현한 것입니다. 시간 복잡도만큼 중요하며, 특히 메모리가 제한된 환경에서는 공간 복잡도를 반드시 고려해야 합니다."]}),r.jsx("p",{children:"공간 복잡도에는 다음 두 가지 요소가 포함됩니다:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"고정 공간:"})," 입력 크기와 무관하게 필요한 공간 (변수, 상수 등)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"가변 공간:"})," 입력 크기에 따라 달라지는 공간 (동적 배열, 재귀 호출 스택 등)"]})]}),r.jsxs("div",{className:"code-block",children:[r.jsx("div",{className:"code-header",children:"Python - 공간 복잡도 분석 예시"}),r.jsx("pre",{children:r.jsx("code",{children:`# O(1) 공간 - 추가 공간을 상수만큼만 사용
def find_max(arr):
    max_val = arr[0]     # 변수 1개: O(1)
    for num in arr:
        if num > max_val:
            max_val = num
    return max_val

# O(n) 공간 - 입력 크기에 비례하는 추가 공간 사용
def duplicate_array(arr):
    new_arr = []         # 새 배열 생성: O(n)
    for num in arr:
        new_arr.append(num)
    return new_arr

# O(n) 공간 - 재귀 호출로 인한 스택 공간
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)  # 재귀 깊이 n: O(n) 스택 공간

# O(n²) 공간 - 2차원 배열 생성
def create_matrix(n):
    matrix = []
    for i in range(n):
        row = [0] * n    # n개의 원소를 가진 행 n개: O(n²)
        matrix.append(row)
    return matrix`})})]}),r.jsxs("div",{className:"callout-box",children:[r.jsx("h3",{children:"시간-공간 트레이드오프 (Trade-off)"}),r.jsx("p",{children:"많은 경우 시간 복잡도를 줄이기 위해 추가 공간을 사용하거나, 공간을 절약하기 위해 더 많은 시간을 소요하는 트레이드오프가 발생합니다. 예를 들어, 해시 테이블은 O(n)의 추가 공간을 사용하여 O(1)의 검색 시간을 달성합니다."})]}),r.jsx("h2",{id:"analysis-examples",children:"복잡도 분석 예제"}),r.jsx("p",{children:"실전에서 알고리즘의 복잡도를 분석하는 연습을 해봅시다. 각 코드의 시간 복잡도와 공간 복잡도를 단계별로 분석합니다."}),r.jsxs("div",{className:"code-block",children:[r.jsx("div",{className:"code-header",children:"Python - 예제 1: 중복 원소 제거"}),r.jsx("pre",{children:r.jsx("code",{children:`# 방법 1: 이중 루프 사용
# 시간 복잡도: O(n²), 공간 복잡도: O(n)
def remove_duplicates_v1(arr):
    result = []
    for item in arr:                    # O(n)
        if item not in result:          # O(n) - 리스트의 in 연산
            result.append(item)
    return result

# 방법 2: 집합(Set) 사용
# 시간 복잡도: O(n), 공간 복잡도: O(n)
def remove_duplicates_v2(arr):
    seen = set()                        # 해시 집합: O(n) 공간
    result = []
    for item in arr:                    # O(n)
        if item not in seen:            # O(1) - 해시 집합의 in 연산
            seen.add(item)
            result.append(item)
    return result

# 방법 2가 시간 복잡도에서 훨씬 효율적!
# n = 100,000일 때:
#   방법 1: 약 10,000,000,000 연산 (O(n²))
#   방법 2: 약 100,000 연산 (O(n))`})})]}),r.jsxs("div",{className:"code-block",children:[r.jsx("div",{className:"code-header",children:"Python - 예제 2: 두 수의 합 (Two Sum)"}),r.jsx("pre",{children:r.jsx("code",{children:`# 문제: 배열에서 두 수의 합이 target인 인덱스 쌍 찾기

# 방법 1: 브루트포스
# 시간: O(n²), 공간: O(1)
def two_sum_brute(arr, target):
    for i in range(len(arr)):               # O(n)
        for j in range(i + 1, len(arr)):    # O(n)
            if arr[i] + arr[j] == target:
                return [i, j]
    return []

# 방법 2: 해시맵 활용
# 시간: O(n), 공간: O(n)
def two_sum_hash(arr, target):
    seen = {}                           # 해시맵: O(n) 공간
    for i, num in enumerate(arr):       # O(n)
        complement = target - num
        if complement in seen:          # O(1) 해시맵 조회
            return [seen[complement], i]
        seen[num] = i                   # O(1) 해시맵 삽입
    return []

# 예시
arr = [2, 7, 11, 15]
target = 9
print(two_sum_brute(arr, target))  # [0, 1]
print(two_sum_hash(arr, target))   # [0, 1]
# 해시맵으로 시간-공간 트레이드오프 활용!`})})]}),r.jsxs("div",{className:"code-block",children:[r.jsx("div",{className:"code-header",children:"Python - 예제 3: 재귀 알고리즘의 복잡도"}),r.jsx("pre",{children:r.jsx("code",{children:`# 피보나치 수열 - 재귀 버전
# 시간: O(2ⁿ), 공간: O(n) - 재귀 호출 스택
def fib_recursive(n):
    if n <= 1:
        return n
    return fib_recursive(n - 1) + fib_recursive(n - 2)

# 피보나치 수열 - 메모이제이션(DP)
# 시간: O(n), 공간: O(n) - 캐시 + 호출 스택
def fib_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)
    return memo[n]

# 피보나치 수열 - 반복문 (Bottom-Up DP)
# 시간: O(n), 공간: O(1) - 가장 효율적!
def fib_iterative(n):
    if n <= 1:
        return n
    prev, curr = 0, 1
    for _ in range(2, n + 1):
        prev, curr = curr, prev + curr
    return curr

# 비교
import time
n = 35
start = time.time()
print(f"재귀:       fib({n}) = {fib_recursive(n)}, "
      f"시간: {time.time()-start:.4f}초")

start = time.time()
print(f"메모이제이션: fib({n}) = {fib_memo(n)}, "
      f"시간: {time.time()-start:.6f}초")

start = time.time()
print(f"반복문:     fib({n}) = {fib_iterative(n)}, "
      f"시간: {time.time()-start:.6f}초")`})})]}),r.jsxs("div",{className:"exercise-box",children:[r.jsx("h3",{children:"연습 문제"}),r.jsxs("ol",{children:[r.jsxs("li",{children:["다음 코드의 시간 복잡도를 Big-O로 표현하세요:",r.jsx("div",{className:"code-block",children:r.jsx("pre",{children:r.jsx("code",{children:`def mystery(n):
    count = 0
    i = 1
    while i < n:
        count += 1
        i *= 2
    return count`})})})]}),r.jsx("li",{children:"O(n) 시간 복잡도와 O(n²) 시간 복잡도의 알고리즘이 있을 때, n = 1,000,000인 경우 각각 대략 몇 번의 연산이 수행되는지 계산하세요."}),r.jsx("li",{children:"다음 상황에서 시간-공간 트레이드오프를 설명하세요: 배열에서 중복 원소를 찾을 때 정렬을 사용하는 방법 vs 해시 집합을 사용하는 방법."}),r.jsx("li",{children:"병합 정렬의 시간 복잡도가 O(n log n)인 이유를 재귀 트리를 그려서 설명하세요."})]})]}),r.jsxs("div",{className:"lesson-nav",children:[r.jsx(e,{to:"/intro/what-is-ds",className:"lesson-nav-btn prev",children:"← 이전: 자료구조란?"}),r.jsx(e,{to:"/linear",className:"lesson-nav-btn next",children:"다음: 선형 자료구조 →"})]})]})})})]}));export{l as default};
