import{j as e,L as s}from"./index-Dx7btcoz.js";import{S as i}from"./SEOHead-panwKb0o.js";import{u as l}from"./useAOS-CuiPokAf.js";const r=()=>(l(),e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"해시 테이블 | 자료구조 학습",description:"해시 테이블의 개념, 해시 함수, 충돌 해결 방법(체이닝, 개방 주소법), 시간 복잡도, Python dict 내부 구조를 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"해시 테이블"}),e.jsx("p",{children:"해시 함수를 이용해 키를 인덱스로 변환하고, 배열에 값을 저장하는 자료구조입니다. 평균 O(1) 시간 복잡도로 데이터를 관리할 수 있습니다."})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"해시 테이블의 개념"}),e.jsxs("p",{children:["해시 테이블(Hash Table)은 ",e.jsx("strong",{children:"키(Key)"}),"와 ",e.jsx("strong",{children:"값(Value)"}),"의 쌍을 저장하는 자료구조입니다. 내부적으로 배열(버킷 배열)을 사용하며, 해시 함수를 통해 키를 배열의 인덱스로 변환합니다."]}),e.jsx("p",{children:"이 구조 덕분에 데이터의 삽입, 삭제, 검색을 평균적으로 O(1) 시간에 수행할 수 있어, 대량의 데이터를 빠르게 처리해야 하는 상황에서 널리 사용됩니다."}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"핵심 아이디어"}),e.jsx("p",{children:"키를 숫자(인덱스)로 변환하여 배열에 직접 접근하므로, 순차 탐색 없이 원하는 데이터를 즉시 찾을 수 있습니다."})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"해시 테이블의 기본 구조"}),e.jsx("pre",{children:e.jsx("code",{children:`# 해시 테이블의 기본 원리
# 키 → 해시 함수 → 인덱스 → 버킷 배열에 저장

hash_table = [None] * 10  # 크기 10의 버킷 배열

def simple_hash(key, size):
    """간단한 해시 함수: 키의 해시값을 배열 크기로 나눈 나머지"""
    return hash(key) % size

# 데이터 저장
key = "apple"
index = simple_hash(key, len(hash_table))
hash_table[index] = ("apple", 5000)

print(f"'{key}' → 인덱스 {index}에 저장")
print(f"hash_table[{index}] = {hash_table[index]}")`})})]}),e.jsx("h2",{children:"해시 함수"}),e.jsx("p",{children:"해시 함수(Hash Function)는 임의 크기의 데이터를 고정 크기의 값으로 매핑하는 함수입니다. 좋은 해시 함수는 다음 조건을 만족해야 합니다."}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"조건"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"결정적(Deterministic)"}),e.jsx("td",{children:"같은 입력에 대해 항상 같은 출력을 반환"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"균일 분포(Uniform Distribution)"}),e.jsx("td",{children:"출력값이 고르게 분포하여 충돌을 최소화"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"빠른 계산"}),e.jsx("td",{children:"해시값 계산이 O(1)에 가까워야 함"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"최소 충돌"}),e.jsx("td",{children:"서로 다른 키가 같은 인덱스에 매핑되는 경우를 최소화"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"다양한 해시 함수 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`# 1. 나눗셈법 (Division Method)
def hash_division(key, table_size):
    return key % table_size

# 2. 곱셈법 (Multiplication Method)
import math
def hash_multiplication(key, table_size):
    A = (math.sqrt(5) - 1) / 2  # 황금비의 역수 ≈ 0.6180
    return int(table_size * ((key * A) % 1))

# 3. 문자열 해시 함수
def hash_string(s, table_size):
    hash_val = 0
    for char in s:
        hash_val = hash_val * 31 + ord(char)
    return hash_val % table_size

# Python 내장 hash() 함수
print(hash("hello"))   # 문자열 해시
print(hash(42))        # 정수 해시
print(hash((1, 2, 3))) # 튜플 해시`})})]}),e.jsx("h2",{children:"충돌 해결"}),e.jsxs("p",{children:["서로 다른 키가 같은 해시값(인덱스)을 가지는 현상을 ",e.jsx("strong",{children:"충돌(Collision)"}),"이라 합니다. 충돌은 필연적으로 발생하며, 이를 해결하는 대표적인 방법이 두 가지 있습니다."]}),e.jsx("h3",{children:"체이닝 (Chaining)"}),e.jsx("p",{children:"같은 인덱스에 여러 데이터를 연결 리스트로 연결하여 저장하는 방식입니다. 구현이 간단하고 해시 테이블의 적재율(Load Factor)이 높아져도 성능 저하가 완만합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"체이닝 구현"}),e.jsx("pre",{children:e.jsx("code",{children:`class HashTableChaining:
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(size)]

    def _hash(self, key):
        return hash(key) % self.size

    def put(self, key, value):
        index = self._hash(key)
        # 이미 같은 키가 있으면 값 갱신
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                self.table[index][i] = (key, value)
                return
        # 새 키-값 쌍 추가
        self.table[index].append((key, value))

    def get(self, key):
        index = self._hash(key)
        for k, v in self.table[index]:
            if k == key:
                return v
        raise KeyError(key)

    def remove(self, key):
        index = self._hash(key)
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                del self.table[index][i]
                return
        raise KeyError(key)

