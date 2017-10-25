#!/usr/bin/env node

// thanks:
// https://bretkikehara.wordpress.com/2013/05/02/nodejs-creating-your-first-global-module/

var controller = require("projector-controller");

var command = process.argv[2];

controller.config({
    name: "OPTOMA",
    baudRate: 19200,
	on: [0x7e, 0x30, 0x30, 0x30, 0x30, 0x20, 0x31, 0x0d], 
    off: [0x7e, 0x30, 0x30, 0x30, 0x30, 0x20, 0x32, 0x0d]
}, () => {
    controller[command]((success) => {
        return;
    });
});