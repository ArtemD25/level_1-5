interface someObject {
  [key: string]: { cvalue: number | string | undefined | someObject } | undefined;
}

function summ(object: someObject) {
  const arr = Object.keys(object).map((item) => {
    const elem = object[item];
    if (typeof elem.cvalue === 'undefined') return 2021;
    if (typeof elem.cvalue === 'string') return +elem.cvalue || 2021;
    if (typeof elem.cvalue === 'number') return elem.cvalue;
    return summ(elem.cvalue);
  });
  return arr.reduce((totalSum: number, item: number) => (totalSum += item));
}

const obj2 = {
  hello: {
    cvalue: 1,
  },
  world: {
    cvalue: {
      yay: {
        cvalue: '2',
      },
    },
  },
};

console.log(summ(obj2));
