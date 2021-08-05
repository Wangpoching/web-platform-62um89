window.testCases = [
  {
    input: [
      { id: 1, value: 43 },
      { id: 1, value: 213 },
      { id: 2, value: 321 },
      { id: 3, value: 2 },
      { id: 3, value: 345 },
      { id: 4, value: 555 },
      { id: 4, value: 44 },
      { id: 3, value: 33 },
      { id: 3, value: 199 }
    ],
    output: [
      { id: 1, value: [43, 213] },
      { id: 2, value: 321 },
      { id: 3, value: [2, 345, 33, 199] },
      { id: 4, value: [555, 44] }
    ]
  },
  {
    input: [{ id: 1, value: 43 }],
    output: [{ id: 1, value: 43 }]
  },
  {
    input: [{ id: 99, value: 43 }, { id: 99, value: 1 }],
    output: [{ id: 99, value: [43, 1] }]
  },
  {
    input: [
      { id: 5, value: 1 },
      { id: 4, value: 2 },
      { id: 3, value: 3 },
      { id: 2, value: 4 },
      { id: 1, value: 5 }
    ],
    output: [
      { id: 5, value: 1 },
      { id: 4, value: 2 },
      { id: 3, value: 3 },
      { id: 2, value: 4 },
      { id: 1, value: 5 }
    ]
  },
  {
    input: [
      { id: 5, value: 1 },
      { id: 5, value: 2 },
      { id: 5, value: 3 },
      { id: 5, value: 4 },
      { id: 5, value: 5 }
    ],
    output: [{ id: 5, value: [1, 2, 3, 4, 5] }]
  },
  {
    input: [
      { id: 5, value: 1 },
      { id: 4, value: 2 },
      { id: 3, value: 3 },
      { id: 1, value: 4 },
      { id: 1, value: 5 }
    ],
    output: [
      { id: 5, value: 1 },
      { id: 4, value: 2 },
      { id: 3, value: 3 },
      { id: 1, value: [4, 5] }
    ]
  },
  {
    input: [
      { id: 5, value: 1 },
      { id: 4, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
      { id: 5, value: 5 },
      { id: 5, value: 6 },
      { id: 5, value: 5 }
    ],
    output: [
      { id: 5, value: [1, 5, 6, 5] },
      { id: 4, value: [2, 4] },
      { id: 3, value: 3 }
    ]
  },
  {
    input: [
      { id: 5, value: 1 },
      { id: 4, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
      { id: 5, value: 5 },
      { id: 5, value: 6 },
      { id: 5, value: 5 },
      { id: 1, value: 3 },
      { id: 1, value: 3 },
      { id: 1, value: 1 }
    ],
    output: [
      { id: 5, value: [1, 5, 6, 5] },
      { id: 4, value: [2, 4] },
      { id: 3, value: 3 },
      { id: 1, value: [3, 3, 1] }
    ]
  },
  {
    input: [
      { id: 5, value: 1 },
      { id: 5, value: 3 },
      { id: 5, value: 5 },
      { id: 5, value: 4 },
      { id: 5, value: 2 },
      { id: 10, value: 6 },
      { id: 11, value: 5 },
      { id: 11, value: 6 },
      { id: 1, value: 3 },
      { id: 1, value: 2 },
      { id: 1, value: 1 }
    ],
    output: [
      { id: 5, value: [1, 3, 5, 4, 2] },
      { id: 10, value: 6 },
      { id: 11, value: [5, 6] },
      { id: 1, value: [3, 2, 1] }
    ]
  }
];
