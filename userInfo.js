// userInfo.js

// Import functions from arrayManipulation.js
const { processArray, formatArrayStrings } = require('./arrayManipulation');

// Task 3: Function to create user profiles
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: index + 1
        };
    });
}

// Example usage:
const names = ["Alice", "Bob", "Charles", "Koranteng", "Edward"];
const processedNumbers = processArray([1, 2, 3, 4, 5]);
const modifiedNames = formatArrayStrings(names, processedNumbers);
const userProfiles = createUserProfiles(names, modifiedNames);

console.log(userProfiles);
// Output:
// [
//     { originalName: 'Alice', modifiedName: 'alice', id: 1 },
//     { originalName: 'Bob', modifiedName: 'BOB', id: 2 },
//     { originalName: 'Charlie', modifiedName: 'charlie', id: 3 },
//     { originalName: 'David', modifiedName: 'DAVID', id: 4 },
//     { originalName: 'Eve', modifiedName: 'eve', id: 5 }
// ]