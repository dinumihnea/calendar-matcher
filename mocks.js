/* Case 1

  output = [
    [ 2020-12-06T11:30:00.000Z, 2020-12-06T12:00:00.000Z ],
    [ 2020-12-06T15:00:00.000Z, 2020-12-06T16:00:00.000Z ],
    [ 2020-12-06T18:00:00.000Z, 2020-12-08T18:30:00.000Z ]
  ]
*/
exports.mockMap1 = new Map([
    [
      "John",
      [
        {
          start: new Date(2020, 11, 6, 11, 0),
          end: new Date(2020, 11, 6, 12, 30)
        },
        {
          start: new Date(2020, 11, 6, 14, 0),
          end: new Date(2020, 11, 6, 15, 0)
        },
        {
          start: new Date(2020, 11, 6, 18, 0),
          end: new Date(2020, 11, 6, 20, 0)
        },
      ],
    ],
    [
      "Michael",
      [
        {
          start: new Date(2020, 11, 6, 12, 0),
          end: new Date(2020, 11, 6, 13, 30)
        },
        {
          start: new Date(2020, 11, 6, 14, 30),
          end: new Date(2020, 11, 6, 16, 30)
        },
        {
          start: new Date(2020, 11, 6, 16, 30),
          end: new Date(2020, 11, 6, 17, 0)
        },
        {
          start: new Date(2020, 11, 6, 18, 0),
          end: new Date(2020, 11, 6, 19, 0)
        },
      ],
    ],
  ]
)


/* Case 2

 output: [
    [ 2020-12-06T11:00:00.000Z, 2020-12-06T11:30:00.000Z ],
    [ 2020-12-06T13:35:00.000Z, 2020-12-08T18:30:00.000Z ]
  ]
*/
exports.mockMap2 = new Map([
  [
    "John",
    [
      {
        start: new Date(2020, 11, 6, 11, 0),
        end: new Date(2020, 11, 6, 12, 30)
      },
      {
        start: new Date(2020, 11, 6, 11, 0),
        end: new Date(2020, 11, 6, 12, 30)
      },
      {
        start: new Date(2020, 11, 6, 14, 0),
        end: new Date(2020, 11, 6, 15, 30)
      },
    ],
  ],
  [
    "Michael",
    [
      {
        start: new Date(2020, 11, 6, 12, 0),
        end: new Date(2020, 11, 6, 13, 0)
      },
      {
        start: new Date(2020, 11, 6, 13, 30),
        end: new Date(2020, 11, 6, 14, 30)
      },
    ],
  ],
  [
    "Jack",
    [
      {
        start: new Date(2020, 11, 6, 10, 30),
        end: new Date(2020, 11, 6, 11, 15)
      },
      {
        start: new Date(2020, 11, 6, 13, 45),
        end: new Date(2020, 11, 6, 14, 30)
      },
      {
        start: new Date(2020, 11, 6, 15, 0),
        end: new Date(2020, 11, 6, 15, 30)
      },
      {
        start: new Date(2020, 11, 6, 15, 31),
        end: new Date(2020, 11, 6, 15, 35)
      },
    ],
  ],
]);
