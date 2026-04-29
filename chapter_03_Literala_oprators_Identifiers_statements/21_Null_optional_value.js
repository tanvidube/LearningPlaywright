//let a = null; // this can give us Null pointer Exception  , so avoid this to use 

// Nullish coalescing operator (??) - it is used to provide a default value to the variable if it is null

let a = null ?? 'default' // it is just a way to safe gaurd against the null value


a = a + 'Tanvi';
console.log(a);
