// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollartoYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueinYen = valueInDollar * 137.08;
    //return the dollar value
    return parseFloat(valueinYen.toFixed(2));
}

const fromYentoPound = function(valueinYen){
    // convert the given valueInEuro to dollars
    let valueinPound = valueinYen * 0.0069;
    //return the dollar value
    return parseFloat(valueinPound.toFixed(5));
}



// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

// module.exports = { sum };

// we include fromEuroToDollar here as well because it needs to be exported
// module.exports = { sum, fromEuroToDollar }

module.exports = { sum, fromEuroToDollar, fromDollartoYen, fromYentoPound }

