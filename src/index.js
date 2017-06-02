
console.log('\nProgram is starting!');


// Task 1. import the secret from `a.js`
const secret = 'No secret yet...'; // Replace me with import
console.log('\n\nTask 1.\nResult: ' + secret);


// Task 2. Load lodash as _ and kebabCase filename
const _ = { kebabCase: () => 'No kebab yet...' }; // Replace me with import
console.log('\n\nTask 2.\nResult: ' + _.kebabCase('theNiceFilename'));


/**
  Task 3. Export this object as default from `./b/b.js` and import it as `b`:

  const theObject = {
    id: 3,
  };
*/
const b = 'Nothing imported yet...'; // Replace me with import
console.log('\n\nTask 3.\nResult:', b);


/**
  Task 4. Export a property called `id` from `./b/b.js` with value 42.
          Import it here and print it out.
          Considering hos destructuring works, will the line below print 42 or 3?
          Why?
*/
const id = 'No id yet...'; // Replace me with: import { id } from './b/b.js';
console.log('\n\nTask 4.\nResult: ' + id);


/**
  Task

*/


console.log('\n------ Done ------\n');
