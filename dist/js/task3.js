const object2 = {
  gg: {
    cvalue: 100,
  },
};
const object3 = {};
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
        cvalue4: object3,
      },
    },
  },
};
/**
 * Goes through the object and sums up all its values.
 * Numeric values are to be summed up in an ordinary way.
 * If a value is of a string type, it shall be converted
 * to a number and summed up. If a string value can not be
 * converted to a numeric or if its value is undefined,
 * the total sum shall be increased by a default value.
 * The default value is set to 100. If a value is an other
 * object, the script analyzes its values and sums them up
 * if applicable.
 * @returns the sum of all object`s values
 */
function createSumFunc() {
  let sum = 0;
  const defaultValue = 100;
  return function (obj) {
    if (Object.keys(obj).length > 0) {
      Object.values(obj).forEach((value) => {
        if (typeof value === 'number') {
          sum += value;
        } else if (typeof value === 'string') {
          Number.isNaN(parseFloat(value)) ? sum += defaultValue : sum += parseFloat(value);
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
