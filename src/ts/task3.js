var object2 = {
    gg: {
        cvalue: 100
    }
};
var object = {
    hello: {
        cvalue: 1
    },
    world: {
        cvalue: {
            yay: {
                cvalue: undefined,
                cvalue2: "f100",
                cvalue3: object2
            }
        }
    }
};
function createSumFunc() {
    var sum = 0;
    var defaultValue = 100;
    return function (object) {
        if (Object.keys(object).length > 0) {
            for (var key in object) {
                if (typeof object[key] === 'number') { // in case of a number
                    sum += object[key];
                }
                else if (typeof object[key] === 'string') { // in case of a string
                    if (isNaN(parseFloat(object[key]))) {
                        sum += defaultValue;
                    }
                    else {
                        sum += parseFloat(object[key]);
                    }
                }
                else if (object[key] === undefined) {
                    sum += defaultValue;
                }
                else {
                    sumValues(object[key]);
                }
            }
        }
        return sum;
    };
}
var sumValues = createSumFunc();
console.log(sumValues(object));
/* function sumValues(object: object): void {
  let sum: number = 0;

  if (Object.keys(object).length > 0) {
    for (let key in object) {
      if (typeof object[key] === 'number') { // in case of a number
        sum += object[key];
      } else if (typeof object[key] === 'string') { // in case of a string
        if (parseFloat(object[key]) === NaN) {
          sum += 2021;
        } else {
          sum += parseFloat(object[key]);
        }
      } else if (object[key] === undefined) {
        sum += 2021;
      } else {
        sumValues(object[key]);
      }
    }
  }

  //return sum;
} */
/* console.log(sumValues(object)); */
