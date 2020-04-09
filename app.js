// 1. min-max function

var minMax = (numArr) => {

    let min, max, output;
    max = Number.MIN_VALUE;
    min = Number.MAX_VALUE;
    output = [min, max];

    numArr.forEach(el => {
        if (el > output[1])
            output[1] = el;
        if (el < output[0])
            output[0] = el;
    });

    return output;
};

console.log(minMax([1, 23, 34, -23, 67]));

// 1. filter the  array  function

var filterArray = (arr) => {
    return arr.filter(val => typeof val !== 'string');
};

console.log(filterArray(['a', 'b', 1, 4, 5, 'd']));


// getStudnetNames function 

/*
 * Same functionality can be achieved in many ways...
 * Although I tried the approach where minimum Hard-coded values to be used.
 *
 */

// Created Student Object Contructor
var Student = function (id, name, subject) {
    this.id = id;
    this.name = name;
    this.subject = subject;
    this.getName = () => this.name;
}

// Multiple Students
let student1 = new Student(1, 'Tushar', 'Javascript');
let student2 = new Student(2, 'Vijay', 'Java');
let student3 = new Student(3, 'Akshay', 'Rust');
let student4 = new Student(4, 'Sanjay', 'React');
let student5 = new Student(5, 'Omkar', 'C++');

let students = [];
for (let index = 1; index < 6; index++) {
    const element = eval(`student${index}`);
    students.push(element);
}

console.log(students);

// 3. GetStudentsNames Function...
var getStudentNames = (arr) => {
    return arr.map(el => el.getName());
}

console.log(getStudentNames(students));



// 4. hasKey function implemented in 2 ways: 
//  Using Pre-defined Method : hasOwnProperty()
var hasKey = (obj, prop) => {
    return obj.hasOwnProperty(prop);
};

console.log(hasKey({
    a: 11,
    b: 23,
    c: 45
}, 'd'));

// Using self made function

var isKey = (obj, prop) => {
    let hasKey = false;
    for (let property of Object.keys(obj)) {

        if (property === prop)
            hasKey = true;
    }
    return hasKey;
};

console.log(isKey({
    a: 11,
    b: 23,
    c: 45
}, 'c'));


// 5. HTML Based code
document.querySelector('.btnContactSubmit').addEventListener('click', () => {

    // Selected form node
    let node = document.querySelector('.userform');
    // firstname node
    let fnameNode = document.getElementById('fname');
    // lastname node
    let lNameNode = document.getElementById('lname');

    let fName = fnameNode.value;
    let lName = lNameNode.value;

    // Inputs invalid condition
    if (!fName || !lName) {
        alert('Invalid Inputs...');
        return;
    }

    fnameNode.value = '';
    lNameNode.value = '';

    // First & Last Name
    fName = fName.substring(0, 1).toUpperCase() + fName.substring(1);
    lName = lName.substring(0, 1).toUpperCase() + lName.substring(1);
    let html = `<div class = "userfullname">${fName} ${lName}</div>`;
    console.log(document.querySelector('.userfullname'));

    // Condition for not to create another text node if already
    if (document.querySelector('.userfullname'))
        document.querySelector('.userfullname').remove();


    node.insertAdjacentHTML('beforeend', html);

    let selector = document.querySelector('.userfullname');

    selector.style['font-size'] = '2.4em';
    selector.style.color = '#edeefe';
});