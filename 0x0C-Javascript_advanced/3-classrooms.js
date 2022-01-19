#!/usr/bin/node

function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
        return function () {
            return seat;
        };
    }

    let students = new Array();

    for (let index = 0; index < numberOfStudents; index++) {
        students.push(studentSeat(index + 1));
    }

    return students;
}

let classRoom = createClassRoom(10);
