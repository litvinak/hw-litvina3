
// Function 1


function maxNumber(number) {
    return Math.max(...String(number).split(''));
  }

  console.log(maxNumber(4567));




//  Function 2

function degreeFunc(a, b) {
    let result = a;

    for(let i = 1; i < b; i++) {
        result *= a;
       
    }
    return result;
}

console.log(degreeFunc(1,29));


// Function 3

const myName = function capitalizedName(name) {
    return name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
}

console.log(myName('karIna'));

// Function 5

const randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

console.log(randomNumber(1, 10))


// Function 6


function countLetter(letter, word) {
    let counter = 0;
    const res = word.toLowerCase();
    
    for (let i = 0; i < res.length; i++) {
        if (res[i] === letter) {
            counter += 1; 
        }
        

    }

    return counter;
}

console.log(countLetter("a", "karina"));








document.writeln(`<ul>
                    <li>Функція №1: ${maxNumber(4567)}</li>
                    <li>Функція №2: ${degreeFunc(1,29)}</li>
                    <li>Функція №3: ${myName('karIna')}</li>
                    <li>Функція №5: ${randomNumber(1, 10)}</li>
                    <li>Функція №6: ${countLetter("a", "karina")}</li>`)