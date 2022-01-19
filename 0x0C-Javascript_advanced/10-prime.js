#!/usr/bin/node

function countPrimeNumbers() {
    let count = 0;
    let sw;
    for (let i = 2; i <= 100; i++) {
        sw = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                sw = false;
                break;
            }
        }
        if (sw) {
            count += 1;
        }
    }
    return count;
}

t1 = performance.now();
for (let i = 1; i <= 100; i++) {
    countPrimeNumbers();
}
t2 = performance.now();
console.log(
    `Execution time of printing countPrimeNumbers was ${t2 - t1} milliseconds.`
);
