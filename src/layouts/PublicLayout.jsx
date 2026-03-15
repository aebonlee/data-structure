import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import useCodeCopy from '../hooks/useCodeCopy';
import useTableScroller from '../hooks/useTableScroller';

const Home = lazy(() => import('../pages/Home'));
const WhatIsDS = lazy(() => import('../pages/WhatIsDS'));
const Complexity = lazy(() => import('../pages/Complexity'));
const ArrayPage = lazy(() => import('../pages/ArrayPage'));
const LinkedList = lazy(() => import('../pages/LinkedList'));
const StackPage = lazy(() => import('../pages/StackPage'));
const QueuePage = lazy(() => import('../pages/QueuePage'));
const DequePage = lazy(() => import('../pages/DequePage'));
const TreePage = lazy(() => import('../pages/TreePage'));
const BinaryTree = lazy(() => import('../pages/BinaryTree'));
const BSTPage = lazy(() => import('../pages/BSTPage'));
const HeapPage = lazy(() => import('../pages/HeapPage'));
const GraphPage = lazy(() => import('../pages/GraphPage'));
const HashTable = lazy(() => import('../pages/HashTable'));
const HashMap = lazy(() => import('../pages/HashMap'));
const BubbleSort = lazy(() => import('../pages/BubbleSort'));
const SelectionSort = lazy(() => import('../pages/SelectionSort'));
const InsertionSort = lazy(() => import('../pages/InsertionSort'));
const MergeSort = lazy(() => import('../pages/MergeSort'));
const QuickSort = lazy(() => import('../pages/QuickSort'));
const SearchAlgorithm = lazy(() => import('../pages/SearchAlgorithm'));
const TriePage = lazy(() => import('../pages/TriePage'));
const SegmentTree = lazy(() => import('../pages/SegmentTree'));
const UnionFind = lazy(() => import('../pages/UnionFind'));
const PracticeBasic = lazy(() => import('../pages/PracticeBasic'));
const PracticeInter = lazy(() => import('../pages/PracticeInter'));
const References = lazy(() => import('../pages/References'));
const LinearIndex = lazy(() => import('../pages/LinearIndex'));
const NonlinearIndex = lazy(() => import('../pages/NonlinearIndex'));
const HashIndex = lazy(() => import('../pages/HashIndex'));
const AlgorithmIndex = lazy(() => import('../pages/AlgorithmIndex'));
const AdvancedIndex = lazy(() => import('../pages/AdvancedIndex'));
const PracticeIndex = lazy(() => import('../pages/PracticeIndex'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="loading-spinner"></div>
  </div>
);

const PublicLayout = () => {
  useCodeCopy();
  useTableScroller();

  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* DS Intro */}
            <Route path="/intro/what-is-ds" element={<WhatIsDS />} />
            <Route path="/intro/complexity" element={<Complexity />} />

            {/* Linear DS */}
            <Route path="/linear" element={<LinearIndex />} />
            <Route path="/linear/array" element={<ArrayPage />} />
            <Route path="/linear/linked-list" element={<LinkedList />} />
            <Route path="/linear/stack" element={<StackPage />} />
            <Route path="/linear/queue" element={<QueuePage />} />
            <Route path="/linear/deque" element={<DequePage />} />

            {/* Non-linear DS */}
            <Route path="/nonlinear" element={<NonlinearIndex />} />
            <Route path="/nonlinear/tree" element={<TreePage />} />
            <Route path="/nonlinear/binary-tree" element={<BinaryTree />} />
            <Route path="/nonlinear/bst" element={<BSTPage />} />
            <Route path="/nonlinear/heap" element={<HeapPage />} />
            <Route path="/nonlinear/graph" element={<GraphPage />} />

            {/* Hash DS */}
            <Route path="/hash" element={<HashIndex />} />
            <Route path="/hash/hash-table" element={<HashTable />} />
            <Route path="/hash/hash-map" element={<HashMap />} />

            {/* Algorithms */}
            <Route path="/algorithm" element={<AlgorithmIndex />} />
            <Route path="/algorithm/bubble-sort" element={<BubbleSort />} />
            <Route path="/algorithm/selection-sort" element={<SelectionSort />} />
            <Route path="/algorithm/insertion-sort" element={<InsertionSort />} />
            <Route path="/algorithm/merge-sort" element={<MergeSort />} />
            <Route path="/algorithm/quick-sort" element={<QuickSort />} />
            <Route path="/algorithm/search" element={<SearchAlgorithm />} />

            {/* Advanced DS */}
            <Route path="/advanced" element={<AdvancedIndex />} />
            <Route path="/advanced/trie" element={<TriePage />} />
            <Route path="/advanced/segment-tree" element={<SegmentTree />} />
            <Route path="/advanced/union-find" element={<UnionFind />} />

            {/* Practice */}
            <Route path="/practice" element={<PracticeIndex />} />
            <Route path="/practice/basic" element={<PracticeBasic />} />
            <Route path="/practice/intermediate" element={<PracticeInter />} />

            {/* References */}
            <Route path="/references" element={<References />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
