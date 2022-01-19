#!/usr/bin/node

let roomDimensions = {
    width: 50,
    length: 100,
    getArea: () => this.width * this.length,
};

let boundArea = roomDimensions.getArea.bind(roomDimensions);
