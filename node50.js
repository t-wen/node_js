var path = require("path");
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));
console.log('resolve : ' + path.resolve('node50.js'));
console.log('ext name : ' + path.extname('node50.js'));