# 사용 예시
ht = HashTableChaining()
ht.put("apple", 3000)
ht.put("banana", 5000)
print(ht.get("apple"))   # 3000`})})]}),e.jsx("h3",{children:"개방 주소법 (Open Addressing)"}),e.jsx("p",{children:"충돌이 발생하면 다른 빈 슬롯을 찾아 저장하는 방식입니다. 별도의 자료구조 없이 배열 내에서 해결하므로 메모리 효율이 좋습니다."}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"탐사 방법"}),e.jsx("th",{children:"다음 위치 계산"}),e.jsx("th",{children:"특징"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"선형 탐사"}),e.jsx("td",{children:"(h + i) % size"}),e.jsx("td",{children:"간단하지만 클러스터링 발생"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"이차 탐사"}),e.jsxs("td",{children:["(h + i",e.jsx("sup",{children:"2"}),") % size"]}),e.jsx("td",{children:"클러스터링 완화, 이차 클러스터링 가능"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"이중 해싱"}),e.jsx("td",{children:"(h + i * h2(key)) % size"}),e.jsx("td",{children:"가장 균일한 분포, 계산 비용 증가"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"선형 탐사 구현"}),e.jsx("pre",{children:e.jsx("code",{children:`class HashTableLinearProbing:
    def __init__(self, size=10):
        self.size = size
        self.keys = [None] * size
        self.values = [None] * size

    def _hash(self, key):
        return hash(key) % self.size

    def put(self, key, value):
        index = self._hash(key)
        while self.keys[index] is not None:
            if self.keys[index] == key:
                self.values[index] = value  # 값 갱신
                return
            index = (index + 1) % self.size  # 선형 탐사
        self.keys[index] = key
        self.values[index] = value

    def get(self, key):
        index = self._hash(key)
        while self.keys[index] is not None:
            if self.keys[index] == key:
                return self.values[index]
            index = (index + 1) % self.size
        raise KeyError(key)

# 사용 예시
ht = HashTableLinearProbing()
ht.put("cat", 100)
ht.put("dog", 200)
print(ht.get("cat"))  # 100`})})]}),e.jsx("h2",{children:"시간 복잡도"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"연산"}),e.jsx("th",{children:"평균"}),e.jsx("th",{children:"최악"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"삽입 (Insert)"}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(n)"}),e.jsx("td",{children:"해시 충돌이 많으면 성능 저하"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"검색 (Search)"}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(n)"}),e.jsx("td",{children:"좋은 해시 함수가 핵심"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"삭제 (Delete)"}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(n)"}),e.jsx("td",{children:"체이닝에서는 연결 리스트 탐색 필요"})]})]})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"적재율(Load Factor)"}),e.jsx("p",{children:"저장된 데이터 수 / 버킷 배열 크기. 적재율이 높아지면 충돌이 증가하므로, 일반적으로 0.7~0.8을 초과하면 배열을 2배로 확장(리해싱)합니다. Python의 dict는 적재율이 2/3을 초과하면 리사이징합니다."})]}),e.jsx("h2",{children:"Python dict 내부 구조"}),e.jsx("p",{children:"Python의 딕셔너리(dict)는 해시 테이블을 기반으로 구현되어 있습니다. CPython 3.6 이후로는 삽입 순서를 보장하며, 내부적으로 개방 주소법을 사용합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Python dict의 동작"}),e.jsx("pre",{children:e.jsx("code",{children:`# Python dict는 해시 테이블 기반
d = {}

# 삽입 - O(1) 평균
d["name"] = "Alice"
d["age"] = 25
d["city"] = "Seoul"

# 검색 - O(1) 평균
print(d["name"])      # Alice
print(d.get("phone")) # None (KeyError 방지)

# 삭제 - O(1) 평균
del d["city"]

# 존재 여부 확인 - O(1) 평균
if "name" in d:
    print("name 키가 존재합니다")

# Python 3.6+: 삽입 순서 보장
for key, value in d.items():
    print(f"{key}: {value}")

# 해시값 확인
print(hash("name"))  # 키의 해시값
# 리스트는 해시 불가 (mutable이므로)
# hash([1, 2, 3])  # TypeError!`})})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"해시 가능(Hashable) 조건"}),e.jsx("p",{children:"Python에서 딕셔너리의 키가 되려면 불변(immutable)이어야 합니다. str, int, float, tuple은 해시 가능하지만, list, dict, set은 해시할 수 없습니다."})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습 문제"}),e.jsxs("ol",{children:[e.jsx("li",{children:"크기가 7인 해시 테이블에 키 [10, 22, 31, 4, 15, 28, 17]을 나눗셈법으로 삽입할 때, 각 키의 인덱스를 구하세요."}),e.jsx("li",{children:"위 문제에서 충돌이 발생하는 키를 찾고, 체이닝과 선형 탐사 각각의 방식으로 해결 과정을 설명하세요."}),e.jsx("li",{children:"Python으로 간단한 전화번호부를 해시 테이블로 구현해 보세요 (이름 → 전화번호)."})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/hash",className:"lesson-nav-btn prev",children:"← 이전: 해시 자료구조"}),e.jsx(s,{to:"/hash/hash-map",className:"lesson-nav-btn next",children:"다음: 해시 맵 활용 →"})]})]})})})]}));export{r as default};
