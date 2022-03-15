# Obj-Array-Destructuring-Prac

## Objects and Arrays Reference 
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
}; 

const yoo = [
  'U',
  'Eww'
];

## Tasks
 /**
 * Assigns x to a variable called 'ex' using destructuring
 * @returns the variable
 */
 
 /**
 * Assigns y to a variable called 'why' using destructuring
 * @returns the variable
 */
 
 /**
 * Assigns b to variable called 'bee' using nested destructuring
 * @returns the variable
 */
 
 /**
 * Assigns constant 'you' to the first value of array 'yoo'
 * @returns 'you'
 */
 
 /**
 * Assigns constant 'splat' to the second value of array 'yoo'
 * Does not create any unused variables
 * @returns 'you'
 */
 
 /**
 * Extract constants see, sea, and si from testObject
 * @returns [see, sea, si]
 */
 
 ## Check Code
 (Should not return error)
 -paste at bottom of editor-
 
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
};

main();
