const object2 = {
  gg: {
    cvalue: 100,
  },
};
const object = {
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
  let sum = 0;
  const defaultValue = 100;
  return function (obj) {
    if (Object.keys(obj).length > 0) {
      Object.values(obj).forEach((value) => {
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
