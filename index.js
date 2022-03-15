const testObject = {
  x: 1,
  y: 2,
  hello: 'asldkfjaslkdfj',
  a: {
    b: {
      value: 1
    },
    saw: {
      c: [
        {
          sea: 390482,
        },
        {
          see: 21343234,
        },
        {
          si: 3333928,
        }
      ]
    }
  }
}

const yoo = [
  'U',
  'Eww'
];

/**
 * Assigns x to a variable called 'ex' using destructuring
 * @returns the variable
 */
const assignX = () => {
  const {x} = testObject;
  return x;
}

/**
 * Assigns y to a variable called 'why' using destructuring
 * @returns the variable
 */
const assignY = () => {
  const {y} = testObject;
  return y;
}
/**
 * Assigns b to variable called 'bee' using nested destructuring
 * @returns the variable
 */
const assignB = () => {
  const {
    a: {
       b: bee
    }} = testObject;
  return bee;
}


/**
 * Assigns constant 'you' to the first value of array 'yoo'
 * @returns 'you'
 */
const assignEue = () => {
  const [you] = yoo;
  return you;
}

/**
 * Assigns constant 'splat' to the second value of array 'yoo'
 * Does not create any unused variables
 * @returns 'you'
 */
 const assignSplat = () => {
   const [, splat] = yoo;
  return splat;
}

/*
testObject = {
  x: 1,
  y: 2,
  hello: 'asldkfjaslkdfj',
  a: {
    b: {
      value: 1
    },
    saw: {
      c: [
        {
          sea: 390482,
        },
        {
          see: 21343234,
        },
        {
          si: 3333928,
        }
      ]
    }
  }
}
*/

/**
 * Extract constants see, sea, and si from testObject
 * @returns [see, sea, si]
 */
 const assinecy = () => {
  const {
    a: {
      saw: {
        c: [
          {sea},{see},{si}
        ],
      },
    },
  } = testObject;
   return [see, sea, si];
 }

function main() {
  const problems = {
    assignX,
    assignY,
    assignB,
    assignEue,
    assignSplat,
    assinecy,
  }
  Object.keys(problems).map((problemName) => {
    console.log(`\nTesting problem ${problemName}...`)
    const result = problems[problemName]()
    console.log(`Finished with result:`)
    console.log(`${JSON.stringify(result, null, 2)}`)
  })
}

main();