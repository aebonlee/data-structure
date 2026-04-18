import{j as s,L as r}from"./index-B3GxaZwy.js";import{S as e}from"./SEOHead-D3w2GwHl.js";import{u as n}from"./useAOS-d_NXnJgz.js";const c=()=>(n(),s.jsxs(s.Fragment,{children:[s.jsx(e,{title:"배열 (Array) | DS Study",description:"배열의 개념, 특징, 1차원/2차원 배열, 동적 배열, 시간 복잡도를 학습합니다."}),s.jsx("section",{className:"page-header",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{children:"배열 (Array)"}),s.jsx("p",{children:"배열은 같은 타입의 데이터를 연속적인 메모리 공간에 저장하는 가장 기본적인 자료구조입니다."})]})}),s.jsx("section",{className:"section lesson-content",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"lesson-body",children:[s.jsx("h2",{children:"배열의 개념"}),s.jsxs("p",{children:["배열(Array)은 동일한 데이터 타입의 요소들을 ",s.jsx("strong",{children:"연속적인 메모리 공간"}),"에 순서대로 저장하는 자료구조입니다. 각 요소는 고유한 인덱스(index)를 가지며, 이 인덱스를 통해 직접 접근(Direct Access)이 가능합니다."]}),s.jsx("p",{children:"배열은 프로그래밍에서 가장 널리 사용되는 자료구조이며, 다른 복잡한 자료구조의 기반이 되기도 합니다. 메모리 상에서 연속적으로 배치되어 있어 캐시 친화적(cache-friendly)이라는 장점도 있습니다."}),s.jsx("h2",{children:"배열의 특징"}),s.jsxs("div",{className:"callout-box",children:[s.jsx("h3",{children:"핵심 특징"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"인덱스 접근 O(1)"})," : 인덱스를 알면 상수 시간에 해당 요소에 접근할 수 있습니다."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"고정 크기"})," : 정적 배열은 선언 시 크기가 고정되며, 이후 변경할 수 없습니다."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"연속 메모리"})," : 모든 요소가 메모리에 연속적으로 저장됩니다."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"동일 타입"})," : 배열의 모든 요소는 같은 데이터 타입을 가집니다 (Python은 예외)."]})]})]}),s.jsx("h2",{children:"1차원 배열과 2차원 배열"}),s.jsx("p",{children:"1차원 배열은 데이터를 일렬로 나열한 구조이고, 2차원 배열은 행과 열로 구성된 표(matrix) 형태의 구조입니다."}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"Python"}),s.jsx("pre",{children:s.jsx("code",{children:`# 1차원 배열 (Python 리스트)
arr = [10, 20, 30, 40, 50]

# 인덱스로 접근 - O(1)
print(arr[0])   # 10
print(arr[3])   # 40

# 2차원 배열 (행렬)
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# 2차원 배열 접근: matrix[행][열]
print(matrix[1][2])   # 6 (2행 3열)`})})]}),s.jsx("h2",{children:"동적 배열"}),s.jsxs("p",{children:["동적 배열은 크기가 고정되지 않고, 요소를 추가할 때 필요에 따라 자동으로 크기가 확장되는 배열입니다. Python의 ",s.jsx("code",{children:"list"}),"는 내부적으로 동적 배열로 구현되어 있습니다. 용량이 가득 차면 기존 크기의 약 1.5~2배로 새로운 메모리를 할당하고 기존 데이터를 복사합니다."]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"Python - 동적 배열 연산"}),s.jsx("pre",{children:s.jsx("code",{children:`# Python 리스트는 동적 배열
arr = []

# 끝에 추가 - 평균 O(1), 최악 O(n)
arr.append(10)
arr.append(20)
arr.append(30)
print(arr)  # [10, 20, 30]

# 특정 위치에 삽입 - O(n)
arr.insert(1, 15)
print(arr)  # [10, 15, 20, 30]

# 삭제 - O(n)
arr.remove(15)
print(arr)  # [10, 20, 30]

# 끝에서 삭제 - O(1)
arr.pop()
print(arr)  # [10, 20]

# 탐색 - O(n)
idx = arr.index(20)
print(idx)  # 1`})})]}),s.jsx("h2",{children:"배열의 시간 복잡도"}),s.jsx("p",{children:"배열의 주요 연산에 대한 시간 복잡도입니다."}),s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"연산"}),s.jsx("th",{children:"시간 복잡도"}),s.jsx("th",{children:"설명"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"접근 (Access)"}),s.jsx("td",{children:"O(1)"}),s.jsx("td",{children:"인덱스를 통해 즉시 접근 가능"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"탐색 (Search)"}),s.jsx("td",{children:"O(n)"}),s.jsx("td",{children:"원하는 값을 찾기 위해 순차 탐색 필요"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"삽입 (Insert)"}),s.jsx("td",{children:"O(n)"}),s.jsx("td",{children:"삽입 위치 이후 요소를 모두 이동해야 함"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"삭제 (Delete)"}),s.jsx("td",{children:"O(n)"}),s.jsx("td",{children:"삭제 위치 이후 요소를 모두 이동해야 함"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"끝에 추가 (Append)"}),s.jsx("td",{children:"O(1)*"}),s.jsx("td",{children:"평균 O(1), 배열 확장 시 O(n)"})]})]})]}),s.jsxs("div",{className:"exercise-box",children:[s.jsx("h3",{children:"연습 문제"}),s.jsxs("ol",{children:[s.jsx("li",{children:"정수 배열에서 최댓값과 최솟값을 찾는 함수를 작성하세요."}),s.jsx("li",{children:"배열의 모든 요소를 역순으로 뒤집는 함수를 구현하세요."}),s.jsx("li",{children:"두 개의 정렬된 배열을 하나의 정렬된 배열로 합치는 함수를 작성하세요."}),s.jsx("li",{children:"배열에서 중복을 제거하는 함수를 작성하세요."})]})]}),s.jsxs("div",{className:"lesson-nav",children:[s.jsx(r,{to:"/linear",className:"lesson-nav-btn prev",children:"← 이전: 선형 자료구조"}),s.jsx(r,{to:"/linear/linked-list",className:"lesson-nav-btn next",children:"다음: 연결 리스트 →"})]})]})})})]}));export{c as default};
