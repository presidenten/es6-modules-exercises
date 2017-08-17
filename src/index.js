
console.log('\nProgram is starting!');

// Run your code with:
// ```shell
//   npm run start --silent
// ```

// Task 1. import the secret property from `a.js`
const secret = 'No secret yet...'; // Replace me with import
console.log('\n\nTask 1.\nResult: ' + secret);


// Task 2. Load lodash as _ so that the filename get kebabcased
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
  Put lines 26 & 27 behind comments.
*/
const id = 'No id yet...'; // Replace me with: import { id } from './b/b.js';
/**
  Considering how destructuring works, will the line below print 42 or 3?
  Why?
*/
console.log('\n\nTask 4.\nResult: ' + id);


console.log('\n------ Done ------\n');
