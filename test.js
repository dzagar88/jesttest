// import the function sum from the app.js file
// const { default: test } = require('node:test'); "jest"
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 137.08 yen", function() {
    // import the function from app.js
    const { fromDollartoYen } = require('./app.js')
    // use the function like its suppoed to be used
    const yen = fromDollartoYen(3.5)
    // if 1 dollar is 137.08 yen then 3.5 dollars = (3.5 * 137.08) 479.78
    const expected = 3.5 * 137.08;
    // this is comparision for unit test
    expect(fromDollartoYen(3.5)).toBe(479.78);

})

test("One pound should be 0.0069 yen", function() {
    // import the function from app.js
    const { fromYentoPound } = require('./app.js')
    // use the function like its suppoed to be used
    const pound = fromYentoPound(3.5)
    // if 1 yen 0.0069 pounds then 3.5 yen is 0.02415 pounds
    const expected = 3.5 * 0.0069;
    // this is comparision for unit test
    expect(fromYentoPound(3.5)).toBe(0.02415);

})