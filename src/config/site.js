const site = {
  name: 'Data Structure',
  nameKo: '자료구조 학습',
  description: '자료구조를 기초부터 고급까지 체계적으로 학습하는 교육 플랫폼',
  url: 'https://data-structure.dreamitbiz.com',

  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  brand: {
    parts: [
      { text: 'DS', className: 'brand-dream' },
      { text: ' Study', className: 'brand-it' }
    ]
  },

  themeColor: '#0046C8',

  menuItems: [
    {
      labelKey: 'site.nav.intro',
      path: '/intro/what-is-ds',
      activePath: '/intro',
      dropdown: [
        { path: '/intro/what-is-ds', labelKey: 'site.nav.whatIsDS' },
        { path: '/intro/complexity', labelKey: 'site.nav.complexity' },
      ]
    },
    {
      labelKey: 'site.nav.linear',
      path: '/linear',
      activePath: '/linear',
      dropdown: [
        { path: '/linear/array', labelKey: 'site.nav.array' },
        { path: '/linear/linked-list', labelKey: 'site.nav.linkedList' },
        { path: '/linear/stack', labelKey: 'site.nav.stack' },
        { path: '/linear/queue', labelKey: 'site.nav.queue' },
        { path: '/linear/deque', labelKey: 'site.nav.deque' },
      ]
    },
    {
      labelKey: 'site.nav.nonlinear',
      path: '/nonlinear',
      activePath: '/nonlinear',
      dropdown: [
        { path: '/nonlinear/tree', labelKey: 'site.nav.tree' },
        { path: '/nonlinear/binary-tree', labelKey: 'site.nav.binaryTree' },
        { path: '/nonlinear/bst', labelKey: 'site.nav.bst' },
        { path: '/nonlinear/heap', labelKey: 'site.nav.heap' },
        { path: '/nonlinear/graph', labelKey: 'site.nav.graph' },
      ]
    },
    {
      labelKey: 'site.nav.hash',
      path: '/hash',
      activePath: '/hash',
      dropdown: [
        { path: '/hash/hash-table', labelKey: 'site.nav.hashTable' },
        { path: '/hash/hash-map', labelKey: 'site.nav.hashMap' },
      ]
    },
    {
      labelKey: 'site.nav.sorting',
      path: '/algorithm',
      activePath: '/algorithm',
      dropdown: [
        { path: '/algorithm/bubble-sort', labelKey: 'site.nav.bubbleSort' },
        { path: '/algorithm/selection-sort', labelKey: 'site.nav.selectionSort' },
        { path: '/algorithm/insertion-sort', labelKey: 'site.nav.insertionSort' },
        { path: '/algorithm/merge-sort', labelKey: 'site.nav.mergeSort' },
        { path: '/algorithm/quick-sort', labelKey: 'site.nav.quickSort' },
        { path: '/algorithm/search', labelKey: 'site.nav.search' },
      ]
    },
    {
      labelKey: 'site.nav.advanced',
      path: '/advanced',
      activePath: '/advanced',
      dropdown: [
        { path: '/advanced/trie', labelKey: 'site.nav.trie' },
        { path: '/advanced/segment-tree', labelKey: 'site.nav.segmentTree' },
        { path: '/advanced/union-find', labelKey: 'site.nav.unionFind' },
      ]
    },
    {
      labelKey: 'site.nav.practice',
      path: '/practice',
      activePath: '/practice',
      dropdown: [
        { path: '/practice/basic', labelKey: 'site.nav.practiceBasic' },
        { path: '/practice/intermediate', labelKey: 'site.nav.practiceInter' },
      ]
    },
    { path: '/references', labelKey: 'site.nav.references', activePath: '/references' },
  ],

  footerLinks: [
    { path: '/linear', labelKey: 'site.nav.linear' },
    { path: '/nonlinear', labelKey: 'site.nav.nonlinear' },
    { path: '/algorithm', labelKey: 'site.nav.sorting' },
    { path: '/references', labelKey: 'site.nav.references' },
  ],

  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: 'DB Study', url: 'https://db-study.dreamitbiz.com' },
    { name: 'KoreaTech 컴퓨팅 사고', url: 'https://koreatech.dreamitbiz.com' }
  ]
};

export default site;
