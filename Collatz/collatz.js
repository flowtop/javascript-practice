const collatz = (n) => {
    if (validate(n)) {

        let steps = 0;

        while (n !== 1) {
            if (n % 2 === 0) {
                n = n / 2;
            }
            else {
                n = n * 3 + 1;
            }

            steps++;
        }

        console.log(steps);
    }
    else {
        console.log("Неверное число. Введите целое натуральное число.");
    }
}

const validate = (n) => {
    if (n <= 1) return false;
    if (n % 1 !== 0) return false;
    return true;
}

collatz(8);