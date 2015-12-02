/*
 * $FOLDER_NAME = "ng-simple-todo"
 *
 * This simple file creates a basic web server that will respond to requests
 * on port 5000 and serve up files contained in a folder called
 * $FOLDER_NAME on the disk.
 *
 * Before starting this server install the "connect" module using following command:
 *
 * $ npm install connect
 *
 * which will install the "connect" module inside the $FOLDER_NAME
 * folder under "node_modules" directory.For more information on
 * "npm install" refer https://www.npmjs.org/doc/cli/npm-install.html
 *
 *
 * To start this server simply run this command:
 *
 * $ node ./util/web_server.js
 *
 * from the $FOLDER_NAME directory
 *
 * Note:
 *
 * 1. It is assumed that "node" command is available globally after installing
 * NodeJS
 *
 *
 *
 */
var connect = require("connect");

connect.createServer(
  connect.static("../ng-simple-todo")

).listen(5000);