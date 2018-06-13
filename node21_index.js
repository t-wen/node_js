var server = require("./node21");
var router = require("./node21_router");
server.start(router.route);