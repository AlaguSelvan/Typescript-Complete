"use strict";
exports.__esModule = true;
require("reflect-metadata");
var plane = {
    color: 'red'
};
Reflect.defineMetadata('note', 'Hi There', plane);
console.log(plane);
