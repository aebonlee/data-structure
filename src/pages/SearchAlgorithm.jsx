import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const SearchAlgorithm = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="탐색 알고리즘 | 자료구조 학습"
        description="선형 탐색, 이진 탐색의 원리와 시간 복잡도, Python bisect 모듈까지 체계적으로 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>탐색 알고리즘</h1>
          <p>데이터에서 원하는 값을 찾는 다양한 탐색 기법을 학습합니다</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box" data-aos="fade-up">
              <h3>학습 목표</h3>
              <ul>
                <li>선형 탐색과 이진 탐색의 원리를 이해한다.</li>
                <li>이진 탐색의 전제 조건과 동작 과정을 설명할 수 있다.</li>
                <li>각 탐색 알고리즘의 시간 복잡도를 비교 분석한다.</li>
                <li>Python의 bisect 모듈을 활용한 이진 탐색을 구현할 수 있다.</li>
              </ul>
            </div>

            {/* 선형 탐색 */}
            <h2 data-aos="fade-up">1. 선형 탐색 (Linear Search)</h2>

            <h3 data-aos="fade-up">1.1 선형 탐색이란?</h3>
            <p data-aos="fade-up">
              <strong>선형 탐색(Linear Search)</strong>은 배열의 처음부터 끝까지 하나씩 순서대로 비교하면서
              원하는 값을 찾는 가장 단순한 탐색 알고리즘입니다.
              정렬되지 않은 데이터에서도 사용할 수 있으며, 구현이 매우 간단합니다.
            </p>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">Python - 선형 탐색 구현</div>
              <pre><code>{`def linear_search(arr, target):
    """선형 탐색: 배열에서 target의 인덱스를 반환"""
    for i in range(len(arr)):
        if arr[i] == target:
            return i      # 찾으면 인덱스 반환
    return -1              # 못 찾으면 -1 반환

# 사용 예시
data = [4, 2, 7, 1, 9, 3, 5]
result = linear_search(data, 7)
print(f"인덱스: {result}")    # 인덱스: 2`}</code></pre>
            </div>

            <h3 data-aos="fade-up">1.2 선형 탐색의 특징</h3>
            <ul data-aos="fade-up">
              <li><strong>장점</strong>: 구현이 간단하고, 정렬되지 않은 배열에서도 사용 가능</li>
              <li><strong>단점</strong>: 데이터가 많을수록 탐색 시간이 선형적으로 증가</li>
              <li><strong>최선의 경우</strong>: O(1) - 첫 번째 원소가 찾는 값일 때</li>
              <li><strong>최악의 경우</strong>: O(n) - 마지막 원소이거나 존재하지 않을 때</li>
            </ul>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">선형 탐색 동작 과정</div>
              <pre><code>{`배열: [4, 2, 7, 1, 9, 3, 5]   target = 9

Step 1: arr[0]=4  ≠ 9  → 다음
Step 2: arr[1]=2  ≠ 9  → 다음
Step 3: arr[2]=7  ≠ 9  → 다음
Step 4: arr[3]=1  ≠ 9  → 다음
Step 5: arr[4]=9  = 9  → 찾음! 인덱스 4 반환

→ 총 5번 비교`}</code></pre>
            </div>

            {/* 이진 탐색 */}
            <h2 data-aos="fade-up">2. 이진 탐색 (Binary Search)</h2>

            <h3 data-aos="fade-up">2.1 이진 탐색이란?</h3>
            <p data-aos="fade-up">
              <strong>이진 탐색(Binary Search)</strong>은 <strong>정렬된 배열</strong>에서 탐색 범위를
              절반씩 줄여가며 원하는 값을 찾는 효율적인 탐색 알고리즘입니다.
              매 단계마다 중간 값과 비교하여 탐색 범위를 반으로 줄이므로,
              시간 복잡도가 O(log n)으로 매우 빠릅니다.
            </p>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">Python - 이진 탐색 구현 (반복문)</div>
              <pre><code>{`def binary_search(arr, target):
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
print(f"인덱스: {result}")    # 인덱스: 4`}</code></pre>
            </div>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">이진 탐색 동작 과정</div>
              <pre><code>{`정렬된 배열: [1, 3, 5, 7, 9, 11, 13, 15]   target = 9

Step 1: left=0, right=7, mid=3
        arr[3]=7 < 9  → left = 4 (오른쪽 절반)

Step 2: left=4, right=7, mid=5
        arr[5]=11 > 9 → right = 4 (왼쪽 절반)

Step 3: left=4, right=4, mid=4
        arr[4]=9 = 9  → 찾음! 인덱스 4 반환

→ 총 3번 비교 (선형 탐색이면 5번)`}</code></pre>
            </div>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">Python - 이진 탐색 구현 (재귀)</div>
              <pre><code>{`def binary_search_recursive(arr, target, left, right):
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
print(f"인덱스: {result}")    # 인덱스: 4`}</code></pre>
            </div>

            {/* 이진 탐색의 조건 */}
            <h2 data-aos="fade-up">3. 이진 탐색의 조건</h2>

            <div className="callout-box" data-aos="fade-up">
              <h3>이진 탐색 사용 조건</h3>
              <ul>
                <li><strong>필수 조건</strong>: 배열이 반드시 <strong>정렬</strong>되어 있어야 합니다.</li>
                <li><strong>임의 접근</strong>: 인덱스를 통한 임의 접근(Random Access)이 가능해야 합니다.</li>
                <li>연결 리스트에서는 중간 지점 접근이 O(n)이므로 이진 탐색이 비효율적입니다.</li>
                <li>정렬 비용(O(n log n))을 고려하여, 탐색이 빈번할 때 유리합니다.</li>
              </ul>
            </div>

            <p data-aos="fade-up">
              이진 탐색을 사용하려면 먼저 배열을 정렬해야 합니다. 한 번 정렬한 후
              여러 번 탐색하는 경우에는 매우 효율적이지만, 매번 정렬 후 한 번만 탐색한다면
              선형 탐색보다 오히려 느릴 수 있습니다.
            </p>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">이진 탐색 vs 선형 탐색 선택 기준</div>
              <pre><code>{`# 시나리오 1: 정렬된 데이터에서 여러 번 탐색
# → 이진 탐색이 유리 (O(log n) × k번)

# 시나리오 2: 정렬되지 않은 데이터에서 1번 탐색
# → 선형 탐색이 유리 (O(n) vs O(n log n) + O(log n))

# 시나리오 3: 데이터가 매우 적은 경우 (n < 20)
# → 선형 탐색이 오히려 빠를 수 있음 (오버헤드 없음)`}</code></pre>
            </div>

            {/* 시간 복잡도 비교 */}
            <h2 data-aos="fade-up">4. 시간 복잡도 비교</h2>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>알고리즘</th>
                  <th>최선</th>
                  <th>평균</th>
                  <th>최악</th>
                  <th>공간 복잡도</th>
                  <th>정렬 필요</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>선형 탐색</strong></td>
                  <td>O(1)</td>
                  <td>O(n)</td>
                  <td>O(n)</td>
                  <td>O(1)</td>
                  <td>아니오</td>
                </tr>
                <tr>
                  <td><strong>이진 탐색 (반복)</strong></td>
                  <td>O(1)</td>
                  <td>O(log n)</td>
                  <td>O(log n)</td>
                  <td>O(1)</td>
                  <td>예</td>
                </tr>
                <tr>
                  <td><strong>이진 탐색 (재귀)</strong></td>
                  <td>O(1)</td>
                  <td>O(log n)</td>
                  <td>O(log n)</td>
                  <td>O(log n)</td>
                  <td>예</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>비교 예시: 100만 개 데이터에서 탐색</h3>
              <ul>
                <li><strong>선형 탐색</strong>: 최악 1,000,000번 비교</li>
                <li><strong>이진 탐색</strong>: 최악 약 20번 비교 (log2(1,000,000) ≈ 20)</li>
                <li>이진 탐색이 약 <strong>50,000배</strong> 더 빠릅니다.</li>
              </ul>
            </div>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>데이터 수 (n)</th>
                  <th>선형 탐색 (최악)</th>
                  <th>이진 탐색 (최악)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>10</td><td>10번</td><td>4번</td></tr>
                <tr><td>100</td><td>100번</td><td>7번</td></tr>
                <tr><td>1,000</td><td>1,000번</td><td>10번</td></tr>
                <tr><td>10,000</td><td>10,000번</td><td>14번</td></tr>
                <tr><td>1,000,000</td><td>1,000,000번</td><td>20번</td></tr>
                <tr><td>10억</td><td>10억 번</td><td>30번</td></tr>
              </tbody>
            </table>

            {/* Python bisect 모듈 */}
            <h2 data-aos="fade-up">5. Python bisect 모듈</h2>

            <h3 data-aos="fade-up">5.1 bisect 모듈 소개</h3>
            <p data-aos="fade-up">
              Python의 <strong>bisect</strong> 모듈은 정렬된 리스트에서 이진 탐색을 수행하는
              내장 모듈입니다. 직접 이진 탐색을 구현하지 않고도 효율적인 탐색과
              삽입 위치 결정이 가능합니다.
            </p>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">Python - bisect 모듈 주요 함수</div>
              <pre><code>{`import bisect

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
print(sorted_list)    # [1, 3, 5, 6, 7, 9, 11, 13, 15]`}</code></pre>
            </div>

            <h3 data-aos="fade-up">5.2 bisect를 활용한 값 검색</h3>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">Python - bisect로 값 존재 여부 확인</div>
              <pre><code>{`import bisect

def bisect_search(sorted_list, target):
    """bisect를 사용한 이진 탐색"""
    idx = bisect.bisect_left(sorted_list, target)
    if idx < len(sorted_list) and sorted_list[idx] == target:
        return idx
    return -1

# 사용 예시
data = [1, 3, 5, 7, 9, 11, 13, 15]
print(bisect_search(data, 9))     # 4
print(bisect_search(data, 6))     # -1 (존재하지 않음)`}</code></pre>
            </div>

            <h3 data-aos="fade-up">5.3 bisect 활용 예제</h3>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">Python - 학점 변환기 (bisect 활용)</div>
              <pre><code>{`import bisect

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
# 95점 → A`}</code></pre>
            </div>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>함수</th>
                  <th>설명</th>
                  <th>시간 복잡도</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>bisect_left(a, x)</strong></td>
                  <td>x가 삽입될 가장 왼쪽 위치 반환</td>
                  <td>O(log n)</td>
                </tr>
                <tr>
                  <td><strong>bisect_right(a, x)</strong></td>
                  <td>x가 삽입될 가장 오른쪽 위치 반환</td>
                  <td>O(log n)</td>
                </tr>
                <tr>
                  <td><strong>insort_left(a, x)</strong></td>
                  <td>정렬 유지하며 왼쪽에 삽입</td>
                  <td>O(n)</td>
                </tr>
                <tr>
                  <td><strong>insort_right(a, x)</strong></td>
                  <td>정렬 유지하며 오른쪽에 삽입</td>
                  <td>O(n)</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>선형 탐색</strong>은 정렬 불필요하나 O(n)으로 느리다.</li>
                <li><strong>이진 탐색</strong>은 정렬 필수이나 O(log n)으로 매우 빠르다.</li>
                <li>이진 탐색은 <strong>정렬된 배열</strong>과 <strong>임의 접근</strong>이 전제 조건이다.</li>
                <li>Python의 <strong>bisect</strong> 모듈로 간편하게 이진 탐색을 구현할 수 있다.</li>
                <li>데이터 크기와 탐색 빈도에 따라 적절한 탐색 알고리즘을 선택해야 한다.</li>
              </ul>
            </div>

            <div className="exercise-box" data-aos="fade-up">
              <h3>연습 문제</h3>
              <p><strong>문제 1.</strong> 정렬되지 않은 리스트 [8, 3, 5, 1, 9, 2, 7]에서 값 9를 선형 탐색으로 찾을 때 비교 횟수는?</p>
              <p><strong>문제 2.</strong> 정렬된 리스트 [2, 4, 6, 8, 10, 12, 14, 16]에서 이진 탐색으로 값 12를 찾는 과정을 단계별로 서술하세요.</p>
              <p><strong>문제 3.</strong> bisect 모듈을 활용하여, 정렬된 리스트에 새로운 값을 삽입하되 정렬 순서를 유지하는 함수를 작성하세요.</p>
            </div>

            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/algorithm/quick-sort" className="lesson-nav-btn prev">&larr; 퀵 정렬</Link>
              <Link to="/advanced/trie" className="lesson-nav-btn next">트라이(Trie) &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SearchAlgorithm;
