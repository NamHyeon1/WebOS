/*
 * Copyright (c) 2020-2024 LG Electronics Inc.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

// helloworld_webos_service.js
// is simple service, based on low-level luna-bus API

// eslint-disable-next-line import/no-unresolved
const pkgInfo = require('./package.json');
const Service = require('webos-service');
const fs = require('fs');

const service = new Service(pkgInfo.name); // Create service by service name on package.json
const logHeader = "[" + pkgInfo.name + "]";

service.register("readFile", function(message) {
    let readData;

    try{
        readData = fs.readFileSync('/media/internal/foobar.txt',"utf8");
        message.respond({
            returnValue: true,
            reply: "Read complete",
            text : readData,
            errorMsg : ""
        });
    } catch (err) {
        message.respond({
            returnValue: true,
            reply: "Read fail",
            text : readData,
            errorMsg : err
        });
    }
    
});


service.register("writeFile", function(message) {
    console.log(logHeader, "SERVICE_METHOD_CALLED:/writeFile");
    console.log(message.payload.text);
    const inputText = message.payload.text; 
    console.log("inputed : " + inputText);
    try{
        fs.writeFileSync('/media/internal/foobar.txt', inputText, "utf8");
        message.respond({
            returnValue: true,
            reply: "write complete",
            errorMsg : ""
        });
    } catch (err) {
        message.respond({
            returnValue: false,
            reply: "write complete",
            errorMsg : err
        });
    }
    
});