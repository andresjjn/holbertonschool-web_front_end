#!/usr/bin/node

var globalVariable = "Welcome";

function outer() {
    alert(globalVariable);

    let course = "Holberton";

    function inner() {
        alert(`${globalVariable} ${course}`);

        function inception() {
            alert(`${globalVariable} ${course}!`);
        }

        inception();
    }

    inner();
}

outer();
