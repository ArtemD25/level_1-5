'use strict';

const object2: object = {
  gg: {
    cvalue: 100,
  },
};

const object: object = {
  hello: {
    cvalue: 1,
  },
  world: {
    cvalue: {
      yay: {
        cvalue: undefined,
        cvalue2: 'f100',
        cvalue3: object2,
      },
    },
  },
};

function createSumFunc() {
  let sum: number = 0;
  const defaultValue: number = 100;

  return function (obj: object): number {
    if (Object.keys(obj).length > 0) {
      Object.values(obj).forEach(function (value) {
        if (typeof value === 'number') {
          sum += value;
        } else if (typeof value === 'string') {
          if (Number.isNaN(parseFloat(value))) {
            sum += defaultValue;
          } else {
            sum += parseFloat(value);
          }
        } else if (value === undefined) {
          sum += defaultValue;
        } else {
          sumValues(value);
        }
      });
    }

    return sum;
  };
}

const sumValues = createSumFunc();
console.log(sumValues(object));
