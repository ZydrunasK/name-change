function hello(name) {

    if (name === undefined)  {
        return 'Error: No input found'
    }
    if (typeof name !== 'string') {
    return 'ERROR: Input must be a string'
    } 
    if (name === '')  {
        return 'Error: No input found'
    }

    for (let i = 0; i < 10; i++) {              // loops trough 10 numbers
        if (name.includes(`${i}`)) {             // checks if any of the 10 numbers are in the string
        return 'ERROR: Input cant contain numbers'
        }
    };

    if (name.slice(-2) === 'as') {
        name = name.slice(0, -2);
        name += 'ai'
        return `Labas, ${name}!`;
    }
    if (name.slice(-2) === 'is') {
        name = name.slice(0, -2);
        name += 'i'
        return  `Labas, ${name}!`;
    }
    if (name.slice(-2) === 'us') {
        name = name.slice(0, -2);
        name += 'au'
        return  `Labas, ${name}!`;
    }
    if (name.slice(-1) === 'ė') {
        name = name.slice(0, -1);
        name += 'e';
        return  `Labas, ${name}!`;
    }  
    if (name.slice(-1) === 'i' || 'y' || 'a') {
        return  `Labas, ${name}!`;
    }
    return `ERROR: Incorrect input`;
}

console.log(hello('Jonas'));
console.log(hello('Gedutis'));
console.log(hello('Ivijus'));
console.log(hello('Indrė'));
console.log(hello('Marija'));
console.log(hello('Žavi'));
console.log(hello('Sherry'));
console.log(hello('M4rji4'));
console.log(hello(123));
console.log(hello(''));
console.log(hello());



/* 
console.clear();
let name = 'Justinas';
console.log(name.slice(name.length - 2, name.length));

let badword = 'as3d';
let badword2 = 'asd';

function catcher(wr) {
    for (let i = 0; i < 10; i++) {
        if (wr.includes(`${i}`)) {
            return 'yes'
        }
    }
    return 'no';
}
  console.log(catcher(badword));
  console.log(catcher(badword2)); 
*/
    


