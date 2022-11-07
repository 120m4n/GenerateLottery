function sumDigits(n) {
    const s = n.toString();
    const a = s.split("");
    const b = a.map((x) => parseInt(x));

    const first_sum = (b[4] + b[5]) % 10;
    const second_sum = (b[3] + b[4]) % 10;
    const third_sum = (b[2] + b[3]) % 10;
    const fourth_sum = (b[1] + b[2]) % 10;
    const fifth_sum = (b[0] + b[1]) % 10;

   // join the numbers
    const s1 = first_sum.toString();
    const s2 = second_sum.toString();
    const s3 = third_sum.toString();
    const s4 = fourth_sum.toString();
    const s5 = fifth_sum.toString();

    const s6 = s5 + s4 + s3 + s2 + s1;
    const n1 = parseInt(s6);
    return n1;

}
// convert a six string digit to a array of 6 numbers adn preserve zero left side
function convertToDigits2(s) {
    const a = s.split("");
    const b = a.map((x) => parseInt(x));
    return b;
}

// convert a six digit number to a array of 6 numbers
function convertToDigits(n) {
    const s = n.toString();
    const a = s.split("");
    const b = a.map((x) => parseInt(x));
    return b;
}

// slide a six digit number to the left take two digits for cycle loop
function slideLeft(string_number) {
    const digits = convertToDigits2(string_number);
    const duplas = [];
    for (let i = digits.length-1; i > 0 ; i--) {
        const temp = [digits[i-1] , digits[i]];
        // add the pair to the array top
        duplas.unshift(temp);
    }
    return duplas;
}

// reduce a array of duplas to the sum of the duplas digits
function reduceDuplas(duplas) {
    const reduced = duplas.map((x) => (x[0] + x[1]) % 10);
    return reduced;
}

// reduce a array of duplas to the multiply of the duplas digits
function reduceDuplasMultiply(duplas) {
    const reduced = duplas.map((x) => (x[0] * x[1]) % 10);
    return reduced;
}



// reduce 55124 to 0636
function reduceToSix(string_number) {
    //const digits = convertToDigits2(string_number);
    const duplas = slideLeft(string_number);
    const reduced = reduceDuplas(duplas);
    const s = reduced.join("");
    //const n1 = parseInt(s);
    //console.log(s);
    return s;
}

function reduceToSixMultiply(string_number) {
    //const digits = convertToDigits2(string_number);
    const duplas = slideLeft(string_number);
    const reduced = reduceDuplasMultiply(duplas);
    const s = reduced.join("");
    //const n1 = parseInt(s);
    //console.log(s);
    return s;
}

// for loop to reduce a number to a six digit number
function reduceToSixLoop(n) {
    console.log(n);
    let n1 = n;
    final = n.length - 1;
    for (let i = 0; i < final; i++) {
        n1 = reduceToSix(n1);
    }
    return n1;
}

// store in array the reduceToSix result
function reduceToSixArray(n) {
    //console.log(n);
    const a = [];
    let n1 = n;
    final = n.length - 1;
    for (let i = 0; i < final; i++) {
        n1 = reduceToSix(n1);
        a.push(n1);
    }
    return a;
}

// store in array the reduceToSixMultiply result
function reduceToSixMultiplyArray(n) {
    //console.log(n);
    const a = [];
    let n1 = n;
    final = n.length - 1;
    for (let i = 0; i < final; i++) {
        n1 = reduceToSixMultiply(n1);
        a.push(n1);
    }
    return a;
}



// return true if the number is a seven digit number and the first digit is 1
function isSevenDigit(n) {
    const s = n.toString();
    if (s.length === 7 && s[0] === "1") {
        return true;
    }
    return false;
}

//return true if the number is six digit or seven digit, false otherwise
function isSixOrSevenDigit(n) {
    const s = n.toString();
    if (s.length === 6 || s.length === 7) {
        return true;
    }
    return false;
}

// con


//console.log(reduceDuplas(slideLeft(141022)));
//console.log(reduceToSixLoop(141022));


//reduceToSixLoop('141022')

//x = reduceToSixArray('211022')
//calculateEquis(x) //

// calculate equis number
function calculateEquis(x) {
    // final index
    const final = x.length - 1;
    ntop = parseInt(x[final]);
    nrigth = (parseInt(x[final -1])%10 + parseInt(x[final]) )%10;
    nleft = (Math.floor(parseInt(x[final - 1])/10) + parseInt(x[final]))%10;
    nbotton = (nleft + nrigth)%10;

    console.log('   '+ntop+'   ');
    console.log(nleft + ' ---- ' + nrigth)
    console.log('   '+nbotton+'    ');//

    //console.log('---lottery---');
    //console.log(reduceEquis(ntop, nleft, nrigth, nbotton));
    return reduceEquis(ntop, nleft, nrigth, nbotton);

    // print another result
    //console.log(top.toString()+nbotton.toString()+left.toString()+right.toString());
}

// return values top, left, right, botton
function calculateEquisValues(x) {
    // final index
    const final = x.length - 1;
    ntop = parseInt(x[final]);
    nrigth = (parseInt(x[final -1])%10 + parseInt(x[final]) )%10;
    nleft = (Math.floor(parseInt(x[final - 1])/10) + parseInt(x[final]))%10;
    nbotton = (nleft + nrigth)%10;

    return [ntop, nleft, nrigth, nbotton];
}

// reduce the Equis number to a four digit number
function reduceEquis(top, left, right, bottom) {
    const a = (left + top)%10
    const b = (top + right)%10
    const c = (right + bottom)%10
    const d = (bottom + left)%10
    return a.toString() + b.toString() + c.toString() + d.toString();
}
